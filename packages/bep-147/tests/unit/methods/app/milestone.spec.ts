import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToJson } from '@bearmint/bep-009'

import { QueryMilestone } from '../../../../source/methods/app/milestone.js'

describe('QueryMilestone', () => {
	it('should determine if the handler is a match', async () => {
		expect(
			await new QueryMilestone().isMatch({
				data: undefined,
				path: ['app', 'milestone'],
			}),
		).toBeTrue()

		expect(
			await new QueryMilestone().isMatch({
				data: undefined,
				path: [],
			}),
		).toBeFalse()
	})

	it('should execute', async () => {
		expect(
			bytesToJson(
				(
					await new QueryMilestone({
						CommittedState: {
							getMilestone() {
								return { key: 'value ' }
							},
						},
					}).execute()
				).value,
			),
		).toStrictEqual({ key: 'value ' })
	})
})
