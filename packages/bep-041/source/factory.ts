/**
 * @see https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki
 */

import type {
	Address,
	AddressFactory,
	KeyPairFactory,
	PrivateKey,
	PublicKey,
} from '@bearmint/bep-013'
import { bech32 } from '@scure/base'

export function makeAddress(prefix: string, bytes: Uint8Array): Address {
	function toString() {
		return bech32.encode(prefix, bech32.toWords(bytes))
	}

	return {
		toBytes() {
			return bytes
		},
		toString,
		async verify() {
			try {
				bech32.decode(toString())

				return true
			} catch {
				return false
			}
		},
	}
}

export function makeAddressFactory(keyPairFactory: KeyPairFactory, prefix: string): AddressFactory {
	async function fromBytes(bytes: Uint8Array) {
		return makeAddress(prefix, bytes)
	}

	async function fromPublicKey(publicKey: PublicKey) {
		return makeAddress(prefix, publicKey.toBytes())
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
			return fromBytes(bech32.decodeToBytes(address).bytes)
		},
	}
}
