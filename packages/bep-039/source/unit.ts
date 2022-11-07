// @ts-nocheck

import { extendExpect } from '@bearmint/bep-005'
import { mnemonic } from '@bearmint/bep-006'
import type { AddressFactory, KeyPairFactory } from '@bearmint/bep-013'

export function createSuite(
	{ beforeEach, describe, expect, it },
	title: string,
	expected: string,
	callback: CallableFunction,
) {
	extendExpect(expect)

	describe<{
		keyPairFactory: KeyPairFactory
		addressFactory: AddressFactory
	}>(title, () => {
		beforeEach((context) => {
			callback(context)
		})

		it('should derive from a mnemonic', async (context) => {
			expect((await context.addressFactory.fromMnemonic(mnemonic)).toString()).toStrictEqual(
				expected,
			)
		})

		it('should derive from a public key', async (context) => {
			expect(
				(
					await context.addressFactory.fromPublicKey(
						(await context.keyPairFactory.fromMnemonic(mnemonic)).toPublicKey(),
					)
				).toString(),
			).toStrictEqual(expected)
		})

		it('should derive from a private key', async (context) => {
			expect(
				(
					await context.addressFactory.fromPrivateKey(
						(await context.keyPairFactory.fromMnemonic(mnemonic)).toPrivateKey(),
					)
				).toString(),
			).toStrictEqual(expected)
		})

		it('should derive from a string', async (context) => {
			expect((await context.addressFactory.fromString(expected)).toString()).toStrictEqual(expected)
		})

		it('should derive from a buffer', async (context) => {
			expect(
				(
					await context.addressFactory.fromBytes(
						(
							await context.addressFactory.fromPrivateKey(
								(await context.keyPairFactory.fromMnemonic(mnemonic)).toPrivateKey(),
							)
						).toBytes(),
					)
				).toString(),
			).toStrictEqual(expected)
		})

		it('should verify an address', async (context) => {
			expect(await (await context.addressFactory.fromMnemonic(mnemonic)).verify()).toBeTrue()
		})

		it('should convert an address into bytes', async (context) => {
			expect((await context.addressFactory.fromMnemonic(mnemonic)).toBytes()).toBeInstanceOf(
				Uint8Array,
			)
		})

		it('should convert an address into a string', async (context) => {
			expect((await context.addressFactory.fromMnemonic(mnemonic)).toString()).toBeTypeOf('string')
		})
	})
}
