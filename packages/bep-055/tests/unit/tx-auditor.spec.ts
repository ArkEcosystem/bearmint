import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import type { TxTestContext } from '@bearmint/bep-006'
import { denominations } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail if the sender does not have sufficient funds', async (context) => {
		const { sender, tx } = await createTx(context)
		sender.balances[denominations.token] = BigInt(`${0e8}`)
		await context.state.getAccountRepository().index([sender])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender.balances.BEAR',
				value: ErrorCode.TX_INSUFFICIENT_BALANCE,
			},
		])
	})

	it('should fail if the sender does not own the token', async (context) => {
		const { tx } = await createTx(context, {
			amount: `${2e8}`,
			denomination: 'UNKNOWN',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.amount',
				value: ErrorCode.TX_INSUFFICIENT_BALANCE,
			},
		])
	})

	it('should fail if the sender does not have sufficient funds if token and gas have the same denomination', async (context) => {
		const { tx } = await createTx(context, {
			amount: `${3e8}`,
			denomination: denominations.gas,
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender.balances.FIRE',
				value: ErrorCode.TX_INSUFFICIENT_BALANCE,
			},
		])
	})

	it('should fail if the sender is also a recipient', async (context) => {
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
		const { tx } = await createTx(
			context,
			{
				amount: `${10e8}`,
			},
			false,
		)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender',
				value: ErrorCode.TX_UNEXPECTED_RELATIONAL_DIRECTION,
			},
		])
	})

	it('should fail if the recipient address fails validation', async (context) => {
		const { tx } = await createTx(context, {
			recipient: 'fake1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qac0nwf',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.recipient',
				value: ErrorCode.TX_MALFORMED_ADDRESS,
			},
		])
	})

	it('should fail if there are duplicated ops', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					amount: BigInt(1e8),
					denomination: 'BEAR',
					memo: 'Hello, World!',
					recipient: 'recipient',
				},
				{
					amount: BigInt(1e8),
					denomination: 'BEAR',
					memo: 'Hello, World!',
					recipient: 'recipient',
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
