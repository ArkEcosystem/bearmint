import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { blake3 } from '@bearmint/bep-009'
import { abci } from '@bearmint/bep-018'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail if the expiration is in the past', async (context) => {
		await context.state.setCommittedBlock(
			new abci.RequestFinalizeBlock({ header: { height: BigInt(10) } }),
		)

		const { tx } = await createTx(context, {
			expiration: 5,
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.expiration',
				value: ErrorCode.TX_BLOCK_NUMBER_IS_PAST,
			},
		])
	})

	it('should fail if the expiration is in the present', async (context) => {
		await context.state.setCommittedBlock(
			new abci.RequestFinalizeBlock({ header: { height: BigInt(10) } }),
		)

		const { tx } = await createTx(context, {
			expiration: 10,
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.expiration',
				value: ErrorCode.TX_BLOCK_NUMBER_IS_PAST,
			},
		])
	})

	it('should fail if the secret is junk', async (context) => {
		await context.state.setCommittedBlock(
			new abci.RequestFinalizeBlock({ header: { height: BigInt(10) } }),
		)

		const { tx } = await createTx(context, {
			secret: 'plaintext',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.secret',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the secret type', async (context) => {
		const { tx } = await createTx(context, {
			secret: '2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b',
			secretAlgorithm: 'honeyhash',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.secretAlgorithm',
				value: ErrorCode.TX_UNKNOWN_VALUE,
			},
		])
	})

	it('should fail if the beneficiary is also the sender', async (context) => {
		await context.state.setCommittedBlock(
			new abci.RequestFinalizeBlock({ header: { height: BigInt(10) } }),
		)

		const { tx } = await createTx(context, {
			recipient:
				'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.recipient',
				value: ErrorCode.TX_UNEXPECTED_LOOPBACK_DIRECTION,
			},
		])
	})

	it('should fail if the sender and recipient are not the same', async (context) => {
		const { tx } = await createTx(context, undefined, false)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender',
				value: ErrorCode.TX_UNEXPECTED_RELATIONAL_DIRECTION,
			},
		])
	})

	it('should fail if there are duplicated ops', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					amount: BigInt(1e8),
					denomination: 'BEAR',
					expiration: BigInt(1_893_448_800),
					memo: 'Hello, World!',
					recipient: 'recipient',
					secret: blake3('honey'),
					secretAlgorithm: 'blake3',
				},
				{
					amount: BigInt(1e8),
					denomination: 'BEAR',
					expiration: BigInt(1_893_448_800),
					memo: 'Hello, World!',
					recipient: 'recipient',
					secret: blake3('honey'),
					secretAlgorithm: 'blake3',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops',
				value: ErrorCode.TX_ARRAY_CONTAINS_DUPLICATES,
			},
		])
	})

	Unit.testMemoLength({ expect, createTx, it })
})
