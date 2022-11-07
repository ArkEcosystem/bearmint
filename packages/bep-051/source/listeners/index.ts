// @ts-no-check

import type { ClassOrFunctionReturning, EventListener } from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'

import { makeDeductGasListener } from './deduct-gas.js'
import { makeFindOrCreateRecipientListener } from './find-or-create-recipient.js'
import { makeFindOrCreateSenderListener } from './find-or-create-sender.js'
import { makeIncrementNonceListener } from './increment-nonce.js'
import { makeVerifyGasListener } from './verify-gas.js'
import { makeVerifyNetworkListener } from './verify-network.js'
import { makeVerifyNonceListener } from './verify-nonce.js'
import { makeVerifySignatureListener } from './verify-signature.js'
import { makeVerifyTxMsgVersionListener } from './verify-tx-handler-version.js'
import { makeVerifyTxVersionListener } from './verify-tx-version.js'

export const TX_LISTENERS: Array<[string, ClassOrFunctionReturning<EventListener>]> = [
	[Event.TransactionAudited, makeVerifyTxVersionListener],
	[Event.TransactionAudited, makeVerifyTxMsgVersionListener],
	[Event.TransactionAudited, makeVerifyNetworkListener],
	[Event.TransactionAudited, makeFindOrCreateSenderListener],
	[Event.TransactionAudited, makeFindOrCreateRecipientListener],
	[Event.TransactionAudited, makeVerifyGasListener],
	[Event.TransactionAudited, makeVerifyNonceListener],
	[Event.TransactionAuditing, makeVerifySignatureListener],
	[Event.TransactionExecuted, makeDeductGasListener],
	[Event.TransactionExecuting, makeIncrementNonceListener],
]

export { makeDeductGasListener } from './deduct-gas.js'
export { makeFindOrCreateRecipientListener } from './find-or-create-recipient.js'
export { makeFindOrCreateSenderListener } from './find-or-create-sender.js'
export { makeIncrementNonceListener } from './increment-nonce.js'
export { makeVerifyGasListener } from './verify-gas.js'
export { makeVerifyNetworkListener } from './verify-network.js'
export { makeVerifyNonceListener } from './verify-nonce.js'
export { makeVerifySignatureListener } from './verify-signature.js'
export { makeVerifyTxMsgVersionListener } from './verify-tx-handler-version.js'
export { makeVerifyTxVersionListener } from './verify-tx-version.js'
