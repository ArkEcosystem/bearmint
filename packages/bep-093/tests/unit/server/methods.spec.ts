import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type {
	AddressFactory,
	KeyPairFactory,
	PrivateKeyFactory,
	PublicKeyFactory,
	SignatureFactory,
} from '@bearmint/bep-013'
import {
	makeKeyPairFactory,
	makePrivateKeyFactory,
	makePublicKeyFactory,
	makeSignatureFactory,
} from '@bearmint/bep-033'
import { makeAddressFactory } from '@bearmint/bep-042'

import {
	makeDeriveAddressFromMnemonic,
	makeDeriveAddressFromPrivateKey,
	makeDeriveAddressFromPublicKey,
	makeDeriveKeypairFromMnemonic,
	makeDeriveKeypairFromPrivateKey,
	makeSignMsg,
	makeVerifyMsg,
} from '../../../source/server/methods.js'

const mnemonic =
	'oil absorb party draft trash stamp today together rent enhance vendor tray nut unlock family wrap chapter flight latin antenna record sugar avoid judge'
const privateKey = '10eff071cfc3ab543f628208cbcaf1b176be1ee5d856700722905e2a0a855250'
const publicKey =
	'a094fc3b0880874ab3cef04dcf91910901211fc71ed8202e4954001b8bc8656e313d35ab38e41a9e013577e1faa9a237'
const address =
	'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl'
const hash = '592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba'

describe<{
	addressFactory: AddressFactory
	keyPairFactory: KeyPairFactory
	privateKeyFactory: PrivateKeyFactory
	publicKeyFactory: PublicKeyFactory
	signatureFactory: SignatureFactory
}>('Server', () => {
	beforeEach(async (context) => {
		context.addressFactory = makeAddressFactory(makeKeyPairFactory(), 'bear')
		context.keyPairFactory = makeKeyPairFactory()
		context.privateKeyFactory = makePrivateKeyFactory()
		context.publicKeyFactory = makePublicKeyFactory()
		context.signatureFactory = makeSignatureFactory()
	})

	it('address.fromMnemonic', async (context) => {
		expect(
			await makeDeriveAddressFromMnemonic(context).execute({
				mnemonic,
			}),
		).toStrictEqual(address)
	})

	it('address.fromPrivateKey', async (context) => {
		expect(
			await makeDeriveAddressFromPrivateKey(context).execute({
				privateKey,
			}),
		).toStrictEqual(address)
	})

	it('address.fromPublicKey', async (context) => {
		expect(
			await makeDeriveAddressFromPublicKey(context).execute({
				publicKey,
			}),
		).toStrictEqual(address)
	})

	it('keypair.fromMnemonic', async (context) => {
		expect(
			await makeDeriveKeypairFromMnemonic(context).execute({
				mnemonic,
			}),
		).toStrictEqual({
			privateKey,
			publicKey,
		})
	})

	it('keypair.fromPrivateKey', async (context) => {
		expect(
			await makeDeriveKeypairFromPrivateKey(context).execute({
				privateKey,
			}),
		).toStrictEqual({
			privateKey,
			publicKey,
		})
	})

	it('message.sign', async (context) => {
		expect(
			await makeSignMsg(context).execute({
				hash,
				mnemonic,
			}),
		).toBeTypeOf('string')
	})

	it('message.verify', async (context) => {
		expect(
			await makeVerifyMsg(context).execute({
				hash,
				publicKey,
				signature: await makeSignMsg(context).execute({
					hash,
					mnemonic,
				}),
			}),
		).toBeTrue()

		expect(
			await makeVerifyMsg(context).execute({
				hash,
				publicKey: privateKey,
				signature: await makeSignMsg(context).execute({
					hash,
					mnemonic,
				}),
			}),
		).toBeFalse()
	})
})
