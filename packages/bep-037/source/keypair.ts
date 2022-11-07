import { assert, bytesToHex, hexToBytes } from '@bearmint/bep-009'
import type {
	KeyPair,
	KeyPairFactory,
	PrivateKey,
	PrivateKeyFactory,
	PublicKey,
	PublicKeyFactory,
} from '@bearmint/bep-013'
import { isValidPublic, privateToPublic } from '@ethereumjs/util'
import { mnemonicToSeedSync } from '@scure/bip39'
import { HDKey } from 'ethereum-cryptography/hdkey.js'

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
	return {
		async fromMnemonic(mnemonic: string) {
			const wallet = HDKey.fromMasterSeed(mnemonicToSeedSync(mnemonic))

			assert.defined<Uint8Array>(wallet.privateKey)

			return makeKeyPair(wallet.privateKey, privateToPublic(Buffer.from(wallet.privateKey)))
		},
		async fromPrivateKey(privateKey: Uint8Array) {
			return makeKeyPair(privateKey, privateToPublic(Buffer.from(privateKey)))
		},
	}
}

export function makePrivateKey(bytes: Uint8Array): PrivateKey {
	return {
		toBytes() {
			return bytes
		},
		toPublicKey() {
			return makePublicKey(privateToPublic(Buffer.from(bytes)))
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
			return isValidPublic(Buffer.from(bytes), true)
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
