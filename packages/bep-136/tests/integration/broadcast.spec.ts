import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { BEP134Token } from '@bearmint/bep-018'
import { selectNAT } from '@bearmint/bep-134'

import { createTx, setUp, STUB_NATIVE_TOKEN } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { sender, tx } = await createTx(context)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-134').getListHex(sender.address),
		).toStrictEqual(['a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85'])

		await context.executeFull(tx)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-134').getListHex(sender.address),
		).toStrictEqual([])

		expect(
			await selectNAT(
				context.state.getMultiStore().get('@bearmint/bep-134'),
				'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
			),
		).toStrictEqual(
			BEP134Token.fromJson({
				decimals: STUB_NATIVE_TOKEN.decimals,
				denomination: STUB_NATIVE_TOKEN.denomination,
				initialOwner: sender.address,
				initialSupply: STUB_NATIVE_TOKEN.initialSupply.toString(),
				name: STUB_NATIVE_TOKEN.name,
				policies: [
					{ name: '@bearmint/bep-138', type: 1 },
					{ name: '@bearmint/bep-140', type: 1 },
				],
			}),
		)
	})
})
