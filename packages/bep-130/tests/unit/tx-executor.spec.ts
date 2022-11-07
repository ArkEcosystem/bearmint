import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { getCollection } from '@bearmint/bep-126'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Executor', () => {
	setUp(beforeEach)

	it('should transfer the collection to the recipient and remove it from the sender', async (context) => {
		const { tx } = await createTx(context)

		expect(
			await getCollection(
				context.state.getMultiStore().get('@bearmint/bep-126'),
				'e2abe831494bd6d8642810cb11e2d36944abb2206c40ac5f24be73d92258dfa9',
			),
		).toMatchSnapshot()

		await expect(await context.execute(tx)).toPassExecution()

		expect(
			await getCollection(
				context.state.getMultiStore().get('@bearmint/bep-126'),
				'e2abe831494bd6d8642810cb11e2d36944abb2206c40ac5f24be73d92258dfa9',
			),
		).toMatchSnapshot()
	})
})
