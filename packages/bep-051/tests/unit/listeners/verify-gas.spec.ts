import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
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
import { makeAccountRepository } from '@bearmint/bep-022'
import { makeEventRecorder } from '@bearmint/bep-090'

import { makeVerifyGasListener } from '../../../source/listeners/verify-gas.js'

describe<{
	eventRecorder: EventRecorder
	state: StateStore
}>('Validate Gas Listener', () => {
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
	})

	it('should measure the gas and conclude that it is sufficient', async (context) => {
		await expect(
			makeVerifyGasListener({
				GasCalculator: {
					execute() {
						return true
					},
				},
			}).execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {},
			}),
		).resolves.not.toThrow()
	})

	it('should measure the gas and conclude that it is not sufficient', async (context) => {
		await expect(
			makeVerifyGasListener({
				GasCalculator: {
					execute() {
						throw new Error('some requirement')
					},
				},
			}).execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {},
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'gas',
					value: 'ERR_TX_GAS_UNDEFINED',
				},
			],
		})
	})
})
