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

import { makeVerifyNonceListener } from '../../../source/listeners/verify-nonce.js'

describe<{
	eventRecorder: EventRecorder
	state: StateStore
}>('Validate Nonce Listener', () => {
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

	it('should exit early if the nonce is sequential', async (context) => {
		context.eventRecorder.actingAs('ensure-sequential-nonce-early-exit')

		await context.state.getAccountRepository().index([
			await makeAccountSerializer({
				CommittedState: context.state,
				DeliverTxState: context.state,
				EventDispatcher: makeEventDispatcher(),
			}).deserialize({
				address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
				nonce: BigInt(0),
				publicKey: stringToHex('senderPublicKey'),
			}),
		])

		await expect(
			makeVerifyNonceListener().execute({
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
	})

	it('should capture an event if the nonce is not sequential', async (context) => {
		context.eventRecorder.actingAs('ensure-sequential-nonce-not-sequential')

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
			makeVerifyNonceListener().execute({
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
