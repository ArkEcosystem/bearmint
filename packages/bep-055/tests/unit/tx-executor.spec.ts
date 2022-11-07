import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import type { TxTestContext } from '@bearmint/bep-006'
import { denominations } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should decrease the sender balance and increase the recipient balance', async (context) => {
		const { recipient, sender, tx } = await createTx(context)

		await expect(sender).toMatchBalance({
			amount: `${3e8}`,
			denomination: denominations.token,
			state: context.state,
		})

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

		await expect(await context.execute(tx)).toPassExecution()

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

		expect(context.receipt).toMatchReceiptLogs([
			{
				event: 'BalanceDecreased',
				args: {
					_modelKey: sender.address,
					_modelType: 'account',
					_module: '@bearmint/bep-055',
					_opIndex: '0',
					denomination: 'BEAR',
					amount: '200000000',
				},
			},
			{
				event: 'BalanceIncreased',
				args: {
					_modelKey: recipient.address,
					_modelType: 'account',
					_module: '@bearmint/bep-055',
					_opIndex: '0',
					denomination: 'BEAR',
					amount: '200000000',
				},
			},
		])
	})
})
