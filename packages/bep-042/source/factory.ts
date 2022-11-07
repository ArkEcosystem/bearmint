/**
 * @see https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki
 */

import type {
	Address,
	AddressFactory,
	KeyPairFactory,
	PrivateKey,
	PublicKey,
} from '@bearmint/bep-013'
import type { Bech32DecodedWithArray } from '@scure/base'
import { bech32m } from '@scure/base'

export function makeAddress(prefix: string, decoded: Bech32DecodedWithArray): Address {
	function toString() {
		return bech32m.encode(decoded.prefix, bech32m.toWords(decoded.bytes))
	}

	return {
		toBytes() {
			return decoded.bytes
		},
		toString,
		async verify() {
			return decoded.prefix === prefix
		},
	}
}

export function makeAddressFactory(keyPairFactory: KeyPairFactory, prefix: string): AddressFactory {
	async function fromBytes(bytes: Uint8Array) {
		return makeAddress(prefix, {
			bytes,
			prefix,
			words: bech32m.toWords(bytes),
		})
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
			return makeAddress(prefix, bech32m.decodeToBytes(address))
		},
	}
}
