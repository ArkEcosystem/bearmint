import { createSignatureSuite } from '@bearmint/bep-031'
import { beforeEach, describe, expect, it } from 'vitest'

import { makeKeyPair } from '../../source/keypair.js'
import { makeSignatureFactory } from '../../source/sig.js'

const keypair = {
	privateKey: 'e46bd7365d8f3fb498a4b2bdaadb3f758b2ecd5fe2b7a1935931939e3117b732',
	publicKey: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
}

createSignatureSuite(
	{ beforeEach, describe, expect, it },
	{
		keypair,
		subject: {
			makeKeyPair,
			makeSignatureFactory,
		},
		title: 'Schnorr',
	},
)
