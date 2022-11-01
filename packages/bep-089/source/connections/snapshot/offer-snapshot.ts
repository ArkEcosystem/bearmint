import { assert, RLP } from '@bearmint/bep-009'
import type { ABCIController } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'

const MAX_BYTE_LENGTH_RLP = 10_485_760

export function makeOfferSnapshot(): ABCIController<
	abci.RequestOfferSnapshot,
	abci.ResponseOfferSnapshot
	> {
	return {
		async execute(request) {
			try {
				assert.defined(request.snapshot)

				if (request.snapshot.format !== 0) {
					return {
						result: abci.ResponseOfferSnapshot_Result.REJECT_FORMAT,
					}
				}

				const [_, totalByteLength] = RLP.decode(request.snapshot.metadata)

				if (totalByteLength > MAX_BYTE_LENGTH_RLP) {
					return {
						result: abci.ResponseOfferSnapshot_Result.REJECT,
					}
				}

				return {
					result: abci.ResponseOfferSnapshot_Result.ACCEPT,
				}
			} catch {
				return {
					result: abci.ResponseOfferSnapshot_Result.UNKNOWN,
				}
			}
		},
	}
}
