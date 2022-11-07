import type { EventListener } from '@bearmint/bep-013'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import type { TxListenerPayload } from './types.js'

export function makeVerifyNonceListener(): EventListener<TxListenerPayload> {
	return {
		async execute(data) {
			const account = await data.state
				.getAccountRepository()
				.findByPublicKey(data.tx.data.sender.toString())

			if (data.tx.data.nonce === account.nonce + BigInt(1)) {
				return
			}

			throw new TxAuditException({
				key: 'nonce',
				value: ErrorCode.TX_OUT_OF_ORDER_NONCE,
			})
		},
	}
}
