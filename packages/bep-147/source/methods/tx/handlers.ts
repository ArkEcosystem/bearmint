import { jsonToBytes } from '@bearmint/bep-009'
import type { Cradle, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'

export class ListTxHandlers implements QueryHandler {
	readonly #cradle: Cradle

	public constructor(cradle: Cradle) {
		this.#cradle = cradle
	}

	async isMatch({ path }: QueryHandlerOpts) {
		return path[0] === 'tx' && path[1] === 'handlers'
	}

	async execute() {
		const result = {}

		for (const [name, versions] of Object.entries(this.#cradle.TxManifestRegistry.all())) {
			result[name] = {}

			for (const [version, manifest] of Object.entries(versions)) {
				result[name][version] = {
					checksum: manifest.checksum(),
					name: manifest.name(),
					version: manifest.version(),
				}
			}
		}

		return {
			code: 0,
			value: jsonToBytes(result),
		}
	}
}
