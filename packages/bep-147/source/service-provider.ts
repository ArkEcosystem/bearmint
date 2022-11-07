import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { QueryAccount } from './methods/account/filter.js'
import { QueryMilestone } from './methods/app/milestone.js'
import { QueryMilestones } from './methods/app/milestones.js'
import { QueryVersion } from './methods/app/version.js'
import { FilterPeer } from './methods/p2p/filter.js'
import { QueryState } from './methods/store.js'
import { QueryTx } from './methods/tx/filter.js'
import { EstimateTxGas } from './methods/tx/gas.js'
import { ListTxHandlers } from './methods/tx/handlers.js'
import { SimulateTx } from './methods/tx/simulate.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	/* c8 ignore start */
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		/* c8 ignore end */
		async register() {
			cradle.QueryHandlerRegistry.add(FilterPeer)
			cradle.QueryHandlerRegistry.add(QueryAccount)
			cradle.QueryHandlerRegistry.add(QueryMilestone)
			cradle.QueryHandlerRegistry.add(QueryMilestones)
			cradle.QueryHandlerRegistry.add(SimulateTx)
			cradle.QueryHandlerRegistry.add(EstimateTxGas)
			cradle.QueryHandlerRegistry.add(ListTxHandlers)
			cradle.QueryHandlerRegistry.add(QueryState)
			cradle.QueryHandlerRegistry.add(QueryTx)
			cradle.QueryHandlerRegistry.add(QueryVersion)
		},
	}
}
