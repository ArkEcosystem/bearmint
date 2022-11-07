import { jsonToBytes } from '@bearmint/bep-009'
import type { Cradle, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'

export class QueryMilestones implements QueryHandler {
	readonly #cradle: Cradle

	public constructor(cradle: Cradle) {
		this.#cradle = cradle
	}

	async isMatch({ path }: QueryHandlerOpts) {
		return path[0] === 'app' && path[1] === 'milestones'
	}

	async execute() {
		return {
			code: 0,
			value: jsonToBytes(this.#cradle.Milestones),
		}
	}
}
