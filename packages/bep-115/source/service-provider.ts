import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { makeStrategy } from './strategy.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.StrategyRegistry.set('@bearmint/bep-021', '@bearmint/bep-115', makeStrategy)
		},
	}
}
