import { hexToBytes, zeit } from '@bearmint/bep-009'
import { PROTO_OPTS } from '@bearmint/bep-013'
import { SignedTx } from '@bearmint/bep-018'

import type { Signature, StoreTx } from './database.js'
import type { MuSig } from './types.js'

type TxIndex = Record<string, string[]>

interface SignatureRequest {
	hash: string
	muSig: MuSig
	signature: Signature
}

export function makeMemory({ pendingLimit }: { pendingLimit: number }) {
	const txs: Record<string, StoreTx> = {}
	const txIdsBySender: TxIndex = {}
	const txIdsByPublicKey: TxIndex = {}

	function restoreTx(tx: StoreTx): string {
		const { sender } = SignedTx.fromBinary(hexToBytes(tx.hash), PROTO_OPTS)

		const pendingCount: number = (txIdsBySender[sender] ?? []).length

		if (pendingCount >= pendingLimit) {
			throw new Error(
				`The public key [${sender}] has reached its max of ${pendingLimit} pending txs.`,
			)
		}

		txs[tx.hash] = tx

		if (txIdsBySender[sender] === undefined) {
			txIdsBySender[sender] = []
		}

		txIdsBySender[sender]?.push(tx.hash)

		for (const publicKey of tx.muSig.slaves) {
			txIdsByPublicKey[publicKey] = txIdsByPublicKey[publicKey] ?? []
			txIdsByPublicKey[publicKey]?.push(tx.hash)
		}

		return tx.hash
	}

	function getTxById(storeId: string) {
		return txs[storeId]!
	}

	function removeById(storeId: string): void {
		const { hash, muSig } = txs[storeId]!
		const { sender } = SignedTx.fromBinary(hexToBytes(hash), PROTO_OPTS)

		// removes indexes
		txIdsBySender[sender] = txIdsBySender[sender]?.filter((id) => id !== storeId) ?? []

		for (const publicKey of muSig.slaves) {
			txIdsByPublicKey[publicKey] =
				txIdsByPublicKey[publicKey]?.filter((id) => id !== storeId) ?? []
		}

		// remove actual tx
		delete txs[storeId]
	}

	return {
		deleteAllTxs() {
			for (const id of Object.keys(txs)) {
				removeById(id)
			}
		},
		getAllTxs() {
			return Object.values(txs)
		},
		getTxById,
		getTxStoreByPublicKey(publicKey: string) {
			const storeIdsBySender = txIdsBySender[publicKey] ?? []
			const storeIdsByPublicKey = txIdsByPublicKey[publicKey] ?? []

			const allById: Record<string, StoreTx> = {}
			for (const id of [...storeIdsBySender, ...storeIdsByPublicKey]) {
				allById[id] = getTxById(id)
			}

			return Object.values(allById)
		},
		loadTxs(storeTxs: StoreTx[]) {
			for (const tx of storeTxs) {
				restoreTx(tx)
			}
		},
		removeById,
		saveTx({ hash, muSig, signature }: SignatureRequest): string {
			return restoreTx({
				hash,
				muSig,
				signatures: [signature],
				timestamp: zeit.toUnix(),
			})
		},
		updateTx({ hash, signature }: SignatureRequest) {
			txs[hash]?.signatures.push(signature)
		},
	}
}

export type Memory = ReturnType<typeof makeMemory>
