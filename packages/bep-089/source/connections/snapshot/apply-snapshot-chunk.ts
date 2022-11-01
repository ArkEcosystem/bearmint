import type { ABCIController, Cradle } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'

export function makeApplySnapshotChunk(
	cradle: Cradle,
): ABCIController<abci.RequestApplySnapshotChunk, abci.ResponseApplySnapshotChunk> {
	return {
		async execute(request) {
			try {
				await cradle.SnapshotService.load(request.chunk)

				return {
					refetchChunks: [],
					rejectSenders: [],
					result: abci.ResponseApplySnapshotChunk_Result.ACCEPT,
				}
			} catch {
				return {
					refetchChunks: [request.index],
					rejectSenders: [request.sender],
					result: abci.ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT,
				}
			}
		},
	}
}
