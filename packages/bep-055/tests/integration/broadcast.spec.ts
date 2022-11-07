import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { recipient, sender, tx } = await createTx(context)

		await expect(sender).toMatchBalance({
			amount: `${3e8}`,
			denomination: denominations.token,
			state: context.state,
		})

		await expect(recipient).toMatchBalance({
			amount: '0',
			denomination: denominations.token,
			state: context.state,
		})

		await context.executeFull(tx)

		await expect(sender).toMatchBalance({
			amount: `${1e8}`,
			denomination: denominations.token,
			state: context.state,
		})

		await expect(recipient).toMatchBalance({
			amount: `${2e8}`,
			denomination: denominations.token,
			state: context.state,
		})
	})
})
