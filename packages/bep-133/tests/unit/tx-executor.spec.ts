import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { BEP131Token } from '@bearmint/bep-018'
import { getCollection } from '@bearmint/bep-126'
import { getNFT } from '@bearmint/bep-131'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should remove the NFT from the owner account if the current owner is the minter', async (context) => {
		const { sender, tx } = await createTx(context)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(sender.address),
		).toStrictEqual(['74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276'])

		expect(
			(
				await getCollection(
					context.state.getMultiStore().get('@bearmint/bep-126'),
					'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				)
			).tokens,
		).toStrictEqual(['74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276'])

		expect(
			await getNFT(
				context.state.getMultiStore().get('@bearmint/bep-131'),
				'74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
			),
		).toStrictEqual(
			BEP131Token.fromJson({
				collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				id: 0,
				owner: sender.address,
			}),
		)

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(sender.address),
		).toStrictEqual([])

		expect(
			(
				await getCollection(
					context.state.getMultiStore().get('@bearmint/bep-126'),
					'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				)
			).tokens,
		).toStrictEqual([])

		await expect(() =>
			getNFT(
				context.state.getMultiStore().get('@bearmint/bep-131'),
				'74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
			),
		).rejects.toThrow('Expected value which is "non-null and non-undefined".')
	})

	it('should remove the NFT from the owner account if the current owner is someone else than the minter', async (context) => {
		const { recipient, tx } = await createTx(context, undefined, true)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(recipient.address),
		).toStrictEqual(['74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276'])

		expect(
			(
				await getCollection(
					context.state.getMultiStore().get('@bearmint/bep-126'),
					'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				)
			).tokens,
		).toStrictEqual(['74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276'])

		expect(
			await getNFT(
				context.state.getMultiStore().get('@bearmint/bep-131'),
				'74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
			),
		).toStrictEqual(
			BEP131Token.fromJson({
				collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				id: 0,
				owner: recipient.address,
			}),
		)

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(recipient.address),
		).toStrictEqual([])

		expect(
			(
				await getCollection(
					context.state.getMultiStore().get('@bearmint/bep-126'),
					'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				)
			).tokens,
		).toStrictEqual([])

		await expect(() =>
			getNFT(
				context.state.getMultiStore().get('@bearmint/bep-131'),
				'74ca727ecb1887dc3b51711414fe69703194ab50f4496b8762020fbe34e9c276',
			),
		).rejects.toThrow('Expected value which is "non-null and non-undefined".')
	})
})
