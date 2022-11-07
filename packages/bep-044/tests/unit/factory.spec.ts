import { makeKeyPairFactory } from '@bearmint/bep-035'
import { createSuite } from '@bearmint/bep-039'
import { beforeEach, describe, expect, it } from 'vitest'

import { makeAddressFactory } from '../../source/factory.js'

createSuite(
	{ beforeEach, describe, expect, it },
	'Secp256k1',
	'ef93ca395a5c74d7ee4c98e3b0dc1e219bfd5587',
	(context) => {
		context.keyPairFactory = makeKeyPairFactory()
		context.addressFactory = makeAddressFactory(context.keyPairFactory)
	},
)
