import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail verification if the sender has no ownership', async (context) => {
		const { sender, tx } = await createTx(context)

		await context.state
			.getMultiStore()
			.get('@bearmint/bep-126')
			.detach(sender.address, 'e2abe831494bd6d8642810cb11e2d36944abb2206c40ac5f24be73d92258dfa9')

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.hash',
				value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
			},
		])
	})

	Unit.testMemoLength({ expect, createTx, it })
})
