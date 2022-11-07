import { assert, canonicalizeJson, jsonToBytes } from '@bearmint/bep-009'
import type { Cradle, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'
import { ErrorCode } from '@bearmint/bep-109'

export class QueryAccount implements QueryHandler {
	readonly #cradle: Cradle

	public constructor(cradle: Cradle) {
		this.#cradle = cradle
	}

	async isMatch({ path }: QueryHandlerOpts) {
		if (path.length !== 4) {
			return false
		}

		return (
			path[0] === 'account' &&
			path[1] === 'filter' &&
			['address', 'moniker', 'publicKey'].includes(path[2]) &&
			path[3] !== undefined
		)
	}

	async execute({ path }: QueryHandlerOpts) {
		assert.defined<Uint8Array>(path[2])
		assert.defined<Uint8Array>(path[3])

		if (path[2] === 'address') {
			return {
				code: 0,
				value: jsonToBytes(
					canonicalizeJson(
						await this.#cradle.CommittedState.getAccountRepository().findByAddress(path[3]),
					),
				),
			}
		}

		if (path[2] === 'moniker') {
			return {
				code: 0,
				value: jsonToBytes(
					canonicalizeJson(
						await this.#cradle.CommittedState.getAccountRepository().findByMoniker(path[3]),
					),
				),
			}
		}

		if (path[2] === 'publicKey') {
			return {
				code: 0,
				value: jsonToBytes(
					canonicalizeJson(
						await this.#cradle.CommittedState.getAccountRepository().findByPublicKey(path[3]),
					),
				),
			}
		}

		return {
			code: 1,
			info: ErrorCode.TM_QUERY_MISSING_ACCOUNT_IDENTIFIER,
		}
	}
}
