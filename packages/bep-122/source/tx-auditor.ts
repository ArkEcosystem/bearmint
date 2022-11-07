import { assert as BEP3, hexToBytes } from '@bearmint/bep-009'
import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP122Msg } from '@bearmint/bep-018'
import { BEP122MsgHash } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'
import { getSentenceEnd, isJailed } from '@bearmint/bep-120'

export function makeTxAuditor(): TxAuditor<BEP122Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.memoLength(msg.memo)

			const sender = await toolkit.getSender()

			assert.accountHasValidator(sender)

			BEP3.defined(sender.validator)

			if (msg.moniker !== sender.moniker) {
				throw new TxAuditException({
					key: 'message.moniker',
					value: ErrorCode.TX_MALFORMED_VALUE,
				})
			}

			await assert.notTombstoned(sender)

			// Sender is not jailed
			if (!(await isJailed(state, sender))) {
				throw new TxAuditException({
					key: 'sender',
					value: ErrorCode.TX_VALIDATOR_NOT_JAILED,
				})
			}

			// Not ready to unjail
			const committedBlockNumber = await state.getCommittedBlockNumber()

			if (committedBlockNumber < (await getSentenceEnd(state, sender))) {
				throw new TxAuditException({
					key: 'message.blockNumber',
					value: ErrorCode.TX_VALIDATOR_JAILED,
				})
			}

			await assert.validatorAuthenticity(
				new BEP122MsgHash(msg).toBinary(),
				hexToBytes(sender.validator.publicKey),
				msg.signature,
			)
		},
	}
}
