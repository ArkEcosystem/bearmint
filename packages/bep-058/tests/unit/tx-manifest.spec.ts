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
			  "checksum": "ea9ad43ac2d635d5a27ce4176ec3796a17d4840f75e74ed4cdf225d5a76875bf",
			  "name": "@bearmint/bep-058",
			  "version": "0.0.0",
			}
		`)
	})
})
