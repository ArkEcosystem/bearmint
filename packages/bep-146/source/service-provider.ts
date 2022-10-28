import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { ContainerType, Event } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { makeDataSink } from './data-sink.js'
import { makePolicyRegistry } from './policy-registry.js'
import { makeStrategyRegistry } from './strategy-registry.js'
import { makeVersionedRegistryFactory } from './versioned-registry.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindValue(ContainerType.QueryHandlerRegistry, new Set())

			cradle.Container.bindFunctionSingleton(ContainerType.DataSink, makeDataSink)

			cradle.Container.bindFunctionSingleton(ContainerType.PolicyRegistry, makePolicyRegistry)

			cradle.Container.bindFunctionSingleton(ContainerType.StrategyRegistry, makeStrategyRegistry)

			cradle.Container.bindFunctionSingleton(
				ContainerType.VersionedRegistryFactory,
				makeVersionedRegistryFactory,
			)

			// Flush the data sink before every proposal
			cradle.EventDispatcher.listen(Event.AbciRequestProcessing, (ctx: Cradle) => ({
				async execute(data) {
					if (data.method !== 'prepareProposal') {
						return
					}

					ctx.DataSink.clear()
				},
			}))
		},
	}
}
