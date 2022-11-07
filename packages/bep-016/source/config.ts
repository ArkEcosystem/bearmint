import { dot } from '@bearmint/bep-009'
import type { ServiceProviderConfig } from '@bearmint/bep-013'
import { MissingRequiredConfigurationValueException } from '@bearmint/bep-109'

export function makeServiceProviderConfig(): ServiceProviderConfig {
	let items: object = {}

	function merge(values: object | undefined) {
		if (values !== undefined) {
			items = { ...items, ...values }
		}
	}

	function all() {
		return items
	}

	function get<T>(key: string, defaultValue?: T | undefined) {
		if (has(key)) {
			return dot.get<T>(items, key)
		}

		if (defaultValue === undefined) {
			throw new MissingRequiredConfigurationValueException(key)
		}

		return defaultValue as T
	}

	function set<T>(key: string, value: T): boolean {
		dot.set(items, key, value)

		return has(key)
	}

	function unset(key: string): boolean {
		dot.forget(items, key)

		return has(key)
	}

	function has(key: string): boolean {
		return dot.has(items, key)
	}

	return {
		all,
		get,
		has,
		merge,
		set,
		unset,
	}
}
