import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makeFlush } from '../../../source/connections/flush.js'

describe('Flush', () => {
	it('should respond without any errors', async () => {
		expect(await makeFlush().execute({})).toStrictEqual({})
	})
})
