import { assert, bytesToString, jsonToBytes, RLP } from '@bearmint/bep-009'
import type { Cradle, KVStore, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'

export class Query implements QueryHandler {
	readonly #store: KVStore

	public constructor(cradle: Cradle) {
		this.#store = cradle.CommittedState.getMultiStore().get('@bearmint/bep-118')
	}

	async isMatch({ data, path }: QueryHandlerOpts) {
		if (!(data instanceof Uint8Array)) {
			return false
		}

		return path[0] === 'store' && path[1] === '@bearmint' && path[2] === 'bep-118'
	}

	async execute({ data }: QueryHandlerOpts) {
		assert.defined<Uint8Array>(data)

		const value = await this.#store.get(bytesToString(data))

		try {
			return {
				code: 0,
				value: jsonToBytes(RLP.decode(value)),
			}
		} catch {
			return {
				code: 0,
				value,
			}
		}
	}
}
