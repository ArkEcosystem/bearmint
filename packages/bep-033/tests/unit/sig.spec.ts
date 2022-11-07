import { createSignatureSuite } from '@bearmint/bep-031'
import { beforeEach, describe, expect, it } from 'vitest'

import { makeKeyPair } from '../../source/keypair.js'
import { makeSignatureFactory } from '../../source/sig.js'

const keypair = {
	privateKey: '10eff071cfc3ab543f628208cbcaf1b176be1ee5d856700722905e2a0a855250',
	publicKey:
		'a094fc3b0880874ab3cef04dcf91910901211fc71ed8202e4954001b8bc8656e313d35ab38e41a9e013577e1faa9a237',
}

createSignatureSuite(
	{ beforeEach, describe, expect, it },
	{
		keypair,
		subject: {
			makeKeyPair,
			makeSignatureFactory,
		},
		title: 'BLS12-381',
	},
)
