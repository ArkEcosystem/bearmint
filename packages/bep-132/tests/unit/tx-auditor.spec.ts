import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'
import { MintPolicy, upsertCollection } from '@bearmint/bep-126'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail if the recipient and ancestor are equal', async (context) => {
		const { sender, tx } = await createTx(context, {
			ops: [
				{
					hash: '74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
					recipient:
						'bear15z20cwcgszr54v7w7pxulyv3pyqjz878rmvzqtjf2sqphz7gv4hrz0f44vuwgx57qy6h0c064x3rw44zxpl',
				},
			],
		})

		await context.state.getAccountRepository().index([sender])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.recipient',
				value: ErrorCode.TX_FORBIDDEN_OWNERSHIP_MODIFICATION,
			},
		])
	})

	it('should fail if the sender is not authorised to perform a transfer via ownership', async (context) => {
		const { sender, tx } = await createTx(context)

		await upsertCollection(
			context.state.getMultiStore().get('@bearmint/bep-126'),
			'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
			{
				accessControlList: {},
				currentOwner: 'not-the-sender',
				hash: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				initialOwner: sender.address,
				metadata: 'https://google.com',
				mintingTx: 'does-not-matter',
				policies: [
					{ name: MintPolicy.ONLY_TEAM, type: 0 },
					{ name: MintPolicy.ONLY_TEAM, type: 1 },
					{ name: MintPolicy.ONLY_TEAM, type: 2 },
				],
				tokens: [],
			},
		)

		await context.state.getAccountRepository().index([sender])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies.@bearmint/bep-145',
				value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
			},
		])
	})

	it('should fail if the sender is not authorised to perform a transfer via ACL', async (context) => {
		const { sender, tx } = await createTx(context)

		await upsertCollection(
			context.state.getMultiStore().get('@bearmint/bep-126'),
			'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
			{
				accessControlList: {},
				currentOwner: sender.address,
				hash: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				initialOwner: sender.address,
				metadata: 'https://google.com',
				mintingTx: 'does-not-matter',
				policies: [
					{ name: MintPolicy.ONLY_TEAM, type: 0 },
					{ name: MintPolicy.ONLY_TEAM, type: 1 },
					{ name: MintPolicy.ONLY_TEAM, type: 2 },
				],
				tokens: [],
			},
		)

		await context.state.getAccountRepository().index([sender])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies.@bearmint/bep-145',
				value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
			},
		])
	})

	it('should fail if there are duplicate ops by GUID', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					hash: '74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
					recipient: 'bear17ggusr8sg53hsxs5fxy6vzgekk45axnu4xjv3dftaf5kkqdcglgqa8yg5a',
				},
				{
					hash: '74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
					recipient: 'bear17ggusr8sg53hsxs5fxy6vzgekk45axnu4xjv3dftaf5kkqdcglgqa8yg5a',
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
