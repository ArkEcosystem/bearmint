import { bytesToHex, hexToBytes } from '@bearmint/bep-009'
import type {
	KeyPair,
	KeyPairFactory,
	PrivateKey,
	PrivateKeyFactory,
	PublicKey,
	PublicKeyFactory,
} from '@bearmint/bep-013'
import * as BLS from '@chainsafe/blst'
import { mnemonicToSeedSync } from '@scure/bip39'
import { deriveMaster } from 'bls12-381-keygen'

export function makeKeyPair(privateKey: Uint8Array, publicKey: Uint8Array): KeyPair {
	return {
		toPrivateKey() {
			return makePrivateKey(privateKey)
		},
		toPublicKey() {
			return makePublicKey(publicKey)
		},
	}
}

export function makeKeyPairFactory(): KeyPairFactory {
	// eslint-disable-next-line unicorn/consistent-function-scoping
	async function fromPrivateKey(privateKey: Uint8Array) {
		return makeKeyPair(privateKey, BLS.SecretKey.fromBytes(privateKey).toPublicKey().toBytes())
	}

	return {
		async fromMnemonic(mnemonic: string) {
			return fromPrivateKey(deriveMaster(mnemonicToSeedSync(mnemonic)))
		},
		fromPrivateKey,
	}
}

export function makePrivateKey(bytes: Uint8Array): PrivateKey {
	return {
		toBytes() {
			return bytes
		},
		toPublicKey() {
			return makePublicKey(BLS.SecretKey.fromBytes(bytes).toPublicKey().toBytes())
		},
		toString() {
			return bytesToHex(bytes)
		},
	}
}

export function makePrivateKeyFactory(): PrivateKeyFactory {
	return {
		async fromBytes(privateKey: Uint8Array) {
			return makePrivateKey(privateKey)
		},
		async fromString(privateKey: string) {
			return makePrivateKey(hexToBytes(privateKey))
		},
	}
}

export function makePublicKey(bytes: Uint8Array): PublicKey {
	return {
		toBytes() {
			return bytes
		},
		toString() {
			return bytesToHex(bytes)
		},
		async verify() {
			try {
				BLS.PublicKey.fromBytes(bytes)

				return true
			} catch {
				return false
			}
		},
	}
}

export function makePublicKeyFactory(): PublicKeyFactory {
	return {
		async fromBytes(bytes: Uint8Array) {
			return makePublicKey(bytes)
		},
		async fromString(publicKey: string) {
			return makePublicKey(hexToBytes(publicKey))
		},
	}
}
