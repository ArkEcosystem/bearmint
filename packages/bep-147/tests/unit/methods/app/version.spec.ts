import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToString } from '@bearmint/bep-009'

import { QueryVersion } from '../../../../source/methods/app/version.js'

describe('QueryVersion', () => {
	it('should determine if the handler is a match', async () => {
		expect(
			await new QueryVersion().isMatch({
				data: undefined,
				path: ['app', 'version'],
			}),
		).toBeTrue()

		expect(
			await new QueryVersion().isMatch({
				data: undefined,
				path: [],
			}),
		).toBeFalse()
	})

	it('should execute', async () => {
		expect(
			bytesToString(
				(
					await new QueryVersion({
						ApplicationManifest: { semanticVersion: '1.0.0' },
					}).execute()
				).value,
			),
		).toStrictEqual('1.0.0')
	})
})
