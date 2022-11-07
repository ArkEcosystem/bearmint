import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { Query } from './abci/query.js'
import { makeBEP88Listener } from './listeners/bep-088.js'
import { makeTxAuditor } from './tx-auditor.js'
import { makeTxExecutor } from './tx-executor.js'
import { makeTxManifest } from './tx-manifest.js'
import { makeTxMsgFactory } from './tx-msg.js'
import { HANDLER, VERSION } from './types.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			// Tx
			cradle.TxAuditorRegistry.set(HANDLER, VERSION, makeTxAuditor)
			cradle.TxExecutorRegistry.set(HANDLER, VERSION, makeTxExecutor)
			cradle.TxManifestRegistry.set(HANDLER, VERSION, makeTxManifest)
			cradle.TxMsgFactoryRegistry.set(HANDLER, VERSION, makeTxMsgFactory)

			// State
			await cradle.CommittedState.getMultiStore().add(HANDLER)

			// Tendermint ABCI Query
			cradle.QueryHandlerRegistry.add(Query)

			// Prevent elections of tombstoned validators
			cradle.EventDispatcher.listen(Event.ValidatorCandidateElecting, makeBEP88Listener)
		},
	}
}
