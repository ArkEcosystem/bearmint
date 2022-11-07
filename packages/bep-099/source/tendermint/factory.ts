import { bytesToHex, dot } from '@bearmint/bep-009'
import type { Tx } from '@bearmint/bep-013'

import { executeCall, getJSON } from './http.js'
import type { BroadcastTxResponse } from './types.js'

export function makeTendermintClient(host: string) {
	async function getAccountByPublicKey(publicKey: string) {
		return getJSON(host, 'abci_query', {
			path: `/account/filter/publicKey/${publicKey}`,
		})
	}

	return {
		async broadcastSignedTx(signedTx: Tx): Promise<BroadcastTxResponse> {
			const { result } = await (
				await fetch(`${host}/broadcast_tx_commit?tx=0x${bytesToHex(signedTx.bytes)}`)
			).json()

			return result
		},
		async getAccountByAddress(address: string) {
			return getJSON(host, 'abci_query', {
				path: `/account/filter/address/${address}`,
			})
		},
		async getCommittedBlockNumber() {
			return BigInt(
				dot.get<string>(await executeCall(host, 'status'), 'sync_info.latest_block_height'),
			)
		},
		async getNextNonce(publicKey: string) {
			try {
				return (BigInt((await getAccountByPublicKey(publicKey)).nonce) + BigInt(1)).toString()
			} catch {
				return '1'
			}
		},
	}
}
