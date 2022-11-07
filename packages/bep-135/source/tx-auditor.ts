import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP135Msg } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'
import { assertNativeTokenOwnership } from '@bearmint/bep-134'

export function makeTxAuditor(): TxAuditor<BEP135Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ hash }) => hash)

			const sender = await toolkit.getSender()

			for (const [index, { hash, recipient }] of Object.entries(msg.ops)) {
				await assertNativeTokenOwnership(state, sender, hash, `message.ops.${index}.hash`)

				await assert.recipientAddress(recipient, { key: `message.ops.${index}.recipient` })

				if (sender.address === recipient) {
					throw new TxAuditException({
						key: `message.ops.${index}.recipient`,
						value: ErrorCode.TX_FORBIDDEN_OWNERSHIP_MODIFICATION,
					})
				}
			}
		},
	}
}
