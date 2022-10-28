import type { ABCIController } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'

/**
 * @see https://github.com/tendermint/tendermint/blob/main/spec/abci/abci%2B%2B_methods.md#processproposal
 */
export function makeProcessProposal(): ABCIController<
	abci.RequestProcessProposal,
	abci.ResponseProcessProposal
	> {
	return {
		async execute(request) {
			for (const tx of request.txs) {
				if (tx.byteLength === 0) {
					return {
						status: abci.ResponseProcessProposal_ProposalStatus.REJECT,
					}
				}
			}

			// TODO: The Application may fully execute the block as though it was handling the calls to BeginBlock-ExecuteTx-EndBlock.
			// TODO: However, any resulting state changes must be kept as candidate state, and the Application should be ready to discard it in case another block is decided.

			// this.#beginBlock(request)

			// for (const tx of request.txs) {
			// 	this.#executeTx(request, tx)
			// }

			// this.#endBlock(request)

			return {
				status: abci.ResponseProcessProposal_ProposalStatus.ACCEPT,
			}
		},
	}
}
