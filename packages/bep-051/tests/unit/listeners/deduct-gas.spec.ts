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
import { makeAccountRepository } from '@bearmint/bep-022'
import { makeGasMeter } from '@bearmint/bep-048'
import { makeEventRecorder } from '@bearmint/bep-090'

import { makeDeductGasListener } from '../../../source/listeners/deduct-gas.js'

describe<{
	eventRecorder: EventRecorder
	state: StateStore
}>('Deduct Gas Listener', () => {
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

	it('should decrease the GAS balance if there are sufficient funds', async (context) => {
		const sender = await fakeAccountSerializer(context).deserialize({
			address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
			balances: { FIRE: BigInt(1) },
			publicKey: stringToHex('senderPublicKey'),
		})

		await context.state.getAccountRepository().index([sender])

		await makeDeductGasListener().execute({
			eventRecorder: context.eventRecorder,
			gasMeter: makeGasMeter(),
			state: context.state,
			tx: {
				hash: 'hash',
				data: {
					gas: BigInt(1),
					sender: {
						toString: () => 'senderPublicKey',
						verify: () => true,
					},
				},
			},
		})

		expect(
			(
				await context.state
					.getAccountRepository()
					.findByAddress('bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3')
			).balances['FIRE'].toString(),
		).toStrictEqual('0')
	})

	it('should capture an event if the GAS balance is insufficient', async (context) => {
		context.eventRecorder.actingAs('deduct-gas-insufficient-balance')

		const sender = await fakeAccountSerializer(context).deserialize({
			address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
			balances: {
				FIRE: BigInt(1),
			},
			publicKey: stringToHex('senderPublicKey'),
		})
		await context.state.getAccountRepository().index([sender])

		await expect(
			makeDeductGasListener().execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					hash: 'hash',
					data: {
						gas: BigInt(2),
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
					key: 'gas',
					value: 'ERR_TX_INSUFFICIENT_BALANCE',
				},
			],
		})

		expect(
			(
				await context.state
					.getAccountRepository()
					.findByAddress('bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3')
			).balances['FIRE'].toString(),
		).toStrictEqual('1')
	})
})
