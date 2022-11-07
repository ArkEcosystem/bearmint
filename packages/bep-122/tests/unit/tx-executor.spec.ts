import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { BEP120File } from '@bearmint/bep-018'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should mark the validator as no longer jailed', async (context) => {
		const { sender, tx } = await createTx(context)

		await expect(sender).toBeValidator({
			attributes: {
				address: 'bef5560f63d6f9fe74a019dddfbadf99313900b9',
				delegators: {},
				power: '0',
				publicKey: '02188c4160b824e3eebab316434ee0b4e7aab254391e84d4a4f66dddc49c879247',
			},
			state: context.state,
			stakingService: context.stakingService,
		})

		expect(
			BEP120File.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-120').get(sender.address),
			).toJson(),
		).toStrictEqual({
			count: 1,
			jailed: true,
			records: [
				{
					misbehavior: {},
					sentence: {
						end: '10',
					},
				},
			],
		})

		await expect(await context.execute(tx)).toPassExecution()

		await expect(sender).toBeValidator({
			attributes: {
				address: 'bef5560f63d6f9fe74a019dddfbadf99313900b9',
				delegators: {},
				power: '0',
				publicKey: '02188c4160b824e3eebab316434ee0b4e7aab254391e84d4a4f66dddc49c879247',
			},
			state: context.state,
			stakingService: context.stakingService,
		})

		expect(
			BEP120File.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-120').get(sender.address),
			).toJson(),
		).toStrictEqual({
			count: 1,
			records: [
				{
					misbehavior: {},
					sentence: {
						end: '10',
					},
				},
			],
		})
	})
})
