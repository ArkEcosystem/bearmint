import type { Cradle, EventListener } from '@bearmint/bep-013'
import { getModuleMilestone } from '@bearmint/bep-021'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import type { TxListenerPayload } from './types.js'

export function makeVerifyTxVersionListener(cradle: Cradle): EventListener<TxListenerPayload> {
	return {
		async execute(data) {
			const { version: expected } = getModuleMilestone<{ version: string }>(
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				'@bearmint/bep-051',
			)

			if (data.tx.data.version !== expected) {
				throw new TxAuditException({
					key: 'version',
					value: ErrorCode.TX_UNKNOWN_TRANSACTION_VERSION,
				})
			}
		},
	}
}
