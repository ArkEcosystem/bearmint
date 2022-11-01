import type { ABCIController } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'

export function makeVerifyVoteExtension(): ABCIController<
	abci.RequestVerifyVoteExtension,
	abci.ResponseVerifyVoteExtension
	> {
	return {
		async execute() {
			return {
				status: abci.ResponseVerifyVoteExtension_VerifyStatus.REJECT,
			}
		},
	}
}
