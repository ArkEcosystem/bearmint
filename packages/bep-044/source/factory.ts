/* eslint-disable unicorn/consistent-function-scoping */
/**
 * @see https://github.com/tendermint/tendermint/blob/master/crypto/secp256k1/secp256k1.go#L148-L161
 */

import { bytesToHex, hexToBytes, ripemd160, sha256 } from '@bearmint/bep-009'
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
			return bytes.length === 20
		},
	}
}

export function makeAddressFactory(keyPairFactory: KeyPairFactory): AddressFactory {
	async function fromBytes(bytes: Uint8Array) {
		return makeAddress(bytes)
	}

	async function fromPublicKey(publicKey: PublicKey) {
		return makeAddress(ripemd160(sha256(publicKey.toBytes())))
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
