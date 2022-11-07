import { createKeypairSuite } from '@bearmint/bep-031'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { expect, describe, it, beforeEach } from 'vitest'

import {
	makeKeyPairFactory,
	makePrivateKey,
	makePrivateKeyFactory,
	makePublicKey,
	makePublicKeyFactory,
} from '../../source/keypair.js'

const keypair = {
	privateKey: 'e95d870cccba6d4ea19a910a53eecf23029694813a7d201aaab8e832c490ae7e',
	publicKey: '42a917c9c64906ccd5886afadfc2aa7cf30f8309f86c8361dba1bc51e2b39a1a',
	// polkadot/sr25519 only uses the private as a seed. the secret key signs
	secretKey:
		'60c11b2cd79aecba8fc650311854139415bc11b3545800b6a786ada15be95876152548f55d1b0456c2ef86ae60cc87b1e38cd0f7d88d53959181f0c60984bb8f',
}

createKeypairSuite(
	{ expect, describe, it, beforeEach },
	{
		callback: () => cryptoWaitReady(),
		keypair,
		subject: {
			makeKeyPairFactory,
			makePrivateKey,
			makePrivateKeyFactory,
			makePublicKey,
			makePublicKeyFactory,
		},
		title: 'sr25519',
	},
)
