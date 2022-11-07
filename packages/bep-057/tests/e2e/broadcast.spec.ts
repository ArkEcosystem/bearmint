import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToHex } from '@bearmint/bep-009'
import { makeKeyPairFactory } from '@bearmint/bep-035'
import { E2E } from '@bearmint/bep-053'
import { deriveEd25519Address } from '@bearmint/bep-089'
import { makeServiceProvider as BEP110 } from '@bearmint/bep-110'

import { makeServiceProvider as BEP57 } from '../../source/service-provider.js'

describe<{
	bep57: E2E.Context
	bep110: E2E.Context
}>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		ctx.bep57 = await E2E.createEnvironment(BEP57)
		ctx.bep110 = await E2E.createEnvironment(BEP110)
	})

	it('should pass', async (ctx) => {
		await (
			await ctx.bep110.txFactory.asserted(
				ctx.bep110.accts.get('genesis_1').keypair,
				ctx.bep110.accts.get('genesis_1').keypair,
				await ctx.bep110.client.fakeTxMsg('@bearmint/bep-110').execute({
					moniker: 'buckley',
				}),
			)
		).pass()

		const publicKey = (
			await makeKeyPairFactory().fromMnemonic(ctx.bep57.accts.get('genesis_1').mnemonic)
		).toPublicKey()

		await ctx.bep57.accts.get('genesis_1').expectProperty('validator', {
			address: bytesToHex(deriveEd25519Address(publicKey.toBytes())),
			power: '0',
			publicKey: publicKey.toString(),
		})

		await (
			await ctx.bep57.txFactory.asserted(
				ctx.bep57.accts.get('genesis_1').keypair,
				ctx.bep57.accts.get('genesis_1').keypair,
				await ctx.bep57.client.fakeTxMsg('@bearmint/bep-057').execute(
					{},
					{
						mnemonic: ctx.bep57.accts.get('genesis_1').mnemonic,
						moniker: 'buckley',
					},
				),
			)
		).pass()

		ctx.bep57.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-057', it, 'bep57')
	E2E.testTopMemoLength('@bearmint/bep-057', it, 'bep57')

	it('should fail if the sender does not have a moniker', async (ctx) => {
		const tx = await ctx.bep57.txFactory.asserted(
			ctx.bep57.accts.get('genesis_2').keypair,
			ctx.bep57.accts.get('genesis_2').keypair,
			await ctx.bep57.client.fakeTxMsg('@bearmint/bep-057').execute(),
		)

		await tx.fail([
			{
				attributes: [{ index: false, key: 'sender.moniker', value: 'ERR_TX_FORBIDDEN_ACTION' }],
				type: '@bearmint/bep-057/0.0.0/audit',
			},
		])
	})

	it('should fail if the signed moniker is invalid', async (ctx) => {
		await (
			await ctx.bep110.txFactory.asserted(
				ctx.bep110.accts.get('genesis_3').keypair,
				ctx.bep110.accts.get('genesis_3').keypair,
				await ctx.bep110.client.fakeTxMsg('@bearmint/bep-110').execute({
					moniker: 'borkley',
				}),
			)
		).pass()

		await (
			await ctx.bep57.txFactory.asserted(
				ctx.bep57.accts.get('genesis_3').keypair,
				ctx.bep57.accts.get('genesis_3').keypair,
				await ctx.bep57.client.fakeTxMsg('@bearmint/bep-057').execute(
					{},
					{
						mnemonic: ctx.bep57.accts.get('genesis_3').mnemonic,
						moniker: 'bankley',
					},
				),
			)
		).fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.signature',
						value: 'ERR_TX_ED25519_SIGNATURE_DOES_NOT_VERIFY',
					},
				],
				type: '@bearmint/bep-057/0.0.0/audit',
			},
		])
	})
})
