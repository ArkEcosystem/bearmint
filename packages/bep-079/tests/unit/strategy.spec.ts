import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { denominations } from '@bearmint/bep-006'
import { fakeAccountSerializer, fakeEventDispatcher, fakeMultiStore } from '@bearmint/bep-008'
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

	it('should handle the strategy', async (context) => {
		await makeStrategy({ Logger: console }).execute(
			undefined,
			context.account,
			denominations.reward,
		)

		expect(context.account.balances[denominations.reward].toString()).toStrictEqual('0')
	})
})
