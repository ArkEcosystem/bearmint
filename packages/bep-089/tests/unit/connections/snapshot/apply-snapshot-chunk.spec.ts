import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makeApplySnapshotChunk } from '../../../../source/connections/snapshot/apply-snapshot-chunk.js'

describe('makeApplySnapshotChunk', () => {
	it('it should respond without any errors', async () => {
		expect(await makeApplySnapshotChunk().execute({})).toStrictEqual({
			refetchChunks: [],
			rejectSenders: [],
			result: 5,
		})
	})
})
