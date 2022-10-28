import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { denominations } from '@bearmint/bep-006'
import {
	fakeAccountSerializer,
	fakeAddressFactory,
	fakeEventDispatcher,
	fakeMultiStore,
} from '@bearmint/bep-008'
import type { AccountWithValidator, StateStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeState } from '@bearmint/bep-020'
import { makeAccountRepository } from '@bearmint/bep-022'

import { makeStrategy } from '../../source/strategy.js'

describe<{ account: AccountWithValidator; state: StateStore }>('Validator Rewarder', () => {
	beforeEach(async (context) => {
		const container = makeContainer()
		context.state = await makeState(
			makeAccountRepository({
				AccountSerializer: fakeAccountSerializer(),
				AddressFactory: fakeAddressFactory(),
				EventDispatcher: fakeEventDispatcher(),
			}),
			await fakeMultiStore(),
		)

		container.bindValue(ContainerType.ExecuteTxState, context.state)

		context.account = {
			balances: {
				[denominations.reward]: BigInt(0),
			},
		} as AccountWithValidator
	})

	it('should increase the balance if the consumed gas is greater than 0', async (context) => {
		await makeStrategy({
			Logger: console,
		}).execute(
			{
				getConsumedGas() {
					return BigInt(1)
				},
			},
			context.account,
			denominations.reward,
		)

		expect(context.account.balances[denominations.reward].toString()).toStrictEqual('1')
	})

	it('should not increase the balance if the consumed gas is 0', async (context) => {
		await makeStrategy({
			Logger: console,
		}).execute(
			{
				getConsumedGas() {
					return BigInt(0)
				},
			},
			context.account,
			denominations.reward,
		)

		expect(context.account.balances[denominations.reward].toString()).toStrictEqual('0')
	})
})
