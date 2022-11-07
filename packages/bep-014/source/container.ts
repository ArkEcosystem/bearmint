import type { Container } from '@bearmint/bep-013'
import type {
	AwilixContainer,
	ClassOrFunctionReturning,
	Constructor,
	FunctionReturning,
	Resolver,
} from 'awilix'
import { asClass, asFunction, asValue, createContainer, InjectionMode } from 'awilix'

export function wrapContainer(container: AwilixContainer): Container {
	return {
		bindClass<T>(key: string, value: Constructor<T>) {
			container.register(key, asClass(value))
		},
		bindClassSingleton<T>(key: string, value: Constructor<T>) {
			container.register(key, asClass(value).singleton())
		},
		bindFunction<T>(key: string, value: FunctionReturning<T>) {
			container.register(key, asFunction(value))
		},
		bindFunctionSingleton<T>(key: string, value: FunctionReturning<T>) {
			container.register(key, asFunction(value).singleton())
		},
		bindValue<T>(key: string, value: T) {
			container.register(key, asValue(value))
		},
		build<T>(value: ClassOrFunctionReturning<T> | Resolver<T>) {
			return container.build(value)
		},
		createScope() {
			return wrapContainer(container.createScope())
		},
		has(key: string) {
			return container.hasRegistration(key)
		},
		missing(key: string) {
			return !container.hasRegistration(key)
		},
		resolve<T>(key: string) {
			return container.resolve(key) as T
		},
	}
}

export function makeContainer(): Container {
	return wrapContainer(
		createContainer({
			injectionMode: InjectionMode.PROXY,
		}),
	)
}
