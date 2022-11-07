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

	it('should fail if the sender is not authorised to perform a burn via ownership', async (context) => {
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

	it('should fail if the sender is not authorised to perform a burn via ACL', async (context) => {
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

	Unit.testMemoLength({ expect, createTx, it })
})
