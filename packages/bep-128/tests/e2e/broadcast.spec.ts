import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { BEP126MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { BEP126UserPermission, makeServiceProvider as BEP126, MintPolicy } from '@bearmint/bep-126'
import { randomUUID } from 'crypto'

import { makeServiceProvider as BEP141 } from '../../../bep-141/distribution/index.js'
import { makeServiceProvider as BEP142 } from '../../../bep-142/distribution/index.js'
import { makeServiceProvider as BEP143 } from '../../../bep-143/distribution/index.js'
import { makeServiceProvider as BEP144 } from '../../../bep-144/distribution/index.js'
import { makeServiceProvider as BEP145 } from '../../../bep-145/distribution/index.js'
import { makeServiceProvider as BEP128 } from '../../source/service-provider.js'

function randomString() {
	return randomUUID().replace('-', '')
}

async function makeCollection(
	ctx: E2E.Context,
	sender: E2E.AssertedAccount,
	recipient?: E2E.AssertedAccount,
) {
	return (
		await (
			await ctx.txFactory.asserted(
				sender.keypair,
				(recipient ?? sender).keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
					ops: [
						new BEP126MsgOp({
							name: randomString(),
							policies: [
								{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.BURN },
								{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.MINT },
								{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.TRANSFER },
							],
							symbol: randomString(),
							uriPrefix: 'uriPrefix',
							uriSuffix: 'uriSuffix',
						}),
					],
				}),
			)
		).pass()
	).events[1]!.attributes[0]!.value
}

describe<{
	bep126: E2E.Context
	bep128: E2E.Context
}>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		ctx.bep126 = await E2E.createEnvironment(BEP126, [BEP141, BEP142, BEP143, BEP144, BEP145])
		ctx.bep128 = await E2E.createEnvironment(BEP128)
	})

	it('should pass', async (ctx) => {
		const collectionHash = await makeCollection(ctx.bep126, ctx.bep126.accts.get('genesis_1'))

		const tx = await ctx.bep128.txFactory.asserted(
			ctx.bep128.accts.get('genesis_1').keypair,
			ctx.bep128.accts.get('genesis_1').keypair,
			await ctx.bep128.client.fakeTxMsg('@bearmint/bep-128').execute({
				ops: [{ hash: collectionHash }],
			}),
		)

		await ctx.bep128.accts
			.get('genesis_1')
			.expectModuleMetadataNotContains('@bearmint/bep-126', collectionHash)

		await tx.pass()
		await tx.confirmMeta(collectionHash)

		ctx.bep128.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-128', it, 'bep128')
	E2E.testMemoLength('@bearmint/bep-128', it, 'bep128')
	E2E.testOpCount('@bearmint/bep-128', it, 'bep128')

	it('should fail if it there are duplicate ops by hash', async (ctx) => {
		const collectionHash = await makeCollection(ctx.bep126, ctx.bep126.accts.get('genesis_1'))

		const tx = await ctx.bep128.txFactory.asserted(
			ctx.bep128.accts.get('genesis_1').keypair,
			ctx.bep128.accts.get('genesis_1').keypair,
			await ctx.bep128.client.fakeTxMsg('@bearmint/bep-128').execute({
				ops: [{ hash: collectionHash }, { hash: collectionHash }],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-128/0.0.0/audit',
			},
		])
	})

	it('should fail if it the sender does not own the collection', async (ctx) => {
		const collectionHash = await makeCollection(ctx.bep126, ctx.bep126.accts.get('genesis_1'))

		const tx = await ctx.bep128.txFactory.asserted(
			ctx.bep128.accts.get('genesis_2').keypair,
			ctx.bep128.accts.get('genesis_2').keypair,
			await ctx.bep128.client.fakeTxMsg('@bearmint/bep-128').execute({
				ops: [{ hash: collectionHash }],
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
				type: '@bearmint/bep-128/0.0.0/audit',
			},
		])
	})
})
