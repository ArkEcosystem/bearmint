import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makeListSnapshots } from '../../../../source/connections/snapshot/list-snapshots.js'

describe('makeListSnapshots', () => {
	it('it should respond without any errors', async () => {
		expect(await makeListSnapshots().execute({})).toStrictEqual({
			snapshots: [],
		})
	})
})
