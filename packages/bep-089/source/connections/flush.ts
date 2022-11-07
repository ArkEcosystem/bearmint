import type { ABCIController } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

export function makeFlush(): ABCIController<abci.RequestFlush, abci.ResponseFlush> {
	return {
		async execute(_request) {
			return {}
		},
	}
}
