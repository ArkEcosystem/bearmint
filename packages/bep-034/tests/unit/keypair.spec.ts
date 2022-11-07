import { createKeypairSuite } from '@bearmint/bep-031'
import { expect, describe, it, beforeEach } from 'vitest'

import {
	makeKeyPairFactory,
	makePrivateKey,
	makePrivateKeyFactory,
	makePublicKey,
	makePublicKeyFactory,
} from '../../source/keypair.js'

const keypair = {
	privateKey: 'e46bd7365d8f3fb498a4b2bdaadb3f758b2ecd5fe2b7a1935931939e3117b732',
	publicKey: '03134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
}

createKeypairSuite(
	{ expect, describe, it, beforeEach },
	{
		keypair,
		subject: {
			makeKeyPairFactory,
			makePrivateKey,
			makePrivateKeyFactory,
			makePublicKey,
			makePublicKeyFactory,
		},
		title: 'ECDSA',
	},
)
