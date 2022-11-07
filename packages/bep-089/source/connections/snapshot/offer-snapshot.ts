import type { ABCIController } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'

export function makeOfferSnapshot(): ABCIController<
	abci.RequestOfferSnapshot,
	abci.ResponseOfferSnapshot
> {
	return {
		async execute(_request) {
			return {
				result: abci.ResponseOfferSnapshot_Result.UNKNOWN,
			}
		},
	}
}
