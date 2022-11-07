import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { stringToHex } from '@bearmint/bep-009'
import { BEP126MsgOp, BEP129MsgOp, BEP131MsgOp, BEP132MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { BEP126UserPermission, makeServiceProvider as BEP126, MintPolicy } from '@bearmint/bep-126'
import { makeServiceProvider as BEP129 } from '@bearmint/bep-129'
import { makeServiceProvider as BEP131 } from '@bearmint/bep-131'
import { randomUUID } from 'crypto'

import { makeServiceProvider as BEP141 } from '../../../bep-141/distribution/index.js'
import { makeServiceProvider as BEP142 } from '../../../bep-142/distribution/index.js'
import { makeServiceProvider as BEP143 } from '../../../bep-143/distribution/index.js'
import { makeServiceProvider as BEP144 } from '../../../bep-144/distribution/index.js'
import { makeServiceProvider as BEP145 } from '../../../bep-145/distribution/index.js'
import { makeServiceProvider as BEP132 } from '../../source/service-provider.js'

function randomString() {
	return randomUUID().replace('-', '').toLowerCase().slice(0, 32)
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
	const args = stringToHex((await E2E.getCurrentBlockNumber()) + 3)

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

async function makeNFT(
	ctx: E2E.Context,
	collection: string,
	sender: E2E.AssertedAccount,
	recipient?: E2E.AssertedAccount,
) {
	const tx = await ctx.txFactory.asserted(
		sender.keypair,
		(recipient ?? sender).keypair,
		await ctx.client.fakeTxMsg('@bearmint/bep-131').execute({
			ops: [
				new BEP131MsgOp({
					hash: collection,
					recipient: (recipient ?? sender).address,
				}),
			],
		}),
	)

	return {
		token: tx,
		tokenHash: (await tx.pass()).events[1]!.attributes[1]!.value,
	}
}

describe<{
	bep126: E2E.Context
	bep129: E2E.Context
	bep131: E2E.Context
	bep132: E2E.Context
}>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		ctx.bep126 = await E2E.createEnvironment(BEP126, [BEP141, BEP142, BEP143, BEP144, BEP145])
		ctx.bep129 = await E2E.createEnvironment(BEP129)
		ctx.bep131 = await E2E.createEnvironment(BEP131)
		ctx.bep132 = await E2E.createEnvironment(BEP132)
	})

	it('should transfer the NFT from `genesis_1` to `genesis_2`', async (ctx) => {
		const { collectionHash } = await makeOnlyOwnerCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)
		const { tokenHash } = await makeNFT(
			ctx.bep131,
			collectionHash,
			ctx.bep131.accts.get('genesis_1'),
		)

		const tx = await ctx.bep132.txFactory.asserted(
			ctx.bep132.accts.get('genesis_1').keypair,
			ctx.bep132.accts.get('genesis_1').keypair,
			await ctx.bep132.client.fakeTxMsg('@bearmint/bep-132').execute({
				ops: [
					new BEP132MsgOp({
						hash: tokenHash,
						recipient: ctx.bep132.accts.get('genesis_2').address,
					}),
				],
			}),
		)

		await ctx.bep132.accts
			.get('genesis_1')
			.expectModuleMetadataNotContains('@bearmint/bep-131', tokenHash)

		await ctx.bep132.accts
			.get('genesis_2')
			.expectModuleMetadataContains('@bearmint/bep-131', tokenHash)

		await tx.pass()

		ctx.bep132.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-132', it, 'bep132')
	E2E.testMemoLength('@bearmint/bep-132', it, 'bep132')
	E2E.testOpCount('@bearmint/bep-132', it, 'bep132')

	it('should fail if it there are duplicate ops by hash name', async (ctx) => {
		const tx = await ctx.bep132.txFactory.asserted(
			ctx.bep132.accts.get('genesis_1').keypair,
			ctx.bep132.accts.get('genesis_1').keypair,
			await ctx.bep132.client.fakeTxMsg('@bearmint/bep-132').execute({
				ops: [
					new BEP132MsgOp({
						hash: 'hash',
						recipient: 'recipient',
					}),
					new BEP132MsgOp({
						hash: 'hash',
						recipient: 'recipient',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-132/0.0.0/audit',
			},
		])
	})

	it('should fail if it the sender is not authorised', async (ctx) => {
		const { collectionHash } = await makeOnlyOwnerCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)
		const { tokenHash } = await makeNFT(
			ctx.bep131,
			collectionHash,
			ctx.bep131.accts.get('genesis_1'),
		)

		const tx = await ctx.bep132.txFactory.asserted(
			ctx.bep132.accts.get('genesis_2').keypair,
			ctx.bep132.accts.get('genesis_2').keypair,
			await ctx.bep132.client.fakeTxMsg('@bearmint/bep-132').execute({
				ops: [
					new BEP132MsgOp({
						hash: tokenHash,
						recipient: ctx.bep132.accts.get('genesis_2').address,
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
				type: '@bearmint/bep-132/0.0.0/audit',
			},
		])
	})

	it('should fail if any recipient address is malformed', async (ctx) => {
		const { collectionHash } = await makeOnlyOwnerCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)
		const { tokenHash } = await makeNFT(
			ctx.bep131,
			collectionHash,
			ctx.bep131.accts.get('genesis_1'),
		)

		const tx = await ctx.bep132.txFactory.asserted(
			ctx.bep132.accts.get('genesis_1').keypair,
			ctx.bep132.accts.get('genesis_1').keypair,
			await ctx.bep132.client.fakeTxMsg('@bearmint/bep-132').execute({
				ops: [
					new BEP132MsgOp({
						hash: tokenHash,
						recipient: 'junk',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.recipient', value: 'ERR_TX_MALFORMED_ADDRESS' },
				],
				type: '@bearmint/bep-132/0.0.0/audit',
			},
		])
	})

	it('should fail if the sender and recipient are the same account', async (ctx) => {
		const { collectionHash } = await makeOnlyOwnerCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)
		const { tokenHash } = await makeNFT(
			ctx.bep131,
			collectionHash,
			ctx.bep131.accts.get('genesis_1'),
		)

		const tx = await ctx.bep132.txFactory.asserted(
			ctx.bep132.accts.get('genesis_1').keypair,
			ctx.bep132.accts.get('genesis_1').keypair,
			await ctx.bep132.client.fakeTxMsg('@bearmint/bep-132').execute({
				ops: [
					new BEP132MsgOp({
						hash: tokenHash,
						recipient: ctx.bep132.accts.get('genesis_1').address,
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
						value: 'ERR_TX_FORBIDDEN_OWNERSHIP_MODIFICATION',
					},
				],
				type: '@bearmint/bep-132/0.0.0/audit',
			},
		])
	})

	it('should fail to transfer tokens from an immutable collection', async (ctx) => {
		const { collectionHash } = await makeImmutableCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		const { tokenHash } = await makeNFT(
			ctx.bep131,
			collectionHash,
			ctx.bep131.accts.get('genesis_1'),
		)

		await (
			await ctx.bep132.txFactory.asserted(
				ctx.bep132.accts.get('genesis_1').keypair,
				ctx.bep132.accts.get('genesis_1').keypair,
				await ctx.bep132.client.fakeTxMsg('@bearmint/bep-132').execute({
					ops: [
						new BEP132MsgOp({
							hash: tokenHash,
							recipient: ctx.bep132.accts.get('genesis_2').address,
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
				type: '@bearmint/bep-132/0.0.0/audit',
			},
		])
	})

	it('should fail to transfer tokens from a height-locked collection if the final height has been passed', async (ctx) => {
		const { collectionHash } = await makeLockedByBlockNumberCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		const { tokenHash } = await makeNFT(
			ctx.bep131,
			collectionHash,
			ctx.bep131.accts.get('genesis_1'),
		)

		// Wait for a few blocks so that the collection goes into lockdown
		await new Promise((r) => setTimeout(r, 5000))

		await (
			await ctx.bep132.txFactory.asserted(
				ctx.bep132.accts.get('genesis_1').keypair,
				ctx.bep132.accts.get('genesis_1').keypair,
				await ctx.bep132.client.fakeTxMsg('@bearmint/bep-132').execute({
					ops: [
						new BEP132MsgOp({
							hash: tokenHash,
							recipient: ctx.bep132.accts.get('genesis_2').address,
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
				type: '@bearmint/bep-132/0.0.0/audit',
			},
		])
	})

	it('should fail to transfer tokens from a max-supply-locked collection if the max supply has been reached', async (ctx) => {
		const { collectionHash } = await makeLockedByMaxSupplyCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		const { tokenHash } = await makeNFT(
			ctx.bep131,
			collectionHash,
			ctx.bep131.accts.get('genesis_1'),
		)

		await (
			await ctx.bep132.txFactory.asserted(
				ctx.bep132.accts.get('genesis_1').keypair,
				ctx.bep132.accts.get('genesis_1').keypair,
				await ctx.bep132.client.fakeTxMsg('@bearmint/bep-132').execute({
					ops: [
						new BEP132MsgOp({
							hash: tokenHash,
							recipient: ctx.bep132.accts.get('genesis_2').address,
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
				type: '@bearmint/bep-132/0.0.0/audit',
			},
		])
	})

	it('should fail to transfer tokens from a collection as a steward while only the owner is allowed to transfer (overrules ACL)', async (ctx) => {
		const { collectionHash } = await makeOnlyOwnerCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		const { tokenHash } = await makeNFT(
			ctx.bep131,
			collectionHash,
			ctx.bep131.accts.get('genesis_1'),
		)

		await (
			await ctx.bep129.txFactory.asserted(
				ctx.bep129.accts.get('genesis_1').keypair,
				ctx.bep129.accts.get('genesis_1').keypair,
				await ctx.bep129.client.fakeTxMsg('@bearmint/bep-129').execute({
					ops: [
						new BEP129MsgOp({
							hash: collectionHash,
							permissions: [BEP126UserPermission.TRANSFER],
							steward: ctx.bep129.accts.get('genesis_2').address,
						}),
					],
				}),
			)
		).pass()

		await (
			await ctx.bep132.txFactory.asserted(
				ctx.bep132.accts.get('genesis_2').keypair,
				ctx.bep132.accts.get('genesis_2').keypair,
				await ctx.bep132.client.fakeTxMsg('@bearmint/bep-132').execute({
					ops: [
						new BEP132MsgOp({
							hash: tokenHash,
							recipient: ctx.bep132.accts.get('genesis_2').address,
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
				type: '@bearmint/bep-132/0.0.0/audit',
			},
		])
	})

	it('should fail to transfer tokens from a collection where only the team can transfer but the sender is not part of the team', async (ctx) => {
		const { collectionHash } = await makeOnlyTeamCollection(
			ctx.bep126,
			ctx.bep126.accts.get('genesis_1'),
		)

		const { tokenHash } = await makeNFT(
			ctx.bep131,
			collectionHash,
			ctx.bep131.accts.get('genesis_1'),
		)

		await (
			await ctx.bep132.txFactory.asserted(
				ctx.bep132.accts.get('genesis_2').keypair,
				ctx.bep132.accts.get('genesis_2').keypair,
				await ctx.bep132.client.fakeTxMsg('@bearmint/bep-132').execute({
					ops: [
						new BEP132MsgOp({
							hash: tokenHash,
							recipient: ctx.bep132.accts.get('genesis_2').address,
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
				type: '@bearmint/bep-132/0.0.0/audit',
			},
		])
	})
})
