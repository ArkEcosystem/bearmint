import type { Cradle, TxAuditor } from '@bearmint/bep-013'
import type { BEP66Msg } from '@bearmint/bep-018'
import { getPendingLock, HANDLER } from '@bearmint/bep-064'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

export function makeTxAuditor(cradle: Cradle): TxAuditor<BEP66Msg> {
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

				if (bep64.sender !== (await toolkit.getSender()).publicKey) {
					throw new TxAuditException({
						key: `message.ops.${index}.hash`,
						value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
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
