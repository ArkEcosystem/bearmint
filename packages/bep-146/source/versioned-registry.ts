import { dot } from '@bearmint/bep-009'
import type { Container, Cradle, FactoryFunction, Tx } from '@bearmint/bep-013'
import { Exception } from '@bearmint/bep-109'

export function makeVersionedRegistry<T>(container: Container, name: string) {
	const registry: Record<string, Record<string, T>> = {}

	function get(handler: string, version: string) {
		const entitiesByVersion = dot.get<Record<string, T>>(registry, handler)

		if (entitiesByVersion !== undefined) {
			const entityByVersion = entitiesByVersion[version]

			if (typeof entityByVersion === undefined) {
				throw new Exception(
					`[${name}] Failed to obtain version [${version}] for handler [${handler}] as no version exists.`,
				)
			}

			return entityByVersion as T
		}

		throw new Exception(
			`[${name}] Failed to obtain version for handler [${handler}] as no versions exist.`,
		)
	}

	return {
		all() {
			return registry
		},
		forget(handler: string, version: string) {
			if (registry[handler] === undefined) {
				throw new Exception(
					`[${name}] Failed to forget version for handler [${handler}] as no versions exist.`,
				)
			}

			if (registry[handler]![version] === undefined) {
				throw new Exception(
					`[${name}] Failed to forget version for handler [${handler}] as no such version exists.`,
				)
			}

			dot.forget(registry[handler]!, version)

			if (Object.keys(registry[handler]!).length === 0) {
				dot.forget(registry, handler)
			}
		},
		get,
		getFromTx(tx: Tx) {
			return get(tx.checksum.handler, tx.checksum.version)
		},
		set(handler: string, version: string, constructor: FactoryFunction<T>) {
			if (registry[handler] === undefined) {
				registry[handler] = {}
			}

			if (registry[handler]![version] !== undefined) {
				throw new Exception(
					`[${name}] Failed to set version [${version}] for handler [${handler}] as it is already set.`,
				)
			}

			registry[handler]![version] = container.build(constructor)
		},
	}
}

export function makeVersionedRegistryFactory(cradle: Cradle) {
	return {
		make(name: string) {
			return makeVersionedRegistry(cradle.Container, name)
		},
	}
}
