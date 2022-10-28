import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { stringToBytes } from '@bearmint/bep-009'
import { abci } from '@bearmint/bep-018'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail if the lock has expired in the past', async (context) => {
		await context.state.setCommittedBlock(
			new abci.RequestFinalizeBlock({ header: { height: BigInt(11) } }),
		)

		const { tx } = await createTx(context, {
			expiration: 10, // we are at height 11 so this has expired 1 block ago
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.expiration',
				value: ErrorCode.TX_EXPIRED,
			},
		])
	})

	it('should fail if the lock has expired in the present', async (context) => {
		await context.state.setCommittedBlock(
			new abci.RequestFinalizeBlock({ header: { height: BigInt(10) } }),
		)

		const { tx } = await createTx(context, {
			expiration: 10,
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.expiration',
				value: ErrorCode.TX_EXPIRED,
			},
		])
	})

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

	it('should fail if the tx beneficiary equals the benefactor', async (context) => {
		const { tx } = await createTx(context, {
			recipient: 'bear17ggusr8sg53hsxs5fxy6vzgekk45axnu4xjv3dftaf5kkqdcglgqa8yg5a',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.recipient',
				value: ErrorCode.TX_CLAIMANT_DOES_NOT_MATCH_BENEFICIARY,
			},
		])
	})

	Unit.testMemoLength({ expect, createTx, it })
})
