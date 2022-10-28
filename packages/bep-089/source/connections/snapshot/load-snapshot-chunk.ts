import type { ABCIController } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

export function makeLoadSnapshotChunk(): ABCIController<
	abci.RequestLoadSnapshotChunk,
	abci.ResponseLoadSnapshotChunk
	> {
	return {
		async execute(_request) {
			return {
				chunk: new Uint8Array(0),
			}
		},
	}
}
