import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { blake3, shake128 } from '@bearmint/bep-009'
import { BEP64MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'

import { makeServiceProvider } from '../../source/service-provider.js'

describe<E2E.Context>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		Object.assign(ctx, await E2E.createEnvironment(makeServiceProvider))
	})

	it('should pass', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: 'Hello, World!',
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		// await ctx.accts.get('genesis_1').expectMetadata(3e8, 'BEAR')

		const { events } = await tx.pass()

		// console.log(await tx.confirmMeta(events[1].attributes[0].value))
		await tx.confirmMeta(events[1].attributes[0].value)

		await ctx.accts.assertExpectations()
	})

	E2E.testLoopback('@bearmint/bep-064', it)
	E2E.testMemoLength('@bearmint/bep-064', it)
	E2E.testOpCount('@bearmint/bep-064', it)

	it('should fail if the secret algorithm is unknown', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: 'Hello, World!',
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'junk',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.secretAlgorithm',
						value: 'ERR_TX_UNKNOWN_VALUE',
					},
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if the hashed secret is longer than the algorithm specifies', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: 'Hello, World!',
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: shake128('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.secret', value: 'ERR_TX_MALFORMED_VALUE' },
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if the expiration is in the past', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(0),
						memo: 'Hello, World!',
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.expiration', value: 'ERR_TX_BLOCK_NUMBER_IS_PAST' },
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if any memo is too long', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: '#'.repeat(257),
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.memo',
						value: 'ERR_TX_BYTE_LENGTH_MAX_NOT_SATISFIED',
					},
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if any recipients are the same as the sender', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: 'Hello, World!',
						recipient: ctx.accts.get('genesis_1').address,
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
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
						value: 'ERR_TX_UNEXPECTED_LOOPBACK_DIRECTION',
					},
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if the sender does not own the tokens', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'DEER',
						expiration: BigInt(1_893_448_800),
						memo: 'Hello, World!',
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'sender.balances.DEER', value: 'ERR_TX_INSUFFICIENT_BALANCE' },
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if the sender does not have enough tokens', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				ops: [
					new BEP64MsgOp({
						amount: BigInt('100000000000000000'),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: 'Hello, World!',
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'sender.balances.BEAR', value: 'ERR_TX_INSUFFICIENT_BALANCE' },
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if any recipient address is malformed', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: 'Hello, World!',
						recipient: 'junk',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops.0.recipient', value: 'ERR_TX_MALFORMED_ADDRESS' },
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if the top-level memo is too short', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				memo: '',
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: 'Hello, World!',
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.memo', value: 'ERR_TX_BYTE_LENGTH_MIN_NOT_SATISFIED' },
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if the top-level memo is too long', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				memo: '#'.repeat(257),
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: 'Hello, World!',
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.memo', value: 'ERR_TX_BYTE_LENGTH_MAX_NOT_SATISFIED' },
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if any child-level memo is too short', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				memo: 'Hello, World!',
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: '',
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.memo',
						value: 'ERR_TX_BYTE_LENGTH_MIN_NOT_SATISFIED',
					},
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})

	it('should fail if any child-level memo is too long', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-064').execute({
				memo: 'Hello, World!',
				ops: [
					new BEP64MsgOp({
						amount: BigInt(1e8),
						denomination: 'BEAR',
						expiration: BigInt(1_893_448_800),
						memo: '#'.repeat(257),
						recipient:
							'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
						secret: blake3('secret'),
						secretAlgorithm: 'blake3',
					}),
				],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{
						index: false,
						key: 'message.ops.0.memo',
						value: 'ERR_TX_BYTE_LENGTH_MAX_NOT_SATISFIED',
					},
				],
				type: '@bearmint/bep-064/0.0.0/audit',
			},
		])
	})
})
