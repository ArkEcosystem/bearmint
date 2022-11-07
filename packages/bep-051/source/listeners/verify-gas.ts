import type { Cradle, EventListener } from '@bearmint/bep-013'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import type { TxListenerPayload } from './types.js'

export function makeVerifyGasListener(cradle: Cradle): EventListener<TxListenerPayload> {
	return {
		async execute(data) {
			try {
				await cradle.GasCalculator.execute(data.state, data.tx)
			} catch {
				throw new TxAuditException({
					key: 'gas',
					value: ErrorCode.TX_GAS_UNDEFINED,
				})
			}
		},
	}
}
