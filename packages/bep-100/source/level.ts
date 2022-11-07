import { randomUUID } from 'node:crypto'

import { canonicalizeJson } from '@bearmint/bep-009'
import type { DataSinkOp } from '@bearmint/bep-013'
import type { AbstractSublevel } from 'abstract-level'
import type { ClassicLevel } from 'classic-level'

type Storage = AbstractSublevel<
	ClassicLevel<string, DataSinkOp>,
	string | Buffer,
	string,
	typeof Blob
>

export class LevelDB {
	readonly #database: Storage

	public constructor(database: Storage) {
		this.#database = database
	}

	public async all() {
		const result: Array<{ key: string; value: DataSinkOp }> = []

		for await (const [key, value] of this.#database.iterator()) {
			result.push({ key, value: value as unknown as DataSinkOp })
		}

		return result.sort(({ value: a }, { value: b }) => a.time - b.time)
	}

	public async put(value: DataSinkOp) {
		const key = randomUUID()

		await this.#database.put(key, canonicalizeJson(value))

		return key
	}

	public async del(key: string) {
		await this.#database.del(key)
	}
}
