import type { ABCIController } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

export function makeExtendVote(): ABCIController<abci.RequestExtendVote, abci.ResponseExtendVote> {
	return {
		async execute() {
			return {
				voteExtension: undefined,
			}
		},
	}
}
