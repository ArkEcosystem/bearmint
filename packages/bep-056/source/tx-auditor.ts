import { bytesToHex } from '@bearmint/bep-009'
import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP56Msg } from '@bearmint/bep-018'
import { denom } from '@bearmint/bep-021'

export function makeTxAuditor(): TxAuditor<BEP56Msg> {
	return {
		async execute({ assert, msg, state, toolkit, tx }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, (op) => bytesToHex(op.toBinary()))

			const sender = await toolkit.getSender()

			for (const [index, op] of Object.entries(msg.ops)) {
				let senderBalance =
					toolkit.getBalance(sender, op.denomination, `message.ops.${index}.amount`) - op.amount

				if (op.denomination === denom(state, 'gas')) {
					senderBalance = senderBalance - tx.data.gas
				}

				assert.equity(senderBalance, { key: `message.ops.${index}.amount` })
			}
		},
	}
}
