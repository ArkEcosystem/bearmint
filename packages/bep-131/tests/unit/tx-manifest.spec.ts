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
			  "checksum": "f6fdb8b24598c7a0b09132aaf6bfcfc6e1b53f6bd149be05434c2f03e008a97a",
			  "name": "@bearmint/bep-131",
			  "version": "0.0.0",
			}
		`)
	})
})
