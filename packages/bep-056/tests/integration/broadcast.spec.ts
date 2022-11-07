import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { sender, tx } = await createTx(context)

		await expect(sender).toMatchBalances({
			balances: {
				[denominations.token]: `${2e8}`,
				[denominations.gas]: `${1e8}`,
			},
			state: context.state,
		})

		await context.executeFull(tx)

		await expect(sender).toMatchBalances({
			balances: {
				[denominations.token]: `${1e8}`,
				[denominations.gas]: '0',
			},
			state: context.state,
		})
	})
})
