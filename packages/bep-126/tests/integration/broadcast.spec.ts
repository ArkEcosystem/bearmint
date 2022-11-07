import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'

import { getCollection } from '../../source/collection.js'
import { STUB_TX_META } from '../fixtures.js'
import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { sender, tx } = await createTx(context)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-126').has(STUB_TX_META.id),
		).toBeFalse()

		await context.executeFull(tx)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-126').getListHex(sender.address),
		).toStrictEqual([STUB_TX_META.id])

		expect(
			await getCollection(context.state.getMultiStore().get('@bearmint/bep-126'), STUB_TX_META.id),
		).toMatchSnapshot()
	})
})
