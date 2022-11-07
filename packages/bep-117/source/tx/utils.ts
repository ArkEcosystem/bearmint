import { randomUUID } from 'node:crypto'

import type {
	AddressFactory,
	KeyPairFactory,
	PrivateKeyFactory,
	PublicKeyFactory,
	SignatureFactory,
} from '@bearmint/bep-013'
import { generateMnemonic } from '@scure/bip39'
import { wordlist } from '@scure/bip39/wordlists/english.js'
// import { random } from 'pokemon'

export async function makeCrypto(
	addressModule: string,
	addressPrefix: string,
	keypairModule: string,
): Promise<{
	addressFactory: AddressFactory
	keyPairFactory: KeyPairFactory
	privateKeyFactory: PrivateKeyFactory
	publicKeyFactory: PublicKeyFactory
	signatureFactory: SignatureFactory
}> {
	const { makeKeyPairFactory, makePrivateKeyFactory, makePublicKeyFactory, makeSignatureFactory } =
		await import(keypairModule)

	return {
		addressFactory: (await import(addressModule)).makeAddressFactory(
			makeKeyPairFactory(),
			addressPrefix,
		),
		keyPairFactory: makeKeyPairFactory(),
		privateKeyFactory: makePrivateKeyFactory(),
		publicKeyFactory: makePublicKeyFactory(),
		signatureFactory: makeSignatureFactory(),
	}
}

export function randomMoniker() {
	return randomUUID().replace('-', '')
}

export function randomNumber(min: number, max: number) {
	return BigInt(
		BigInt(Math.floor(Math.random() * 1e8)) * (BigInt(max) - BigInt(min)) + BigInt(min),
	).toString()
}

export function randomMnemonic() {
	return generateMnemonic(wordlist, 256)
}
