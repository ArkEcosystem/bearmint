import type { ABCIController } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

/**
 * @see https://github.com/tendermint/tendermint/blob/main/spec/abci/abci%2B%2B_methods.md#prepareproposal
 */
export function makePrepareProposal(): ABCIController<
	abci.RequestPrepareProposal,
	abci.ResponsePrepareProposal
	> {
	return {
		async execute(request) {
			const txs: Uint8Array[] = []
			let txsByteLength = BigInt(0)

			for (const tx of request.txs) {
				// 1. Calculate the new byte-length if we would add this tx
				const newByteLength = BigInt(txsByteLength + BigInt(tx.byteLength))

				// 2. If we would exceed the maximum length we need to exit
				if (newByteLength > request.maxTxBytes) {
					break
				}

				// 3. Add the tx to the response
				txs.push(tx)

				// 4. Track the new byte-length
				txsByteLength = newByteLength
			}

			return {
				txs,
			}
		},
	}
}
