import { join } from 'node:path'

import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { ContainerType, Event } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import {
	STORE_ACCOUNT,
	STORE_ACCOUNT_MONIKER,
	STORE_ACCOUNT_PUBLIC_KEY,
	STORE_ACCOUNT_VALIDATOR_ADDRESS,
	STORE_MILESTONE,
	STORE_TX,
	STORE_TX_RECEIPT,
	STORE_WORLD,
} from './constants.js'
import { makeMultiStoreFactory } from './multi-store.js'
import { makeState } from './state-store.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunction(ContainerType.MultiStoreFactory, makeMultiStoreFactory)

			const world = await cradle.KVStoreFactory.make({
				path: join(cradle.Paths.data, STORE_WORLD),
			})

			const multiStore = cradle.MultiStoreFactory.make()
			// The world trie gets set manually because there's no restoration logic involved.
			multiStore.set(STORE_WORLD, world)
			await multiStore.add(STORE_ACCOUNT)
			await multiStore.add(STORE_ACCOUNT_MONIKER)
			await multiStore.add(STORE_ACCOUNT_PUBLIC_KEY)
			await multiStore.add(STORE_ACCOUNT_VALIDATOR_ADDRESS)
			await multiStore.add(STORE_MILESTONE)
			await multiStore.add(STORE_TX)
			await multiStore.add(STORE_TX_RECEIPT)

			cradle.Container.bindValue(
				ContainerType.CommittedState,
				await makeState(cradle.AccountRepositoryFactory, multiStore),
			)

			await cradle.EventDispatcher.dispatch(Event.CommittedStateCreated)
		},
	}
}
