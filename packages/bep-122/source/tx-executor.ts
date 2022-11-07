import type { TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP122Msg } from '@bearmint/bep-018'
import { endSentence } from '@bearmint/bep-120'

export function makeTxExecutor(): TxExecutor<BEP122Msg> {
	return {
		async execute({ receipt, state, toolkit }) {
			// Arrange
			const sender = await toolkit.getSender()

			// Act
			receipt.log(TxReceiptEvent.MetadataUpdated, {
				_modelKey: sender.address,
				_modelSubType: TxReceiptModelSubType.Metadata,
				_modelType: TxReceiptModelType.Account,
				_module: '@bearmint/bep-120',
				key: 'file',
				value: (await endSentence(state, sender)).toJson() as object,
			})

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
