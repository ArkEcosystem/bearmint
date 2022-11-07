import { assert } from '@bearmint/bep-009'
import type { Cradle, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'

export class QueryState implements QueryHandler {
	readonly #cradle: Cradle

	public constructor(cradle: Cradle) {
		this.#cradle = cradle
	}

	async isMatch({ data, path }: QueryHandlerOpts) {
		if (!(data instanceof Uint8Array)) {
			return false
		}

		return path[0] === 'store' && path[1] === undefined
	}

	async execute({ data }: QueryHandlerOpts) {
		assert.defined<Uint8Array>(data)

		for (const store of Object.values(this.#cradle.CommittedState.getMultiStore().all())) {
			try {
				return {
					code: 0,
					value: await store.get(data),
				}
			} catch {
				// Keep looking...
			}
		}

		return {
			code: 1,
		}
	}
}
