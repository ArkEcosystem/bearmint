import { hexToBytes } from '@bearmint/bep-009'
import type { AccountWithValidator, Cradle, TxAuditor } from '@bearmint/bep-013'
import type { BEP58Msg } from '@bearmint/bep-018'
import { BEP58MsgHash } from '@bearmint/bep-018'
import { isGenesis } from '@bearmint/bep-022'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

export function makeTxAuditor(cradle: Cradle): TxAuditor<BEP58Msg> {
	return {
		async execute({ assert, msg, toolkit }) {
			await assert.loopback()

			assert.memoLength(msg.memo)

			const sender = (await toolkit.getSender()) as AccountWithValidator

			assert.accountHasValidator(sender)

			/**
			 * Genesis validators can't be removed because they serve as fallbacks
			 * to keep the network going in case there's an insufficient amount of
			 * validators from third-parties. We need to use them to do the job...
			 */
			if (isGenesis(cradle.GenesisParameters.validators, sender)) {
				throw new TxAuditException({
					key: 'sender',
					value: ErrorCode.TX_FORBIDDEN_ACTION,
				})
			}

			await assert.validatorAuthenticity(
				new BEP58MsgHash({
					memo: msg.memo as string,
					moniker: sender.moniker,
				}).toBinary(),
				hexToBytes(sender.validator.publicKey),
				msg.signature,
			)
		},
	}
}
