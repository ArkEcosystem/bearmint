import type {
	Application,
	ApplicationManifest,
	Bootstrapper,
	BootstrapperConstructor,
	Container,
	EventDispatcher,
	FactoryFunction,
	Logger,
	ServiceProviderRepository,
} from '@bearmint/bep-013'
import { ContainerType, Event } from '@bearmint/bep-013'

import { loadJemalloc } from './jemalloc.js'

/* c8 ignore start */
export function makeApplication(
	container: Container,
	makeEventDispatcher: FactoryFunction<EventDispatcher>,
	makeLogger: FactoryFunction<Logger>,
	makeServiceProviderRepository: FactoryFunction<ServiceProviderRepository>,
	manifest: ApplicationManifest,
) {
	async function dispose(reason?: string, error?: Error): Promise<void> {
		if (reason !== undefined) {
			container.resolve<Logger>(ContainerType.Logger).debug(reason)
		}

		if (error !== undefined) {
			container.resolve<Logger>(ContainerType.Logger).error(error.stack)
		}

		for (const serviceProvider of container
			.resolve<ServiceProviderRepository>(ContainerType.ServiceProviderRepository)
			.allLoadedProviders()
			.reverse()) {
			container
				.resolve<Logger>(ContainerType.Logger)
				.debug(`(LC_PAC_DIS) [${serviceProvider.name()}]`)

			try {
				await serviceProvider.dispose()
			} catch {}
		}
	}

	const application: Application = {
		async boot(bootstrappers: BootstrapperConstructor[]): Promise<void> {
			const events: EventDispatcher = container.resolve(ContainerType.EventDispatcher)

			for (const bootstrapper of bootstrappers) {
				await events.dispatchSerial(Event.Bootstrapping, {
					bootstrapper: bootstrapper.name,
				})

				try {
					await container.build<Bootstrapper>(bootstrapper).bootstrap()
				} catch (error) {
					await dispose(error.stack, error)
				}

				await events.dispatchSerial(Event.Bootstrapped, {
					bootstrapper: bootstrapper.name,
				})
			}
		},
		dispose,
	}

	container.bindValue(ContainerType.Application, application)
	container.bindValue(ContainerType.ApplicationManifest, manifest)
	container.bindValue(ContainerType.Container, container)
	container.bindFunctionSingleton(ContainerType.EventDispatcher, makeEventDispatcher)
	container.bindFunction(ContainerType.Logger, makeLogger) // Not a singleton because we allow swapping at run-time!
	container.bindFunctionSingleton(
		ContainerType.ServiceProviderRepository,
		makeServiceProviderRepository,
	)

	loadJemalloc(container.resolve(ContainerType.Logger))

	return application
}
/* c8 ignore end */
