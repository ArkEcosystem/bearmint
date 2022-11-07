import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { BEP68MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'
import { randomBytes } from 'crypto'

import { makeServiceProvider } from '../../source/service-provider.js'
import { getPrimaryKey } from '../../source/utils.js'

describe<E2E.Context>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		Object.assign(ctx, await E2E.createEnvironment(makeServiceProvider))
	})

	it('should pass', async (ctx) => {
		const data = randomBytes(32)

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-068').execute({
				ops: [
					new BEP68MsgOp({
						data,
						mimeType: 'text/plain',
					}),
				],
			}),
		)

		await ctx.accts
			.get('genesis_1')
			.expectModuleMetadataContains('@bearmint/bep-068', getPrimaryKey(data))

		tx.pass()

		await new Promise((r) => setTimeout(r, 2000))

		await tx.confirmMeta(getPrimaryKey(data))

		await ctx.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-068', it)
	E2E.testMemoLength('@bearmint/bep-068', it)
	E2E.testOpCount('@bearmint/bep-068', it)

	it('should fail if there are duplicated ops', async (ctx) => {
		const data = randomBytes(32)

		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-068').execute({
				ops: [
					new BEP68MsgOp({
						data,
						mimeType: 'text/plain',
					}),
					new BEP68MsgOp({
						data,
						mimeType: 'text/plain',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-068/0.0.0/audit',
			},
		])
	})

	it('should fail if the data is already registered', async (ctx) => {
		const data = randomBytes(32)

		// 1. Register the CID
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-068').execute({
				ops: [
					new BEP68MsgOp({
						data,
						mimeType: 'text/plain',
					}),
				],
			}),
		)

		await ctx.accts
			.get('genesis_1')
			.expectModuleMetadataContains('@bearmint/bep-068', getPrimaryKey(data))

		await tx.pass()
		await tx.confirmMeta(getPrimaryKey(data))

		await ctx.accts.assertExpectations()

		// 2. Attempt to register the same data again
		await (
			await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-068').execute({
					ops: [
						new BEP68MsgOp({
							data,
							mimeType: 'text/plain',
						}),
					],
				}),
			)
		).fail([
			{
				attributes: [{ index: false, key: 'message.ops.0.data', value: 'ERR_TX_DUPLICATED_VALUE' }],
				type: '@bearmint/bep-068/0.0.0/audit',
			},
		])
	})
})
