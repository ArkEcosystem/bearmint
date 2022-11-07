import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makeOfferSnapshot } from '../../../../source/connections/snapshot/offer-snapshot.js'

describe('makeOfferSnapshot', () => {
	it('it should respond without any errors', async () => {
		expect(await makeOfferSnapshot().execute({})).toStrictEqual({
			result: 0,
		})
	})
})
