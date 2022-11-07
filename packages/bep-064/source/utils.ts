import { assert, blake3, bytesToHex, bytesToJson } from '@bearmint/bep-009'
import type { KVStore, TxFactory, TxMsgFactoryRegistry } from '@bearmint/bep-013'

import type { CustomTxMsgFactory } from './tx-msg.js'
import type { PendingLock } from './types.js'
import { HANDLER } from './types.js'

export function getPrimaryKey(hash: string, index: string) {
	return bytesToHex(blake3(`${HANDLER}/h/${hash}/i/${index}`))
}

export async function getPendingLock(
	txStore: KVStore,
	txFactory: TxFactory,
	txMsgServiceRegistry: TxMsgFactoryRegistry,
	bep64: KVStore,
	hash: string,
): Promise<PendingLock> {
	// 1. get the hash of the htlc lock tx based on the randomly generated lock hash
	const pendingLock = bytesToJson<{ hash: string; index: number }>(await bep64.get(hash))

	// 2. get the htlc lock tx
	const bytes = await txStore.get(pendingLock.hash)

	// 3. decode the htlc lock tx
	const tx = await txFactory.fromBytes(bytes)

	// 4. canonicalize the htlc lock tx
	const { ops } = await txMsgServiceRegistry.getFromTx<CustomTxMsgFactory>(tx).fromTx(tx)

	// 5. grab the lock at the exact index
	const lock = ops[Number(pendingLock.index)]

	assert.defined(lock)

	return {
		...lock,
		sender: tx.data.sender.toString(),
	}
}
