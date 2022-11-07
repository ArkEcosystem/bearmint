import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { jsonToHex } from '@bearmint/bep-009'
import { BEP134MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { randomUUID } from 'crypto'

import { makeServiceProvider as BEP138 } from '../../../bep-138/distribution/index.js'
import { makeServiceProvider as BEP139 } from '../../../bep-139/distribution/index.js'
import { makeServiceProvider as BEP140 } from '../../../bep-140/distribution/index.js'
import { makeServiceProvider } from '../../source/service-provider.js'
import { BEP134UserPermission, MintPolicy } from '../../source/types.js'
import { getPrimaryKey } from '../../source/utils.js'

function randomString() {
	return randomUUID().replace('-', '').toLowerCase().slice(0, 32)
}

describe<E2E.Context>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		Object.assign(ctx, await E2E.createEnvironment(makeServiceProvider, [BEP138, BEP139, BEP140]))
	})

	it('should pass', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 32,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [
							{
								name: MintPolicy.ONLY_OWNER,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		const primaryKey = getPrimaryKey(tx.toTx().hash, '0')

		await ctx.accts.get('genesis_1').expectModuleMetadataContains('@bearmint/bep-134', primaryKey)

		await tx.pass()
		await tx.confirmMeta(primaryKey)

		// pass.events[1]!.attributes[0]!.value,

		// // 5. Make sure the collection looks as it should
		// await tx.confirmMetaMsg(
		// 	collectionHash,
		// 	{
		// 		...collection,
		// 		initialSupply: collection.initialSupply.toString(),
		// 		currentOwner: ctx.bep137.accts.get('genesis_1').address,
		// 		initialOwner: ctx.bep137.accts.get('genesis_1').address,
		// 	},
		// 	new BEP134Token(),
		// )

		await ctx.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-134', it)
	E2E.testMemoLength('@bearmint/bep-134', it)
	E2E.testOpCount('@bearmint/bep-134', it)

	it('should fail if it there are duplicate ops by name', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 32,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: 'a',
						policies: [
							{
								name: MintPolicy.ONLY_OWNER,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
					new BEP134MsgOp({
						decimals: 32,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: 'a',
						policies: [
							{
								name: MintPolicy.ONLY_OWNER,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if it there are duplicate ops by symbol', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 32,
						denomination: 'a',
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [
							{
								name: MintPolicy.ONLY_OWNER,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
					new BEP134MsgOp({
						decimals: 32,
						denomination: 'a',
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [
							{
								name: MintPolicy.ONLY_OWNER,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if the name is malformed', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 32,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: randomUUID(),
						policies: [
							{
								name: MintPolicy.ONLY_OWNER,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [{ index: false, key: 'message.ops.0.name', value: 'ERR_TX_MALFORMED_VALUE' }],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if the denomination is malformed', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 32,
						denomination: randomUUID(),
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [
							{
								name: MintPolicy.ONLY_OWNER,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.denomination', value: 'ERR_TX_MALFORMED_VALUE' },
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if the decimals are too low', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 0,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [
							{
								name: MintPolicy.ONLY_OWNER,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.decimals', value: 'ERR_TX_RANGE_MIN_NOT_SATISFIED' },
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if the decimals are too high', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 2048,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [
							{
								name: MintPolicy.ONLY_OWNER,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.decimals', value: 'ERR_TX_RANGE_MAX_NOT_SATISFIED' },
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if the name is already in use', async (ctx) => {
		const name = randomString()

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
					ops: [
						new BEP134MsgOp({
							decimals: 32,
							denomination: randomString(),
							initialSupply: BigInt(5e8),
							name,
							policies: [
								{
									name: MintPolicy.ONLY_OWNER,
									type: BEP134UserPermission.MINT,
								},
								{
									name: MintPolicy.IMMUTABLE,
									type: BEP134UserPermission.MINT,
								},
							],
						}),
					],
				}),
			)
		).pass()

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
					ops: [
						new BEP134MsgOp({
							decimals: 32,
							denomination: randomString(),
							initialSupply: BigInt(5e8),
							name,
							policies: [
								{
									name: MintPolicy.ONLY_OWNER,
									type: BEP134UserPermission.MINT,
								},
								{
									name: MintPolicy.IMMUTABLE,
									type: BEP134UserPermission.MINT,
								},
							],
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [{ index: false, key: 'message.ops.0.name', value: 'ERR_TX_DUPLICATED_VALUE' }],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if the denomination is already in use', async (ctx) => {
		const denomination = randomString()

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
					ops: [
						new BEP134MsgOp({
							decimals: 32,
							denomination,
							initialSupply: BigInt(5e8),
							name: randomString(),
							policies: [
								{
									name: MintPolicy.ONLY_OWNER,
									type: BEP134UserPermission.MINT,
								},
								{
									name: MintPolicy.IMMUTABLE,
									type: BEP134UserPermission.MINT,
								},
							],
						}),
					],
				}),
			)
		).pass()

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
					ops: [
						new BEP134MsgOp({
							decimals: 32,
							denomination,
							initialSupply: BigInt(5e8),
							name: randomString(),
							policies: [
								{
									name: MintPolicy.ONLY_OWNER,
									type: BEP134UserPermission.MINT,
								},
								{
									name: MintPolicy.IMMUTABLE,
									type: BEP134UserPermission.MINT,
								},
							],
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.denomination', value: 'ERR_TX_DUPLICATED_VALUE' },
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if there are too few policies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 32,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.policies',
						value: 'ERR_TX_COUNT_MIN_NOT_SATISFIED',
					},
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if there are too many policies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 32,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.ONLY_OWNER,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.HEIGHT_LOCKED,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.policies',
						value: 'ERR_TX_COUNT_MAX_NOT_SATISFIED',
					},
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if there are unknown policies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 32,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [
							{
								name: 'junk',
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.policies.mint',
						value: 'ERR_TX_UNKNOWN_POLICY',
					},
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if there are duplicate policies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 32,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.policies',
						value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES',
					},
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})

	it('should fail if there are malformed policy arguments', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-134').execute({
				ops: [
					new BEP134MsgOp({
						decimals: 32,
						denomination: randomString(),
						initialSupply: BigInt(5e8),
						name: randomString(),
						policies: [
							{
								name: MintPolicy.IMMUTABLE,
								type: BEP134UserPermission.MINT,
							},
							{
								args: jsonToHex({ finalBlockNumber: 'junk' }),
								name: MintPolicy.HEIGHT_LOCKED,
								type: BEP134UserPermission.MINT,
							},
						],
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.policies.1', value: 'ERR_TX_INVALID_ARGUMENTS' },
				],
				type: '@bearmint/bep-134/0.0.0/audit',
			},
		])
	})
})
