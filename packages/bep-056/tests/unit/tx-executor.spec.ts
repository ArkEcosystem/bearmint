import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should decrease the sender balance', async (context) => {
		const { sender, tx } = await createTx(context)

		await expect(sender).toMatchBalance({
			amount: `${2e8}`,
			denomination: denominations.token,
			state: context.state,
		})

		await expect(await context.execute(tx)).toPassExecution()

		await expect(sender).toMatchBalance({
			amount: `${1e8}`,
			denomination: denominations.token,
			state: context.state,
		})
	})
})
