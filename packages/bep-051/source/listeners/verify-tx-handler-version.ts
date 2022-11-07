import { assert, semver } from '@bearmint/bep-009'
import type { EventListener } from '@bearmint/bep-013'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import type { TxListenerPayload } from './types.js'

export function makeVerifyTxMsgVersionListener(): EventListener<TxListenerPayload> {
	return {
		async execute(data) {
			const milestone =
				data.state.getMilestone().parameters.transactions.handlers[data.tx.checksum.handler]

			assert.defined(milestone)

			for (const range of milestone.ranges) {
				if (semver.satisfies(data.tx.checksum.version, range)) {
					return
				}
			}

			throw new TxAuditException({
				key: 'checksum.version',
				value: ErrorCode.TX_UNKNOWN_TRANSACTION_HANDLER_VERSION,
			})
		},
	}
}
