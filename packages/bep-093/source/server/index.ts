import type {
	AddressFactory,
	KeyPairFactory,
	PrivateKeyFactory,
	PublicKeyFactory,
	SignatureFactory,
} from '@bearmint/bep-013'
import { makeServer as makeRPC } from '@bearmint/bep-091'

import {
	makeDeriveAddressFromMnemonic,
	makeDeriveAddressFromPrivateKey,
	makeDeriveAddressFromPublicKey,
	makeDeriveKeypairFromMnemonic,
	makeDeriveKeypairFromPrivateKey,
	makeSignMsg,
	makeVerifyMsg,
} from './methods.js'

export async function makeServer(
	host: string,
	port: number,
	concrete: {
		addressFactory: AddressFactory
		publicKeyFactory: PublicKeyFactory
		privateKeyFactory: PrivateKeyFactory
		keyPairFactory: KeyPairFactory
		signatureFactory: SignatureFactory
	},
) {
	const server = await makeRPC({
		deriveAddressFromMnemonic: makeDeriveAddressFromMnemonic(concrete),
		deriveAddressFromPrivateKey: makeDeriveAddressFromPrivateKey(concrete),
		deriveAddressFromPublicKey: makeDeriveAddressFromPublicKey(concrete),
		deriveKeypairFromMnemonic: makeDeriveKeypairFromMnemonic(concrete),
		deriveKeypairFromPrivateKey: makeDeriveKeypairFromPrivateKey(concrete),
		signMsg: makeSignMsg(concrete),
		verifyMsg: makeVerifyMsg(concrete),
	})

	server.listen(port, host, () => {
		console.log(`Crypto JSON-RPC listening at http://${host}:${port}`)
	})

	return server
}
