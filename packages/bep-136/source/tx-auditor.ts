import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP136Msg } from '@bearmint/bep-018'
import { assertNativeTokenOwnership } from '@bearmint/bep-134'

export function makeTxAuditor(): TxAuditor<BEP136Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ hash }) => hash)

			const sender = await toolkit.getSender()

			for (const [index, { hash }] of Object.entries(msg.ops)) {
				await assertNativeTokenOwnership(state, sender, hash, `message.ops.${index}.hash`)
			}
		},
	}
}
