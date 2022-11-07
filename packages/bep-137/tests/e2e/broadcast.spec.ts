import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { BEP134MsgOp, BEP137MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { BEP134UserPermission, makeServiceProvider as BEP134, MintPolicy } from '@bearmint/bep-134'
import { randomUUID } from 'crypto'

import { makeServiceProvider as BEP138 } from '../../../bep-138/distribution/index.js'
import { makeServiceProvider as BEP139 } from '../../../bep-139/distribution/index.js'
import { makeServiceProvider as BEP140 } from '../../../bep-140/distribution/index.js'
import { makeServiceProvider as BEP137 } from '../../source/service-provider.js'

function randomString() {
	return randomUUID().replace('-', '').toLowerCase().slice(0, 32)
}

async function makeCollection(
	ctx: E2E.Context,
	sender: E2E.AssertedAccount,
	recipient?: E2E.AssertedAccount,
) {
	const collection = {
		decimals: 32,
		denomination: randomString(),
		initialSupply: BigInt(5e8),
		name: randomString(),
		policies: [
			{
				name: MintPolicy.ONLY_OWNER,
				type: BEP134UserPermission.MINT,
			},
			// {
			// 	type: BEP134UserPermission.MINT,
			// 	name: MintPolicy.IMMUTABLE,
			// },
		],
	}

	return {
		collection,
		collectionHash: (
			await (
				await ctx.txFactory.asserted(
					sender.keypair,
					(recipient ?? sender).keypair,
					await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
						ops: [new BEP134MsgOp(collection)],
					}),
				)
			).pass()
		).events[1]!.attributes[0]!.value,
	}
}

describe<{
	bep134: E2E.Context
	bep137: E2E.Context
}>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		ctx.bep134 = await E2E.createEnvironment(BEP134, [BEP138, BEP139, BEP140])
		ctx.bep137 = await E2E.createEnvironment(BEP137)
	})

	it('should pass whem minting to the sender', async (ctx) => {
		const { collection, collectionHash } = await makeCollection(
			ctx.bep134,
			ctx.bep134.accts.get('genesis_1'),
		)

		const tx = await ctx.bep137.txFactory.asserted(
			ctx.bep137.accts.get('genesis_1').keypair,
			ctx.bep137.accts.get('genesis_1').keypair,
			await ctx.bep137.client.fakeTxMsg('@bearmint/bep-137').execute({
				ops: [
					new BEP137MsgOp({
						amount: BigInt(5e8),
						hash: collectionHash,
					}),
				],
			}),
		)

		await ctx.bep137.accts.get('genesis_1').expectMoreTokens(5e8, collection.denomination)

		await tx.pass()

		ctx.bep137.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-137', it, 'bep137')
	E2E.testMemoLength('@bearmint/bep-137', it, 'bep137')
	E2E.testOpCount('@bearmint/bep-137', it, 'bep137')

	it('should fail if it the sender is not authorised', async (ctx) => {
		const { collectionHash } = await makeCollection(ctx.bep134, ctx.bep134.accts.get('genesis_1'))

		const tx = await ctx.bep137.txFactory.asserted(
			ctx.bep137.accts.get('genesis_2').keypair,
			ctx.bep137.accts.get('genesis_2').keypair,
			await ctx.bep137.client.fakeTxMsg('@bearmint/bep-137').execute({
				ops: [
					new BEP137MsgOp({
						amount: BigInt(5e8),
						hash: collectionHash,
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
				type: '@bearmint/bep-137/0.0.0/audit',
			},
		])
	})
})
