import {
	deriveEd25519Address,
	deriveSecp256k1Address,
	deriveSr25519Address,
} from '@bearmint/bep-089'

export function deriveAddress(publicKey: Uint8Array, publicKeyType: string) {
	if (publicKeyType === 'ed25519') {
		return deriveEd25519Address(publicKey)
	}

	if (publicKeyType === 'sr25519') {
		return deriveSr25519Address(publicKey)
	}

	if (publicKeyType === 'secp256k1') {
		return deriveSecp256k1Address(publicKey)
	}

	throw new Error(`Public Key type (${publicKeyType}) is not supported.`)
}
