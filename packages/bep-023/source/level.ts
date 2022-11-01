import 'abstract-level'

import { assert } from '@bearmint/bep-009'
import type { BatchDBOp, DB } from '@ethereumjs/trie'
import { ClassicLevel } from 'classic-level'
import { MemoryLevel } from 'memory-level'

const ENCODING_OPTS = { keyEncoding: 'buffer', valueEncoding: 'buffer' }

type Database = ClassicLevel<Buffer, Buffer> | MemoryLevel<Buffer, Buffer>

export class LevelDB implements DB {
	#database: Database

	public constructor(database: Database) {
		this.#database = database
	}

	public static async make(path?: string | undefined) {
		if (path === undefined) {
			return new LevelDB(new MemoryLevel(ENCODING_OPTS))
		}

		return new LevelDB(new ClassicLevel(path, ENCODING_OPTS))
	}

	public async get(key: Buffer) {
		assert.buffer(key)

		let value: Buffer

		try {
			value = await this.#database.get(key)
		} catch (error) {
			if (error.notFound === true) {
				// eslint-disable-next-line unicorn/no-null
				return null
			}

			throw error
		}

		assert.buffer(value)

		return value
	}

	public async put(key: Buffer, value: Buffer) {
		assert.buffer(key)
		assert.buffer(value)

		await this.#database.put(key, value)
	}

	public async del(key: Buffer) {
		assert.buffer(key)

		await this.#database.del(key)
	}

	public async batch(opStack: BatchDBOp[]) {
		await this.#database.batch(opStack)
	}

	public async clear() {
		await this.#database.clear()
	}

	public copy() {
		return new LevelDB(this.#database)
	}

	public async keys() {
		return this.#database.keys().all()
	}

	public iterator() {
		return this.#database.iterator()
	}
}
