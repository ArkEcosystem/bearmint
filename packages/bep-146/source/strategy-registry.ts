import { dot } from '@bearmint/bep-009'
import type { Strategies, StrategiesByModule, StrategyRegistry } from '@bearmint/bep-013'
import { Exception } from '@bearmint/bep-109'

export function makeStrategyRegistry(): StrategyRegistry {
	const registry: StrategiesByModule = {}

	function get<T>(module: string, strategy: string) {
		const byModule = dot.get<Strategies>(registry, module)

		if (byModule !== undefined) {
			const byStrategy = byModule[strategy]

			if (typeof byStrategy === undefined) {
				throw new Exception(
					`Failed to obtain strategy [${strategy}] for module [${module}] as no strategy exists.`,
				)
			}

			return byStrategy as T
		}

		throw new Exception(`Failed to obtain strategy for module [${module}] as no strategies exist.`)
	}

	return {
		all() {
			return registry
		},
		allByModule<T>(module: string) {
			const result = registry[module]

			if (result === undefined) {
				throw new Exception(
					`Failed to obtain strategies for module [${module}] as no strategies exist.`,
				)
			}

			return result as T
		},
		forget(module: string) {
			if (registry[module] === undefined) {
				throw new Exception(
					`Failed to forget strategy for module [${module}] as no strategies exist.`,
				)
			}

			if (dot.missing(registry, module)) {
				throw new Exception(
					`Failed to forget strategy for module [${module}] as no such strategy exists.`,
				)
			}

			dot.forget(registry, module)

			if (Object.keys(registry[module]!).length === 0) {
				dot.forget(registry, module)
			}
		},
		get,
		has(module: string, strategy: string) {
			return dot.has(registry, `${module}.${strategy}`)
		},
		missing(module: string, strategy: string) {
			return dot.missing(registry, `${module}.${strategy}`)
		},
		set(module: string, strategy: string, impl: unknown) {
			if (registry[module] === undefined) {
				registry[module] = {}
			}

			if (registry[module]![strategy] !== undefined) {
				throw new Exception(
					`Failed to set strategy [${strategy}] for module [${module}] as it is already set.`,
				)
			}

			registry[module]![strategy] = impl
		},
	}
}
