import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { Account } from '@bearmint/bep-013'

import {
	attachMetadata,
	forgetMetadata,
	getMetadata,
	hasMetadata,
	setMetadata,
} from '../../source/metadata.js'

describe<{
	account: Account
}>('Attributes', () => {
	beforeEach((context) => {
		context.account = {
			address: 'address',
			balances: {},
			lockedBalances: {},
			metadata: new Map(),
			nonce: BigInt(0),
			stakes: {},
		}
	})

	it('should mutate attributes', (context) => {
		expect(hasMetadata(context.account, 'key')).toBeFalse()

		setMetadata(context.account, 'key', 'value')

		expect(getMetadata(context.account, 'key')).toStrictEqual('value')
		expect(hasMetadata(context.account, 'key')).toBeTrue()

		forgetMetadata(context.account, 'key')

		expect(hasMetadata(context.account, 'key')).toBeFalse()
	})

	it('should append to an attribute', (context) => {
		attachMetadata(context.account, 'key', 1)

		expect(getMetadata(context.account, 'key')).toStrictEqual([1])

		attachMetadata(context.account, 'key', 2)

		expect(getMetadata(context.account, 'key')).toStrictEqual([1, 2])

		attachMetadata(context.account, 'key', 3)

		expect(getMetadata(context.account, 'key')).toStrictEqual([1, 2, 3])
	})
})
