import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { sender, tx } = await createTx(context)

		await expect(sender).toMatchProperties({
			properties: {
				moniker: undefined,
			},
			state: context.state,
		})

		await context.executeFull(tx)

		await expect(sender).toMatchProperties({
			properties: {
				moniker: 'moniker',
			},
			state: context.state,
		})
	})
})
