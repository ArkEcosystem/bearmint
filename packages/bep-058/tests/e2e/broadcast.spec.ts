import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { E2E } from '@bearmint/bep-053'
import { makeServiceProvider as BEP57 } from '@bearmint/bep-057'
import { makeServiceProvider as BEP110 } from '@bearmint/bep-110'

import { makeServiceProvider as BEP58 } from '../../source/service-provider.js'

describe<{
	bep57: E2E.Context
	bep58: E2E.Context
	bep110: E2E.Context
}>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		ctx.bep57 = await E2E.createEnvironment(BEP57)
		ctx.bep58 = await E2E.createEnvironment(BEP58)
		ctx.bep110 = await E2E.createEnvironment(BEP110)
	})

	it('should pass', async (ctx) => {
		// Register Name
		await (
			await ctx.bep110.txFactory.asserted(
				ctx.bep110.accts.get('genesis_1').keypair,
				ctx.bep110.accts.get('genesis_1').keypair,
				await ctx.bep110.client.fakeTxMsg('@bearmint/bep-110').execute({
					moniker: 'buckley',
				}),
			)
		).pass()

		// Register Validator
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

		// Resign Validator
		const tx = await ctx.bep58.txFactory.asserted(
			ctx.bep58.accts.get('genesis_1').keypair,
			ctx.bep58.accts.get('genesis_1').keypair,
			await ctx.bep58.client.fakeTxMsg('@bearmint/bep-058').execute(
				{},
				{
					mnemonic: ctx.bep58.accts.get('genesis_1').mnemonic,
					moniker: 'buckley',
				},
			),
		)

		await ctx.bep58.accts
			.get('genesis_1')
			.expectModuleMetadataEqualsHex('@bearmint/bep-058', tx.toTx().hash)

		await tx.pass()

		ctx.bep58.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-058', it, 'bep58')
	E2E.testTopMemoLength('@bearmint/bep-058', it, 'bep58')

	it('should fail if the sender is not a validator', async (ctx) => {
		const tx = await ctx.bep58.txFactory.asserted(
			ctx.bep58.accts.get('genesis_2').keypair,
			ctx.bep58.accts.get('genesis_2').keypair,
			await ctx.bep58.client.fakeTxMsg('@bearmint/bep-058').execute(),
		)

		await tx.fail([
			{
				attributes: [{ index: false, key: 'sender', value: 'ERR_TX_NOT_FOUND' }],
				type: '@bearmint/bep-058/0.0.0/audit',
			},
		])
	})

	it('should fail if the validator keypair is invalid', async (ctx) => {
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
						moniker: 'borkley',
					},
				),
			)
		).pass()

		const tx = await ctx.bep58.txFactory.asserted(
			ctx.bep58.accts.get('genesis_3').keypair,
			ctx.bep58.accts.get('genesis_3').keypair,
			await ctx.bep58.client.fakeTxMsg('@bearmint/bep-058').execute(),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.signature',
						value: 'ERR_TX_ED25519_SIGNATURE_DOES_NOT_VERIFY',
					},
				],
				type: '@bearmint/bep-058/0.0.0/audit',
			},
		])
	})

	// todo('should fail if resigning this validator results in too few active validators')
})
