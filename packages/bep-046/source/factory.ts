/* eslint-disable unicorn/consistent-function-scoping */
/**
 * @see https://github.com/tendermint/tendermint/blob/master/crypto/ed25519/ed25519.go#L160-L166
 */

import { bytesToHex, hexToBytes, sha256 } from '@bearmint/bep-009'
import type {
	Address,
	AddressFactory,
	KeyPairFactory,
	PrivateKey,
	PublicKey,
} from '@bearmint/bep-013'

export function makeAddress(bytes: Uint8Array): Address {
	return {
		toBytes() {
			return bytes
		},
		toString() {
			return bytesToHex(bytes)
		},
		async verify() {
			return bytes.byteLength === 20
		},
	}
}

export function makeAddressFactory(keyPairFactory: KeyPairFactory): AddressFactory {
	async function fromBytes(bytes: Uint8Array) {
		return makeAddress(bytes)
	}

	async function fromPublicKey(publicKey: PublicKey) {
		return makeAddress(sha256(publicKey.toBytes()).slice(0, 20))
	}

	return {
		fromBytes,
		async fromMnemonic(mnemonic: string) {
			return fromPublicKey((await keyPairFactory.fromMnemonic(mnemonic)).toPublicKey())
		},
		async fromPrivateKey(privateKey: PrivateKey) {
			return fromPublicKey(privateKey.toPublicKey())
		},
		fromPublicKey,
		async fromString(address: string) {
			return fromBytes(hexToBytes(address))
		},
	}
}
