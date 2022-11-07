import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { BEP126Collection, BEP126MsgOp, BEP129MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { BEP126UserPermission, makeServiceProvider as BEP126, MintPolicy } from '@bearmint/bep-126'
import { randomUUID } from 'crypto'

import { makeServiceProvider as BEP141 } from '../../../bep-141/distribution/index.js'
import { makeServiceProvider as BEP142 } from '../../../bep-142/distribution/index.js'
import { makeServiceProvider as BEP143 } from '../../../bep-143/distribution/index.js'
import { makeServiceProvider as BEP144 } from '../../../bep-144/distribution/index.js'
import { makeServiceProvider as BEP145 } from '../../../bep-145/distribution/index.js'
import { makeServiceProvider as BEP129 } from '../../source/service-provider.js'

function randomString() {
	return randomUUID().replace('-', '')
}

async function makeCollection(
	ctx: E2E.Context,
	sender: E2E.AssertedAccount,
	recipient?: E2E.AssertedAccount,
) {
	const collection = {
		name: randomString(),
		policies: [
			{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.BURN },
			{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.MINT },
			{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.TRANSFER },
		],
		symbol: randomString(),
		uriPrefix: 'uriPrefix',
		uriSuffix: 'uriSuffix',
	}

	return {
		collection,
		collectionHash: (
			await (
				await ctx.txFactory.asserted(
					sender.keypair,
					(recipient ?? sender).keypair,
					await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
						ops: [new BEP126MsgOp(collection)],
					}),
				)
			).pass()
		).events[1]!.attributes[0]!.value,
	}
}

describe<{
	bep126: E2E.Context
	bep129: E2E.Context
}>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		ctx.bep126 = await E2E.createEnvironment(BEP126, [BEP141, BEP142, BEP143, BEP144, BEP145])
		ctx.bep129 = await E2E.createEnvironment(BEP129)
	})

	it('should pass', async (ctx) => {
		const { collection, collectionHash } = await makeCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		const tx = await ctx.bep129.txFactory.asserted(
			ctx.bep129.accts.get('genesis_1').keypair,
			ctx.bep129.accts.get('genesis_1').keypair,
			await ctx.bep129.client.fakeTxMsg('@bearmint/bep-129').execute({
				ops: [
					new BEP129MsgOp({
						hash: collectionHash,
						permissions: [BEP126UserPermission.BURN, BEP126UserPermission.MINT],
						steward: ctx.bep129.accts.get('genesis_2').address,
					}),
				],
			}),
		)

		await tx.pass()
		await tx.confirmMetaMsg(
			collectionHash,
			{
				accessControlList: {
					[ctx.bep129.accts.get('genesis_1').address]: {
						permissions: [0, 1, 2],
					},
					[ctx.bep129.accts.get('genesis_2').address]: {
						permissions: [0, 1],
						role: 1,
					},
				},
				currentOwner: ctx.bep129.accts.get('genesis_1').address,
				id: collectionHash,
				initialOwner: ctx.bep129.accts.get('genesis_1').address,
				name: collection.name,
				policies: [
					{
						name: MintPolicy.ONLY_TEAM,
					},
					{
						name: MintPolicy.ONLY_TEAM,
						type: 1,
					},
					{
						name: MintPolicy.ONLY_TEAM,
						type: 2,
					},
				],
				symbol: collection.symbol,
				uriPrefix: collection.uriPrefix,
				uriSuffix: collection.uriSuffix,
			},
			new BEP126Collection(),
		)
	})

	E2E.testLoopback('@bearmint/bep-129', it, 'bep129')
	E2E.testMemoLength('@bearmint/bep-129', it, 'bep129')
	E2E.testOpCount('@bearmint/bep-129', it, 'bep129')

	it('should fail if it there are duplicate ops by hash and steward', async (ctx) => {
		const tx = await ctx.bep129.txFactory.asserted(
			ctx.bep129.accts.get('genesis_1').keypair,
			ctx.bep129.accts.get('genesis_1').keypair,
			await ctx.bep129.client.fakeTxMsg('@bearmint/bep-129').execute({
				ops: [
					new BEP129MsgOp({
						hash: 'collectionHash',
						permissions: [BEP126UserPermission.BURN, BEP126UserPermission.MINT],
						steward: ctx.bep129.accts.get('genesis_2').address,
					}),
					new BEP129MsgOp({
						hash: 'collectionHash',
						permissions: [BEP126UserPermission.BURN, BEP126UserPermission.MINT],
						steward: ctx.bep129.accts.get('genesis_2').address,
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-129/0.0.0/audit',
			},
		])
	})

	it('should fail if it the sender does not own the collection', async (ctx) => {
		const { collectionHash } = await makeCollection(ctx.bep126, ctx.bep126.accts.get('genesis_1'))

		const tx = await ctx.bep129.txFactory.asserted(
			ctx.bep129.accts.get('genesis_2').keypair,
			ctx.bep129.accts.get('genesis_2').keypair,
			await ctx.bep129.client.fakeTxMsg('@bearmint/bep-129').execute({
				ops: [
					new BEP129MsgOp({
						hash: collectionHash,
						permissions: [BEP126UserPermission.BURN, BEP126UserPermission.MINT],
						steward: ctx.bep129.accts.get('genesis_2').address,
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
				type: '@bearmint/bep-129/0.0.0/audit',
			},
		])
	})

	it('should fail if it the sender owns the collection', async (ctx) => {
		const { collectionHash } = await makeCollection(ctx.bep126, ctx.bep126.accts.get('genesis_1'))

		const tx = await ctx.bep129.txFactory.asserted(
			ctx.bep129.accts.get('genesis_1').keypair,
			ctx.bep129.accts.get('genesis_1').keypair,
			await ctx.bep129.client.fakeTxMsg('@bearmint/bep-129').execute({
				ops: [
					new BEP129MsgOp({
						hash: collectionHash,
						permissions: [BEP126UserPermission.BURN, BEP126UserPermission.MINT],
						steward: ctx.bep129.accts.get('genesis_1').address,
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
						value: 'ERR_TX_FORBIDDEN_OWNERSHIP_MODIFICATION',
					},
				],
				type: '@bearmint/bep-129/0.0.0/audit',
			},
		])
	})

	it('should fail if it the permission is unknown', async (ctx) => {
		const { collectionHash } = await makeCollection(ctx.bep126, ctx.bep126.accts.get('genesis_1'))

		const tx = await ctx.bep129.txFactory.asserted(
			ctx.bep129.accts.get('genesis_1').keypair,
			ctx.bep129.accts.get('genesis_1').keypair,
			await ctx.bep129.client.fakeTxMsg('@bearmint/bep-129').execute({
				ops: [
					new BEP129MsgOp({
						hash: collectionHash,
						permissions: [5],
						steward: ctx.bep129.accts.get('genesis_2').address,
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.permissions.0',
						value: 'ERR_TX_UNKNOWN_PERMISSION',
					},
				],
				type: '@bearmint/bep-129/0.0.0/audit',
			},
		])
	})

	it('should fail if the steward already has the permission', async (ctx) => {
		const { collectionHash } = await makeCollection(ctx.bep126, ctx.bep126.accts.get('genesis_1'))

		await (
			await ctx.bep129.txFactory.asserted(
				ctx.bep129.accts.get('genesis_1').keypair,
				ctx.bep129.accts.get('genesis_1').keypair,
				await ctx.bep129.client.fakeTxMsg('@bearmint/bep-129').execute({
					ops: [
						new BEP129MsgOp({
							hash: collectionHash,
							permissions: [BEP126UserPermission.BURN, BEP126UserPermission.MINT],
							steward: ctx.bep129.accts.get('genesis_2').address,
						}),
					],
				}),
			)
		).pass()

		await (
			await ctx.bep129.txFactory.asserted(
				ctx.bep129.accts.get('genesis_1').keypair,
				ctx.bep129.accts.get('genesis_1').keypair,
				await ctx.bep129.client.fakeTxMsg('@bearmint/bep-129').execute({
					ops: [
						new BEP129MsgOp({
							hash: collectionHash,
							permissions: [BEP126UserPermission.BURN, BEP126UserPermission.MINT],
							steward: ctx.bep129.accts.get('genesis_2').address,
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.permissions.0',
						value: 'ERR_TX_FORBIDDEN_OWNERSHIP_MODIFICATION',
					},
				],
				type: '@bearmint/bep-129/0.0.0/audit',
			},
		])
	})
})
