import type { Account } from '@bearmint/bep-013'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

export function assertPowerMode({
	delegator,
	mode,
	moniker,
}: {
	mode: string
	moniker: string
	delegator: Account
}) {
	// standard = stake for yourself (PoS)
	if (mode === 'standard' && moniker !== delegator.moniker) {
		throw new TxAuditException({
			key: 'message.ops',
			value: ErrorCode.TX_FORBIDDEN_ACTION,
		})
	}

	// delegated = stake from others (PoS derivatives)
	if (mode === 'delegated' && moniker === delegator.moniker) {
		throw new TxAuditException({
			key: 'message.ops',
			value: ErrorCode.TX_FORBIDDEN_ACTION,
		})
	}
}
