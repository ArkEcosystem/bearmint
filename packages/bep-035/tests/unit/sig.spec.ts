import { createSignatureSuite } from '@bearmint/bep-031'
import { beforeEach, describe, expect, it } from 'vitest'

import { makeKeyPair } from '../../source/keypair.js'
import { makeSignatureFactory } from '../../source/sig.js'

const keypair = {
	privateKey: 'e95d870cccba6d4ea19a910a53eecf23029694813a7d201aaab8e832c490ae7e',
	publicKey: 'cc697c4c0a143cf62f7ffc7df358e8542dbe1d1d002b9843015a9972d8fd455c',
}

createSignatureSuite(
	{ beforeEach, describe, expect, it },
	{
		keypair,
		subject: {
			makeKeyPair,
			makeSignatureFactory,
		},
		title: 'Ed25519',
	},
)
