import type { Cradle, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'

export class FilterPeer implements QueryHandler {
	readonly #cradle: Cradle

	public constructor(cradle: Cradle) {
		this.#cradle = cradle
	}

	async isMatch({ path }: QueryHandlerOpts) {
		return path[0] === 'p2p' && path[1] === 'filter' && path.length >= 3
	}

	async execute({ path }: QueryHandlerOpts) {
		if (this.#cradle.Container.missing(ContainerType.BearmintConfiguration)) {
			return { code: 0 }
		}

		if (path[2] === 'addr') {
			return this.#filter({
				identifier: path[3]!,
				identifiers: this.#cradle.BearmintConfiguration.p2p.blacklist_by_addr,
			})
		}

		if (path[2] === 'id') {
			return this.#filter({
				identifier: path[3]!,
				identifiers: this.#cradle.BearmintConfiguration.p2p.blacklist_by_id,
			})
		}

		return {
			code: 1,
		}
	}

	#filter({ identifier, identifiers }: { identifier: string; identifiers?: string | undefined }) {
		if (identifiers === undefined) {
			return { code: 0 } // No filtering
		}

		if (identifiers.split(',').includes(identifier)) {
			return { code: 1 } // Blacklisted
		}

		return { code: 0 } // Not blacklisted
	}
}
