// @ts-nocheck

import { extendExpect } from '@bearmint/bep-005'
import type { FunctionReturning, KeyPair, SignatureFactory } from '@bearmint/bep-013'

const msg = Buffer.from('690a91fc0a7a49bbc5afe9516c1831ca8845f281ef2e414f7dfeb71b5e91a902', 'hex')

export function createSignatureSuite(
	{ beforeEach, describe, expect, it },
	{
		callback,
		keypair,
		subject,
		title,
	}: {
		title: string
		subject: {
			makeKeyPair: FunctionReturning<KeyPair>
			makeSignatureFactory: FunctionReturning<SignatureFactory>
		}
		keypair: {
			publicKey: string
			privateKey: string
		}
		callback?: CallableFunction
	},
) {
	extendExpect(expect)

	describe<{
		keyPair: KeyPair
		privateKey: Buffer
		publicKey: Buffer
		signatureFactory: SignatureFactory
	}>(`${title} Signature`, () => {
		beforeEach(async (context) => {
			if (callback !== undefined) {
				await callback(context)
			}

			context.signatureFactory = subject.makeSignatureFactory()
			context.privateKey = Buffer.from(keypair.privateKey, 'hex')
			context.publicKey = Buffer.from(keypair.publicKey, 'hex')
			context.keyPair = subject.makeKeyPair(context.privateKey, context.publicKey)
		})

		it('should cast the signature to a string', async (context) => {
			expect(
				(
					await context.signatureFactory.from(
						msg,
						context.publicKey,
						(await context.signatureFactory.sign(msg, context.keyPair)).toBytes(),
					)
				).toString(),
			).toBeTypeOf('string')
		})

		it('should cast the signature to a buffer', async (context) => {
			expect(
				(
					await context.signatureFactory.from(
						msg,
						context.publicKey,
						(await context.signatureFactory.sign(msg, context.keyPair)).toBytes(),
					)
				).toBytes(),
			).toBeInstanceOf(Uint8Array)
		})

		it('should sign a msg and verify its signature', async (context) => {
			expect(
				await (
					await context.signatureFactory.from(
						msg,
						context.publicKey,
						(await context.signatureFactory.sign(msg, context.keyPair)).toBytes(),
					)
				).verify(),
			).toBeTrue()

			expect(
				await (
					await context.signatureFactory.from(
						context.publicKey,
						context.publicKey,
						(await context.signatureFactory.sign(msg, context.keyPair)).toBytes(),
					)
				).verify(),
			).toBeFalse()

			expect(
				await (
					await context.signatureFactory.from(
						context.publicKey,
						context.privateKey,
						(await context.signatureFactory.sign(msg, context.keyPair)).toBytes(),
					)
				).verify(),
			).toBeFalse()
		})
	})
}
