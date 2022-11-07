import type { ABCIController } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'

export function makeApplySnapshotChunk(): ABCIController<
	abci.RequestApplySnapshotChunk,
	abci.ResponseApplySnapshotChunk
> {
	return {
		async execute() {
			return {
				refetchChunks: [],
				rejectSenders: [],
				result: abci.ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT,
			}
		},
	}
}
