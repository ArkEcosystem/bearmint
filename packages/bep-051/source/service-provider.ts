import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { makeTxFactory } from './factory.js'
import { TX_LISTENERS } from './listeners/index.js'
import {
	makeTxAuditorRegistry,
	makeTxExecutorRegistry,
	makeTxManifestRegistry,
	makeTxMsgFactoryRegistry,
} from './registry.js'
import { makeTxProcessor } from './tx-processor.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunctionSingleton(ContainerType.TxFactory, makeTxFactory)

			cradle.Container.bindFunction(ContainerType.TxProcessor, makeTxProcessor)

			cradle.Container.bindFunctionSingleton(ContainerType.TxAuditorRegistry, makeTxAuditorRegistry)

			cradle.Container.bindFunctionSingleton(
				ContainerType.TxExecutorRegistry,
				makeTxExecutorRegistry,
			)

			cradle.Container.bindFunctionSingleton(
				ContainerType.TxManifestRegistry,
				makeTxManifestRegistry,
			)

			cradle.Container.bindFunctionSingleton(
				ContainerType.TxMsgFactoryRegistry,
				makeTxMsgFactoryRegistry,
			)

			for (const [eventName, eventListener] of TX_LISTENERS) {
				cradle.EventDispatcher.listen(eventName, eventListener)
			}
		},
	}
}
