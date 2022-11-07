import { bytesToHex } from '@bearmint/bep-009'
import type { Signature, SignatureFactory } from '@bearmint/bep-013'
import { schnorr } from '@noble/secp256k1'

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
			return schnorr.verify(signature, hash, publicKey)
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
				await schnorr.sign(hash, keyPair.toPrivateKey().toBytes()),
			)
		},
	}
}
