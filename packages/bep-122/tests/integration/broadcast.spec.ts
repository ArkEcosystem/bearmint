import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { abci, BEP120File } from '@bearmint/bep-018'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { sender, tx } = await createTx(context)

		await context.state.setCommittedBlock(
			new abci.RequestBeginBlock({ header: { height: BigInt(11) } }),
		)

		await expect(sender).toBeValidator({
			attributes: {
				address: 'bef5560f63d6f9fe74a019dddfbadf99313900b9',
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

		await context.executeFull(tx)

		await expect(sender).toBeValidator({
			attributes: {
				address: 'bef5560f63d6f9fe74a019dddfbadf99313900b9',
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
