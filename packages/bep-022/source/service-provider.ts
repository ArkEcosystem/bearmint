import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { makeAccountRepository } from './repository.js'
import { makeAccountSerializer } from './serializer.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunctionSingleton(
				ContainerType.AccountRepositoryFactory,
				makeAccountRepository,
			)

			cradle.Container.bindFunctionSingleton(ContainerType.AccountSerializer, makeAccountSerializer)
		},
	}
}
