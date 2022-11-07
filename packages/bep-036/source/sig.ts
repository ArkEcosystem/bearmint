import { bytesToHex } from '@bearmint/bep-009'
import type { Signature, SignatureFactory } from '@bearmint/bep-013'
import { sr25519Sign, sr25519Verify } from '@polkadot/util-crypto'

export function makeSignature(
	hash: Uint8Array,
	publicKey: Uint8Array,
	signature: Uint8Array,
): Signature {
	return {
		toBytes() {
			return signature
		},
		toString() {
			return bytesToHex(signature)
		},
		async verify() {
			try {
				return sr25519Verify(hash, signature, publicKey)
			} catch {
				return false
			}
		},
	}
}

export function makeSignatureFactory(): SignatureFactory {
	return {
		async from(hash, publicKey, signature) {
			return makeSignature(hash, publicKey, signature)
		},
		async sign(hash, keyPair) {
			return makeSignature(
				hash,
				keyPair.toPublicKey().toBytes(),
				sr25519Sign(hash, {
					publicKey: keyPair.toPublicKey().toBytes(),
					secretKey: keyPair.toPrivateKey().toBytes(),
				}),
			)
		},
	}
}
