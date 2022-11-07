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
import { canonicalizeJson, hexToBytes } from '@bearmint/bep-009'
import type { Container, StateStore, StrategyRegistry } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeState } from '@bearmint/bep-020'
import { makeAccountSerializer, makeAccountRepository } from '@bearmint/bep-022'
import { makeStrategyRegistry } from '@bearmint/bep-146'

import { makeStrategy as BEP79 } from '../../../bep-079/distribution/index.js'
import { makeStrategy as BEP80 } from '../../../bep-080/distribution/index.js'
import { makeStrategy as BEP81 } from '../../../bep-081/distribution/index.js'
import { makeStrategy as BEP82 } from '../../../bep-082/distribution/index.js'
import { makeRewarder } from '../../source/rewarder.js'

const validatorAddress = '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e'

describe<{
	container: Container
	state: StateStore
	strategyRegistry: StrategyRegistry
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
		context.strategyRegistry = makeStrategyRegistry()
		context.strategyRegistry.set('@bearmint/bep-078', '@bearmint/bep-079', BEP79)
		context.strategyRegistry.set('@bearmint/bep-078', '@bearmint/bep-080', BEP80)
		context.strategyRegistry.set('@bearmint/bep-078', '@bearmint/bep-081', BEP81)
		context.strategyRegistry.set('@bearmint/bep-078', '@bearmint/bep-082', BEP82)

		context.container.bindValue(ContainerType.CommittedState, context.state)
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
	})

	it('should exit early if the validator does not exist', async (context) => {
		context.state.setCandidateBlock({ header: { proposerAddress: hexToBytes(validatorAddress) } })

		await expect(() =>
			makeRewarder({
				StrategyRegistry: context.strategyRegistry,
			}).execute(context.state),
		).rejects.toThrow()
	})

	it('should increase the token balance of the validator', async (context) => {
		context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						'@bearmint/bep-078': {
							'*': {
								strategy: '@bearmint/bep-081',
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
		})
		context.state.setCandidateBlock({ header: { proposerAddress: hexToBytes(validatorAddress) } })

		const validator = await makeAccountSerializer({
			AddressFactory: fakeAddressFactory(),
			CommittedState: context.state,
			DeliverTxState: context.state,
			EventDispatcher: fakeEventDispatcher(),
		}).deserialize({
			address: 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr',
			balances: {
				GOLD: BigInt(0),
			},
			publicKey: validatorAddress,
			validator: { address: validatorAddress },
		})

		await context.state.getAccountRepository().index([validator])

		expect(
			canonicalizeJson(
				await makeRewarder({
					CommittedState: context.state,
					Container: context.container,
					Logger: { debug: () => {} },
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
				}).execute(context.state),
			),
		).toMatchSnapshot()
	})
})
