import { makeContainer } from '@bearmint/bep-014'
import { makeEventDispatcher } from '@bearmint/bep-015'
import { makeState } from '@bearmint/bep-020'
import { makeAccountSerializer, makeAccountRepository } from '@bearmint/bep-022'
import { makeEventRecorderFactory } from '@bearmint/bep-090'
import { makeGasMeterFactory } from '@bearmint/bep-048'
import {
	fakeAddressFactory,
	fakeCommittedState,
	fakeEventDispatcher,
	fakeMilestoneKVStore,
	fakeMultiStore,
} from '@bearmint/bep-008'
import { milestone } from '@bearmint/bep-006'
import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect, spyFn } from '@bearmint/bep-005'
extendExpect(expect)
import type { StateStore } from '@bearmint/bep-013'

import { fakeStateStore } from '../../../state.js'
import { SimulateTx } from '../../../../source/methods/tx/simulate.js'

describe<{ state: StateStore }>('SimulateTx', () => {
	beforeEach(async (context) => {
		context.state = await makeState(
			// @ts-ignore
			makeAccountRepository({
				// @ts-ignore
				AccountSerializer: makeAccountSerializer({
					AddressFactory: fakeAddressFactory(),
					DeliverTxState: fakeCommittedState(),
					EventDispatcher: fakeEventDispatcher(),
				}),
				AddressFactory: fakeAddressFactory(),
				EventDispatcher: fakeEventDispatcher(),
			}),
			await fakeMultiStore({
				milestone: await fakeMilestoneKVStore(),
			}),
		)

		context.state.setMilestone(milestone)
	})
	it('should determine if the handler is a match', async () => {
		expect(
			await new SimulateTx().isMatch({
				data: new Uint8Array(),
				path: ['tx', 'simulate'],
			}),
		).toBeTrue()

		expect(
			await new SimulateTx().isMatch({
				data: undefined,
				path: [],
			}),
		).toBeFalse()
	})

	it('should simulate a tx', async () => {
		const CommittedState = await fakeStateStore()

		const TxProcessor = spyFn()

		await CommittedState.checkpoint()

		expect(
			await new SimulateTx({
				CommittedState,
				Container: makeContainer(),
				EventDispatcher: makeEventDispatcher(),
				EventRecorderFactory: makeEventRecorderFactory(),
				GasMeterFactory: makeGasMeterFactory(),
				TxFactory: {
					fromBytes() {
						return {
							checksum: {},
							data: {
								gas: BigInt(5),
								sender: 'sender',
							},
						}
					},
				},
				TxProcessor: {
					execute: TxProcessor.toFunction(),
				},
			}).execute({
				data: Buffer.from(''),
				path: '/app/simulate',
			}),
		).toStrictEqual({
			code: 0,
		})

		TxProcessor.calledOnce()
	})
})
