import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { Query } from '../../../source/abci/query.js'

describe('Query', () => {
	it('should determine if the handler is a match', async () => {
		expect(
			await new Query({
				CommittedState: {
					getMultiStore() {
						return { get() {} }
					},
				},
			}).isMatch({
				data: new Uint8Array(),
				path: ['store', '@bearmint', 'bep-126'],
			}),
		).toBeTrue()

		expect(
			await new Query({
				CommittedState: {
					getMultiStore() {
						return { get() {} }
					},
				},
			}).isMatch({
				data: new Uint8Array(),
				path: ['store', 'state'],
			}),
		).toBeFalse()

		expect(
			await new Query({
				CommittedState: {
					getMultiStore() {
						return { get() {} }
					},
				},
			}).isMatch({
				data: undefined,
				path: [],
			}),
		).toBeFalse()
	})
})
