import { createSignatureSuite } from '@bearmint/bep-031'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { beforeEach, describe, expect, it } from 'vitest'

import { makeKeyPair } from '../../source/keypair.js'
import { makeSignatureFactory } from '../../source/sig.js'

createSignatureSuite(
	{ beforeEach, describe, expect, it },
	{
		callback: () => cryptoWaitReady(),
		keypair: {
			privateKey:
				'387913547d462120a6e07d547d05cc15ca649c1774d7c6be9631142fd7e85a4b17a1cdc34922399d1c2872b266f6e5b3c3efe5264cb7c44edc049be62bb9e95f',
			publicKey: '02421e28afce3d572cbe621c99ee28d54ae7221a1e538bb9ee13c19a06d96636',
		},
		subject: {
			makeKeyPair,
			makeSignatureFactory,
		},
		title: 'sr25519',
	},
)
