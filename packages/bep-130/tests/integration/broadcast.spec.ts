import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { getCollection } from '@bearmint/bep-126'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Integration', () => {
	setUp(beforeEach)

	it('should run through the entire lifecycle of processing the tx', async (context) => {
		const { tx } = await createTx(context)

		expect(
			await getCollection(
				context.state.getMultiStore().get('@bearmint/bep-126'),
				'e2abe831494bd6d8642810cb11e2d36944abb2206c40ac5f24be73d92258dfa9',
			),
		).toMatchSnapshot()

		await context.executeFull(tx)

		expect(
			await getCollection(
				context.state.getMultiStore().get('@bearmint/bep-126'),
				'e2abe831494bd6d8642810cb11e2d36944abb2206c40ac5f24be73d92258dfa9',
			),
		).toMatchSnapshot()
	})
})
