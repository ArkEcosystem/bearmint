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
import { hexToBytes } from '@bearmint/bep-009'
import type { Account, Container, StateStore, StrategyRegistry } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { BEP59Strategy, BEP88Validator } from '@bearmint/bep-018'
import { makeState } from '@bearmint/bep-020'
import { makeAccountRepository } from '@bearmint/bep-022'
import { makeStakingServiceFactory } from '@bearmint/bep-088'
import { makeStrategyRegistry } from '@bearmint/bep-146'

import { makeStrategy as BEP84 } from '../../../bep-084/distribution/index.js'
import { makeStrategy as BEP85 } from '../../../bep-085/distribution/index.js'
import { makeStrategy as BEP86 } from '../../../bep-086/distribution/index.js'
import { makeRewarder } from '../../source/rewarder.js'

const validatorAddress = '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e'

describe<{
	container: Container
	delegator1: Account
	delegator2: Account
	state: StateStore
	strategyRegistry: StrategyRegistry
	validator: Account
}>('Delegator Rewarder', () => {
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
		context.strategyRegistry = makeStrategyRegistry()
		context.strategyRegistry.set('@bearmint/bep-083', '@bearmint/bep-084', BEP84)
		context.strategyRegistry.set('@bearmint/bep-083', '@bearmint/bep-085', BEP85)
		context.strategyRegistry.set('@bearmint/bep-083', '@bearmint/bep-086', BEP86)

		context.container.bindValue(ContainerType.Logger, console)
		context.container.bindValue(ContainerType.DeliverTxState, context.state)
		context.container.bindValue(
			ContainerType.StakingServiceFactory,
			makeStakingServiceFactory({ DataSink: { put() {} } }),
		)

		context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: { mandatory: {} },
				transactions: {},
			},
		})

		context.state.setCandidateBlock({ header: { proposerAddress: hexToBytes(validatorAddress) } })

		context.delegator1 = await fakeAccountSerializer().deserialize({
			address: 'bear1yenxkn0ln2se57zfsxprgua9fz3fvqwuj9twxq83vhvqtw6nn4ss6xhfdx',
		})
		context.delegator1.balances['GOLD'] = BigInt(0)
		context.delegator1.stakes['buckley'] = BigInt(80e8)

		context.delegator2 = await fakeAccountSerializer().deserialize({
			address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
		})
		context.delegator2.balances['GOLD'] = BigInt(0)
		context.delegator2.stakes['buckley'] = BigInt(20e8)

		context.validator = await fakeAccountSerializer().deserialize({
			address: 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
			publicKey: validatorAddress,
		})
		context.validator.balances['GOLD'] = BigInt(2e8)
		context.validator.moniker = 'buckley'
		context.validator.validator = {
			address: validatorAddress,
		}

		await context.state.getMultiStore().add('@bearmint/bep-059')
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-059')
			.set(
				context.validator.address,
				new BEP59Strategy({
					strategyArgs: '50',
					strategy: '@bearmint/bep-086',
				}).toBinary(),
			)

		await context.state.getMultiStore().add('@bearmint/bep-088')
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-088')
			.set(
				context.validator.address,
				new BEP88Validator({
					address: validatorAddress,
					delegators: {
						[context.delegator1.address]: BigInt(80e8),
						[context.delegator2.address]: BigInt(20e8),
					},
				}).toBinary(),
			)

		await context.state
			.getAccountRepository()
			.index([context.delegator1, context.delegator2, context.validator])
	})

	it('should exit early if there are no delegators', async (context) => {
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-088')
			.set(
				context.validator.address,
				new BEP88Validator({
					address: validatorAddress,
					delegators: {},
				}).toBinary(),
			)

		await context.state.getAccountRepository().index([context.validator])

		expect(
			await makeRewarder({
				Container: context.container,
				Logger: { debug: () => {} },
				StrategyRegistry: context.strategyRegistry,
				StakingServiceFactory: makeStakingServiceFactory({ DataSink: { put() {} } }),
			}).execute(context.state, BigInt(2e8)),
		).toHaveLength(0)
	})

	it('should throw if the strategy handler does not exist', async (context) => {
		context.validator.metadata = {
			'@bearmint/bep-059': {
				percentage: 50,
				strategy: 'borked',
			},
		}

		await context.state.getAccountRepository().index([context.validator])

		await expect(() =>
			makeRewarder({
				Container: context.container,
				Logger: { debug: () => {} },
				StrategyRegistry: context.strategyRegistry,
			}).execute(context.state, BigInt(2e8)),
		).rejects.toThrow()
	})

	it('should not distribute rewards when the mode is `standard`', async (context) => {
		context.validator.stakes[context.validator.moniker] = BigInt(80e8)

		await context.state
			.getMultiStore()
			.get('@bearmint/bep-088')
			.set(
				context.validator.address,
				new BEP88Validator({
					address: validatorAddress,
					delegators: {
						[context.validator.address]: BigInt(80e8),
					},
				}).toBinary(),
			)

		await context.state.getAccountRepository().index([context.validator])

		expect(context.delegator1.balances['GOLD'].toString()).toStrictEqual('0')
		expect(context.delegator2.balances['GOLD'].toString()).toStrictEqual('0')
		expect(context.validator.balances['GOLD'].toString()).toStrictEqual(`${2e8}`)

		expect(
			await makeRewarder({
				Container: context.container,
				Logger: { debug: () => {} },
				StrategyRegistry: context.strategyRegistry,
				StakingServiceFactory: makeStakingServiceFactory({ DataSink: { put() {} } }),
			}).execute(context.state, BigInt(2e8)),
		).toMatchSnapshot()

		expect(context.delegator1.balances['GOLD'].toString()).toStrictEqual('0')
		expect(context.delegator2.balances['GOLD'].toString()).toStrictEqual('0')
		expect(context.validator.balances['GOLD'].toString()).toStrictEqual(`${2e8}`)
	})

	it('should distribute rewards when the mode is `delegated`', async (context) => {
		expect(context.delegator1.balances['GOLD'].toString()).toStrictEqual('0')
		expect(context.delegator2.balances['GOLD'].toString()).toStrictEqual('0')
		expect(context.validator.balances['GOLD'].toString()).toStrictEqual(`${2e8}`)

		expect(
			await makeRewarder({
				Container: context.container,
				Logger: { debug: () => {} },
				StrategyRegistry: context.strategyRegistry,
				StakingServiceFactory: makeStakingServiceFactory({ DataSink: { put() {} } }),
			}).execute(context.state, BigInt(2e8)),
		).toMatchSnapshot()

		expect(
			(
				await context.state
					.getAccountRepository()
					.findByAddress('bear1yenxkn0ln2se57zfsxprgua9fz3fvqwuj9twxq83vhvqtw6nn4ss6xhfdx')
			).balances['GOLD'].toString(),
		).toStrictEqual('80000000')

		expect(
			(
				await context.state
					.getAccountRepository()
					.findByAddress('bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3')
			).balances['GOLD'].toString(),
		).toStrictEqual('20000000')

		expect(
			(
				await context.state
					.getAccountRepository()
					.findByAddress('bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr')
			).balances['GOLD'].toString(),
		).toStrictEqual(`${1e8}`)
	})
})
