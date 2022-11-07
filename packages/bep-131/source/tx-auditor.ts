import type { Cradle, TxAuditor } from '@bearmint/bep-013'
import type { BEP131Msg } from '@bearmint/bep-018'
import { assertCollectionPolicies, BEP126UserPermission } from '@bearmint/bep-126'

export function makeTxAuditor(cradle: Cradle): TxAuditor<BEP131Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			const sender = await toolkit.getSender()

			for (const [index, op] of Object.entries(msg.ops)) {
				await assert.recipientAddress(op.recipient, { key: `message.ops.${index}.recipient` })

				await assertCollectionPolicies(
					state,
					cradle.PolicyRegistry,
					sender,
					BEP126UserPermission.MINT,
					op.hash,
					undefined,
					index,
				)
			}
		},
	}
}
