import { assert } from '@bearmint/bep-009'
import type { Cradle, QueryHandler, QueryHandlerOpts } from '@bearmint/bep-013'

export class SimulateTx implements QueryHandler {
	readonly #cradle: Cradle

	public constructor(cradle: Cradle) {
		this.#cradle = cradle
	}

	async isMatch({ data, path }: QueryHandlerOpts) {
		if (!(data instanceof Uint8Array)) {
			return false
		}

		return path[0] === 'tx' && path[1] === 'simulate'
	}

	async execute({ data }: QueryHandlerOpts) {
		assert.defined<Uint8Array>(data)

		const tx = await this.#cradle.TxFactory.fromBytes(data)

		await this.#cradle.TxProcessor.execute(
			this.#cradle.EventRecorderFactory.make(),
			this.#cradle.GasMeterFactory.make(),
			await this.#cradle.CommittedState.copy(),
			tx,
		)

		return {
			code: 0,
		}
	}
}
