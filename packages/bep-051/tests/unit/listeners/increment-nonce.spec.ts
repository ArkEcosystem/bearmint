import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { milestone } from '@bearmint/bep-006'
import {
	fakeAccountSerializer,
	fakeAddressFactory,
	fakeCommittedState,
	fakeMultiStore,
} from '@bearmint/bep-008'
import { stringToHex } from '@bearmint/bep-009'
import type { EventRecorder, StateStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeEventDispatcher } from '@bearmint/bep-015'
import { makeState } from '@bearmint/bep-020'
import { makeAccountSerializer, makeAccountRepository } from '@bearmint/bep-022'
import { makeEventRecorder } from '@bearmint/bep-090'

import { makeIncrementNonceListener } from '../../../source/listeners/increment-nonce.js'

describe<{
	eventRecorder: EventRecorder
	state: StateStore
}>('Increment Nonce Listener', () => {
	beforeEach(async (context) => {
		const container = makeContainer()
		container.bindValue(ContainerType.DeliverTxState, fakeCommittedState())

		context.eventRecorder = makeEventRecorder()

		context.state = await makeState(
			makeAccountRepository({
				AccountSerializer: fakeAccountSerializer(),
				AddressFactory: fakeAddressFactory(),
				EventDispatcher: makeEventDispatcher(),
			}),
			await fakeMultiStore(),
		)

		context.state.setMilestone(milestone as any)
	})

	it('should increment the nonce if it is +1', async (context) => {
		const account = await makeAccountSerializer({
			CommittedState: context.state,
			DeliverTxState: context.state,
			Denominations: {
				gas: 'GASY',
				stake: 'HONEY',
				token: 'BEAR',
			},
			EventDispatcher: makeEventDispatcher(),
		}).deserialize({
			address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
			nonce: BigInt(0),
			publicKey: stringToHex('senderPublicKey'),
		})
		await context.state.getAccountRepository().index([account])

		await expect(
			makeIncrementNonceListener().execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					hash: 'hash',
					data: {
						nonce: BigInt(1),
						sender: {
							toString: () => 'senderPublicKey',
							verify: () => true,
						},
					},
				},
			}),
		).resolves.not.toThrow()

		expect(
			(
				await context.state
					.getAccountRepository()
					.findByAddress('bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3')
			).nonce.toString(),
		).toStrictEqual('1')
	})

	it('should capture an event if incrementing cannot be performed', async (context) => {
		context.eventRecorder.actingAs('increment-nonce-not-plus-one')

		await context.state.getAccountRepository().index([
			await makeAccountSerializer({
				CommittedState: context.state,
				DeliverTxState: context.state,
				EventDispatcher: makeEventDispatcher(),
			}).deserialize({
				address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
				nonce: BigInt(1),
				publicKey: stringToHex('senderPublicKey'),
			}),
		])

		await expect(
			makeIncrementNonceListener().execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					hash: 'hash',
					data: {
						nonce: BigInt(1),
						sender: {
							toString: () => 'senderPublicKey',
							verify: () => true,
						},
					},
				},
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'nonce',
					value: 'ERR_TX_OUT_OF_ORDER_NONCE',
				},
			],
		})
	})
})
