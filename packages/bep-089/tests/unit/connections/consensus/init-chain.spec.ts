import { makeContainer } from '@bearmint/bep-014'
import { expect, describe, it } from 'vitest'
import { extendExpect, spyFn } from '@bearmint/bep-005'
extendExpect(expect)

import { fakeAccountSerializer } from '../../../account.js'
import { fakeStateStore } from '../../../state.js'
import { makeInitChain } from '../../../../source/connections/consensus/init-chain.js'
import { jsonToBytes } from '@bearmint/bep-009'
import { milestone } from '@bearmint/bep-006'

describe('InitChain', () => {
	it('it should respond without any errors', async () => {
		const CommittedState = await fakeStateStore()
		const DeliverTxState = await CommittedState.copy()

		await CommittedState.checkpoint()

		const validatorUpdates = spyFn()

		expect(
			await makeInitChain({
				Application: {
					dispose() {
						//
					},
				},
				AccountSerializer: fakeAccountSerializer({ container: makeContainer() }),
				CommittedState,
				Consensus: {
					validatorUpdates: validatorUpdates.toFunction(),
				},
				Container: makeContainer(),
				DeliverTxState,
				EventDispatcher: {
					dispatch() {
						//
					},
				},
				GenesisParameters: {
					app_hash: '70726f706f73657241646472657373',
					initial_height: '1',
				},
				Logger: console,
				Milestones: {
					'1.0.0': {
						blockNumber: '0',
						milestones: [milestone],
					},
				},
				MilestoneStrategy: {
					execute() {
						return [milestone]
					},
				},
				ValidatorElector: {
					elect() {
						return []
					},
				},
			}).execute({
				appStateBytes: jsonToBytes({
					accounts: [],
					txs: [],
				}),
				initialHeight: '1',
				validators: [],
			}),
		).toStrictEqual({
			appHash: Uint8Array.from(Buffer.from('70726f706f73657241646472657373', 'hex')),
			consensusParams: undefined,
			validators: [],
		})

		validatorUpdates.neverCalled()
	})
})
