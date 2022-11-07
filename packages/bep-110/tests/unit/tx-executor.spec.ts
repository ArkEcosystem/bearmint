import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should attach the moniker to the account', async (context) => {
		const { sender, tx } = await createTx(context)

		await expect(sender).toMatchProperties({
			properties: {
				moniker: undefined,
			},
			state: context.state,
		})

		await expect(await context.execute(tx)).toPassExecution()

		await expect(sender).toMatchProperties({
			properties: {
				moniker: 'moniker',
			},
			state: context.state,
		})
	})
})
