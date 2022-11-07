import { jsonToBytes } from '@bearmint/bep-009'
import type { TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP64Msg } from '@bearmint/bep-018'
import { decreaseBalance, increaseLockedBalance } from '@bearmint/bep-022'

import { HANDLER } from './types.js'
import { getPrimaryKey } from './utils.js'

export function makeTxExecutor(): TxExecutor<BEP64Msg> {
	return {
		async execute({ eventRecorder, msg, receipt, state, toolkit, tx }) {
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

				increaseLockedBalance(sender, op.amount, op.denomination)

				receipt.log(TxReceiptEvent.LockedBalanceIncreased, {
					_modelKey: sender.address,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					_opIndex,
					amount: op.amount,
					denomination: op.denomination,
				})

				// This is the hash that can be used to claim or refund the lock
				const lockHash = getPrimaryKey(tx.hash, _opIndex)

				eventRecorder.captureEvent({
					key: `message.ops.${_opIndex}.hash`,
					value: lockHash,
				})

				// Storing the tx hash and index allows claims and refunds to look up the specific lock
				await state
					.getMultiStore()
					.get(HANDLER)
					.set(
						lockHash,
						jsonToBytes({
							hash: tx.hash,
							index: Number(_opIndex),
						}),
					)

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					_opIndex,
					key: 'id',
					value: { id: lockHash },
				})
			}

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
