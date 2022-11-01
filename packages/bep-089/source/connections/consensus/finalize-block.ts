import type { ABCIController, Cradle } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'

import { beginBlock } from './methods/begin-block.js'
import { endBlock } from './methods/end-block.js'
import { executeTx } from './methods/execute-tx.js'

/**
 * @see https://github.com/tendermint/tendermint/blob/main/spec/abci/abci%2B%2B_methods.md#processproposal
 */
export function makeFinalizeBlock(
	cradle: Cradle,
): ABCIController<abci.RequestFinalizeBlock, abci.ResponseFinalizeBlock> {
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

			const beginBlockResult = await beginBlock(cradle, request)

			const txResults: abci.ExecTxResult[] = []
			for (const tx of request.txs) {
				await executeTx(cradle, tx)
			}

			const endBlockResult = await endBlock(cradle, request)

			// Tendermint expects `last_block_app_hash` and `last_block_height` to be updated during `FinalizeBlock` and persisted during `Commit`
			// TODO: set height and root and use world root after that as agreedAppData

			await cradle.ExecuteTxState.setValidatorUpdates(endBlockResult.validatorUpdates)

			return {
				/**
				 * This differs from the pre-ABCI++ implementation in that we
				 * previously used the world trie root AFTER we committed
				 * (written to disk) any state changes. The new value is the
				 * world trie root of the candidate state before we commit.
				 */
				agreedAppData: cradle.ExecuteTxState.getAppHash(),
				consensusParamUpdates: endBlockResult.consensusParamUpdates,
				events: [...beginBlockResult.events, ...endBlockResult.events],
				txResults,
				validatorUpdates: endBlockResult.validatorUpdates,
			}
		},
	}
}
