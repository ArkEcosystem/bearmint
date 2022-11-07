import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP68Msg } from '@bearmint/bep-018'

import { HANDLER } from './types.js'
import { getPrimaryKey } from './utils.js'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP68Msg> {
	return {
		async execute({ msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()

			// Act
			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				const primaryKey = getPrimaryKey(op.data)

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					_opIndex,
					key: 'id',
					value: { id: primaryKey },
				})

				await state.getMultiStore().get(HANDLER).set(primaryKey, op.toBinary())

				receipt.log(TxReceiptEvent.MetadataUpdated, {
					_modelKey: sender.address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					_opIndex,
					key: sender.address,
					value: await state.getMultiStore().get(HANDLER).attach(sender.address, primaryKey),
				})

				cradle.DataSink.put(
					HANDLER,
					{
						id: primaryKey,
						type: 'entity',
					},
					{
						key: primaryKey,
						type: 'blob',
						value: op.toJson(),
					},
				)
			}

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
