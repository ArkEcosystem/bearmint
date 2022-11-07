// @ts-nocheck

import { extendExpect } from '@bearmint/bep-005'
import { mnemonic } from '@bearmint/bep-006'
import type {
	FunctionReturning,
	KeyPairFactory,
	PrivateKey,
	PrivateKeyFactory,
	PublicKey,
	PublicKeyFactory,
} from '@bearmint/bep-013'

export function createKeypairSuite(
	{ beforeEach, describe, expect, it },
	{
		callback,
		keypair,
		subject,
		title,
	}: {
		title: string
		subject: {
			makeKeyPairFactory: FunctionReturning<KeyPairFactory>
			makePrivateKey: FunctionReturning<PrivateKey>
			makePrivateKeyFactory: FunctionReturning<PrivateKeyFactory>
			makePublicKey: FunctionReturning<PublicKey>
			makePublicKeyFactory: FunctionReturning<PublicKeyFactory>
		}
		keypair: {
			publicKey: string
			privateKey: string
			secretKey?: string
		}
		callback?: CallableFunction
	},
) {
	extendExpect(expect)

	describe<{
		keyPairFactory: KeyPairFactory
		privateKey: PrivateKey
		privateKeyFactory: PrivateKeyFactory
		publicKey: PublicKey
		publicKeyFactory: PublicKeyFactory
		secretKey?: string
	}>(`${title} KeyPair`, () => {
		beforeEach(async (context) => {
			if (callback !== undefined) {
				await callback(context)
			}

			context.keyPairFactory = subject.makeKeyPairFactory()
			context.privateKeyFactory = subject.makePrivateKeyFactory()
			context.privateKey = await context.privateKeyFactory.fromString(keypair.privateKey)
			context.publicKeyFactory = subject.makePublicKeyFactory()
			context.publicKey = await context.publicKeyFactory.fromString(keypair.publicKey)

			if (keypair.secretKey !== undefined) {
				context.secretKey = keypair.secretKey
			}
		})

		it('should derive a keypair', async (context) => {
			expect(
				(await context.keyPairFactory.fromMnemonic(mnemonic)).toPrivateKey().toString(),
			).toStrictEqual(context.secretKey ?? context.privateKey.toString())

			expect(
				(await context.keyPairFactory.fromMnemonic(mnemonic)).toPublicKey().toString(),
			).toStrictEqual(context.publicKey.toString())

			expect(
				(await context.keyPairFactory.fromPrivateKey(context.privateKey.toBytes()))
					.toPrivateKey()
					.toString(),
			).toStrictEqual(context.secretKey ?? context.privateKey.toString())

			expect(
				(await context.keyPairFactory.fromPrivateKey(context.privateKey.toBytes()))
					.toPublicKey()
					.toString(),
			).toStrictEqual(context.publicKey.toString())

			expect(
				Buffer.from(
					(await context.privateKeyFactory.fromBytes(context.privateKey.toBytes()))
						.toPublicKey()
						.toBytes(),
				).compare(context.publicKey.toBytes()) === 0,
			).toBeTrue()
		})

		it('should derive a private key', async (context) => {
			expect(
				(await context.privateKeyFactory.fromString(context.privateKey.toString())).toString(),
			).toStrictEqual(context.privateKey.toString())

			expect(
				Buffer.from(
					(await context.privateKeyFactory.fromString(context.privateKey.toString())).toBytes(),
				).compare(context.privateKey.toBytes()) === 0,
			).toBeTrue()

			expect(
				(await context.privateKeyFactory.fromBytes(context.privateKey.toBytes())).toString(),
			).toStrictEqual(context.privateKey.toString())

			expect(
				Buffer.from(
					(await context.privateKeyFactory.fromBytes(context.privateKey.toBytes())).toBytes(),
				).compare(context.privateKey.toBytes()) === 0,
			).toBeTrue()
		})

		it('should derive a public key', async (context) => {
			expect(
				(await context.publicKeyFactory.fromString(context.publicKey.toString())).toString(),
			).toStrictEqual(context.publicKey.toString())

			expect(
				Buffer.from(
					(await context.publicKeyFactory.fromString(context.publicKey.toString())).toBytes(),
				).compare(context.publicKey.toBytes()) === 0,
			).toBeTrue()

			expect(
				(await context.publicKeyFactory.fromBytes(context.publicKey.toBytes())).toString(),
			).toStrictEqual(context.publicKey.toString())

			expect(
				Buffer.from(
					(await context.publicKeyFactory.fromBytes(context.publicKey.toBytes())).toBytes(),
				).compare(context.publicKey.toBytes()) === 0,
			).toBeTrue()

			expect(
				await (await context.publicKeyFactory.fromBytes(context.publicKey.toBytes())).verify(),
			).toBeTrue()

			expect(
				await (await context.publicKeyFactory.fromBytes(Buffer.from('gibberish'))).verify(),
			).toBeFalse()
		})
	})
}
