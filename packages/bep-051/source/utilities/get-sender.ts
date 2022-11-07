import type { StateStore, Tx } from '@bearmint/bep-013'

export function getSender(state: StateStore, tx: Tx) {
	return state.getAccountRepository().findByPublicKey(tx.data.sender.toString())
}
