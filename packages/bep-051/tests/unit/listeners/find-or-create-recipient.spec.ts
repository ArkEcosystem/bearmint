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
import { makeEventRecorder } from '@bearmint/bep-090'

import { makeFindOrCreateRecipientListener } from '../../../source/listeners/find-or-create-recipient.js'

describe<{
	eventRecorder: EventRecorder
	state: StateStore
}>('Find or Create Recipient', () => {
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

	it('should capture an event if the tx recipient cannot be verified', async (context) => {
		context.eventRecorder.actingAs('find-or-create-recipient-fail-verify')

		await makeFindOrCreateRecipientListener({
			AccountSerializer: makeAccountSerializer({
				CommittedState: context.state,
				DeliverTxState: context.state,
				EventDispatcher: makeEventDispatcher(),
			}),
			AddressFactory: fakeAddressFactory(),
		}).execute({
			eventRecorder: context.eventRecorder,
			state: context.state,
			tx: {
				data: {
					recipient: {
						toString: () => 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
						verify: () => false,
					},
				},
			},
		})

		expect(context.eventRecorder.errors()).toMatchSnapshot()
	})

	it('should exit early if the recipient account already exists', async (context) => {
		context.eventRecorder.actingAs('find-or-create-recipient-already-exists')

		await context.state.getAccountRepository().index([
			await makeAccountSerializer({
				CommittedState: context.state,
				DeliverTxState: context.state,
				EventDispatcher: makeEventDispatcher(),
			}).deserialize({
				address: 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
			}),
		])

		await makeFindOrCreateRecipientListener({
			AccountSerializer: makeAccountSerializer({
				CommittedState: context.state,
				DeliverTxState: context.state,
				EventDispatcher: makeEventDispatcher(),
			}),
			AddressFactory: fakeAddressFactory(),
		}).execute({
			eventRecorder: context.eventRecorder,
			state: context.state,
			tx: {
				data: {
					recipient: {
						toString: () => 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
						verify: () => true,
					},
				},
			},
		})

		expect(context.eventRecorder.errors()).toMatchSnapshot()
	})

	it('should create a new account if the recipient account does not exist', async (context) => {
		context.eventRecorder.actingAs('find-or-create-recipient-does-not-exist')

		expect(
			await context.state
				.getAccountRepository()
				.hasByAddress('bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr'),
		).toBeFalse()

		await expect(
			makeFindOrCreateRecipientListener({
				AccountSerializer: makeAccountSerializer({
					CommittedState: context.state,
					DeliverTxState: context.state,
					EventDispatcher: makeEventDispatcher(),
				}),
				AddressFactory: fakeAddressFactory(),
			}).execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					data: {
						recipient: {
							toString: () => 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
							verify: () => true,
						},
					},
				},
			}),
		).resolves.not.toThrow()

		expect(
			await context.state
				.getAccountRepository()
				.hasByAddress('bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr'),
		).toBeTrue()
	})

	it('should not create a new account if any exceptions are thrown', async (context) => {
		context.eventRecorder.actingAs('find-or-create-recipient-does-not-exist')

		expect(
			await context.state
				.getAccountRepository()
				.hasByAddress('bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr'),
		).toBeFalse()

		await expect(
			makeFindOrCreateRecipientListener({
				AccountSerializer: makeAccountSerializer({
					CommittedState: context.state,
					DeliverTxState: context.state,
					EventDispatcher: makeEventDispatcher(),
				}),
				AddressFactory: () => {
					throw new Error('Hello')
				},
			}).execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					data: {
						recipient: {
							toString: () => 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
							verify: () => true,
						},
					},
				},
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'recipient',
					value: 'ERR_TX_MALFORMED_ADDRESS',
				},
			],
		})

		expect(
			await context.state
				.getAccountRepository()
				.hasByAddress('bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr'),
		).toBeFalse()
	})
})
