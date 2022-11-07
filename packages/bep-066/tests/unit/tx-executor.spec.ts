import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should claim the locked funds and update the state of all parties', async (context) => {
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

		await expect(await context.execute(tx)).toPassExecution()

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

	it('should fail to refund the lock twice', async (context) => {
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

		await expect(await context.execute(tx)).toPassExecution()

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

		await expect(await context.execute(tx)).toFailExecution(
			'Expected value which is "non-null and non-undefined".',
		)
	})
})
