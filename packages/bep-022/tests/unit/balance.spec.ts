import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { Account } from '@bearmint/bep-013'

import {
	assertPositiveBalance,
	decreaseBalance,
	increaseBalance,
	multiplyBalance,
} from '../../source/balance.js'

describe<{
	account: Account
}>('Balance', () => {
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

	it('should increase and decrease the account balance', (context) => {
		expect(context.account.balances['STAKE']).toStrictEqual(undefined)

		increaseBalance(context.account, BigInt(1), 'STAKE')

		expect(context.account.balances['STAKE'].toString()).toStrictEqual('1')

		decreaseBalance(context.account, BigInt(1), 'STAKE')

		expect(context.account.balances['STAKE'].toString()).toStrictEqual(BigInt(0).toString())
	})

	it('should increase the account balance by multiplying it', (context) => {
		expect(context.account.balances['STAKE']).toStrictEqual(undefined)

		increaseBalance(context.account, BigInt(1), 'STAKE')

		expect(context.account.balances['STAKE'].toString()).toStrictEqual('1')

		multiplyBalance(
			context.account,
			200, // 200% of the current value
			'STAKE',
		)

		expect(context.account.balances['STAKE'].toString()).toStrictEqual('2')
	})

	it('should decrease the account balance by multiplying it', (context) => {
		expect(context.account.balances['STAKE']).toStrictEqual(undefined)

		increaseBalance(context.account, BigInt(2), 'STAKE')

		expect(context.account.balances['STAKE'].toString()).toStrictEqual('2')

		multiplyBalance(
			context.account,
			50, // 50% of the current value
			'STAKE',
		)

		expect(context.account.balances['STAKE'].toString()).toStrictEqual('1')
	})

	it('should throw if the balance is negative', (context) => {
		expect(() => assertPositiveBalance(context.account, BigInt(-1))).toThrow('went negative')
	})
})
