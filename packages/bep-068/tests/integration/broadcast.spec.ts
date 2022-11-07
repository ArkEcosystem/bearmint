import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { BEP68MsgOp } from '@bearmint/bep-018'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context)

		await context.executeFull(tx)

		expect(
			await context.state.getMultiStore().get('@bearmint/bep-068').getListHex(sender.address),
		).toStrictEqual([primaryKey])

		expect(
			BEP68MsgOp.fromBinary(
				await context.state.getMultiStore().get('@bearmint/bep-068').get(primaryKey),
			).toJson(),
		).toStrictEqual({
			data: 'VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZw==',
			memo: 'Hello, World!',
			mimeType: 'application/json',
		})
	})
})
