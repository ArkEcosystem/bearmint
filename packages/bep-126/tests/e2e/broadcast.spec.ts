import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { jsonToHex } from '@bearmint/bep-009'
import { BEP126MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { randomUUID } from 'crypto'

import { makeServiceProvider as BEP141 } from '../../../bep-141/distribution/index.js'
import { makeServiceProvider as BEP142 } from '../../../bep-142/distribution/index.js'
import { makeServiceProvider as BEP143 } from '../../../bep-143/distribution/index.js'
import { makeServiceProvider as BEP144 } from '../../../bep-144/distribution/index.js'
import { makeServiceProvider as BEP145 } from '../../../bep-145/distribution/index.js'
import { makeServiceProvider } from '../../source/service-provider.js'
import { BEP126UserPermission, MintPolicy } from '../../source/types.js'
import { getCollectionKey } from '../../source/utils.js'

function randomString() {
	return randomUUID().replace('-', '')
}

describe<E2E.Context>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		Object.assign(
			ctx,
			await E2E.createEnvironment(makeServiceProvider, [BEP141, BEP142, BEP143, BEP144, BEP145]),
		)
	})

	it('should pass', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
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

		const collectionHash = getCollectionKey(tx.toTx().hash, '0')

		await ctx.accts
			.get('genesis_1')
			.expectModuleMetadataContains('@bearmint/bep-126', collectionHash)

		await tx.pass()
		await tx.confirmMeta(collectionHash)

		await ctx.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-126', it)
	E2E.testMemoLength('@bearmint/bep-126', it)
	E2E.testOpCount('@bearmint/bep-126', it)

	it('should fail if it there are duplicate ops by name', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: 'a',
						policies: [
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.BURN },
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.MINT },
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.TRANSFER },
						],
						symbol: randomString(),
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
					}),
					new BEP126MsgOp({
						name: 'a',
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

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if it there are duplicate ops by symbol;', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: randomString(),
						policies: [
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.BURN },
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.MINT },
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.TRANSFER },
						],
						symbol: 'a',
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
					}),
					new BEP126MsgOp({
						name: randomString(),
						policies: [
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.BURN },
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.MINT },
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.TRANSFER },
						],
						symbol: 'a',
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if the name is malformed', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: '!!!',
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

		await tx.fail([
			{
				attributes: [{ index: false, key: 'message.ops.0.name', value: 'ERR_TX_MALFORMED_VALUE' }],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if the symbol is malformed', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: randomString(),
						policies: [
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.BURN },
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.MINT },
							{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.TRANSFER },
						],
						symbol: '!!!',
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.symbol', value: 'ERR_TX_MALFORMED_VALUE' },
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if the URI prefix is too short', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
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
						uriPrefix: '',
						uriSuffix: 'uriSuffix',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.uri_prefix',
						value: 'ERR_TX_BYTE_LENGTH_MIN_NOT_SATISFIED',
					},
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if the URI prefix is too long', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
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
						uriPrefix: '#'.repeat(420),
						uriSuffix: 'uriSuffix',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.uri_prefix',
						value: 'ERR_TX_BYTE_LENGTH_MAX_NOT_SATISFIED',
					},
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if the URI suffix is too short', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
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
						uriSuffix: '',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.uri_suffix',
						value: 'ERR_TX_BYTE_LENGTH_MIN_NOT_SATISFIED',
					},
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if the URI suffix is too long', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_2').keypair,
			ctx.accts.get('genesis_2').keypair,
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
						uriSuffix: '#'.repeat(420),
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.uri_suffix',
						value: 'ERR_TX_BYTE_LENGTH_MAX_NOT_SATISFIED',
					},
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if the name is already in use', async (ctx) => {
		const name = randomString()

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
					ops: [
						new BEP126MsgOp({
							name,
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

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
					ops: [
						new BEP126MsgOp({
							name,
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
		).fail([
			{
				attributes: [{ index: false, key: 'message.ops.0.name', value: 'ERR_TX_DUPLICATED_VALUE' }],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if the symbol is already in use', async (ctx) => {
		const symbol = randomString()

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
					ops: [
						new BEP126MsgOp({
							name: randomString(),
							policies: [
								{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.BURN },
								{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.MINT },
								{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.TRANSFER },
							],
							symbol,
							uriPrefix: 'uriPrefix',
							uriSuffix: 'uriSuffix',
						}),
					],
				}),
			)
		).pass()

		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
					ops: [
						new BEP126MsgOp({
							name: randomString(),
							policies: [
								{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.BURN },
								{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.MINT },
								{ name: MintPolicy.ONLY_TEAM, type: BEP126UserPermission.TRANSFER },
							],
							symbol,
							uriPrefix: 'uriPrefix',
							uriSuffix: 'uriSuffix',
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.symbol', value: 'ERR_TX_DUPLICATED_VALUE' },
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if there are too few policies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: randomString(),
						policies: [],
						symbol: randomString(),
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
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
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if there are too many policies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: randomString(),
						policies: [
							{ name: MintPolicy.LOCKED_BY_BLOCK_NUMBER, type: BEP126UserPermission.BURN },
							{ name: MintPolicy.LOCKED_BY_BLOCK_NUMBER, type: BEP126UserPermission.MINT },
							{ name: MintPolicy.LOCKED_BY_BLOCK_NUMBER, type: BEP126UserPermission.TRANSFER },
							{ name: MintPolicy.LOCKED_BY_MAX_SUPPLY, type: BEP126UserPermission.BURN },
							{ name: MintPolicy.LOCKED_BY_MAX_SUPPLY, type: BEP126UserPermission.MINT },
							{ name: MintPolicy.LOCKED_BY_MAX_SUPPLY, type: BEP126UserPermission.TRANSFER },
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

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.policies',
						value: 'ERR_TX_COUNT_MAX_NOT_SATISFIED',
					},
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if there are unknown `burn` policies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: randomString(),
						policies: [{ name: 'unknown', type: BEP126UserPermission.BURN }],
						symbol: randomString(),
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.policies.burn', value: 'ERR_TX_UNKNOWN_POLICY' },
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if there are unknown `mint` policies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: randomString(),
						policies: [{ name: 'unknown', type: BEP126UserPermission.MINT }],
						symbol: randomString(),
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.policies.mint', value: 'ERR_TX_UNKNOWN_POLICY' },
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if there are unknown `transfer` policies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: randomString(),
						policies: [{ name: 'unknown', type: BEP126UserPermission.TRANSFER }],
						symbol: randomString(),
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.policies.transfer', value: 'ERR_TX_UNKNOWN_POLICY' },
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if there are duplicate policies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: randomString(),
						policies: [
							{ name: MintPolicy.LOCKED_BY_BLOCK_NUMBER, type: BEP126UserPermission.BURN },
							{ name: MintPolicy.LOCKED_BY_BLOCK_NUMBER, type: BEP126UserPermission.BURN },
						],
						symbol: randomString(),
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
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
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})

	it('should fail if there are malformed policy arguments', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-126').execute({
				ops: [
					new BEP126MsgOp({
						name: randomString(),
						policies: [
							{
								args: jsonToHex({ finalBlockNumber: 'junk' }),
								name: MintPolicy.LOCKED_BY_BLOCK_NUMBER,
								type: BEP126UserPermission.BURN,
							},
						],
						symbol: randomString(),
						uriPrefix: 'uriPrefix',
						uriSuffix: 'uriSuffix',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.policies.0', value: 'ERR_TX_INVALID_ARGUMENTS' },
				],
				type: '@bearmint/bep-126/0.0.0/audit',
			},
		])
	})
})
