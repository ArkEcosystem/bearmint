import type { TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP55Msg } from '@bearmint/bep-018'
import { decreaseBalance, increaseBalance } from '@bearmint/bep-022'

import { HANDLER } from './types.js'

export function makeTxExecutor(): TxExecutor<BEP55Msg> {
	return {
		async execute({ msg, receipt, state, toolkit }) {
			// Arrange
			const sender = await toolkit.getSender()
			const recipients = await toolkit.getRecipientsFromOps(sender)

			// Act
			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				decreaseBalance(sender, op.amount, op.denomination)

				receipt.log(TxReceiptEvent.BalanceDecreased, {
					_modelKey: sender.address,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					_opIndex,
					amount: op.amount,
					denomination: op.denomination,
				})

				increaseBalance(recipients.get(op.recipient), op.amount, op.denomination)

				receipt.log(TxReceiptEvent.BalanceIncreased, {
					_modelKey: op.recipient,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					_opIndex,
					amount: op.amount,
					denomination: op.denomination,
				})
			}

			// Abide
			await state.getAccountRepository().index(recipients.values())
			await state.getAccountRepository().index([sender])
		},
	}
}
