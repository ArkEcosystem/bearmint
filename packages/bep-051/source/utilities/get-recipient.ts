import type { StateStore, Tx } from '@bearmint/bep-013'

export async function getRecipient(state: StateStore, tx: Tx) {
	return state.getAccountRepository().findByAddress(tx.data.recipient.toString())
}
