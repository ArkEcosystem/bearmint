import { dot, file, Paths, semver } from '@bearmint/bep-009'
import type {
	Bootstrapper,
	BootstrapperConstructor,
	Cradle,
	ServiceProvider,
	ServiceProviderRepository,
} from '@bearmint/bep-013'
import { ContainerType, Event } from '@bearmint/bep-013'
import {
	DependencyVersionOutOfRangeException,
	OptionalDependencyCannotBeFoundException,
	RequiredDependencyCannotBeFoundException,
	ServiceProviderCannotBeBootedException,
	ServiceProviderCannotBeRegisteredException,
} from '@bearmint/bep-109'
import { parse as parseTOML } from '@iarna/toml'
import * as dotenv from 'dotenv'
import logProcessErrors from 'log-process-errors'
// eslint-disable-next-line unicorn/import-style
import { join } from 'path'

export function makeRegisterExceptionHandler(cradle: Cradle): Bootstrapper {
	return {
		async bootstrap() {
			logProcessErrors({ exit: false })

			const signals: string[] = [
				'SIGHUP',
				'SIGINT',
				'SIGQUIT',
				'SIGILL',
				'SIGTRAP',
				'SIGABRT',
				'SIGBUS',
				'SIGFPE',
				'SIGSEGV',
				'SIGUSR2',
				'SIGTERM',
			]

			for (const signal of signals) {
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				process.on(signal as any, async (code) => {
					await cradle.Application.dispose(
						`module=@bearmint/bep-016 action=terminate signal=${signal}]`,
					)

					// eslint-disable-next-line n/no-process-exit,
					process.exit(code)
				})
			}
		},
	}
}

export function makeRegisterBasePaths(cradle: Cradle): Bootstrapper {
	return {
		async bootstrap() {
			const paths = {
				cache: process.env['BM_CACHE_PATH'] ?? `${Paths.BM_PATH_HOME}/cache`,
				config: process.env['BM_CONFIG_PATH'] ?? `${Paths.BM_PATH_HOME}/config`,
				data: process.env['BM_DATA_PATH'] ?? `${Paths.BM_PATH_HOME}/data`,
				log: process.env['BM_LOG_PATH'] ?? `${Paths.BM_PATH_HOME}/log`,
				temp: process.env['BM_TEMP_PATH'] ?? `${Paths.BM_PATH_HOME}/temp`,
			}

			file.ensure(Object.values(paths))

			cradle.Container.bindValue(ContainerType.Paths, paths)

			for (const [key, value] of Object.entries(paths)) {
				/* eslint-disable sort-keys-fix/sort-keys-fix */
				cradle.Logger.debug('%s', {
					module: '@bearmint/bep-016',
					action: 'register_base_path',
					key,
					value,
				})
				/* eslint-enable sort-keys-fix/sort-keys-fix */
			}
		},
	}
}

export function makeLoadEnvironmentVariables(cradle: Cradle): Bootstrapper {
	return {
		async bootstrap() {
			const environmentFile: string = join(cradle.Paths.config, '.env')

			// eslint-disable-next-line security/detect-non-literal-fs-filename
			if (!file.exists(environmentFile)) {
				return
			}

			try {
				for (const [key, value] of Object.entries(dotenv.parse(file.read(environmentFile)))) {
					if (process.env[key] === undefined) {
						process.env[key] = value
					}
				}
			} catch {}
		},
	}
}

export function makeLoadConfiguration(cradle: Cradle): Bootstrapper {
	return {
		async bootstrap() {
			cradle.Container.bindValue(
				ContainerType.GenesisParameters,
				file.readJson(Paths.TM_PATH_CONF_GENESIS),
			)

			cradle.Container.bindValue(
				ContainerType.TendermintConfiguration,
				parseTOML(file.read(Paths.TM_PATH_CONF_CONFIG)),
			)

			cradle.Container.bindValue(
				ContainerType.BearmintConfiguration,
				parseTOML(file.read(Paths.BM_PATH_CONF_CONFIG)),
			)
		},
	}
}

export function makeLoadServiceProviders(cradle: Cradle): Bootstrapper {
	return {
		async bootstrap() {
			for (const provider of cradle.ApplicationManifest.modules) {
				const serviceProvider = cradle.Container.build(provider)

				const options = dot.get<object>(
					cradle.Container.resolve(ContainerType.BearmintConfiguration),
					`modules.${serviceProvider.name()}`,
				)
				if (typeof options === 'object') {
					serviceProvider.config().merge(options)
				}

				cradle.ServiceProviderRepository.set(serviceProvider.name(), serviceProvider)

				/* eslint-disable sort-keys-fix/sort-keys-fix */
				cradle.Logger.debug('%s', {
					module: '@bearmint/bep-016',
					action: 'index_service_provider',
					name: serviceProvider.name(),
				})
				/* eslint-enable sort-keys-fix/sort-keys-fix */
			}
		},
	}
}

export function makeRegisterServiceProviders(cradle: Cradle): Bootstrapper {
	async function satisfiesDependencies(serviceProvider: ServiceProvider) {
		const serviceProviders: ServiceProviderRepository = cradle.Container.resolve(
			ContainerType.ServiceProviderRepository,
		)

		for (const dependency of serviceProvider.dependencies()) {
			const { name, required, version: constraint } = dependency

			const isRequired = typeof required === 'function' ? await required() : Boolean(required)

			if (!serviceProviders.has(name)) {
				// The dependency is necessary for this package to function. We'll output an error and terminate the process.
				if (isRequired) {
					const notFoundError = new RequiredDependencyCannotBeFoundException(
						serviceProvider.name(),
						name,
					)

					await cradle.Application.dispose(notFoundError.message, notFoundError)
				}

				// The dependency is optional for this package to function. We'll only output a warning.
				const error = new OptionalDependencyCannotBeFoundException(serviceProvider.name(), name)

				cradle.Logger.warning(`[bep-016] ${error.message}`)

				serviceProviders.fail(serviceProvider.name())

				return false
			}

			if (
				constraint !== undefined &&
				semver.satisfies(serviceProviders.get(name).version(), constraint) === false
			) {
				const error = new DependencyVersionOutOfRangeException(
					name,
					constraint,
					serviceProviders.get(name).version(),
				)

				if (isRequired) {
					await cradle.Application.dispose(error.message, error)
				}

				cradle.Logger.warning(`[bep-016] ${error.message}`)

				serviceProviders.fail(serviceProvider.name())
			}
		}

		return true
	}

	return {
		async bootstrap() {
			const serviceProviders: ServiceProviderRepository = cradle.Container.resolve(
				ContainerType.ServiceProviderRepository,
			)

			for (const [name, serviceProvider] of serviceProviders.all()) {
				/* eslint-disable sort-keys-fix/sort-keys-fix */
				cradle.Logger.debug('%s', {
					module: '@bearmint/bep-016',
					action: 'register_service_provider',
					name: serviceProvider.name(),
				})
				/* eslint-enable sort-keys-fix/sort-keys-fix */

				// Are all dependencies installed with the correct versions?
				if (await satisfiesDependencies(serviceProvider)) {
					try {
						await serviceProviders.register(name)
					} catch (error) {
						console.error(error.stack)

						// Determine if the package is required to decide how to handle errors.
						const isRequired: boolean = await serviceProvider.required()

						if (isRequired) {
							throw new ServiceProviderCannotBeRegisteredException(
								serviceProvider.name(),
								error.message,
							)
						}

						serviceProviders.fail(serviceProvider.name())

						continue
					}
				}
			}
		},
	}
}

export function makeBootServiceProviders(cradle: Cradle): Bootstrapper {
	function registerEventListeners(serviceProvider: ServiceProvider): void {
		async function changeState(previous?: string) {
			if (cradle.ServiceProviderRepository.failed(serviceProvider.name())) {
				return
			}

			if (
				cradle.ServiceProviderRepository.loaded(serviceProvider.name()) &&
				(await serviceProvider.disposeWhen(previous))
			) {
				await cradle.ServiceProviderRepository.dispose(serviceProvider.name())
			}

			if (
				cradle.ServiceProviderRepository.deferred(serviceProvider.name()) &&
				(await serviceProvider.bootWhen(previous))
			) {
				await cradle.ServiceProviderRepository.boot(serviceProvider.name())
			}
		}

		// Register the "disposeWhen" listeners to be triggered on every block. Use with care!
		cradle.EventDispatcher.listen(Event.AbciRequestProcessed, () => ({
			async execute(data) {
				if (data.method !== 'commit') {
					return
				}

				await changeState()
			},
		}))

		// We only want to trigger this if another service provider has been booted to avoid an infinite loop.
		cradle.EventDispatcher.listen(Event.ServiceProviderBooted, () => ({
			async execute(name) {
				if (name !== serviceProvider.name()) {
					await changeState(name)
				}
			},
		}))
	}

	return {
		async bootstrap() {
			for (const [name, serviceProvider] of cradle.ServiceProviderRepository.all()) {
				if (await serviceProvider.bootWhen()) {
					/* eslint-disable sort-keys-fix/sort-keys-fix */
					cradle.Logger.debug('%s', {
						module: '@bearmint/bep-016',
						action: 'boot_service_provider',
						name: serviceProvider.name(),
					})
					/* eslint-enable sort-keys-fix/sort-keys-fix */

					try {
						await cradle.ServiceProviderRepository.boot(name)
					} catch (error) {
						cradle.Logger.error(`[bep-016] ${error.stack}`)

						const isRequired: boolean = await serviceProvider.required()

						if (isRequired) {
							throw new ServiceProviderCannotBeBootedException(
								serviceProvider.name(),
								error.message,
							)
						}

						cradle.ServiceProviderRepository.fail(serviceProvider.name())
					}
				} else {
					/* eslint-disable sort-keys-fix/sort-keys-fix */
					cradle.Logger.debug('%s', {
						module: '@bearmint/bep-016',
						action: 'defer_service_provider',
						name: serviceProvider.name(),
					})
					/* eslint-enable sort-keys-fix/sort-keys-fix */

					cradle.ServiceProviderRepository.defer(name)
				}

				registerEventListeners(serviceProvider)
			}
		},
	}
}

export const bootstrappers: BootstrapperConstructor[] = [
	makeRegisterExceptionHandler,
	makeRegisterBasePaths,
	makeLoadEnvironmentVariables,
	makeLoadConfiguration,
	makeLoadServiceProviders,
	makeRegisterServiceProviders,
	makeBootServiceProviders,
]
