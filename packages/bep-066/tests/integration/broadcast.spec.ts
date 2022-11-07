import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { lockHash, sender, tx } = await createTx(context)

		await expect(sender).toMatchBalance({
			amount: '0',
			denomination: denominations.token,
			state: context.state,
		})

		await expect(sender).toMatchLockedBalance({
			amount: '1',
			denomination: denominations.token,
			state: context.state,
		})

		expect(await context.state.getMultiStore().get('@bearmint/bep-064').has(lockHash)).toBeTrue()

		await context.executeFull(tx)

		await expect(sender).toMatchBalance({
			amount: '1',
			denomination: denominations.token,
			state: context.state,
		})

		await expect(sender).toMatchLockedBalance({
			amount: '0',
			denomination: denominations.token,
			state: context.state,
		})

		await expect(sender).toMatchMetadata({
			attributes: {},
			state: context.state,
		})

		expect(await context.state.getMultiStore().get('@bearmint/bep-064').has(lockHash)).toBeFalse()
	})
})
