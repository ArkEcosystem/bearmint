import { expect, describe, it, beforeEach, afterEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'

import { getCollection } from '../../source/collection.js'
import { createTx, setUp, tearDown } from '../setup.js'
import { STUB_TX_META } from '../fixtures.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)
	tearDown(afterEach)

	it('should attach the collection to the sender', async (context) => {
		const { sender, tx } = await createTx(context)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-126').has(STUB_TX_META.id),
		).toBeFalse()

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-126').getListHex(sender.address),
		).toStrictEqual([STUB_TX_META.id])

		expect(
			await getCollection(context.state.getMultiStore().get('@bearmint/bep-126'), STUB_TX_META.id),
		).toMatchSnapshot()
	})
})
