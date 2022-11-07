import { expect, describe, it, beforeEach } from 'vitest'
import { createSuite } from '@bearmint/bep-039'
import { makeKeyPairFactory } from '@bearmint/bep-035'

import { makeAddress, makeAddressFactory } from '../../source/factory.js'

createSuite(
	{ beforeEach, describe, expect, it },
	'SS58',
	'15d273dLcPsYiN44vLAvLhoxfQidKa1Verd9hEWfsb6Qhp2Y',
	(context) => {
		context.keyPairFactory = makeKeyPairFactory()
		context.addressFactory = makeAddressFactory(context.keyPairFactory, 0)
	},
)

describe('SS58', () => {
	it('should fail verifying an address', async () => {
		expect(await makeAddress(123, Buffer.from('gibberish')).verify()).toBeFalse()
	})
})
