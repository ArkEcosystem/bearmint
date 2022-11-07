import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { makeTxAuditor } from './tx-auditor.js'
import { makeTxExecutor } from './tx-executor.js'
import { makeTxManifest } from './tx-manifest.js'
import { makeTxMsgFactory } from './tx-msg.js'
import { HANDLER, VERSION } from './types.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.TxAuditorRegistry.set(HANDLER, VERSION, makeTxAuditor as any)
			cradle.TxExecutorRegistry.set(HANDLER, VERSION, makeTxExecutor)
			cradle.TxManifestRegistry.set(HANDLER, VERSION, makeTxManifest)
			cradle.TxMsgFactoryRegistry.set(HANDLER, VERSION, makeTxMsgFactory)
		},
	}
}
