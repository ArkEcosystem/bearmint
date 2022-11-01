import type { ABCIController, Cradle } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

export function makeLoadSnapshotChunk(
	cradle: Cradle,
): ABCIController<abci.RequestLoadSnapshotChunk, abci.ResponseLoadSnapshotChunk> {
	return {
		async execute(request) {
			try {
				return {
					chunk: await cradle.SnapshotService.find(request.height, request.format, request.chunk),
				}
			} catch {
				return {
					chunk: undefined,
				}
			}
		},
	}
}
