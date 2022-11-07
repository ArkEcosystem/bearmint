import { assert } from '@bearmint/bep-009'
import type { Cradle, ServiceProvider, ServiceProviderRepository } from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'

export function makeServiceProviderRepository(
	cradle: Pick<Cradle, 'Container' | 'EventDispatcher'>,
): ServiceProviderRepository {
	const serviceProviders = new Map<string, ServiceProvider>()
	const loadedProviders = new Set<string>()
	const failedProviders = new Set<string>()
	const deferredProviders = new Set<string>()

	function get(name: string): ServiceProvider {
		const serviceProvider: ServiceProvider | undefined = serviceProviders.get(name)

		assert.defined<ServiceProvider>(serviceProvider)

		return serviceProvider
	}

	return {
		all() {
			return serviceProviders
		},
		allLoadedProviders() {
			return [...loadedProviders.values()].map((name: string) => get(name))
		},
		async boot(name: string) {
			await cradle.EventDispatcher.dispatch(Event.ServiceProviderBooting, {
				name,
			})

			await get(name).boot()

			loadedProviders.add(name)
			failedProviders.delete(name)
			deferredProviders.delete(name)

			await cradle.EventDispatcher.dispatch(Event.ServiceProviderBooted, {
				name,
			})
		},
		defer(name: string) {
			deferredProviders.add(name)
		},
		deferred(name: string) {
			return deferredProviders.has(name)
		},
		async dispose(name: string) {
			await cradle.EventDispatcher.dispatch(Event.ServiceProviderDisposing, {
				name,
			})

			await get(name).dispose()

			loadedProviders.delete(name)
			failedProviders.delete(name)
			deferredProviders.add(name)

			await cradle.EventDispatcher.dispatch(Event.ServiceProviderDisposed, {
				name,
			})
		},
		fail(name: string) {
			failedProviders.add(name)
		},
		failed(name: string) {
			return failedProviders.has(name)
		},
		get,
		has(name: string) {
			return serviceProviders.has(name)
		},
		load(name: string) {
			loadedProviders.add(name)
		},
		loaded(name: string) {
			return loadedProviders.has(name)
		},
		async register(name: string) {
			await cradle.EventDispatcher.dispatch(Event.ServiceProviderRegistering, {
				name,
			})

			cradle.Container.bindValue(name, get(name).config())

			await get(name).register()

			await cradle.EventDispatcher.dispatch(Event.ServiceProviderRegistered, {
				name,
			})
		},
		set(name: string, provider: ServiceProvider) {
			serviceProviders.set(name, provider)
		},
	}
}
