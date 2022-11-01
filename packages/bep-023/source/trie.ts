import { assert, bytesToHex, hexToBytes, isHex, RLP, stringToBytes } from '@bearmint/bep-009'
import type { KVStore, KVStoreFactory, KVStoreKey, KVStoreOpts } from '@bearmint/bep-013'
import { Exception } from '@bearmint/bep-109'
import type { PutBatch } from '@ethereumjs/trie'
import { Trie } from '@ethereumjs/trie'

import { LevelDB } from './level.js'

// We use 9MB instead of 10MB because we want to give some room for RLP encoding metadata
const MAX_BYTE_LENGTH = 9_437_184
const MAX_BYTE_LENGTH_RLP = 10_485_760

function encodeChunks(chunks) {
	const result = RLP.encode(chunks)

	if (result.byteLength > MAX_BYTE_LENGTH_RLP) {
		throw new Error(`RLP Chunk exceeds maximum length of ${MAX_BYTE_LENGTH_RLP}`)
	}

	return result
}

function valueToBytes(key: KVStoreKey) {
	if (key instanceof Uint8Array) {
		if (key instanceof Buffer) {
			return key
		}

		return Buffer.from(key)
	}

	if (isHex(key)) {
		return Buffer.from(hexToBytes(key))
	}

	return Buffer.from(stringToBytes(key))
}

function readStream<T>(
	trie: Trie,
	callback: ({ key, value }: { key: Buffer; value: Buffer }) => T,
): Promise<T[]> {
	return new Promise((resolve) => {
		const result: T[] = []

		const stream = trie.createReadStream()

		stream.on('data', ({ key, value }) => result.push(callback({ key, value })))

		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		stream.on('end', async () => resolve(result))
	})
}

function makeKVStore(trie: Trie, opts: KVStoreOpts): KVStore {
	async function get(key: KVStoreKey) {
		const result = await trie.get(valueToBytes(key))

		assert.defined<Buffer>(result)

		return Uint8Array.from(result)
	}

	async function set(key: KVStoreKey, value: Uint8Array) {
		const keyBuffer = valueToBytes(key)
		const valueBuffer = valueToBytes(value)

		await trie.put(keyBuffer, valueBuffer)
	}

	async function has(key: KVStoreKey) {
		try {
			return (await trie.get(valueToBytes(key), true)) !== null
		} catch {
			return false
		}
	}

	async function getList(key: KVStoreKey) {
		let result: Uint8Array[] = []

		try {
			result = RLP.decode(await get(key)) as Uint8Array[]
		} catch {
			result = []
		}

		return result
	}

	return {
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/naming-convention
		__database() {
			return trie.database()
		},
		addCheckpoint(checkpoint) {
			trie.database().checkpoints.push(checkpoint)
		},
		async attach(key: KVStoreKey, value: string) {
			const list = new Set(await getList(key))

			for (const element of list) {
				if (bytesToHex(element) === value) {
					throw new Exception(`Value [${value}] already exists in collection`)
				}
			}

			list.add(valueToBytes(value))

			await set(key, RLP.encode([...list]))

			return [...list]
		},
		async batch(ops) {
			await trie.batch(ops as any)
		},
		checkpoint() {
			trie.checkpoint()
		},
		checkpoints() {
			return trie.database().checkpoints
		},
		async clear() {
			await (trie.database().db as LevelDB).clear()

			trie.root(trie.EMPTY_TRIE_ROOT)
		},
		async commit() {
			await trie.commit()
		},
		copy() {
			return makeKVStore(trie.copy(true), opts)
		},
		async detach(key: KVStoreKey, value: string) {
			const list = new Set(await getList(key))

			for (const element of list) {
				if (bytesToHex(element) === value) {
					list.delete(element)

					if (list.size === 0) {
						await trie.del(valueToBytes(key))
					} else {
						await set(key, RLP.encode([...list]))
					}

					return [...list]
				}
			}

			throw new Exception(`Value [${value}] does not exists in collection`)
		},
		async entries() {
			return readStream<{ key: Buffer; value: Buffer }>(trie, (entry) => entry)
		},
		async forget(key) {
			return trie.del(valueToBytes(key))
		},
		get,
		getList,
		async getListHex(key: KVStoreKey) {
			return [...(await getList(key))].map((bytes) => bytesToHex(bytes))
		},
		has,
		hasCheckpoints() {
			return trie.hasCheckpoints()
		},
		async keys() {
			return readStream<Buffer>(trie, ({ key }) => key)
		},
		async loadSnapshot(chunk: Uint8Array) {
			const ops: PutBatch[] = []

			for (const entry of RLP.decode(chunk)) {
				ops.push({ key: entry[0], type: 'put', value: entry[1] })
			}

			await (trie.database().db as LevelDB).batch(ops)
		},
		async missing(key) {
			return !(await has(key))
		},
		async persistRoot(hash) {
			trie.root(hash)

			await trie.persistRoot()
		},
		async revert() {
			await trie.revert()
		},
		root() {
			return trie.root()
		},
		set,
		setRoot(hash) {
			trie.root(hash)
		},
		async snapshot(target: KVStore, root?: Buffer) {
			const copy = makeKVStore(trie.copy(), opts)
			copy.setRoot(root ?? trie.root())

			for (const { key, value } of await copy.entries()) {
				await target.set(key, value)
			}
		},
		async *takeSnapshot() {
			let chunks: Array<[Uint8Array, Uint8Array]> = []

			let chunkSize = 0
			let chunkCount = 0
			for await (const [key, value] of (trie.database().db as LevelDB).iterator()) {
				chunkCount++

				const chunkSizeNext = chunkSize + key.byteLength + value.byteLength

				if (chunkSizeNext >= MAX_BYTE_LENGTH) {
					yield [chunkCount, encodeChunks(chunks)]

					chunks = [[key, value]]
					chunkSize = key.byteLength + value.byteLength

					continue
				}

				chunks.push([key, value])

				chunkSize = chunkSizeNext
			}

			if (chunks.length > 0) {
				yield [chunkCount, encodeChunks(chunks)]
			}
		},
		async values() {
			return readStream<Buffer>(trie, ({ value }) => value)
		},
		async verifyIntegrity() {
			// We can only verify the integrity if the trie is pruned
			if (opts.useNodePruning === true) {
				return trie.verifyPrunedIntegrity()
			}

			return true
		},
	}
}

export function makeSecureKVStore(): KVStoreFactory {
	return {
		async make(options?: KVStoreOpts) {
			const opts = {
				db: await LevelDB.make(process.env['NODE_ENV'] === 'test' ? undefined : options?.path),
				root: options?.root !== undefined ? Buffer.from(options.root) : undefined,
				useKeyHashing: options?.useKeyHashing,
				useNodePruning: options?.useNodePruning,
				useRootPersistence:
					options?.useRootPersistence === undefined ? true : options.useRootPersistence,
			} as any

			return makeKVStore(await Trie.create(opts), opts)
		},
	}
}
/* c8 ignore end*/
