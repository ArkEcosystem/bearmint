import type { Cradle, TxAuditor } from '@bearmint/bep-013'
import type { BEP132Msg } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'
import { assertCollectionPolicies, BEP126UserPermission } from '@bearmint/bep-126'
import { getNFT, HANDLER } from '@bearmint/bep-131'

export function makeTxAuditor(cradle: Cradle): TxAuditor<BEP132Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ hash }) => hash)

			const sender = await toolkit.getSender()

			for (const [index, { hash, recipient }] of Object.entries(msg.ops)) {
				await assert.recipientAddress(recipient, { key: `message.ops.${index}.recipient` })

				const token = await getNFT(state.getMultiStore().get(HANDLER), hash)

				if (token.owner === recipient) {
					throw new TxAuditException({
						key: `message.ops.${index}.recipient`,
						value: ErrorCode.TX_FORBIDDEN_OWNERSHIP_MODIFICATION,
					})
				}

				await assertCollectionPolicies(
					state,
					cradle.PolicyRegistry,
					sender,
					BEP126UserPermission.TRANSFER,
					token.collection,
					hash,
					index,
				)
			}
		},
	}
}
