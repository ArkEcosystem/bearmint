import { bytesToHex } from '@bearmint/bep-009'
import type { Signature, SignatureFactory } from '@bearmint/bep-013'
import * as BLS from '@chainsafe/blst'

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
				return BLS.verify(
					hash,
					BLS.PublicKey.fromBytes(publicKey),
					BLS.Signature.fromBytes(signature),
				)
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
				BLS.SecretKey.fromBytes(keyPair.toPrivateKey().toBytes()).sign(hash).serialize(),
			)
		},
	}
}
