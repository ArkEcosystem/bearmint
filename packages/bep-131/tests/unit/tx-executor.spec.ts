import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { BEP131Token } from '@bearmint/bep-018'
import { getCollection, HANDLER } from '@bearmint/bep-126'

import { getNFT } from '../../source/utils.js'
import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should add the NFT to the account of the minter', async (context) => {
		const { sender, tx } = await createTx(context)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-126').getListHex(sender.address),
		).toStrictEqual(['a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85'])

		expect(
			await getCollection(
				context.state.getMultiStore().get('@bearmint/bep-126'),
				'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
			),
		).toMatchSnapshot()

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await getCollection(
				context.state.getMultiStore().get('@bearmint/bep-126'),
				'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
			),
		).toMatchSnapshot()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-126').getListHex(sender.address),
		).toStrictEqual(['a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85'])

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(sender.address),
		).toStrictEqual(['f013165441c2d9cc7ea26cfe5cd7d9cff50b06384a772d012ba92b0b65ca694a'])

		expect(
			await getNFT(
				context.state.getMultiStore().get('@bearmint/bep-131'),
				'f013165441c2d9cc7ea26cfe5cd7d9cff50b06384a772d012ba92b0b65ca694a',
			),
		).toStrictEqual(
			BEP131Token.fromJson({
				collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				id: 1,
				hash: 'f013165441c2d9cc7ea26cfe5cd7d9cff50b06384a772d012ba92b0b65ca694a',
				owner: sender.address,
			}),
		)
	})

	it('should add the NFT to the account of the recipient', async (context) => {
		const { recipient, sender, tx } = await createTx(context, undefined, true)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-126').getListHex(sender.address),
		).toStrictEqual(['a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85'])

		expect(
			await getCollection(
				context.state.getMultiStore().get('@bearmint/bep-126'),
				'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
			),
		).toMatchSnapshot()

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await getCollection(
				context.state.getMultiStore().get('@bearmint/bep-126'),
				'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
			),
		).toMatchSnapshot()

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-126').getListHex(sender.address),
		).toStrictEqual(['a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85'])

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-131').getListHex(recipient.address),
		).toStrictEqual(['f013165441c2d9cc7ea26cfe5cd7d9cff50b06384a772d012ba92b0b65ca694a'])

		expect(
			await getNFT(
				context.state.getMultiStore().get('@bearmint/bep-131'),
				'f013165441c2d9cc7ea26cfe5cd7d9cff50b06384a772d012ba92b0b65ca694a',
			),
		).toStrictEqual(
			BEP131Token.fromJson({
				collection: 'a77d3cda10319ef1453ed69bfa8aef4c4c554a589d68a43d2e3eb63639bb3d85',
				id: 1,
				hash: 'f013165441c2d9cc7ea26cfe5cd7d9cff50b06384a772d012ba92b0b65ca694a',
				owner: recipient.address,
			}),
		)
	})
})
