import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { createSignatureSuite } from '@bearmint/bep-031'

import { makeKeyPair } from '../../source/keypair.js'
import { makeSignature, makeSignatureFactory } from '../../source/sig.js'

const keypair = {
	privateKey: '918960f4f8d19552a5c4d1eadd5318a7b09bc979e6ca41d0797b0ed37da43f87',
	publicKey:
		'135538d3cf5197db90e89ec57f507aa4ae9d011c6bbaf4958c5f03fa2c367277cd178c24ed2c113f8dcd34752243f4613c3e072d48df5cac28ad8303b9e8f29e',
}

createSignatureSuite(
	{ beforeEach, describe, expect, it },
	{
		keypair,
		subject: {
			makeKeyPair,
			makeSignatureFactory,
		},
		title: 'Ethereum',
	},
)

describe('Signature', () => {
	it('should fail to verify junk data', async () => {
		expect(
			await makeSignature({
				hash: Buffer.alloc(0),
				publicKey: Buffer.alloc(0),
				signature: Buffer.alloc(0),
			}).verify(),
		).toBeFalse()
	})
})
