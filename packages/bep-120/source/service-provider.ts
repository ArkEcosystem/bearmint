import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { Query } from './abci/query.js'
import { makeBEP88Listener } from './listeners/bep-088.js'
import { makeBEP104Listener } from './listeners/bep-104.js'
import { makeStrategy } from './strategy.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.StrategyRegistry.set('@bearmint/bep-102', '@bearmint/bep-120', makeStrategy)

			// State
			await cradle.CommittedState.getMultiStore().add('@bearmint/bep-120')

			// Tendermint ABCI Query
			cradle.QueryHandlerRegistry.add(Query)

			// Prevent elections of tombstoned validators
			cradle.EventDispatcher.listen(Event.ValidatorCandidateElecting, makeBEP88Listener)

			// Prevent stake increases for jailed validators
			cradle.EventDispatcher.listen(Event.TransactionAudited, makeBEP104Listener)
		},
	}
}
