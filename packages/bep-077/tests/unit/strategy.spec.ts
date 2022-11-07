import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makeStrategy } from '../../source/strategy.js'

describe('Gas Prioritizer', () => {
	it('should return an indicator of priority', async () => {
		expect((await makeStrategy().execute({ data: { gas: BigInt(5) } })).toString()).toStrictEqual(
			'5',
		)
	})
})
