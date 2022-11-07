import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP128Msg } from '@bearmint/bep-018'
import { ErrorCode } from '@bearmint/bep-109'
import { assertCollectionOwnership } from '@bearmint/bep-126'

export function makeTxAuditor(): TxAuditor<BEP128Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ hash }) => hash)

			const sender = await toolkit.getSender()

			for (const [index, { hash }] of Object.entries(msg.ops)) {
				await assertCollectionOwnership(state, hash, sender, {
					key: `message.ops.${index}.hash`,
					value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
				})
			}
		},
	}
}
