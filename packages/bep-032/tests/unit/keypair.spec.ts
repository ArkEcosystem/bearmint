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
	privateKey: 'e95d870cccba6d4ea19a910a53eecf23029694813a7d201aaab8e832c490ae7e',
	publicKey: '711e76e5305c90b682444597b542c04913b5bed5a167d42be0c75cc513f0a56e',
}

createKeypairSuite(
	{ expect, describe, it, beforeEach },
	{
		keypair,
		// muSig: {
		// 	m: 1,
		// 	master: '475ac48b007cb1fa68cb70ea85813b9a30068cec2428a315a71ad796ec169797',
		// 	n: 2,
		// 	slaves: [
		// 		'846f34fdb2345f4bf932cb4b7d278fb3af24f44224fb52ae551781c3a3cad68a',
		// 		'cd836b1d42c51d80cef695a14502c21d2c3c644bc82f6a7052eb29247cf61f4f',
		// 		'b8c1765111002f09ba35c468fab273798a9058d1f8a4e276f45a1f1481dd0bdb',
		// 	],
		// },
		subject: {
			makeKeyPairFactory,
			makePrivateKey,
			makePrivateKeyFactory,
			makePublicKey,
			makePublicKeyFactory,
		},
		title: 'Schnorr',
	},
)
