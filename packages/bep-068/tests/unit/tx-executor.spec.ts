import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { BEP68MsgOp } from '@bearmint/bep-018'
import { HANDLER } from '../../source/types.js'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should attach the data to the sender', async (context) => {
		const { primaryKey, sender, tx } = await createTx(context)

		await expect(await context.execute(tx)).toPassExecution()

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
