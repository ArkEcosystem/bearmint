import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { makeContainer } from '@bearmint/bep-014'
import { tmpdir } from 'node:os'

import { fakeStateStore } from '../../../state.js'
import { makeCommit } from '../../../../source/connections/consensus/commit.js'
import { abci } from '@bearmint/bep-018'
import { config } from '@bearmint/bep-006'

describe('Commit', () => {
	it('it should respond without any errors', async () => {
		const CommittedState = await fakeStateStore()
		CommittedState.setCandidateBlock(new abci.RequestBeginBlock({ header: { height: BigInt(1) } }))
		await CommittedState.setCommittedBlock(
			new abci.RequestBeginBlock({ header: { height: BigInt(1) } }),
		)
		CommittedState.setMilestone(config.milestones[0])

		await CommittedState.checkpoint()
		await CommittedState.checkpoint()

		expect(
			await makeCommit({
				CheckTxState: await CommittedState.copy(),
				Container: makeContainer(),
				DataSink: { put() {} },
				DeliverTxState: await CommittedState.copy(),
				CommittedState,
				GenesisParameters: {},
				Milestones: config.milestones,
				Paths: { data: tmpdir() },
				ServiceProviderRepository: {
					get() {
						return {
							version() {
								return '0.0.0'
							},
						}
					},
				},
			}).execute({}),
		).toMatchSnapshot()
	})
})
