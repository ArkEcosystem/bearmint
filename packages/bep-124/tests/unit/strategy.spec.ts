import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
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

const denominations = {
	gas: 'BEAR',
	reward: 'BEAR',
	stake: 'BEAR',
	token: 'BEAR',
}

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

		context.container.bindValue(ContainerType.CommittedState, context.state)

		context.account = {
			balances: {
				[denominations.reward]: BigInt(0),
			},
		} as AccountWithValidator
	})

	it('should reward 3 tokens if the consumed gas is greater than the fixed reward', async (context) => {
		expect(context.account.balances[denominations.reward].toString()).toStrictEqual('0')

		await makeStrategy({
			CommittedState: {
				getMilestone() {
					return {
						parameters: {
							denominations,
							modules: {
								mandatory: {
									'@bearmint/bep-124': {
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
			Logger: console,
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
		}).execute(
			{
				getConsumedGas() {
					return BigInt(3e8)
				},
				getMilestone() {
					return {
						parameters: {
							denominations,
							modules: {
								mandatory: {
									'@bearmint/bep-124': {
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

		expect(context.account.balances[denominations.reward].toString()).toStrictEqual(`${3e8}`)
	})

	it('should reward 2 tokens if the consumed gas is less than the fixed reward', async (context) => {
		expect(context.account.balances[denominations.reward].toString()).toStrictEqual('0')

		await makeStrategy({
			CommittedState: {
				getMilestone() {
					return {
						parameters: {
							denominations,
							modules: {
								mandatory: {
									'@bearmint/bep-124': {
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
			Logger: console,
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
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
									'@bearmint/bep-124': {
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

		expect(context.account.balances[denominations.reward].toString()).toStrictEqual(`${2e8}`)
	})

	it('should reward 2 tokens if the consumed gas is zero', async (context) => {
		expect(context.account.balances[denominations.reward].toString()).toStrictEqual('0')

		await makeStrategy({
			CommittedState: {
				getMilestone() {
					return {
						parameters: {
							denominations,
							modules: {
								mandatory: {
									'@bearmint/bep-124': {
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
			Logger: console,
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
		}).execute(
			{
				getConsumedGas() {
					return BigInt(0)
				},
				getMilestone() {
					return {
						parameters: {
							denominations,
							modules: {
								mandatory: {
									'@bearmint/bep-124': {
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

		expect(context.account.balances[denominations.reward].toString()).toStrictEqual(`${2e8}`)
	})

	it('should throw if the token and reward denomination are different', async (context) => {
		expect(context.account.balances[denominations.reward].toString()).toStrictEqual('0')

		await expect(() =>
			makeStrategy({
				CommittedState: context.container.resolve(ContainerType.CommittedState),
				Logger: console,
				ServiceProviderRepository: {
					get() {
						return {
							version() {
								return '0.0.0'
							},
						}
					},
				},
			}).execute(
				{
					getConsumedGas() {
						return BigInt(3e8)
					},
					getMilestone() {
						return {
							parameters: {
								denominations: {
									gas: 'BEAR',
									reward: 'GOLD',
									stake: 'BEAR',
									token: 'BEAR',
								},
								modules: {
									mandatory: {
										'@bearmint/bep-124': {
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
			),
		).rejects.toThrow('Expected the denomination for gas, reward and token to be the same.')

		expect(context.account.balances[denominations.reward].toString()).toStrictEqual('0')
	})

	it('should throw if the gas and reward denomination are different', async (context) => {
		expect(context.account.balances[denominations.reward].toString()).toStrictEqual('0')

		await expect(() =>
			makeStrategy({
				CommittedState: context.container.resolve(ContainerType.CommittedState),
				Logger: console,
				ServiceProviderRepository: {
					get() {
						return {
							version() {
								return '0.0.0'
							},
						}
					},
				},
			}).execute(
				{
					getConsumedGas() {
						return BigInt(3e8)
					},
					getMilestone() {
						return {
							parameters: {
								denominations: {
									gas: 'FIRE',
									reward: 'BEAR',
									stake: 'BEAR',
									token: 'BEAR',
								},
								modules: {
									mandatory: {
										'@bearmint/bep-124': {
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
			),
		).rejects.toThrow('Expected the denomination for gas, reward and token to be the same.')

		expect(context.account.balances[denominations.reward].toString()).toStrictEqual('0')
	})
})
