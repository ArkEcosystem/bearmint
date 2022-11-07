import { createSuite } from '@bearmint/bep-039'
import { makeKeyPairFactory } from '@bearmint/bep-035'
import { beforeEach, describe, expect, it } from 'vitest'

import { makeAddressFactory } from '../../source/factory.js'

createSuite(
	{ beforeEach, describe, expect, it },
	'Ed25519',
	'7c29f8a5e3bc066000c6ff24852fd38994a3beb8',
	(context) => {
		context.keyPairFactory = makeKeyPairFactory()
		context.addressFactory = makeAddressFactory(context.keyPairFactory)
	},
)
