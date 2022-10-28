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
import type { EventRecorder, StateStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeEventDispatcher } from '@bearmint/bep-015'
import { makeState } from '@bearmint/bep-020'
import { makeAccountSerializer, makeAccountRepository } from '@bearmint/bep-022'
import { makePublicKeyFactory } from '@bearmint/bep-032'
import { makeEventRecorder } from '@bearmint/bep-090'

import { makeFindOrCreateSenderListener } from '../../../source/listeners/find-or-create-sender.js'

describe<{
	eventRecorder: EventRecorder
	state: StateStore
}>('Find or Create Sender Listener', () => {
	beforeEach(async (context) => {
		const container = makeContainer()
		container.bindValue(ContainerType.ExecuteTxState, fakeCommittedState())

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

	it('should capture an event if the tx sender cannot be verified', async (context) => {
		context.eventRecorder.actingAs('find-or-create-sender-fail-verify')

		await expect(
			makeFindOrCreateSenderListener({
				AccountSerializer: makeAccountSerializer({
					AddressFactory: fakeAddressFactory(),
					CommittedState: context.state,
					ExecuteTxState: context.state,
					EventDispatcher: makeEventDispatcher(),
				}),
				AddressFactory: fakeAddressFactory(),
				PublicKeyFactory: makePublicKeyFactory(),
			}).execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					data: {
						sender: {
							toString: () => 'senderPublicKey',
							verify: () => false,
						},
					},
				},
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'sender',
					value: 'ERR_TX_MALFORMED_PUBLIC_KEY',
				},
			],
		})
	})

	it('should exit early if the sender account already exists', async (context) => {
		context.eventRecorder.actingAs('find-or-create-sender-already-exists')

		context.state.getAccountRepository().index([
			await makeAccountSerializer({
				AddressFactory: fakeAddressFactory(),
				CommittedState: context.state,
				ExecuteTxState: context.state,
				EventDispatcher: makeEventDispatcher(),
			}).deserialize({
				address: 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
				publicKey: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
			}),
		])

		await expect(
			makeFindOrCreateSenderListener({
				AccountSerializer: makeAccountSerializer({
					AddressFactory: fakeAddressFactory(),
					CommittedState: context.state,
					ExecuteTxState: context.state,
					EventDispatcher: makeEventDispatcher(),
				}),
				AddressFactory: fakeAddressFactory(),
				PublicKeyFactory: makePublicKeyFactory(),
			}).execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					data: {
						sender: {
							toString: () => '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
							verify: () => true,
						},
					},
				},
			}),
		).resolves.toBeUndefined()
	})

	it('should create a new account if the sender account does not exist', async (context) => {
		context.eventRecorder.actingAs('find-or-create-sender-does-not-exist')

		expect(
			await context.state
				.getAccountRepository()
				.hasByAddress('bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3'),
		).toBeFalse()

		await expect(
			makeFindOrCreateSenderListener({
				AccountSerializer: makeAccountSerializer({
					CommittedState: context.state,
					ExecuteTxState: context.state,
					EventDispatcher: makeEventDispatcher(),
				}),
				AddressFactory: fakeAddressFactory(),
				PublicKeyFactory: makePublicKeyFactory(),
			}).execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					data: {
						sender: {
							toString: () => '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
							verify: () => true,
						},
					},
				},
			}),
		).resolves.toBeUndefined()

		expect(
			await context.state
				.getAccountRepository()
				.hasByAddress('bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3'),
		).toBeTrue()
	})
})
