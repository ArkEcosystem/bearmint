import type { Cradle, EventListener } from '@bearmint/bep-013'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import { findOrCreateAccountByAddress } from '../utilities/find-or-create-account-by-address.js'
import type { TxListenerPayload } from './types.js'

export function makeFindOrCreateRecipientListener(
	cradle: Cradle,
): EventListener<TxListenerPayload> {
	return {
		async execute(data) {
			try {
				await findOrCreateAccountByAddress(
					data.state,
					cradle.AddressFactory,
					cradle.AccountSerializer,
					data.tx.data.recipient.toString(),
				)
			} catch {
				throw new TxAuditException({
					key: 'recipient',
					value: ErrorCode.TX_MALFORMED_ADDRESS,
				})
			}
		},
	}
}
