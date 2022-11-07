import { makeContainer } from '@bearmint/bep-014'
import { makeGasMeterFactory } from '@bearmint/bep-048'
import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { ListTxHandlers } from '../../../../source/methods/tx/handlers.js'

describe('ListTxHandlers', () => {
	it('should determine if the handler is a match', async () => {
		expect(
			await new ListTxHandlers().isMatch({
				data: undefined,
				path: ['tx', 'handlers'],
			}),
		).toBeTrue()

		expect(
			await new ListTxHandlers().isMatch({
				data: undefined,
				path: [],
			}),
		).toBeFalse()
	})

	it('should get all tx handlers', async () => {
		expect(
			await new ListTxHandlers({
				Container: makeContainer(),
				GasMeterFactory: makeGasMeterFactory(),
				TxManifestRegistry: {
					all() {
						return {
							handler: {
								version: {
									checksum() {
										return 'checksum'
									},
									name() {
										return 'name'
									},
									version() {
										return 'version'
									},
								},
							},
						}
					},
				},
			}).execute(),
		).toMatchSnapshot()
	})
})
