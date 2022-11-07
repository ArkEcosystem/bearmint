import { bytesToHex } from '@bearmint/bep-009'
import type { AccountWithValidator, TxAuditor } from '@bearmint/bep-013'
import type { BEP57Msg } from '@bearmint/bep-018'
import { BEP57MsgHash } from '@bearmint/bep-018'
import { getPublicKeyType } from '@bearmint/bep-021'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import { deriveAddress } from './utils.js'

export function makeTxAuditor(): TxAuditor<BEP57Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.memoLength(msg.memo)

			const sender = (await toolkit.getSender()) as AccountWithValidator

			if (sender.moniker === undefined) {
				throw new TxAuditException({
					key: 'sender.moniker',
					value: ErrorCode.TX_FORBIDDEN_ACTION,
				})
			}

			const address = bytesToHex(
				deriveAddress(msg.publicKey, getPublicKeyType(state.getMilestone())),
			)

			if (await state.getAccountRepository().hasByValidatorAddress(address)) {
				throw new TxAuditException({
					key: 'message.publicKey',
					value: ErrorCode.TX_FORBIDDEN_ACTION,
				})
			}

			await assert.validatorAuthenticity(
				new BEP57MsgHash({
					memo: msg.memo as string,
					moniker: sender.moniker,
				}).toBinary(),
				msg.publicKey,
				msg.signature,
			)
		},
	}
}
