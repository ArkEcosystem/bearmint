import { bytesToHex, hexToBytes } from '@bearmint/bep-009'
import type { Signature, SignatureFactory } from '@bearmint/bep-013'
import { ecrecover, ecsign, fromRpcSig, toRpcSig } from '@ethereumjs/util'

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
				const { r, s, v } = fromRpcSig(`0x${bytesToHex(signature)}`)

				return ecrecover(hash as Buffer, v, r, s).compare(publicKey) === 0
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
			const { r, s, v } = ecsign(hash as Buffer, keyPair.toPrivateKey().toBytes() as Buffer)

			return makeSignature(hash, keyPair.toPublicKey().toBytes(), hexToBytes(toRpcSig(v, r, s)))
		},
	}
}
