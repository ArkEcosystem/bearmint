import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { stringToHex } from '@bearmint/bep-009'
import { E2E } from '@bearmint/bep-053'

import { makeServiceProvider } from '../../source/service-provider.js'

function randomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

describe<E2E.Context>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		Object.assign(ctx, await E2E.createEnvironment(makeServiceProvider))
	})

	it('should pass', async (ctx) => {
		const percentage = randomNumber(1, 100)

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('validator').keypair,
			ctx.accts.get('validator').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-059').execute(
				{
					//
				},
				{ mnemonic: ctx.accts.get('validator').mnemonic, percentage },
			),
		)

		await ctx.accts.get('validator').expectModuleMetadataEquals('@bearmint/bep-059', {
			strategy: '@bearmint/bep-086',
			strategyArgs: String(percentage),
		})

		await tx.pass()

		await ctx.accts.assertExpectations()
	})

	// todo('should fail if the validator has resigned')

	E2E.testLoopback('@bearmint/bep-059', it)
	E2E.testTopMemoLength('@bearmint/bep-059', it)

	it('should fail if the sender is not a validator', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-059').execute(),
		)

		await tx.fail([
			{
				attributes: [{ index: false, key: 'sender', value: 'ERR_TX_NOT_FOUND' }],
				type: '@bearmint/bep-059/0.0.0/audit',
			},
		])
	})

	// it('should fail if the percentage is too low', async (ctx) => {
	// 	const tx = await ctx.txFactory.asserted(
	// 		ctx.accts.get('validator').keypair,
	// 		ctx.accts.get('validator').keypair,
	// 		await ctx.client.fakeTxMsg('@bearmint/bep-059').execute(
	// 			{
	// 				height: Number((await E2E.getCurrentBlockNumber()).toString()),
	// 				percentage: 0,
	// 			},
	// 			{ mnemonic: ctx.accts.get('validator').mnemonic },
	// 		),
	// 	)

	// 	await tx.fail([
	// 		{
	// 			attributes: [
	// 				{ index: false, key: 'message.percentage', value: 'ERR_TX_RANGE_PERCENTAGE_TOO_LOW' },
	// 			],
	// 			type: '@bearmint/bep-059/0.0.0/audit',
	// 		},
	// 	])
	// })

	// it('should fail if the percentage is too high', async (ctx) => {
	// 	const tx = await ctx.txFactory.asserted(
	// 		ctx.accts.get('validator').keypair,
	// 		ctx.accts.get('validator').keypair,
	// 		await ctx.client.fakeTxMsg('@bearmint/bep-059').execute(
	// 			{
	// 				height: Number((await E2E.getCurrentBlockNumber()).toString()),
	// 				percentage: 101,
	// 			},
	// 			{ mnemonic: ctx.accts.get('validator').mnemonic },
	// 		),
	// 	)

	// 	await tx.fail([
	// 		{
	// 			attributes: [
	// 				{ index: false, key: 'message.percentage', value: 'ERR_TX_RANGE_PERCENTAGE_TOO_HIGH' },
	// 			],
	// 			type: '@bearmint/bep-059/0.0.0/audit',
	// 		},
	// 	])
	// })

	it('should fail if the strategy is unknown', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('validator').keypair,
			ctx.accts.get('validator').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-059').execute(
				{
					strategy: 'unknown',
				},
				{ mnemonic: ctx.accts.get('genesis_1').mnemonic },
			),
		)

		await tx.fail([
			{
				attributes: [{ index: false, key: 'message.strategy', value: 'ERR_TX_UNKNOWN_STRATEGY' }],
				type: '@bearmint/bep-059/0.0.0/audit',
			},
		])
	})

	it('should fail if the signature cannot be verified', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('validator').keypair,
			ctx.accts.get('validator').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-059').execute(
				{
					//
				},
				{ mnemonic: ctx.accts.get('genesis_1').mnemonic },
			),
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
				type: '@bearmint/bep-059/0.0.0/audit',
			},
		])
	})
})
