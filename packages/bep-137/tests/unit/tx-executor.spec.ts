import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should increase the NT balance', async (context) => {
		const { sender, tx } = await createTx(context)

		await expect(sender).toMatchBalance({
			amount: `${10e8}`,
			denomination: 'CACTUS',
			state: context.state,
		})

		await expect(await context.execute(tx)).toPassExecution()

		await expect(sender).toMatchBalance({
			amount: `${15e8}`,
			denomination: 'CACTUS',
			state: context.state,
		})
	})
})
