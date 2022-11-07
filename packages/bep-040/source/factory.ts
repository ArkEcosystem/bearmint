/**
 * @see https://github.com/bitcoin/bips/blob/master/bip-0013.mediawiki
 */

import { ripemd160, sha256 } from '@bearmint/bep-009'
import type {
	Address,
	AddressFactory,
	KeyPairFactory,
	PrivateKey,
	PublicKey,
} from '@bearmint/bep-013'
import { base58check } from '@scure/base'

export function makeAddress(prefix: number, bytes: Uint8Array): Address {
	return {
		toBytes() {
			return bytes
		},
		toString() {
			return base58check((data: Uint8Array) => sha256(data)).encode(bytes)
		},
		async verify() {
			return bytes[0] === prefix
		},
	}
}

export function makeAddressFactory(keyPairFactory: KeyPairFactory, prefix: number): AddressFactory {
	async function fromBytes(bytes: Uint8Array) {
		return makeAddress(prefix, bytes)
	}

	async function fromPublicKey(publicKey: PublicKey) {
		const buffer: Buffer = Buffer.from(ripemd160(publicKey.toBytes()))
		const payload: Buffer = Buffer.alloc(21)

		payload.writeUInt8(prefix, 0)
		buffer.copy(payload, 1)

		return fromBytes(payload)
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
			return fromBytes(base58check((data: Uint8Array) => sha256(data)).decode(address))
		},
	}
}
