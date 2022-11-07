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
	privateKey: '918960f4f8d19552a5c4d1eadd5318a7b09bc979e6ca41d0797b0ed37da43f87',
	publicKey:
		'135538d3cf5197db90e89ec57f507aa4ae9d011c6bbaf4958c5f03fa2c367277cd178c24ed2c113f8dcd34752243f4613c3e072d48df5cac28ad8303b9e8f29e',
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
		title: 'Ethereum',
	},
)
