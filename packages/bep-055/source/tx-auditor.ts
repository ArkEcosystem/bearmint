import { bytesToHex } from '@bearmint/bep-009'
import type { Cradle, TxAuditor } from '@bearmint/bep-013'
import type { BEP55Msg } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

export function makeTxAuditor(cradle: Cradle): TxAuditor<BEP55Msg> {
	return {
		async execute({ assert, msg, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, (op) => bytesToHex(op.toBinary()))

			// Aggregate required funds...
			const sender = await toolkit.getSender()

			const requiredFunds: Record<string, bigint> = {}

			for (const [index, { amount, denomination, recipient }] of Object.entries(msg.ops)) {
				assert.equity(sender.balances[denomination], {
					key: `message.ops.${index}.amount`,
				})

				assert.positiveNumber(BigInt(amount), { key: `message.ops.${index}.amount` })

				assert.relationalRecipient(sender.address, recipient.toString(), {
					key: `message.ops.${index}.recipient`,
				})

				if (requiredFunds[denomination] === undefined) {
					requiredFunds[denomination] = BigInt(0)
				}

				requiredFunds[denomination] = requiredFunds[denomination]! + amount
			}

			for (const [denomination, amount] of Object.entries(requiredFunds)) {
				assert.equity(BigInt(sender.balances[denomination] ?? 0) - amount, {
					key: `sender.balances.${denomination}`,
				})
			}

			for (const [index, op] of Object.entries(msg.ops)) {
				try {
					await assert.recipientAddress(await cradle.AddressFactory.fromString(op.recipient), {
						key: `message.ops.${index}.recipient`,
					})
				} catch (error) {
					throw new TxAuditException({
						key: `message.ops.${index}.recipient`,
						value: error?.value ?? ErrorCode.TX_MALFORMED_ADDRESS,
					})
				}
			}
		},
	}
}
