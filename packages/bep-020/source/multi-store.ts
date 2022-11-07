import { join } from 'node:path'

import { assert, bytesToHex } from '@bearmint/bep-009'
import type { Cradle, KVStore, MultiStore } from '@bearmint/bep-013'

import { STORE_WORLD } from './constants.js'

export function makeMultiStore(cradle: Cradle): MultiStore {
	const stores: Record<string, KVStore> = {}

	function get(moduleName: string) {
		const result = stores[moduleName]

		assert.defined(result)

		return result
	}

	return {
		async add(moduleName, opts?) {
			let rootBytes: Uint8Array | undefined

			if (await get(STORE_WORLD).has(`${moduleName}/root`)) {
				rootBytes = await get(STORE_WORLD).get(`${moduleName}/root`)

				/* eslint-disable sort-keys-fix/sort-keys-fix */
				cradle.Logger.debug('%s', {
					module: '@bearmint/bep-020',
					action: 'restore_root',
					type: moduleName,
					root: bytesToHex(rootBytes),
				})
				/* eslint-enable sort-keys-fix/sort-keys-fix */
			}

			stores[moduleName] = await cradle.KVStoreFactory.make({
				// For tests we generally want to use an in-memory database
				path: process.env['NODE_ENV'] === 'test' ? undefined : join(cradle.Paths.data, moduleName),
				root: rootBytes,
				...opts,
			})
		},
		all() {
			return stores
		},
		checkpoint() {
			for (const store of Object.values(stores)) {
				store.checkpoint()
			}
		},
		copy() {
			const result = makeMultiStore(cradle)

			for (const [key, value] of Object.entries(stores)) {
				result.set(key, value.copy())
			}

			return result
		},
		get,
		hasCheckpoints() {
			return Object.values(stores).some((trie) => trie.hasCheckpoints())
		},
		async revert() {
			for (const store of Object.values(stores)) {
				await store.revert()
			}
		},
		roots() {
			const result: Record<string, Buffer> = {}

			for (const [key, value] of Object.entries(stores)) {
				result[key] = value.root()
			}

			return result
		},
		set(moduleName, trie) {
			stores[moduleName] = trie
		},
	}
}

export function makeMultiStoreFactory(cradle: Cradle) {
	return {
		make() {
			return makeMultiStore(cradle)
		},
	}
}
