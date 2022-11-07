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
			  "checksum": "256bea5438805392ac74fd422b651bb32eabd7f6472a6bd3a22f4f37aa1f4242",
			  "name": "@bearmint/bep-134",
			  "version": "0.0.0",
			}
		`)
	})
})
