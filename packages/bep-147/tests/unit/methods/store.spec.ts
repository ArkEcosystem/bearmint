import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { QueryState } from '../../../source/methods/store.js'

describe('QueryState', () => {
	it('should determine if the handler is a match', async () => {
		expect(
			await new QueryState().isMatch({
				data: undefined,
				path: ['store'],
			}),
		).toBeTrue()

		expect(
			await new QueryState().isMatch({
				data: undefined,
				path: ['store', '@bearmint', 'bep-044'],
			}),
		).toBeFalse()

		expect(
			await new QueryState().isMatch({
				data: undefined,
				path: [],
			}),
		).toBeFalse()
	})
})
