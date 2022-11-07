import { assert, bytesToJson } from '@bearmint/bep-009'
import type { Cradle, KVStore, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'

import { HANDLER } from '../types.js'

export class Query implements QueryHandler {
	readonly #store: KVStore

	public constructor(cradle: Cradle) {
		this.#store = cradle.CommittedState.getMultiStore().get(HANDLER)
	}

	async isMatch({ data, path }: QueryHandlerOpts) {
		if (!(data instanceof Uint8Array)) {
			return false
		}

		return path[0] === 'store' && path[1] === '@bearmint' && path[2] === 'bep-058'
	}

	async execute({ data }: QueryHandlerOpts) {
		assert.defined<Uint8Array>(data)

		return {
			code: 0,
			value: await this.#store.get(bytesToJson<{ key: string }>(data).key),
		}
	}
}
