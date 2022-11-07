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
		const { tx } = await createTx(context, {
			ops: [
				{
					amount: `${10e8}`,
					denomination: denominations.token,
				},
			],
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
			ops: [
				{
					amount: `${11e8}`,
					denomination: denominations.gas,
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.amount',
				value: ErrorCode.TX_INSUFFICIENT_BALANCE,
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
				},
				{
					amount: BigInt(1e8),
					denomination: 'BEAR',
					memo: 'Hello, World!',
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
