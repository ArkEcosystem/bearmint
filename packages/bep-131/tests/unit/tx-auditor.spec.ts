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

	it('should fail to mint into a collection without ownership', async (context) => {
		const { sender, tx } = await createTx(context)

		await upsertCollection(
			context.state.getMultiStore().get('@bearmint/bep-126'),
			'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
			{
				accessControlList: {},
				currentOwner: '',
				id: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				initialOwner: sender.address,
				name: 'name',
				policies: [
					{ name: MintPolicy.ONLY_TEAM, type: 0 },
					{ name: MintPolicy.ONLY_TEAM, type: 1 },
					{ name: MintPolicy.ONLY_TEAM, type: 2 },
				],
				symbol: 'symbol',
				tokens: [],
				uriPrefix: 'uriPrefix',
				uriSuffix: 'uriSuffix',
			},
		)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies.@bearmint/bep-145',
				value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
			},
		])
	})

	it('should fail to mint into a collection without ACL', async (context) => {
		const { sender, tx } = await createTx(context)

		await upsertCollection(
			context.state.getMultiStore().get('@bearmint/bep-126'),
			'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
			{
				accessControlList: {},
				currentOwner: sender.address,
				id: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				initialOwner: sender.address,
				name: 'name',
				policies: [
					{ name: MintPolicy.ONLY_TEAM, type: 0 },
					{ name: MintPolicy.ONLY_TEAM, type: 1 },
					{ name: MintPolicy.ONLY_TEAM, type: 2 },
				],
				symbol: 'symbol',
				tokens: [],
				uriPrefix: 'uriPrefix',
				uriSuffix: 'uriSuffix',
			},
		)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies.@bearmint/bep-145',
				value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
			},
		])
	})

	Unit.testMemoLength({ expect, createTx, it })
})
