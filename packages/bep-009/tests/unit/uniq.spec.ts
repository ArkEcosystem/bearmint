import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { uniq, uniqBy } from '../../source/uniq.js'

describe('uniq', () => {
	it('should filter out duplicate values', () => {
		expect(uniq([1, 1, 1])).toStrictEqual([1])
	})

	it('should filter out duplicate values', () => {
		expect(
			uniqBy(
				[
					{
						action: 'decrease',
						moniker: 'borkley',
						stake: `${1e8}`,
					},
					{
						action: 'decrease',
						moniker: 'borkley',
						stake: `${1e8}`,
					},
					{
						action: 'decrease',
						moniker: 'borkley',
						stake: `${1e8}`,
					},
				],
				({ action, moniker }) => `${action}${moniker}`,
			),
		).toStrictEqual([
			{
				action: 'decrease',
				moniker: 'borkley',
				stake: `${1e8}`,
			},
		])
	})
})
