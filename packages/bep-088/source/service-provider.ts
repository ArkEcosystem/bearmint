import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { Query } from './abci/query.js'
import { makeStakingServiceFactory } from './staking-service.js'
import { makeStrategy } from './strategy.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunctionSingleton(
				ContainerType.StakingServiceFactory,
				makeStakingServiceFactory,
			)

			cradle.StrategyRegistry.set('@bearmint/bep-087', '@bearmint/bep-088', makeStrategy)

			// State
			await cradle.CommittedState.getMultiStore().add('@bearmint/bep-088')

			// Tendermint ABCI Query
			cradle.QueryHandlerRegistry.add(Query)
		},
	}
}
