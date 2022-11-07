import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { cryptoWaitReady } from '@polkadot/util-crypto'

import { makeKeyPairFactory, makePrivateKeyFactory, makePublicKeyFactory } from './keypair.js'
import { makeSignatureFactory } from './sig.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async boot() {
			await cryptoWaitReady()
		},
		async register() {
			cradle.StrategyRegistry.set('@bearmint/bep-030', '@bearmint/bep-036', {
				makeKeyPairFactory,
				makePrivateKeyFactory,
				makePublicKeyFactory,
				makeSignatureFactory,
			})
		},
	}
}
