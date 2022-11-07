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
	privateKey: '10eff071cfc3ab543f628208cbcaf1b176be1ee5d856700722905e2a0a855250',
	publicKey:
		'a094fc3b0880874ab3cef04dcf91910901211fc71ed8202e4954001b8bc8656e313d35ab38e41a9e013577e1faa9a237',
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
		title: 'BLS12-381',
	},
)
