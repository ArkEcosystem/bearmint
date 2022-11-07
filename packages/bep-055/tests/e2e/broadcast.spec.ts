import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { BEP55MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'

import { makeServiceProvider } from '../../source/service-provider.js'

describe<E2E.Context>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		Object.assign(ctx, await E2E.createEnvironment(makeServiceProvider))
	})

	it('should pass with a mix of recipients that do and do not exist', async (ctx) => {
		await ctx.accts.fromRandom('random')

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-055').execute({
				memo: 'Hello, World!',
				ops: [
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						memo: 'John',
						recipient: ctx.accts.get('genesis_2').address,
					},
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						memo: 'Deer',
						recipient: ctx.accts.get('random').address,
					},
				],
			}),
		)

		await ctx.accts.get('genesis_1').expectLessTokens(3e8, 'BEAR')
		await ctx.accts.get('genesis_2').expectMoreTokens(1e8, 'BEAR')
		await ctx.accts.get('random').expectMoreTokens(1e8, 'BEAR')

		await tx.pass()

		await ctx.accts.assertExpectations()
	})

	it('should pass when sending 5 separate transactions', async (ctx) => {
		await ctx.accts.get('genesis_1').expectLessTokens(10e8, 'BEAR') // 5 tokens + 5 gas
		await ctx.accts.get('genesis_2').expectMoreTokens(5e8, 'BEAR') // 5 tokens

		for (let index = 0; index < 5; index++) {
			await (
				await ctx.txFactory.asserted(
					ctx.accts.get('genesis_1').keypair,
					ctx.accts.get('genesis_1').keypair,
					await ctx.client.fakeTxMsg('@bearmint/bep-055').execute({
						memo: 'Hello, World!',
						ops: [
							new BEP55MsgOp({
								amount: BigInt(1e8),
								denomination: 'BEAR',
								memo: 'John',
								recipient: ctx.accts.get('genesis_2').address,
							}),
						],
					}),
				)
			).pass()
		}

		await ctx.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-055', it)
	E2E.testMemoLength('@bearmint/bep-055', it)
	E2E.testOpCount('@bearmint/bep-055', it)

	it('should fail if there are duplicated ops by denomination and recipient', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-055').execute({
				ops: [
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						recipient: ctx.accts.get('genesis_2').address,
					},
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						recipient: ctx.accts.get('genesis_2').address,
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-055/0.0.0/audit',
			},
		])
	})

	it('should fail if there are duplicated ops by denomination, recipient and memo', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-055').execute({
				ops: [
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						memo: 'John',
						recipient: ctx.accts.get('genesis_2').address,
					},
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						memo: 'John',
						recipient: ctx.accts.get('genesis_2').address,
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-055/0.0.0/audit',
			},
		])
	})

	it('should fail if the sender does not own the tokens', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-055').execute({
				memo: 'Hello, World!',
				ops: [
					{
						amount: BigInt('100000000000000000'),
						denomination: 'DEER',
						memo: 'John',
						recipient: ctx.accts.get('genesis_2').address,
					},
					{
						amount: BigInt('100000000000000000'),
						denomination: 'DEER',
						memo: 'Deer',
						recipient: ctx.accts.get('genesis_2').address,
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.amount', value: 'ERR_TX_INSUFFICIENT_BALANCE' },
				],
				type: '@bearmint/bep-055/0.0.0/audit',
			},
		])
	})

	it('should fail if the sender does not have enough tokens', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-055').execute({
				memo: 'Hello, World!',
				ops: [
					{
						amount: BigInt('100000000000000000'),
						denomination: 'BEAR',
						memo: 'John',
						recipient: ctx.accts.get('genesis_2').address,
					},
					{
						amount: BigInt('100000000000000000'),
						denomination: 'BEAR',
						memo: 'Deer',
						recipient: ctx.accts.get('genesis_2').address,
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'sender.balances.BEAR', value: 'ERR_TX_INSUFFICIENT_BALANCE' },
				],
				type: '@bearmint/bep-055/0.0.0/audit',
			},
		])
	})

	it('should fail if any recipient address is malformed', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-055').execute({
				memo: 'Hello, World!',
				ops: [
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						memo: 'John',
						recipient: 'junk',
					},
					{
						amount: BigInt(1e8),
						denomination: 'BEAR',
						memo: 'Deer',
						recipient: 'junk',
					},
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.recipient', value: 'ERR_TX_MALFORMED_ADDRESS' },
				],
				type: '@bearmint/bep-055/0.0.0/audit',
			},
		])
	})
})
