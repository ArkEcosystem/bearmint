import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { Query } from './abci/query.js'
import { makeStrategy } from './strategy.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.StrategyRegistry.set('@bearmint/bep-102', '@bearmint/bep-118', makeStrategy)

			// State
			await cradle.CommittedState.getMultiStore().add('@bearmint/bep-118')

			// Tendermint ABCI Query
			cradle.QueryHandlerRegistry.add(Query)
		},
	}
}
