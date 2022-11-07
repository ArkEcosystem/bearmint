import { createSuite } from '@bearmint/bep-039'
import { makeKeyPairFactory } from '@bearmint/bep-035'
import { beforeEach, describe, expect, it } from 'vitest'

import { makeAddressFactory } from '../../source/factory.js'

createSuite(
	{ beforeEach, describe, expect, it },
	'BIP13',
	'1Exk9FpUrUH9L9qq7aY3fbur8je3E9Um9A',
	(context) => {
		context.keyPairFactory = makeKeyPairFactory()
		context.addressFactory = makeAddressFactory(context.keyPairFactory, 0)
	},
)
