import type { StateStore, Tx } from '@bearmint/bep-013'

import { getRecipient } from './get-recipient.js'
import { getSender } from './get-sender.js'

export async function getSenderWithRecipient(state: StateStore, tx: Tx) {
	return {
		recipient: await getRecipient(state, tx),
		sender: await getSender(state, tx),
	}
}
