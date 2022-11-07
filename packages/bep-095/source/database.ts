import { ClassicLevel } from 'classic-level'

import type { MuSig } from './types.js'

export interface Signature {
	id: string
	publicKey: string
	signature: string
}

export interface StoreTxRaw {
	bytes: string
	muSig: MuSig
	signatures: Array<{ id: string; publicKey: string; signature: string }>
}

export interface StoreTx {
	hash: string
	muSig: MuSig
	signatures: Array<{ id: string; publicKey: string; signature: string }>
	timestamp: number
}

export function makeDatabase(path: string) {
	const database = new ClassicLevel(path, {
		valueEncoding: 'buffer',
	})

	return {
		async all() {
			const result: StoreTx[] = []

			for (const key of await database.keys().all()) {
				result.push(JSON.parse(await database.get(key)))
			}

			return result
		},
		async close() {
			await database.close()
		},
		async flush() {
			for (const key of await database.keys().all()) {
				await database.del(key)
			}
		},
		async forget(hash: string) {
			await database.del(hash)
		},
		async store(entry: StoreTx) {
			await database.put(entry.hash, JSON.stringify(entry))
		},
	}
}
