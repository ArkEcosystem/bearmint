import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { stringToBytes } from '@bearmint/bep-009'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should pass the audit', async (context) => {
		const { tx } = await createTx(context, {
			secret: stringToBytes('honey'),
		})

		await expect(await context.execute(tx)).toPassAudit()
	})

	it('should fail the audit', async (context) => {
		const { tx } = await createTx(context, {
			secret: stringToBytes('not-honey'),
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.secret',
				value: ErrorCode.TX_HASH_DOES_NOT_VERIFY,
			},
		])
	})

	it('should fail if the tx is not self-receiving', async (context) => {
		const { tx } = await createTx(context, undefined, false)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender',
				value: ErrorCode.TX_UNEXPECTED_RELATIONAL_DIRECTION,
			},
		])
	})

	it('should fail to refund locks that the sender does not own', async (context) => {
		const { tx } = await createTx(context, undefined, true, true)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.hash',
				value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
			},
		])
	})

	Unit.testMemoLength({ expect, createTx, it })
})
