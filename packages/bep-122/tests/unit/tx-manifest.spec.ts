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
			  "checksum": "8d5c1706668bbb0201bbb607c66c5db60478c0019acd3a8a85dac97d6c4f3c35",
			  "name": "@bearmint/bep-122",
			  "version": "0.0.0",
			}
		`)
	})
})
