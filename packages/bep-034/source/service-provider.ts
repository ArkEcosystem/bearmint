import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { makeKeyPairFactory, makePrivateKeyFactory, makePublicKeyFactory } from './keypair.js'
import { makeSignatureFactory } from './sig.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.StrategyRegistry.set('@bearmint/bep-030', '@bearmint/bep-034', {
				makeKeyPairFactory,
				makePrivateKeyFactory,
				makePublicKeyFactory,
				makeSignatureFactory,
			})
		},
	}
}
