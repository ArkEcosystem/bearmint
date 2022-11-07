import type { TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP56Msg } from '@bearmint/bep-018'
import { decreaseBalance } from '@bearmint/bep-022'

import { HANDLER } from './types.js'

export function makeTxExecutor(): TxExecutor<BEP56Msg> {
	return {
		async execute({ msg, receipt, state, toolkit }) {
			// Arrange
			const sender = await toolkit.getSender()

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
			}

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
