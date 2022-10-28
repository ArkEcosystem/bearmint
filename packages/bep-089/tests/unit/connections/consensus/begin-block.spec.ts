import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { makeContainer } from '@bearmint/bep-014'
import { makeStrategy as BEP115 } from '@bearmint/bep-115'

import { fakeStateStore } from '../../../state.js'
import { makeBeginBlock } from '../../../../source/connections/consensus/begin-block.js'
import { bytesToHex, stringToBytes } from '@bearmint/bep-009'
import { abci } from '@bearmint/bep-018'

describe('BeginBlock', () => {
	it('it should respond without any errors', async () => {
		const CommittedState = await fakeStateStore()
		await CommittedState.setCommittedBlock(
			new abci.RequestFinalizeBlock({
				header: {
					appHash: Buffer.from(
						'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
						'hex',
					),
				},
			}),
		)
		const DeliverTxState = await CommittedState.copy()

		expect(
			await makeBeginBlock({
				Consensus: {},
				Container: makeContainer(),
				CheckTxState: DeliverTxState,
				DelegatorRewarder: {
					execute() {
						return ['delegator']
					},
				},
				DeliverTxState,
				Logger: console,
				MilestoneStrategy: BEP115(),
				CommittedState,
				ValidatorRewarder: {
					execute() {
						return { events: ['validator'] }
					},
				},
			}).execute(
				new abci.RequestFinalizeBlock({
					byzantineValidators: [],
					header: {
						appHash: Buffer.from('hello'),
						height: BigInt(1),
						proposerAddress: Uint8Array.from(stringToBytes('proposerAddress')),
					},
				}),
			),
		).toStrictEqual({ events: [] })

		expect(bytesToHex(await DeliverTxState.getCommittedBlockAppHash())).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)
		expect(bytesToHex(DeliverTxState.getCandidateBlockProposer())).toStrictEqual(
			'70726f706f73657241646472657373',
		)
	})
})
