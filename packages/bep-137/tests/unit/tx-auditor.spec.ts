import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail if the native token does not exist', async (context) => {
		const { tx } = await createTx(context)

		await context.state
			.getMultiStore()
			.get('@bearmint/bep-134')
			.forget('a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85')

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.hash',
				value: ErrorCode.TX_NOT_FOUND,
			},
		])
	})

	it('should fail if the sender does not own the native token', async (context) => {
		const { sender, tx } = await createTx(context)

		await context.state.getMultiStore().get('@bearmint/bep-134').forget(sender.address)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.hash',
				value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
			},
		])
	})

	Unit.testMemoLength({ expect, createTx, it })
})
