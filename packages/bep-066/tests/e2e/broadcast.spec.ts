import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { blake3, stringToBytes } from '@bearmint/bep-009'
import { BEP64MsgOp, BEP66MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { makeServiceProvider as BEP64 } from '@bearmint/bep-064'

import { makeServiceProvider as BEP66 } from '../../source/service-provider.js'

async function makeLock(
	ctx: E2E.Context,
	sender: E2E.AssertedAccount,
	recipient: E2E.AssertedAccount,
) {
	return (
		await (
			await ctx.txFactory.asserted(
				sender.keypair,
				sender.keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
					ops: [
						new BEP64MsgOp({
							amount: BigInt(2e8),
							denomination: 'BEAR',
							expiration: BigInt(100),
							memo: 'Hello, World!',
							recipient: recipient.address,
							secret: blake3('secret'),
							secretAlgorithm: 'blake3',
						}),
					],
				}),
			)
		).pass()
	).events[1]!.attributes[0]!.value
}

describe<{
	bep64: E2E.Context
	bep66: E2E.Context
}>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		ctx.bep64 = await E2E.createEnvironment(BEP64)
		ctx.bep66 = await E2E.createEnvironment(BEP66)
	})

	it('should pass', async (ctx) => {
		await ctx.bep66.accts.get('genesis_1').expectLessTokens(3e8, 'BEAR') // 2 tokens, 1 gas
		await ctx.bep66.accts.get('genesis_1').expectMoreLockedTokens(2e8, 'BEAR') // 2 tokens

		const htlcLockHash = await makeLock(
			ctx.bep64,
			ctx.bep64.accts.get('genesis_1'),
			ctx.bep64.accts.get('genesis_2'),
		)

		ctx.bep66.accts.assertExpectations()

		// Claim HTLC Lock
		const tx = await ctx.bep66.txFactory.asserted(
			ctx.bep66.accts.get('genesis_1').keypair,
			ctx.bep66.accts.get('genesis_1').keypair,
			await ctx.bep66.client.fakeTxMsg('@bearmint/bep-066').execute({
				ops: [
					new BEP66MsgOp({
						hash: htlcLockHash,
						secret: stringToBytes('secret'),
					}),
				],
			}),
		)

		await ctx.bep66.accts.get('genesis_1').expectLessLockedTokens(2e8, 'BEAR') // 2 tokens
		await ctx.bep66.accts.get('genesis_1').expectMoreTokens(1e8, 'BEAR') // 1 token because we also spent 1 gas
		await ctx.bep66.accts.get('genesis_2').expectSameTokens('BEAR')

		await tx.pass()

		ctx.bep66.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-066', it, 'bep66')
	E2E.testMemoLength('@bearmint/bep-066', it, 'bep66')
	E2E.testOpCount('@bearmint/bep-066', it, 'bep66')

	it('should fail if the lock does not exist', async (ctx) => {
		const tx = await ctx.bep66.txFactory.asserted(
			ctx.bep66.accts.get('genesis_1').keypair,
			ctx.bep66.accts.get('genesis_1').keypair,
			await ctx.bep66.client.fakeTxMsg('@bearmint/bep-066').execute({
				ops: [
					new BEP66MsgOp({
						hash: '404',
						secret: stringToBytes('secret'),
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.hash',
						value: 'ERR_TX_NOT_FOUND',
					},
				],
				type: '@bearmint/bep-066/0.0.0/audit',
			},
		])
	})

	it('should fail if the sender provided the wrong secret', async (ctx) => {
		const tx = await ctx.bep66.txFactory.asserted(
			ctx.bep66.accts.get('genesis_1').keypair,
			ctx.bep66.accts.get('genesis_1').keypair,
			await ctx.bep66.client.fakeTxMsg('@bearmint/bep-066').execute({
				ops: [
					new BEP66MsgOp({
						hash: await makeLock(
							ctx.bep64,
							ctx.bep64.accts.get('genesis_1'),
							ctx.bep64.accts.get('genesis_2'),
						),
						secret: stringToBytes('wrong'),
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.secret',
						value: 'ERR_TX_HASH_DOES_NOT_VERIFY',
					},
				],
				type: '@bearmint/bep-066/0.0.0/audit',
			},
		])
	})

	it('should fail if the sender does not own the lock', async (ctx) => {
		const tx = await ctx.bep66.txFactory.asserted(
			ctx.bep66.accts.get('genesis_2').keypair,
			ctx.bep66.accts.get('genesis_2').keypair,
			await ctx.bep66.client.fakeTxMsg('@bearmint/bep-066').execute({
				ops: [
					new BEP66MsgOp({
						hash: await makeLock(
							ctx.bep64,
							ctx.bep64.accts.get('genesis_1'),
							ctx.bep64.accts.get('genesis_2'),
						),
						secret: stringToBytes('secret'),
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.hash',
						value: 'ERR_TX_UNAUTHORIZED_ACCESS',
					},
				],
				type: '@bearmint/bep-066/0.0.0/audit',
			},
		])
	})
})
