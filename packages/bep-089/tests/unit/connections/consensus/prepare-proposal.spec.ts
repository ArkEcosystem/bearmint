import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makePrepareProposal } from '../../../../source/connections/consensus/prepare-proposal.js'

describe('PrepareProposal', () => {
	it('it should filter out all transactions that would exceed the maxTxBytes', async () => {
		const txs = [
			Buffer.alloc(8),
			Buffer.alloc(8),
			Buffer.alloc(8),
			Buffer.alloc(8),
			Buffer.alloc(8),
		]

		expect(
			await makePrepareProposal().execute({
				maxTxBytes: 32,
				txs,
			}),
		).toStrictEqual({ txs: txs.slice(1) })

		expect(
			await makePrepareProposal().execute({
				maxTxBytes: 24,
				txs,
			}),
		).toStrictEqual({ txs: txs.slice(2) })

		expect(
			await makePrepareProposal().execute({
				maxTxBytes: 16,
				txs,
			}),
		).toStrictEqual({ txs: txs.slice(3) })

		expect(
			await makePrepareProposal().execute({
				maxTxBytes: 8,
				txs,
			}),
		).toStrictEqual({ txs: txs.slice(4) })

		expect(
			await makePrepareProposal().execute({
				maxTxBytes: 0,
				txs,
			}),
		).toStrictEqual({ txs: [] })
	})
})
