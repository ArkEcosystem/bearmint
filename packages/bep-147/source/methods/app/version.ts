import { stringToBytes } from '@bearmint/bep-009'
import type { Cradle, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'

export class QueryVersion implements QueryHandler {
	readonly #cradle: Cradle

	public constructor(cradle: Cradle) {
		this.#cradle = cradle
	}

	async isMatch({ path }: QueryHandlerOpts) {
		return path[0] === 'app' && path[1] === 'version'
	}

	async execute() {
		return {
			code: 0,
			value: stringToBytes(this.#cradle.ApplicationManifest.semanticVersion),
		}
	}
}
