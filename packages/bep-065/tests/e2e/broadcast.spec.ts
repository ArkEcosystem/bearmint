import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { blake3, stringToBytes } from '@bearmint/bep-009'
import { BEP64MsgOp, BEP65MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { makeServiceProvider as BEP64 } from '@bearmint/bep-064'

import { makeServiceProvider as BEP65 } from '../../source/service-provider.js'

async function makeLock(
	ctx: E2E.Context,
	sender: E2E.AssertedAccount,
	recipient: E2E.AssertedAccount,
	opts?: object,
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
							expiration: opts === undefined ? 100 : opts['expiration'],
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
	bep65: E2E.Context
}>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		ctx.bep64 = await E2E.createEnvironment(BEP64)
		ctx.bep65 = await E2E.createEnvironment(BEP65)
	})

	it('should pass', async (ctx) => {
		await ctx.bep65.accts.get('genesis_1').expectLessTokens(3e8, 'BEAR') // 2 tokens, 1 gas
		await ctx.bep65.accts.get('genesis_1').expectMoreLockedTokens(2e8, 'BEAR') // 2 tokens

		const htlcLockHash = await makeLock(
			ctx.bep64,
			ctx.bep64.accts.get('genesis_1'),
			ctx.bep64.accts.get('genesis_2'),
		)

		ctx.bep65.accts.assertExpectations()

		// Claim HTLC Lock
		const tx = await ctx.bep65.txFactory.asserted(
			ctx.bep65.accts.get('genesis_2').keypair,
			ctx.bep65.accts.get('genesis_2').keypair,
			await ctx.bep65.client.fakeTxMsg('@bearmint/bep-065').execute({
				ops: [
					new BEP65MsgOp({
						hash: htlcLockHash,
						secret: stringToBytes('secret'),
					}),
				],
			}),
		)

		await ctx.bep65.accts.get('genesis_1').expectLessLockedTokens(2e8, 'BEAR') // 2 tokens
		await ctx.bep65.accts.get('genesis_2').expectMoreTokens(1e8, 'BEAR') // 1 token because we also spent 1 gas

		await tx.pass()

		ctx.bep65.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-065', it, 'bep65')
	E2E.testMemoLength('@bearmint/bep-065', it, 'bep65')
	E2E.testOpCount('@bearmint/bep-065', it, 'bep65')

	it('should fail if the lock does not exist', async (ctx) => {
		const tx = await ctx.bep65.txFactory.asserted(
			ctx.bep65.accts.get('genesis_1').keypair,
			ctx.bep65.accts.get('genesis_1').keypair,
			await ctx.bep65.client.fakeTxMsg('@bearmint/bep-065').execute({
				ops: [
					new BEP65MsgOp({
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
				type: '@bearmint/bep-065/0.0.0/audit',
			},
		])
	})

	it('should fail if the beneficiary and claimant are not the same', async (ctx) => {
		const tx = await ctx.bep65.txFactory.asserted(
			ctx.bep65.accts.get('genesis_3').keypair,
			ctx.bep65.accts.get('genesis_3').keypair,
			await ctx.bep65.client.fakeTxMsg('@bearmint/bep-065').execute({
				ops: [
					new BEP65MsgOp({
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
						key: 'message.ops.0.recipient',
						value: 'ERR_TX_CLAIMANT_DOES_NOT_MATCH_BENEFICIARY',
					},
				],
				type: '@bearmint/bep-065/0.0.0/audit',
			},
		])
	})

	it('should fail if the claimant provided the wrong secret', async (ctx) => {
		const tx = await ctx.bep65.txFactory.asserted(
			ctx.bep65.accts.get('genesis_2').keypair,
			ctx.bep65.accts.get('genesis_2').keypair,
			await ctx.bep65.client.fakeTxMsg('@bearmint/bep-065').execute({
				ops: [
					new BEP65MsgOp({
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
				type: '@bearmint/bep-065/0.0.0/audit',
			},
		])
	})

	it('should fail if the lock has expired', async (ctx) => {
		const expiration = (await E2E.getCurrentBlockNumber()) + 3

		const tx = await ctx.bep65.txFactory.asserted(
			ctx.bep65.accts.get('genesis_2').keypair,
			ctx.bep65.accts.get('genesis_2').keypair,
			await ctx.bep65.client.fakeTxMsg('@bearmint/bep-065').execute({
				ops: [
					new BEP65MsgOp({
						hash: await makeLock(
							ctx.bep64,
							ctx.bep64.accts.get('genesis_1'),
							ctx.bep64.accts.get('genesis_2'),
							{ expiration },
						),
						secret: stringToBytes('secret'),
					}),
				],
			}),
		)

		while ((await E2E.getCurrentBlockNumber()) < expiration) {
			await new Promise((r) => setTimeout(r, 500))
		}

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.expiration',
						value: 'ERR_TX_EXPIRED',
					},
				],
				type: '@bearmint/bep-065/0.0.0/audit',
			},
		])
	})
})
