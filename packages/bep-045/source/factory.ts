/**
 * @see https://polkadot.js.org/docs/keyring/start/ss58/
 * @see https://docs.substrate.io/v3/advanced/ss58/
 */

import type {
	Address,
	AddressFactory,
	KeyPairFactory,
	PrivateKey,
	PublicKey,
} from '@bearmint/bep-013'
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto'

export function makeAddress(prefix: number, bytes: Uint8Array): Address {
	return {
		toBytes() {
			return bytes
		},
		toString() {
			return encodeAddress(bytes, prefix)
		},
		async verify() {
			try {
				decodeAddress(encodeAddress(bytes, prefix), undefined, prefix)

				return true
			} catch {
				return false
			}
		},
	}
}

export function makeAddressFactory(keyPairFactory: KeyPairFactory, prefix: number): AddressFactory {
	async function fromBytes(bytes: Uint8Array) {
		return makeAddress(prefix, bytes)
	}

	async function fromPublicKey(publicKey: PublicKey) {
		return fromBytes(publicKey.toBytes())
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
			return fromBytes(decodeAddress(address))
		},
	}
}
