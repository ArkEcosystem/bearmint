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
import type { Account, StateStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { BEP59Strategy, BEP88Validator } from '@bearmint/bep-018'
import { makeState } from '@bearmint/bep-020'
import { makeAccountRepository } from '@bearmint/bep-022'
import { makeStakingServiceFactory } from '@bearmint/bep-088'

import { makeStrategy } from '../../source/strategy.js'

const validatorAddress = '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e'

describe<{
	delegator1: Account
	delegator2: Account
	state: StateStore
	validator: Account
}>('BEP85', () => {
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
		container.bindValue(ContainerType.CommittedState, context.state)
		container.bindValue(ContainerType.ExecuteTxState, context.state)

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
					strategy: '@bearmint/bep-085',
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

	it('should handle the strategy', async (context) => {
		await makeStrategy({
			Logger: console,
			StakingServiceFactory: makeStakingServiceFactory({ DataSink: { put() {} } }),
		}).execute(
			context.state,
			context.validator,
			context.delegator1,
			BigInt(2e8),
			denominations.reward,
		)

		await makeStrategy({
			Logger: console,
			StakingServiceFactory: makeStakingServiceFactory({ DataSink: { put() {} } }),
		}).execute(
			context.state,
			context.validator,
			context.delegator2,
			BigInt(2e8),
			denominations.reward,
		)

		expect(context.delegator1.balances[denominations.reward].toString()).toStrictEqual('50000000')
		expect(context.delegator2.balances[denominations.reward].toString()).toStrictEqual('50000000')
	})
})
