import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToJson } from '@bearmint/bep-009'

import { QueryMilestones } from '../../../../source/methods/app/milestones.js'

describe('QueryMilestones', () => {
	it('should determine if the handler is a match', async () => {
		expect(
			await new QueryMilestones().isMatch({
				data: undefined,
				path: ['app', 'milestones'],
			}),
		).toBeTrue()

		expect(
			await new QueryMilestones().isMatch({
				data: undefined,
				path: [],
			}),
		).toBeFalse()
	})

	it('should execute', async () => {
		expect(
			bytesToJson(
				(
					await new QueryMilestones({
						Milestones: [1, 2, 3],
					}).execute()
				).value,
			),
		).toStrictEqual([1, 2, 3])
	})
})
