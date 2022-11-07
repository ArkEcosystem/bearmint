import type { Cradle, EventListener } from '@bearmint/bep-013'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import { findOrCreateAccountByPublicKey } from '../utilities/find-or-create-account-by-public-key.js'
import type { TxListenerPayload } from './types.js'

export function makeFindOrCreateSenderListener(
	cradle: Pick<Cradle, 'AccountSerializer' | 'AddressFactory' | 'PublicKeyFactory'>,
): EventListener<TxListenerPayload> {
	return {
		async execute(data) {
			try {
				await findOrCreateAccountByPublicKey(
					cradle.AccountSerializer,
					cradle.AddressFactory,
					data.tx.data.sender.toString(),
					cradle.PublicKeyFactory,
					data.state,
				)
			} catch {
				throw new TxAuditException({
					key: 'sender',
					value: ErrorCode.TX_MALFORMED_PUBLIC_KEY,
				})
			}
		},
	}
}
