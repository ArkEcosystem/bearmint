import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { createSuite } from '@bearmint/bep-039'
import { makeKeyPairFactory as BLS } from '@bearmint/bep-033'
import { makeKeyPairFactory as Ed25519 } from '@bearmint/bep-035'

import { makeAddress, makeAddressFactory } from '../../source/factory.js'

createSuite(
	{ beforeEach, describe, expect, it },
	'BIP350 (BLS12-381)',
	'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
	(context) => {
		context.keyPairFactory = BLS()
		context.addressFactory = makeAddressFactory(context.keyPairFactory, 'bear')
	},
)

createSuite(
	{ beforeEach, describe, expect, it },
	'BIP350 (Ed25519)',
	'bear1e35hcnq2zs70vtmll37lxk8g2skmu8gaqq4esscpt2vh9k8ag4wqqee4mn',
	(context) => {
		context.keyPairFactory = Ed25519()
		context.addressFactory = makeAddressFactory(context.keyPairFactory, 'bear')
	},
)

describe('BIP350', () => {
	it('should fail verifying an address', async () => {
		expect(
			await makeAddress(
				'prefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefix',
				Buffer.from('gibberish'),
			).verify(),
		).toBeFalse()
	})
})
