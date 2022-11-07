import { bytesToHex, hexToBytes } from '@bearmint/bep-009'
import type {
	Address,
	AddressFactory,
	KeyPairFactory,
	PrivateKey,
	PublicKey,
} from '@bearmint/bep-013'
import { isValidAddress, privateToAddress, publicToAddress } from '@ethereumjs/util'

export function makeAddress(bytes: Uint8Array): Address {
	function toString() {
		return `0x${bytesToHex(bytes)}`
	}

	return {
		toBytes() {
			return bytes
		},
		toString,
		async verify() {
			return isValidAddress(toString())
		},
	}
}

export function makeAddressFactory(keyPairFactory: KeyPairFactory): AddressFactory {
	return {
		async fromBytes(bytes: Uint8Array) {
			return makeAddress(bytes)
		},
		async fromMnemonic(mnemonic: string) {
			return makeAddress(
				publicToAddress(
					Buffer.from((await keyPairFactory.fromMnemonic(mnemonic)).toPublicKey().toBytes()),
					true,
				),
			)
		},
		async fromPrivateKey(privateKey: PrivateKey) {
			return makeAddress(privateToAddress(Buffer.from(privateKey.toBytes())))
		},
		async fromPublicKey(publicKey: PublicKey) {
			return makeAddress(publicToAddress(Buffer.from(publicKey.toBytes()), true))
		},
		async fromString(address: string) {
			if (address.toLowerCase().startsWith('0x')) {
				address = address.slice(2)
			}

			return makeAddress(hexToBytes(address))
		},
	}
}
