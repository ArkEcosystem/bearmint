import { NonNullableMap } from '@bearmint/bep-009'
import type { TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP137Msg } from '@bearmint/bep-018'
import { increaseBalance } from '@bearmint/bep-022'
import { HANDLER, selectNAT } from '@bearmint/bep-134'

export function makeTxExecutor(): TxExecutor<BEP137Msg> {
	return {
		async execute({ msg, receipt, state, toolkit }) {
			// Arrange
			const sender = await toolkit.getSender()
			const denominations = new NonNullableMap<string>()

			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				if (denominations.has(op.hash)) {
					continue
				}

				denominations.set(
					op.hash,
					(await selectNAT(state.getMultiStore().get(HANDLER), op.hash)).denomination,
				)
			}

			// Act
			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				increaseBalance(sender, op.amount, denominations.get(op.hash))

				receipt.log(TxReceiptEvent.BalanceIncreased, {
					_modelKey: sender.address,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					_opIndex,
					amount: op.amount,
					denomination: denominations.get(op.hash),
				})
			}

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
