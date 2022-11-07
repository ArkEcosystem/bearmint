import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { makeAddressFactory } from './factory.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.StrategyRegistry.set('@bearmint/bep-038', '@bearmint/bep-047', {
				makeAddressFactory: (ctx: Cradle) => makeAddressFactory(ctx.KeyPairFactory),
			})
		},
	}
}
