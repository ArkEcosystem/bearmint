import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { Account } from '@bearmint/bep-013'

import {
	decreaseLockedBalance,
	increaseLockedBalance,
	multiplyLockedBalance,
} from '../../source/locked-balance.js'

describe<{
	account: Account
}>('Locked Balance', () => {
	beforeEach((context) => {
		context.account = {
			address: 'address',
			balances: {},
			lockedBalances: {},
			metadata: new Map(),
			nonce: BigInt(0),
			power: BigInt(0),
			stakes: {},
		}
	})

	it('should increase and decrease the account balance', (context) => {
		expect(context.account.lockedBalances['STAKE']).toStrictEqual(undefined)

		increaseLockedBalance(context.account, BigInt(1), 'STAKE')

		expect(context.account.lockedBalances['STAKE'].toString()).toStrictEqual('1')

		decreaseLockedBalance(context.account, BigInt(1), 'STAKE')

		expect(context.account.lockedBalances['STAKE'].toString()).toStrictEqual('0')
	})

	it('should increase the account balance by multiplying it', (context) => {
		expect(context.account.lockedBalances['STAKE']).toStrictEqual(undefined)

		increaseLockedBalance(context.account, BigInt(1), 'STAKE')

		expect(context.account.lockedBalances['STAKE'].toString()).toStrictEqual('1')

		multiplyLockedBalance(
			context.account,
			200, // 200% of the current value
			'STAKE',
		)

		expect(context.account.lockedBalances['STAKE'].toString()).toStrictEqual('2')
	})

	it('should decrease the account balance by multiplying it', (context) => {
		expect(context.account.lockedBalances['STAKE']).toStrictEqual(undefined)

		increaseLockedBalance(context.account, BigInt(2), 'STAKE')

		expect(context.account.lockedBalances['STAKE'].toString()).toStrictEqual('2')

		multiplyLockedBalance(
			context.account,
			50, // 50% of the current value
			'STAKE',
		)

		expect(context.account.lockedBalances['STAKE'].toString()).toStrictEqual('1')
	})
})
