import type { Cradle, TxAuditor } from '@bearmint/bep-013'
import type { BEP65Msg } from '@bearmint/bep-018'
import { getPendingLock, HANDLER } from '@bearmint/bep-064'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

export function makeTxAuditor(cradle: Cradle): TxAuditor<BEP65Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ hash }) => hash)

			for (const [index, op] of Object.entries(msg.ops)) {
				if (!(await state.getMultiStore().get(HANDLER).has(op.hash))) {
					throw new TxAuditException({
						key: `message.ops.${index}.hash`,
						value: ErrorCode.TX_NOT_FOUND,
					})
				}

				const bep64 = await getPendingLock(
					state.getTxStore(),
					cradle.TxFactory,
					cradle.TxMsgFactoryRegistry,
					state.getMultiStore().get(HANDLER),
					op.hash,
				)

				try {
					await assert.future(bep64.expiration, {
						key: `message.ops.${index}.expiration`,
						value: ErrorCode.TX_EXPIRED,
					})
				} catch (error) {
					await state.getMultiStore().get(HANDLER).forget(op.hash)

					throw error
				}

				const beneficiary = await toolkit.getSender()

				if (beneficiary.address !== bep64.recipient) {
					throw new TxAuditException({
						key: `message.ops.${index}.recipient`,
						value: ErrorCode.TX_CLAIMANT_DOES_NOT_MATCH_BENEFICIARY,
					})
				}

				assert.hashEquality(bep64.secretAlgorithm, op.secret, bep64.secret, {
					key: `message.ops.${index}.secret`,
					value: ErrorCode.TX_HASH_DOES_NOT_VERIFY,
				})
			}
		},
	}
}
