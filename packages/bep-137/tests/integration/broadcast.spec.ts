import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { sender, tx } = await createTx(context)

		await expect(sender).toMatchBalance({
			amount: `${10e8}`,
			denomination: 'CACTUS',
			state: context.state,
		})

		await context.executeFull(tx)

		await expect(sender).toMatchBalance({
			amount: `${15e8}`,
			denomination: 'CACTUS',
			state: context.state,
		})
	})
})
