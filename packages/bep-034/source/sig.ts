import { bytesToHex } from '@bearmint/bep-009'
import type { Signature, SignatureFactory } from '@bearmint/bep-013'
import { sign, verify } from '@noble/secp256k1'

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
		/* c8 ignore start */
		async verify() {
			try {
				return verify(signature, hash, publicKey)
			} catch {
				return false
			}
		},
		/* c8 ignore end */
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
				await sign(hash, keyPair.toPrivateKey().toBytes()),
			)
		},
	}
}