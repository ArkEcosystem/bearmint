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

	it('should fail if there are duplicate ops by hash', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					hash: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
					recipient:
						'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
				},
				{
					hash: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
					recipient:
						'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
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
