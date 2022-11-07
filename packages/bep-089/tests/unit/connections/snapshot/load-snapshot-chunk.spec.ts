import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makeLoadSnapshotChunk } from '../../../../source/connections/snapshot/load-snapshot-chunk.js'

describe('makeLoadSnapshotChunk', () => {
	it('it should respond without any errors', async () => {
		expect(await makeLoadSnapshotChunk().execute({})).toStrictEqual({
			chunk: new Uint8Array(0),
		})
	})
})
