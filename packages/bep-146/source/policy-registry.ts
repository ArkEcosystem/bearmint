import { dot } from '@bearmint/bep-009'
import type {
	ClassOrFunctionReturning,
	Cradle,
	PoliciesByModule,
	Policy,
	PolicyRegistry,
} from '@bearmint/bep-013'
import { Exception } from '@bearmint/bep-109'

export function makePolicyRegistry(cradle: Cradle): PolicyRegistry {
	const registry: PoliciesByModule = {}

	function get(module: string, policyType: string, policyName: string) {
		const policy = dot.get<Policy>(registry, `${module}.${policyType}.${policyName}`)

		if (policy === undefined) {
			throw new Exception(
				`Failed to obtain policy [${policyType}${policyName}] for module [${module}] as no policy exists.`,
			)
		}

		return policy
	}

	return {
		all() {
			return registry
		},
		forget(module: string, policyType?: string) {
			const key = policyType === undefined ? module : `${module}.${policyType}`

			if (dot.missing(registry, key)) {
				throw new Exception(
					`Failed to forget policy [${key}] for module [${module}] as no such policy exists.`,
				)
			}

			dot.forget(registry, module)

			if (Object.keys(registry[module]!).length === 0) {
				dot.forget(registry, module)
			}
		},
		get,
		set(
			module: string,
			policyType: string,
			policyName: string,
			constructor: ClassOrFunctionReturning<Policy>,
		) {
			if (dot.has(registry, `${module}.${policyType}.${policyName}`)) {
				throw new Exception(
					`Failed to set policy [${policyType}.${policyName}] for module [${module}] as it is already set.`,
				)
			}

			dot.set(
				registry,
				`${module}.${policyType}.${policyName}`,
				cradle.Container.build(constructor),
			)
		},
	}
}
