import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { E2E } from '@bearmint/bep-053'

import { makeServiceProvider } from '../../source/service-provider.js'

describe<E2E.Context>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		Object.assign(ctx, await E2E.createEnvironment(makeServiceProvider))
	})

	it('should pass', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-056').execute({
				ops: [
					{
						amount: BigInt(2e8),
						denomination: 'BEAR',
					},
				],
			}),
		)

		await ctx.accts.get('genesis_1').expectLessTokens(3e8, 'BEAR')

		await tx.pass()

		await ctx.accts.assertExpectations()
	})

	it('should pass with duplicate ops but different memos', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-056').execute({
				ops: [
					{
						amount: BigInt(2e8),
						denomination: 'BEAR',
						memo: 'OH',
					},
					{
						amount: BigInt(2e8),
						denomination: 'BEAR',
						memo: 'DEER',
					},
				],
			}),
		)

		await ctx.accts.get('genesis_1').expectLessTokens(5e8, 'BEAR')

		await tx.pass()

		await ctx.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-056', it)
	E2E.testMemoLength('@bearmint/bep-056', it)
	E2E.testOpCount('@bearmint/bep-056', it)

	it('should fail if there are duplicated ops by denomination', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-056').execute({
				ops: [
					{
						amount: BigInt('100000000000000000'),
						denomination: 'BEAR',
					},
					{
						amount: BigInt('100000000000000000'),
						denomination: 'BEAR',
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-056/0.0.0/audit',
			},
		])
	})

	it('should fail if there are duplicated ops by denomination and memo', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-056').execute({
				ops: [
					{
						amount: BigInt('100000000000000000'),
						denomination: 'BEAR',
						memo: 'OH',
					},
					{
						amount: BigInt('100000000000000000'),
						denomination: 'BEAR',
						memo: 'OH',
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-056/0.0.0/audit',
			},
		])
	})

	it('should fail if the sender does not own the tokens', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-056').execute({
				ops: [
					{
						amount: BigInt('100000000000000000'),
						denomination: 'DEER',
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.amount', value: 'ERR_TX_FORBIDDEN_VALUE' },
				],
				type: '@bearmint/bep-056/0.0.0/audit',
			},
		])
	})

	it('should fail if the sender does not have enough tokens', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-056').execute({
				ops: [
					{
						amount: BigInt('100000000000000000'),
						denomination: 'BEAR',
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.amount', value: 'ERR_TX_INSUFFICIENT_BALANCE' },
				],
				type: '@bearmint/bep-056/0.0.0/audit',
			},
		])
	})
})
