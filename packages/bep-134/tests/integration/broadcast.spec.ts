import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { BEP134Token } from '@bearmint/bep-018'

import { BEP134UserPermission } from '../../source/types.js'
import { selectNAT } from '../../source/utils.js'
import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context)

		await context.executeFull(tx)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-134').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			await selectNAT(context.state.getMultiStore().get('@bearmint/bep-134'), primaryKey),
		).toStrictEqual(
			BEP134Token.fromJson({
				currentOwner: sender.address,
				decimals: 32,
				denomination: 'denomination',
				id: '2520ffc16af4e3f8b7c2e4539e95c5eba559266e13553787254641d472d601d8',
				initialOwner: sender.address,
				initialSupply: '500000000',
				name: 'name',
				policies: [
					{ name: '@bearmint/bep-138', type: BEP134UserPermission.MINT },
					{ name: '@bearmint/bep-140', type: BEP134UserPermission.MINT },
				],
			}),
		)
	})
})
