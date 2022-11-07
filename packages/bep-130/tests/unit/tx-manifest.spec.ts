import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makeTxManifest } from '../../source/tx-manifest.js'

describe('Tx Manifest', () => {
	it('should have a checksum, name and version', async () => {
		const manifest = makeTxManifest({
			GenesisParameters: {
				app_hash: 'app_hash',
			},
		})

		expect({
			checksum: manifest.checksum(),
			name: manifest.name(),
			version: manifest.version(),
		}).toMatchInlineSnapshot(`
			{
			  "checksum": "d3cb17c384bfc7325b04c8aa3d5bbc00b9eab8a5403c8595f3f725f80b1965fd",
			  "name": "@bearmint/bep-130",
			  "version": "0.0.0",
			}
		`)
	})
})
