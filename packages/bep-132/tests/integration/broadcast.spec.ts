import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should transfer the NFT to the recipient if its owned by the minter', async (context) => {
		const { recipient, sender, tx } = await createTx(context)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(sender.address),
		).toStrictEqual(['74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276'])

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(recipient.address),
		).toStrictEqual([])

		await context.executeFull(tx)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(sender.address),
		).toStrictEqual([])

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(recipient.address),
		).toStrictEqual(['74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276'])
	})

	it('should transfer the NFT to the recipient if its owned by a buyer', async (context) => {
		const { recipient, sender, tx } = await createTx(context, undefined, true)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(sender.address),
		).toStrictEqual([])

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(recipient.address),
		).toStrictEqual(['74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276'])

		await context.executeFull(tx)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(sender.address),
		).toStrictEqual(['74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276'])

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(recipient.address),
		).toStrictEqual([])
	})
})
