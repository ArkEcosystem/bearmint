import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP66Msg } from '@bearmint/bep-018'
import { decreaseLockedBalance, increaseBalance } from '@bearmint/bep-022'
import { getPendingLock, HANDLER } from '@bearmint/bep-064'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP66Msg> {
	return {
		async execute({ msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()

			// Act
			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				const bep64 = await getPendingLock(
					state.getTxStore(),
					cradle.TxFactory,
					cradle.TxMsgFactoryRegistry,
					state.getMultiStore().get(HANDLER),
					op.hash,
				)

				decreaseLockedBalance(sender, bep64.amount, bep64.denomination)

				receipt.log(TxReceiptEvent.LockedBalanceDecreased, {
					_modelKey: sender.address,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					_opIndex,
					amount: bep64.amount,
					denomination: bep64.denomination,
				})

				increaseBalance(sender, bep64.amount, bep64.denomination)

				receipt.log(TxReceiptEvent.BalanceIncreased, {
					_modelKey: sender.address,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					_opIndex,
					amount: bep64.amount,
					denomination: bep64.denomination,
				})

				await state.getMultiStore().get(HANDLER).forget(op.hash)

				receipt.log(TxReceiptEvent.MetadataDeleted, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					_opIndex,
					key: 'id',
					value: { id: op.hash },
				})
			}

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
