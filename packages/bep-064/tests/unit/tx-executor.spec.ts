import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations } from '@bearmint/bep-006'
import { HANDLER } from '../../source/types.js'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should update the sender balances and store the lock', async (context) => {
		const { sender, tx } = await createTx(context)

		await expect(sender).toMatchBalance({
			amount: BigInt(1e8).toString(),
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

		await expect(await context.execute(tx)).toPassExecution()

		await expect(sender).toMatchBalance({
			amount: '0',
			denomination: denominations.token,
			state: context.state,
		})

		await expect(sender).toMatchLockedBalance({
			amount: BigInt(1e8).toString(),
			denomination: denominations.token,
			state: context.state,
		})

		expect(
			await context.state
				.getMultiStore()
				.get(HANDLER)
				.get(context.eventRecorder.events().attributes[0].value),
		).toMatchJsonBytes({
			hash: tx.hash,
			index: 0,
		})
	})
})
