import type { Cradle, EventListener } from '@bearmint/bep-013'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import type { TxListenerPayload } from './types.js'

export function makeVerifyNetworkListener(cradle: Cradle): EventListener<TxListenerPayload> {
	return {
		async execute(data) {
			const actual = data.tx.checksum.network
			const expected = cradle.GenesisParameters.app_hash

			if (actual !== expected) {
				throw new TxAuditException({
					key: 'checksum.network',
					value: ErrorCode.TX_UNEXPECTED_TRANSACTION_NETWORK,
				})
			}
		},
	}
}
