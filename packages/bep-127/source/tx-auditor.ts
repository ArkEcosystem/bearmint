import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP127Msg } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'
import { assertCollectionOwnership, hasCollectionOwnership } from '@bearmint/bep-126'

export function makeTxAuditor(): TxAuditor<BEP127Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ hash }) => hash)

			const sender = await toolkit.getSender()

			for (const [index, { hash, recipient }] of Object.entries(msg.ops)) {
				await assertCollectionOwnership(state, hash, sender, {
					key: `message.ops.${index}.hash`,
					value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
				})

				await assert.recipientAddress(recipient, { key: `message.ops.${index}.recipient` })

				if (
					await hasCollectionOwnership(
						state,
						hash,
						await state.getAccountRepository().findByAddress(recipient),
					)
				) {
					throw new TxAuditException({
						key: `message.ops.${index}.hash`,
						value: ErrorCode.TX_FORBIDDEN_OWNERSHIP_MODIFICATION,
					})
				}
			}
		},
	}
}
