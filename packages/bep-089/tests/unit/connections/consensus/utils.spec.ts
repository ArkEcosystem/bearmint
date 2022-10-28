import { makeContainer } from '@bearmint/bep-014'
import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { ContainerType } from '@bearmint/bep-013'

import {
	setCheckTxState,
	setExecuteTxState,
} from '../../../../source/connections/consensus/utils.js'

describe('Utils', () => {
	it('should set the CheckTx state', async () => {
		const container = makeContainer()

		expect(container.has(ContainerType.CheckTxState)).toBeFalse()

		setCheckTxState(container, 'state')

		expect(container.has(ContainerType.CheckTxState)).toBeTrue()
	})

	it('should set the ExecuteTx state', async () => {
		const container = makeContainer()

		expect(container.has(ContainerType.ExecuteTxState)).toBeFalse()

		setExecuteTxState(container, 'state')

		expect(container.has(ContainerType.ExecuteTxState)).toBeTrue()
	})
})
