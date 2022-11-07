import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { makeSecureKVStore } from './trie.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunctionSingleton(ContainerType.KVStoreFactory, makeSecureKVStore)
		},
	}
}
