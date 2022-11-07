import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { stringToHex } from '@bearmint/bep-009'
import {
	BEP126Collection,
	BEP126MsgOp,
	BEP131Token,
	BEP129MsgOp,
	BEP131MsgOp,
} from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { BEP126UserPermission, makeServiceProvider as BEP126, MintPolicy } from '@bearmint/bep-126'
import { makeServiceProvider as BEP129 } from '@bearmint/bep-129'
import { randomUUID } from 'crypto'

import { makeServiceProvider as BEP141 } from '../../../bep-141/distribution/index.js'
import { makeServiceProvider as BEP142 } from '../../../bep-142/distribution/index.js'
import { makeServiceProvider as BEP143 } from '../../../bep-143/distribution/index.js'
import { makeServiceProvider as BEP144 } from '../../../bep-144/distribution/index.js'
import { makeServiceProvider as BEP145 } from '../../../bep-145/distribution/index.js'
import { makeServiceProvider as BEP131 } from '../../source/service-provider.js'

function randomString() {
	return randomUUID().replace('-', '')
}

async function makeCollection(
	ctx: E2E.Context,
	sender: E2E.AssertedAccount,
	recipient?: E2E.AssertedAccount,
	policies?: object[],
) {
	const collection = {
		name: randomString(),
		policies: policies ?? [
			{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.BURN },
			{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.MINT },
			{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.TRANSFER },
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

async function makeImmutableCollection(ctx: E2E.Context, sender: E2E.AssertedAccount) {
	return makeCollection(ctx, sender, undefined, [
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.BURN },
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.MINT },
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.TRANSFER },
		{ name: MintPolicy.IMMUTABLE, type: BEP126UserPermission.BURN },
		{ name: MintPolicy.IMMUTABLE, type: BEP126UserPermission.MINT },
		{ name: MintPolicy.IMMUTABLE, type: BEP126UserPermission.TRANSFER },
	])
}

async function makeLockedByBlockNumberCollection(ctx: E2E.Context, sender: E2E.AssertedAccount) {
	const args = stringToHex('1')

	return makeCollection(ctx, sender, undefined, [
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.BURN },
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.MINT },
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.TRANSFER },
		{ args, name: MintPolicy.LOCKED_BY_BLOCK_NUMBER, type: BEP126UserPermission.BURN },
		{ args, name: MintPolicy.LOCKED_BY_BLOCK_NUMBER, type: BEP126UserPermission.MINT },
		{ args, name: MintPolicy.LOCKED_BY_BLOCK_NUMBER, type: BEP126UserPermission.TRANSFER },
	])
}

async function makeLockedByMaxSupplyCollection(ctx: E2E.Context, sender: E2E.AssertedAccount) {
	const args = stringToHex('1')

	return makeCollection(ctx, sender, undefined, [
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.BURN },
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.MINT },
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.TRANSFER },
		{ args, name: MintPolicy.LOCKED_BY_MAX_SUPPLY, type: BEP126UserPermission.BURN },
		{ args, name: MintPolicy.LOCKED_BY_MAX_SUPPLY, type: BEP126UserPermission.MINT },
		{ args, name: MintPolicy.LOCKED_BY_MAX_SUPPLY, type: BEP126UserPermission.TRANSFER },
	])
}

async function makeOnlyOwnerCollection(ctx: E2E.Context, sender: E2E.AssertedAccount) {
	return makeCollection(ctx, sender, undefined, [
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.BURN },
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.MINT },
		{ name: MintPolicy.ONLY_OWNER, type: BEP126UserPermission.TRANSFER },
	])
}

async function makeOnlyTeamCollection(ctx: E2E.Context, sender: E2E.AssertedAccount) {
	return makeCollection(ctx, sender, undefined, [
		{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.BURN },
		{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.MINT },
		{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.TRANSFER },
	])
}

describe<{
	bep126: E2E.Context
	bep129: E2E.Context
	bep131: E2E.Context
}>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		ctx.bep126 = await E2E.createEnvironment(BEP126, [BEP141, BEP142, BEP143, BEP144, BEP145])
		ctx.bep129 = await E2E.createEnvironment(BEP129)
		ctx.bep131 = await E2E.createEnvironment(BEP131)
	})

	it('should pass when minting to the sender', async (ctx) => {
		// 1. Register the collection
		const { collection, collectionHash } = await makeOnlyOwnerCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		// 2. Mint the NFT
		const tx = await ctx.bep131.txFactory.asserted(
			ctx.bep131.accts.get('genesis_1').keypair,
			ctx.bep131.accts.get('genesis_1').keypair,
			await ctx.bep131.client.fakeTxMsg('@bearmint/bep-131').execute({
				ops: [
					new BEP131MsgOp({
						hash: collectionHash,
						recipient: ctx.bep131.accts.get('genesis_1').address,
					}),
				],
			}),
		)

		// 3. Grab the NFT hash
		const tokenHash = (await tx.pass()).events[1]!.attributes[1]!.value

		// 4. Make sure the desired owner got the NFT
		await ctx.bep131.accts
			.get('genesis_1')
			.expectModuleMetadataContains('@bearmint/bep-131', tokenHash)

		// 5. Make sure the NFT looks as it should
		await tx.confirmMetaMsg(
			tokenHash,
			{
				collection: collectionHash,
				id: 1,
				hash: tokenHash,
				owner: ctx.bep131.accts.get('genesis_1').address,
			},
			new BEP131Token(),
		)

		// 5. Make sure the collection looks as it should
		await tx.confirmMetaMsg(
			collectionHash,
			{
				accessControlList: {
					[ctx.bep131.accts.get('genesis_1').address]: {
						permissions: [0, 1, 2],
					},
				},
				currentOwner: ctx.bep131.accts.get('genesis_1').address,
				id: collectionHash,
				initialOwner: ctx.bep131.accts.get('genesis_1').address,
				name: collection.name,
				policies: [
					{
						name: MintPolicy.ONLY_OWNER,
					},
					{
						name: MintPolicy.ONLY_OWNER,
						type: 1,
					},
					{
						name: MintPolicy.ONLY_OWNER,
						type: 2,
					},
				],
				symbol: collection.symbol,
				tokens: [tokenHash],
				uriPrefix: collection.uriPrefix,
				uriSuffix: collection.uriSuffix,
			},
			new BEP126Collection(),
		)

		ctx.bep131.accts.assertExpectations()
	})

	it('should pass when minting to a third-party', async (ctx) => {
		// 1. Register the collection
		const { collection, collectionHash } = await makeOnlyOwnerCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		// 2. Make a random recipient that does not yet exist on-chain
		await ctx.bep131.accts.fromRandom('random')

		// 3. Mint the NFT
		const tx = await ctx.bep131.txFactory.asserted(
			ctx.bep131.accts.get('genesis_1').keypair,
			ctx.bep131.accts.get('genesis_1').keypair,
			await ctx.bep131.client.fakeTxMsg('@bearmint/bep-131').execute({
				ops: [
					new BEP131MsgOp({
						hash: collectionHash,
						recipient: ctx.bep131.accts.get('random').address,
					}),
				],
			}),
		)

		// 4. Grab the NFT hash
		const tokenHash = (await tx.pass()).events[1]!.attributes[1]!.value

		// 5. Make sure the desired owner got the NFT
		await ctx.bep131.accts
			.get('random')
			.expectModuleMetadataContains('@bearmint/bep-131', tokenHash)

		// 6. Make sure the NFT looks as it should
		await tx.confirmMetaMsg(
			tokenHash,
			{
				collection: collectionHash,
				id: 1,
				hash: tokenHash,
				owner: ctx.bep131.accts.get('random').address,
			},
			new BEP131Token(),
		)

		// 7. Make sure the collection looks as it should
		await tx.confirmMetaMsg(
			collectionHash,
			{
				accessControlList: {
					[ctx.bep131.accts.get('genesis_1').address]: {
						permissions: [0, 1, 2],
					},
				},
				currentOwner: ctx.bep131.accts.get('genesis_1').address,
				id: collectionHash,
				initialOwner: ctx.bep131.accts.get('genesis_1').address,
				name: collection.name,
				policies: [
					{
						name: MintPolicy.ONLY_OWNER,
					},
					{
						name: MintPolicy.ONLY_OWNER,
						type: 1,
					},
					{
						name: MintPolicy.ONLY_OWNER,
						type: 2,
					},
				],
				symbol: collection.symbol,
				tokens: [tokenHash],
				uriPrefix: collection.uriPrefix,
				uriSuffix: collection.uriSuffix,
			},
			new BEP126Collection(),
		)

		ctx.bep131.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-131', it, 'bep131')
	E2E.testMemoLength('@bearmint/bep-131', it, 'bep131')
	E2E.testOpCount('@bearmint/bep-131', it, 'bep131')

	it('should fail if it the sender is not authorised', async (ctx) => {
		const { collectionHash } = await makeOnlyOwnerCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		const tx = await ctx.bep131.txFactory.asserted(
			ctx.bep131.accts.get('genesis_2').keypair,
			ctx.bep131.accts.get('genesis_2').keypair,
			await ctx.bep131.client.fakeTxMsg('@bearmint/bep-131').execute({
				ops: [
					new BEP131MsgOp({
						hash: collectionHash,
						recipient: ctx.bep131.accts.get('genesis_2').address,
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: `message.ops.0.policies.${MintPolicy.ONLY_OWNER}`,
						value: 'ERR_TX_UNAUTHORIZED_ACCESS',
					},
				],
				type: '@bearmint/bep-131/0.0.0/audit',
			},
		])
	})

	it('should fail to mint more than once into an immutable collection', async (ctx) => {
		const { collectionHash } = await makeImmutableCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		await (
			await ctx.bep131.txFactory.asserted(
				ctx.bep131.accts.get('genesis_1').keypair,
				ctx.bep131.accts.get('genesis_1').keypair,
				await ctx.bep131.client.fakeTxMsg('@bearmint/bep-131').execute({
					ops: [
						new BEP131MsgOp({
							hash: collectionHash,
							recipient: ctx.bep131.accts.get('genesis_1').address,
						}),
					],
				}),
			)
		).pass()

		await (
			await ctx.bep131.txFactory.asserted(
				ctx.bep131.accts.get('genesis_1').keypair,
				ctx.bep131.accts.get('genesis_1').keypair,
				await ctx.bep131.client.fakeTxMsg('@bearmint/bep-131').execute({
					ops: [
						new BEP131MsgOp({
							hash: collectionHash,
							recipient: ctx.bep131.accts.get('random').address,
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{
						index: false,
						key: `message.ops.0.policies.${MintPolicy.IMMUTABLE}`,
						value: 'ERR_TX_UNAUTHORIZED_ACCESS',
					},
				],
				type: '@bearmint/bep-131/0.0.0/audit',
			},
		])
	})

	it('should fail to mint into a height-locked collection if the final height has been passed', async (ctx) => {
		const { collectionHash } = await makeLockedByBlockNumberCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		await (
			await ctx.bep131.txFactory.asserted(
				ctx.bep131.accts.get('genesis_1').keypair,
				ctx.bep131.accts.get('genesis_1').keypair,
				await ctx.bep131.client.fakeTxMsg('@bearmint/bep-131').execute({
					ops: [
						new BEP131MsgOp({
							hash: collectionHash,
							recipient: ctx.bep131.accts.get('genesis_1').address,
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{
						index: false,
						key: `message.ops.0.policies.${MintPolicy.LOCKED_BY_BLOCK_NUMBER}`,
						value: 'ERR_TX_UNAUTHORIZED_ACCESS',
					},
				],
				type: '@bearmint/bep-131/0.0.0/audit',
			},
		])
	})

	it('should fail to mint into a max-supply-locked collection if the max supply has been reached', async (ctx) => {
		const { collectionHash } = await makeLockedByMaxSupplyCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		await (
			await ctx.bep131.txFactory.asserted(
				ctx.bep131.accts.get('genesis_1').keypair,
				ctx.bep131.accts.get('genesis_1').keypair,
				await ctx.bep131.client.fakeTxMsg('@bearmint/bep-131').execute({
					ops: [
						new BEP131MsgOp({
							hash: collectionHash,
							recipient: ctx.bep131.accts.get('genesis_1').address,
						}),
					],
				}),
			)
		).pass()

		await (
			await ctx.bep131.txFactory.asserted(
				ctx.bep131.accts.get('genesis_1').keypair,
				ctx.bep131.accts.get('genesis_1').keypair,
				await ctx.bep131.client.fakeTxMsg('@bearmint/bep-131').execute({
					ops: [
						new BEP131MsgOp({
							hash: collectionHash,
							recipient: ctx.bep131.accts.get('random').address,
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{
						index: false,
						key: `message.ops.0.policies.${MintPolicy.LOCKED_BY_MAX_SUPPLY}`,
						value: 'ERR_TX_UNAUTHORIZED_ACCESS',
					},
				],
				type: '@bearmint/bep-131/0.0.0/audit',
			},
		])
	})

	it('should fail to mint into a collection as a steward while only the owner is allowed to mint (overrules ACL)', async (ctx) => {
		const { collectionHash } = await makeOnlyOwnerCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		await (
			await ctx.bep129.txFactory.asserted(
				ctx.bep129.accts.get('genesis_1').keypair,
				ctx.bep129.accts.get('genesis_1').keypair,
				await ctx.bep129.client.fakeTxMsg('@bearmint/bep-129').execute({
					ops: [
						new BEP129MsgOp({
							hash: collectionHash,
							permissions: [BEP126UserPermission.MINT],
							steward: ctx.bep129.accts.get('genesis_2').address,
						}),
					],
				}),
			)
		).pass()

		await (
			await ctx.bep131.txFactory.asserted(
				ctx.bep131.accts.get('genesis_2').keypair,
				ctx.bep131.accts.get('genesis_2').keypair,
				await ctx.bep131.client.fakeTxMsg('@bearmint/bep-131').execute({
					ops: [
						new BEP131MsgOp({
							hash: collectionHash,
							recipient: ctx.bep131.accts.get('genesis_2').address,
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{
						index: false,
						key: `message.ops.0.policies.${MintPolicy.ONLY_OWNER}`,
						value: 'ERR_TX_UNAUTHORIZED_ACCESS',
					},
				],
				type: '@bearmint/bep-131/0.0.0/audit',
			},
		])
	})

	it('should fail to mint into a collection where only the team can mint but the sender is not part of the team', async (ctx) => {
		const { collectionHash } = await makeOnlyTeamCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		await (
			await ctx.bep131.txFactory.asserted(
				ctx.bep131.accts.get('genesis_2').keypair,
				ctx.bep131.accts.get('genesis_2').keypair,
				await ctx.bep131.client.fakeTxMsg('@bearmint/bep-131').execute({
					ops: [
						new BEP131MsgOp({
							hash: collectionHash,
							recipient: ctx.bep131.accts.get('genesis_2').address,
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{
						index: false,
						key: `message.ops.0.policies.${MintPolicy.ONLY_TEAM}`,
						value: 'ERR_TX_UNAUTHORIZED_ACCESS',
					},
				],
				type: '@bearmint/bep-131/0.0.0/audit',
			},
		])
	})
})
