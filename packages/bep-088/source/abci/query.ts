import { assert, bytesToString, jsonToBytes } from '@bearmint/bep-009'
import type { Cradle, KVStore, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import { BEP88Validator } from '@bearmint/bep-018'

export class Query implements QueryHandler {
	readonly #store: KVStore

	public constructor(cradle: Cradle) {
		this.#store = cradle.CommittedState.getMultiStore().get('@bearmint/bep-088')
	}

	async isMatch({ data, path }: QueryHandlerOpts) {
		if (!(data instanceof Uint8Array)) {
			return false
		}

		return path[0] === 'store' && path[1] === '@bearmint' && path[2] === 'bep-088'
	}

	async execute({ data }: QueryHandlerOpts) {
		assert.defined<Uint8Array>(data)

		return {
			code: 0,
			value: jsonToBytes(
				BEP88Validator.fromBinary(await this.#store.get(bytesToString(data)), PROTO_OPTS).toJson(),
			),
		}
	}
}
