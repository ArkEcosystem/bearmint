import type { NonNullableMap as Map } from '@bearmint/bep-013'

import { assert } from './assert.js'

export class NonNullableMap<T> implements Map<T> {
	readonly #records: Record<string, T> = {}

	public all() {
		return this.#records
	}

	public entries() {
		return Object.entries(this.#records)
	}

	public get(key: string) {
		const result = this.#records[key]

		assert.defined<T>(result)

		return result
	}

	public has(key: string) {
		return this.#records[key] !== undefined
	}

	public keys() {
		return Object.keys(this.#records)
	}

	public missing(key: string) {
		return this.#records[key] === undefined
	}

	public set(key: string, value: T) {
		this.#records[key] = value
	}

	public values() {
		return Object.values(this.#records)
	}
}
