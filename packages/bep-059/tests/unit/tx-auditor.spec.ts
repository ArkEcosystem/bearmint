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

	it('should fail verification', async (context) => {
		const { sender, tx } = await createTx(context)
		sender.validator = undefined
		await context.state.getAccountRepository().index([sender])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender',
				value: ErrorCode.TX_NOT_FOUND,
			},
		])
	})

	it('should fail if the sender has already resigned his validator ownership', async (context) => {
		const { sender, tx } = await createTx(context)

		context.state
			.getMultiStore()
			.get('@bearmint/bep-058')
			.set(sender.address, stringToBytes('resignationHash'))

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender',
				value: ErrorCode.TX_VALIDATOR_RESIGNED,
			},
		])
	})

	it('should fail if the strategy is unknown', async (context) => {
		const { tx } = await createTx(context, { strategy: 'unknown' })

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.strategy',
				value: ErrorCode.TX_UNKNOWN_STRATEGY,
			},
		])
	})

	it('should pass the audit', async (context) => {
		const { tx } = await createTx(context)

		await expect(await context.execute(tx)).toPassAudit()
	})

	it('should fail the audit', async (context) => {
		const { tx } = await createTx(context, {
			publicKey: 'publicKey',
			signature: 'signature',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.publicKey',
				value: ErrorCode.TX_SECP256K1_PUBLIC_KEY_DOES_NOT_VERIFY,
			},
		])
	})

	Unit.testTopMemoLength({ expect, createTx, it })
})
