import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToJson } from '@bearmint/bep-009'

import { QueryGenesis } from '../../../../source/methods/app/genesis.js'

describe('QueryGenesis', () => {
	it('should determine if the handler is a match', async () => {
		expect(
			await new QueryGenesis().isMatch({
				data: undefined,
				path: ['app', 'genesis'],
			}),
		).toBeTrue()

		expect(
			await new QueryGenesis().isMatch({
				data: undefined,
				path: [],
			}),
		).toBeFalse()
	})

	it('should execute', async () => {
		expect(
			bytesToJson(
				(
					await new QueryGenesis({
						GenesisParameters: { key: 'value' },
					}).execute()
				).value,
			),
		).toStrictEqual({
			key: 'value',
		})
	})
})
