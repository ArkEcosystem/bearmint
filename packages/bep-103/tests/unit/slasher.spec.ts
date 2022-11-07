import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { denominations, mnemonics } from '@bearmint/bep-006'
import { fakeAccountSerializer, fakeAddressFactory, fakeStateStore } from '@bearmint/bep-008'
import { hexToBytes } from '@bearmint/bep-009'
import type {
	Account,
	AccountWithValidator,
	Container,
	StateStore,
	StrategyRegistry,
} from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { abci, BEP88Validator } from '@bearmint/bep-018'
import { makeKeyPairFactory } from '@bearmint/bep-032'
import { makeStakingServiceFactory } from '@bearmint/bep-088'
import { makeStrategyRegistry } from '@bearmint/bep-146'
import { generateMnemonic } from '@scure/bip39'
import { wordlist } from '@scure/bip39/wordlists/english.js'

import { makeStrategy as BEP119 } from '../../../bep-119/distribution/index.js'
import { makeSlasher } from '../../source/slasher.js'

async function createValidatorAccount({
	container,
	moniker,
	power,
	state,
}: {
	container: Container
	moniker: string
	power: bigint
	state: StateStore
}) {
	const publicKey = (
		await makeKeyPairFactory().fromMnemonic(generateMnemonic(wordlist))
	).toPublicKey()
	const address = (await fakeAddressFactory().fromPublicKey(publicKey)).toString()

	const result = await fakeAccountSerializer({ container, state }).deserialize({
		address,
		publicKey: publicKey.toString(),
	})
	result.balances[denominations.stake] = power
	result.lockedBalances[denominations.stake] = power
	result.moniker = moniker
	result.stakes[moniker] = power
	result.validator = {
		address: publicKey.toString(),
		power,
		publicKey: publicKey.toString(),
	}

	await state
		.getMultiStore()
		.get('@bearmint/bep-088')
		.set(
			address,
			new BEP88Validator({
				address,
				delegators: {
					[address]: BigInt(50),
				},
			}).toBinary(),
		)

	await state.getAccountRepository().index([result])

	return result as AccountWithValidator
}

describe<{
	account: Account
	container: Container
	state: StateStore
	strategyRegistry: StrategyRegistry
}>('Slash Delegators', () => {
	beforeEach(async (context) => {
		context.container = makeContainer()

		context.state = await fakeStateStore({
			accountSerializer: fakeAccountSerializer({ container: context.container }),
			container: context.container,
		})
		await context.state.getMultiStore().add('@bearmint/bep-088')
		await context.state.getMultiStore().add('@bearmint/bep-119')

		context.container.bindValue(ContainerType.CommittedState, context.state)
		context.container.bindValue(ContainerType.DataSink, { put() {} })
		context.container.bindValue(
			ContainerType.StakingServiceFactory,
			makeStakingServiceFactory({ DataSink: { put() {} } }),
		)
		context.container.bindValue(ContainerType.ServiceProviderRepository, {
			get() {
				return {
					version() {
						return '0.0.0'
					},
				}
			},
		})
		context.strategyRegistry = makeStrategyRegistry()
		context.strategyRegistry.set('@bearmint/bep-103', '@bearmint/bep-119', BEP119)

		context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						'@bearmint/bep-103': {
							'*': {
								strategies: {
									'@bearmint/bep-119': [
										abci.MisbehaviorType.UNKNOWN,
										abci.MisbehaviorType.DUPLICATE_VOTE,
										abci.MisbehaviorType.LIGHT_CLIENT_ATTACK,
									],
								},
							},
						},
						'@bearmint/bep-119': {
							'*': {
								punishments: [
									{
										denomination: denominations.stake,
										percentage: 75,
										type: abci.MisbehaviorType.UNKNOWN,
									},
									{
										denomination: denominations.stake,
										percentage: 50,
										type: abci.MisbehaviorType.DUPLICATE_VOTE,
									},
									{
										denomination: denominations.stake,
										percentage: 25,
										type: abci.MisbehaviorType.LIGHT_CLIENT_ATTACK,
									},
								],
							},
						},
					},
				},
				transactions: {},
			},
		})

		context.account = await createValidatorAccount({
			container: context.container,
			moniker: 'buckley',
			power: BigInt(50),
			state: context.state,
		})
	})

	it('should skip slashing if the type is not a number', async (context) => {
		await expect(context.account).toMatchStake({
			amount: '50',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '50',
			state: context.state,
		})

		await makeSlasher({
			CommittedState: context.container.resolve(ContainerType.CommittedState),
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
		}).execute(context.state, [
			new abci.Misbehavior({
				type: '1',
				validator: { address: hexToBytes(context.account.publicKey) },
			}),
		])

		await expect(context.account).toMatchStake({
			amount: '50',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '50',
			state: context.state,
		})
	})

	it('should skip slashing if the type is unknown', async (context) => {
		await expect(context.account).toMatchStake({
			amount: '50',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '50',
			state: context.state,
		})

		await makeSlasher({
			CommittedState: context.container.resolve(ContainerType.CommittedState),
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
		}).execute(context.state, [
			new abci.Misbehavior({
				type: 3,
				validator: { address: hexToBytes(context.account.publicKey) },
			}),
		])

		await expect(context.account).toMatchStake({
			amount: '50',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '50',
			state: context.state,
		})
	})

	it('should slash all delegators of a validator that performed an unknown misbehaviour', async (context) => {
		await expect(context.account).toMatchStake({
			amount: '50',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '50',
			state: context.state,
		})

		await makeSlasher({
			CommittedState: context.container.resolve(ContainerType.CommittedState),
			Container: context.container,
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
			StrategyRegistry: context.strategyRegistry,
		}).execute(context.state, [
			new abci.Misbehavior({
				type: 0,
				validator: { address: hexToBytes(context.account.publicKey) },
			}),
		])

		await expect(context.account).toMatchStake({
			amount: '37',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '37',
			state: context.state,
		})
	})

	it('should slash all delegators of a validator that performed a duplicate vote', async (context) => {
		await expect(context.account).toMatchStake({
			amount: '50',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '50',
			state: context.state,
		})

		await makeSlasher({
			CommittedState: context.container.resolve(ContainerType.CommittedState),
			Container: context.container,
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
			StrategyRegistry: context.strategyRegistry,
		}).execute(context.state, [
			new abci.Misbehavior({
				type: 1,
				validator: { address: hexToBytes(context.account.publicKey) },
			}),
		])

		await expect(context.account).toMatchStake({
			amount: '25',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '25',
			state: context.state,
		})
	})

	it('should slash all delegators of a validator that performed a light client attack', async (context) => {
		await expect(context.account).toMatchStake({
			amount: '50',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '50',
			state: context.state,
		})

		await makeSlasher({
			CommittedState: context.container.resolve(ContainerType.CommittedState),
			Container: context.container,
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
			StrategyRegistry: context.strategyRegistry,
		}).execute(context.state, [
			new abci.Misbehavior({
				type: 2,
				validator: { address: hexToBytes(context.account.publicKey) },
			}),
		])

		await expect(context.account).toMatchStake({
			amount: '12',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '12',
			state: context.state,
		})
	})

	it('should slash if the delegator and validator are different accounts', async (context) => {
		const delegator = await fakeAccountSerializer().deserialize({
			address: (await fakeAddressFactory().fromMnemonic(mnemonics[1])).toString(),
			publicKey: (await makeKeyPairFactory().fromMnemonic(mnemonics[1])).toPublicKey().toString(),
		})
		delegator.balances[denominations.stake] = BigInt(0)
		delegator.lockedBalances[denominations.stake] = BigInt(50)
		delegator.stakes[context.account.moniker] = BigInt(50)

		await context.state
			.getMultiStore()
			.get('@bearmint/bep-088')
			.set(
				context.account.address,
				new BEP88Validator({
					address: context.account.address,
					delegators: {
						[delegator.address]: BigInt(50),
					},
				}).toBinary(),
			)

		await context.state.getAccountRepository().index([delegator])

		await context.state
			.getMultiStore()
			.get('@bearmint/bep-088')
			.set(
				context.account.address,
				new BEP88Validator({
					address: context.account.address,
					delegators: {
						[delegator.address]: BigInt(50),
					},
				}).toBinary(),
			)

		await context.state.getAccountRepository().index([context.account])

		await expect(delegator).toMatchStake({
			amount: '50',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '50',
			state: context.state,
		})

		await makeSlasher({
			CommittedState: context.container.resolve(ContainerType.CommittedState),
			Container: context.container,
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
			StrategyRegistry: context.strategyRegistry,
		}).execute(context.state, [
			new abci.Misbehavior({
				type: 2,
				validator: { address: hexToBytes(context.account.publicKey) },
			}),
		])

		await expect(delegator).toMatchStake({
			amount: '12',
			moniker: 'buckley',
			state: context.state,
		})

		await expect('buckley').toMatchPower({
			amount: '12',
			state: context.state,
		})
	})
})
