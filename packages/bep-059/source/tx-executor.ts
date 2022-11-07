import type { TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP59Msg } from '@bearmint/bep-018'
import { BEP59Strategy } from '@bearmint/bep-018'

import { HANDLER } from './types.js'

export function makeTxExecutor(): TxExecutor<BEP59Msg> {
	return {
		async execute({ msg, receipt, state, toolkit }) {
			// Arrange
			const sender = await toolkit.getSender()

			// Act
			const proto = new BEP59Strategy(msg)

			await state.getMultiStore().get(HANDLER).set(sender.address, proto.toBinary())

			receipt.log(TxReceiptEvent.MetadataUpdated, {
				_modelKey: sender.address,
				_modelSubType: TxReceiptModelSubType.Metadata,
				_modelType: TxReceiptModelType.Account,
				_module: HANDLER,
				key: 'strategy',
				value: proto.toJson() as object,
			})

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
