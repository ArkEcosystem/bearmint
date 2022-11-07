import { assert, jsonToBytes } from '@bearmint/bep-009'
import type { Cradle, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'

export class EstimateTxGas implements QueryHandler {
	readonly #cradle: Cradle

	public constructor(cradle: Cradle) {
		this.#cradle = cradle
	}

	async isMatch({ data, path }: QueryHandlerOpts) {
		if (!(data instanceof Uint8Array)) {
			return false
		}

		return path[0] === 'tx' && path[1] === 'gas'
	}

	async execute({ data }: QueryHandlerOpts) {
		assert.defined<Uint8Array>(data)

		const tx = await this.#cradle.TxFactory.fromBytes(data)

		return {
			code: 0,
			value: jsonToBytes({
				size: tx.bytes.byteLength,
				...(await this.#cradle.GasCalculator.execute(this.#cradle.CommittedState, tx)),
			}),
		}
	}
}
