import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP130Msg } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'
import {
	assertCollectionOwnership,
	assertStewardCan,
	HANDLER,
	hasCollectionOwnership,
	isUnknownPermission,
} from '@bearmint/bep-126'

export function makeTxAuditor(): TxAuditor<BEP130Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ hash, steward }) => `${hash}${steward}`)

			const sender = await toolkit.getSender()

			for (const [index, { hash, permissions, steward }] of Object.entries(msg.ops)) {
				await assertCollectionOwnership(state, hash, sender, {
					key: `message.ops.${index}.hash`,
					value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
				})

				await assert.recipientAddress(steward, { key: `message.ops.${index}.steward` })

				if (
					await hasCollectionOwnership(
						state,
						hash,
						await state.getAccountRepository().findByAddress(steward),
					)
				) {
					throw new TxAuditException({
						key: `message.ops.${index}.hash`,
						value: ErrorCode.TX_FORBIDDEN_OWNERSHIP_MODIFICATION,
					})
				}

				for (const [pindex, permission] of Object.entries(permissions)) {
					isUnknownPermission(permission, {
						key: `message.ops.${index}.permissions.${pindex}`,
						value: ErrorCode.TX_UNKNOWN_PERMISSION,
					})

					await assertStewardCan(state.getMultiStore().get(HANDLER), hash, steward, permission, {
						key: `message.ops.${index}.permissions.${pindex}`,
						value: ErrorCode.TX_FORBIDDEN_OWNERSHIP_MODIFICATION,
					})
				}
			}
		},
	}
}
