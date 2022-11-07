import { assert, canonicalizeJson, jsonToBytes } from '@bearmint/bep-009'
import type { Cradle, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'
import { ErrorCode } from '@bearmint/bep-109'

export class QueryTx implements QueryHandler {
	readonly #cradle: Cradle

	public constructor(cradle: Cradle) {
		this.#cradle = cradle
	}

	async isMatch({ path }: QueryHandlerOpts) {
		if (path.length !== 4) {
			return false
		}

		return (
			path[0] === 'tx' &&
			path[1] === 'filter' &&
			['hash'].includes(path[2]) &&
			path[3] !== undefined
		)
	}

	async execute({ path }: QueryHandlerOpts) {
		assert.defined<Uint8Array>(path[2])
		assert.defined<Uint8Array>(path[3])

		if (path[2] === 'hash') {
			return {
				code: 0,
				value: jsonToBytes(
					canonicalizeJson(
						(
							await this.#cradle.TxFactory.fromBytes(
								await this.#cradle.CommittedState.getTxStore().get(path[3]),
							)
						).raw,
					),
				),
			}
		}

		return {
			code: 1,
			info: ErrorCode.TM_QUERY_MISSING_TRANSACTION_HASH,
		}
	}
}
