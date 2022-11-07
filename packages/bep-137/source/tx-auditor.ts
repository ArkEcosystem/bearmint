import type { Cradle, TxAuditor } from '@bearmint/bep-013'
import type { BEP137Msg } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'
import { assertNativeTokenOwnership, HANDLER, selectNAT } from '@bearmint/bep-134'

export function makeTxAuditor(cradle: Cradle): TxAuditor<BEP137Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ hash, memo }) => `${hash}${memo ?? ''}`)

			const sender = await toolkit.getSender()

			for (const [index, { amount, hash }] of Object.entries(msg.ops)) {
				assert.positiveNumber(BigInt(amount), { key: `message.ops.${index}.amount` })

				if (!(await state.getMultiStore().get(HANDLER).has(hash))) {
					throw new TxAuditException({
						key: `message.ops.${index}.hash`,
						value: ErrorCode.TX_NOT_FOUND,
					})
				}

				await assertNativeTokenOwnership(state, sender, hash, `message.ops.${index}.hash`)

				const nativeToken = await selectNAT(state.getMultiStore().get(HANDLER), hash)

				for (const policy of nativeToken.policies) {
					if (
						await cradle.PolicyRegistry.get(
							'@bearmint/bep-134',
							String(policy.type),
							policy.name,
						).denies({
							amount,
							nativeToken,
							nativeTokenHash: hash,
							policy,
							sender,
							state,
						})
					) {
						throw new TxAuditException({
							key: `policy.${policy.name}`,
							value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
						})
					}
				}
			}
		},
	}
}
