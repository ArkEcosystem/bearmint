import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { stringToBytes } from '@bearmint/bep-009'
import { abci } from '@bearmint/bep-018'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'
import { endSentence } from '@bearmint/bep-120'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail if the sender is not a validator', async (context) => {
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

	it('should fail if the sender is tombstoned', async (context) => {
		const { sender, tx } = await createTx(context)
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-121')
			.set(sender.address, stringToBytes('tombstoned'))

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender',
				value: ErrorCode.TX_VALIDATOR_TOMBSTONED,
			},
		])
	})

	it('should fail if the sender is not jailed', async (context) => {
		const { sender, tx } = await createTx(context)
		await endSentence(context.state, sender)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender',
				value: ErrorCode.TX_VALIDATOR_NOT_JAILED,
			},
		])
	})

	it('should fail if the signed name does not match the sender name', async (context) => {
		const { tx } = await createTx(context, { moniker: 'whoareyou' })

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.moniker',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the validator is still jailed', async (context) => {
		const { tx } = await createTx(context, { jailedUntil: '10' })

		await context.state.setCommittedBlock(
			new abci.RequestBeginBlock({ header: { height: BigInt(1) } }),
		)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.blockNumber',
				value: ErrorCode.TX_VALIDATOR_JAILED,
			},
		])
	})

	it('should pass the audit', async (context) => {
		const { tx } = await createTx(context)

		await context.state.setCommittedBlock(
			new abci.RequestBeginBlock({ header: { height: BigInt(10) } }),
		)

		await expect(await context.execute(tx)).toPassAudit()
	})

	it('should fail the audit', async (context) => {
		const { tx } = await createTx(context, {
			publicKey: stringToBytes('publicKey'),
			signature: stringToBytes('signature'),
		})

		await context.state.setCommittedBlock(
			new abci.RequestBeginBlock({ header: { height: BigInt(100) } }),
		)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.publicKey',
				value: ErrorCode.TX_SECP256K1_PUBLIC_KEY_DOES_NOT_VERIFY,
			},
		])
	})

	Unit.testTopMemoLength({ expect, createTx, it })
})
