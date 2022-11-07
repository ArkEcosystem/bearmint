import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { createSuite } from '@bearmint/bep-039'
import { makeKeyPairFactory } from '@bearmint/bep-035'

import { makeAddress, makeAddressFactory } from '../../source/factory.js'

createSuite(
	{ beforeEach, describe, expect, it },
	'BIP173',
	'bear1e35hcnq2zs70vtmll37lxk8g2skmu8gaqq4esscpt2vh9k8ag4wq49fe73',
	(context) => {
		context.keyPairFactory = makeKeyPairFactory()
		context.addressFactory = makeAddressFactory(context.keyPairFactory, 'bear')
	},
)

describe('BIP173', () => {
	it('should fail verifying an address', async () => {
		expect(
			await makeAddress(
				'prefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefixprefix',
				Buffer.from('gibberish'),
			).verify(),
		).toBeFalse()
	})
})
