import { makeKeyPairFactory } from '@bearmint/bep-037'
import { createSuite } from '@bearmint/bep-039'
import { beforeEach, describe, expect, it } from 'vitest'

import { makeAddressFactory } from '../../source/factory.js'

createSuite(
	{ beforeEach, describe, expect, it },
	'Keccak-256',
	'0x51fe10e9a2af7dadc5718f7090852ba2778d9aba',
	(context) => {
		context.keyPairFactory = makeKeyPairFactory()
		context.addressFactory = makeAddressFactory(context.keyPairFactory)
	},
)
