import { bytesToHex, hexToBytes } from '@bearmint/bep-009'
import type {
	KeyPair,
	KeyPairFactory,
	PrivateKey,
	PrivateKeyFactory,
	PublicKey,
	PublicKeyFactory,
} from '@bearmint/bep-013'
import { getPublicKey, Point } from '@noble/ed25519'
import { mnemonicToSeedSync } from '@scure/bip39'

export function makeKeyPair(privateKey: Uint8Array, publicKey: Uint8Array): KeyPair {
	return {
		toPrivateKey() {
			return makePrivateKey(privateKey, publicKey)
		},
		toPublicKey() {
			return makePublicKey(publicKey)
		},
	}
}

export function makeKeyPairFactory(): KeyPairFactory {
	// eslint-disable-next-line unicorn/consistent-function-scoping
	async function fromPrivateKey(privateKey: Uint8Array) {
		return makeKeyPair(privateKey, await getPublicKey(privateKey))
	}

	return {
		async fromMnemonic(mnemonic: string) {
			return fromPrivateKey(mnemonicToSeedSync(mnemonic).subarray(0, 32))
		},
		fromPrivateKey,
	}
}

export function makePrivateKey(privateKey: Uint8Array, publicKey: Uint8Array): PrivateKey {
	return {
		toBytes() {
			return privateKey
		},
		toPublicKey() {
			return makePublicKey(publicKey)
		},
		toString() {
			return bytesToHex(privateKey)
		},
	}
}

export function makePrivateKeyFactory(): PrivateKeyFactory {
	// eslint-disable-next-line unicorn/consistent-function-scoping
	async function fromBytes(privateKey: Uint8Array) {
		return makePrivateKey(privateKey, await getPublicKey(privateKey))
	}

	return {
		fromBytes,
		async fromString(privateKey: string) {
			return fromBytes(hexToBytes(privateKey))
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
				Point.fromHex(bytes)

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
