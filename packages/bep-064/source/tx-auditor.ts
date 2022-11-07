import * as BEP3 from '@bearmint/bep-009'
import { bytesToHex } from '@bearmint/bep-009'
import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP64Msg } from '@bearmint/bep-018'
import { ErrorCode } from '@bearmint/bep-109'

export function makeTxAuditor(): TxAuditor<BEP64Msg> {
	return {
		async execute({ assert, msg, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.uniqueOps(msg.ops, (op) => bytesToHex(op.toBinary()))

			assert.memoLength(msg.memo, msg.ops)

			// Funds...
			const requiredTokensByDenomination: Record<string, bigint> = {}

			for (const [index, op] of Object.entries(msg.ops)) {
				assert.positiveNumber(BigInt(op.amount), { key: `message.ops.${index}.amount` })

				if (requiredTokensByDenomination[op.denomination] === undefined) {
					requiredTokensByDenomination[op.denomination] = BigInt(0)
				}

				const currentBalance = requiredTokensByDenomination[op.denomination]

				BEP3.assert.defined(currentBalance)

				requiredTokensByDenomination[op.denomination] = currentBalance + op.amount
			}

			const sender = await toolkit.getSender()

			for (const [denomination, amount] of Object.entries(requiredTokensByDenomination)) {
				assert.equity(BigInt(sender.balances[denomination] ?? 0) - amount, {
					key: `sender.balances.${denomination}`,
				})
			}

			// Properties...
			for (const [index, op] of Object.entries(msg.ops)) {
				assert.knownByList('secretAlgorithm', op.secretAlgorithm, {
					key: `message.ops.${index}.secretAlgorithm`,
					value: ErrorCode.TX_UNKNOWN_VALUE,
				})

				await assert.future(op.expiration, {
					key: `message.ops.${index}.expiration`,
					value: ErrorCode.TX_BLOCK_NUMBER_IS_PAST,
				})

				assert.hashLength(op.secretAlgorithm, op.secret, {
					key: `message.ops.${index}.secret`,
					value: ErrorCode.TX_MALFORMED_VALUE,
				})

				assert.relationalRecipient(sender.address, op.recipient, {
					key: `message.ops.${index}.recipient`,
					value: ErrorCode.TX_UNEXPECTED_LOOPBACK_DIRECTION,
				})

				await assert.recipientAddress(op.recipient, {
					key: `message.ops.${index}.recipient`,
				})
			}
		},
	}
}
