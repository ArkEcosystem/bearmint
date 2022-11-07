import type { TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP110Msg } from '@bearmint/bep-018'

import { HANDLER } from './types.js'

export function makeTxExecutor(): TxExecutor<BEP110Msg> {
	return {
		async execute({ msg, receipt, state, toolkit }) {
			// Arrange
			const sender = await toolkit.getSender()

			// Act
			sender.moniker = msg.moniker

			receipt.log(TxReceiptEvent.AccountUpdated, {
				_modelKey: sender.address,
				_modelType: TxReceiptModelType.Account,
				_module: HANDLER,
				moniker: sender.moniker,
			})

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
