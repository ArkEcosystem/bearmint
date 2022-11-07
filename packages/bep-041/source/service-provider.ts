import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { getModuleMilestone } from '@bearmint/bep-021'

import { makeAddressFactory } from './factory.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.StrategyRegistry.set('@bearmint/bep-038', '@bearmint/bep-041', {
				makeAddressFactory: (ctx: Cradle) =>
					makeAddressFactory(
						ctx.KeyPairFactory,
						getModuleMilestone<{ prefix: string }>(
							cradle.ServiceProviderRepository,
							ctx.CommittedState,
							'@bearmint/bep-041',
						).prefix,
					),
			})
		},
	}
}
