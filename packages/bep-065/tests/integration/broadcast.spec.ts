import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { lockHash, recipient: benefactor, sender: beneficiary, tx } = await createTx(context)

		await expect(beneficiary).toMatchBalance({
			amount: '0',
			denomination: denominations.token,
			state: context.state,
		})

		await expect(benefactor).toMatchBalance({
			amount: '0',
			denomination: denominations.token,
			state: context.state,
		})

		await expect(benefactor).toMatchLockedBalance({
			amount: BigInt(1e8).toString(),
			denomination: denominations.token,
			state: context.state,
		})

		expect(await context.state.getMultiStore().get('@bearmint/bep-064').has(lockHash)).toBeTrue()

		await context.executeFull(tx)

		await expect(beneficiary).toMatchBalance({
			amount: BigInt(1e8).toString(),
			denomination: denominations.token,
			state: context.state,
		})

		await expect(benefactor).toMatchBalance({
			amount: '0',
			denomination: denominations.token,
			state: context.state,
		})

		await expect(benefactor).toMatchLockedBalance({
			amount: '0',
			denomination: denominations.token,
			state: context.state,
		})

		expect(await context.state.getMultiStore().get('@bearmint/bep-064').has(lockHash)).toBeFalse()
	})
})
