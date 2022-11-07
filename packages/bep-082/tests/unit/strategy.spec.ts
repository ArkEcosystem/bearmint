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
import type { AccountWithValidator, Container, StateStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeState } from '@bearmint/bep-020'
import { makeAccountRepository } from '@bearmint/bep-022'

import { makeStrategy } from '../../source/strategy.js'

describe<{
	account: AccountWithValidator
	container: Container
	state: StateStore
}>('Validator Rewarder', () => {
	beforeEach(async (context) => {
		context.container = makeContainer()
		context.state = await makeState(
			makeAccountRepository({
				AccountSerializer: fakeAccountSerializer(),
				AddressFactory: fakeAddressFactory(),
				EventDispatcher: fakeEventDispatcher(),
			}),
			await fakeMultiStore(),
		)

		context.container.bindValue(ContainerType.Logger, console)
		context.container.bindValue(ContainerType.ServiceProviderRepository, {
			get() {
				return {
					version() {
						return '0.0.0'
					},
				}
			},
		})
		context.container.bindValue(ContainerType.CommittedState, {
			getMilestone() {
				return {
					parameters: {
						denominations,
						modules: {
							mandatory: {
								'@bearmint/bep-078': {
									'*': {
										strategy: 'fixed',
									},
								},
								'@bearmint/bep-081': {
									'*': {
										amount: 2e8,
									},
								},
							},
						},
						transactions: {},
					},
				}
			},
		})

		context.account = {
			balances: {
				[denominations.reward]: BigInt(0),
			},
		} as AccountWithValidator
	})

	it('should handle the [fixedWithGas] strategy', async (context) => {
		await makeStrategy({
			Container: context.container,
			Logger: console,
		}).execute(
			{
				getConsumedGas() {
					return BigInt(1e8)
				},
				getMilestone() {
					return {
						parameters: {
							denominations,
							modules: {
								mandatory: {
									'@bearmint/bep-078': {
										'*': {
											strategy: 'fixed',
										},
									},
									'@bearmint/bep-081': {
										'*': {
											amount: 2e8,
										},
									},
								},
							},
							transactions: {},
						},
					}
				},
			},
			context.account,
			denominations.reward,
		)

		expect(context.account.balances[denominations.reward].toString()).toStrictEqual(
			(3e8).toString(),
		)
	})
})
