import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP110Msg } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

export function makeTxAuditor(): TxAuditor<BEP110Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.memoLength(msg.memo)

			const sender = await toolkit.getSender()

			if (sender.moniker !== undefined) {
				throw new TxAuditException({
					key: 'message.moniker',
					value: ErrorCode.TX_FORBIDDEN_ACTION,
				})
			}

			if (await state.getAccountRepository().hasByMonkiker(msg.moniker)) {
				throw new TxAuditException({
					key: 'message.moniker',
					value: ErrorCode.TX_DUPLICATED_VALUE,
				})
			}

			assert.regex('moniker', msg.moniker, {
				key: 'message.moniker',
				value: ErrorCode.TX_MALFORMED_VALUE,
			})
		},
	}
}
