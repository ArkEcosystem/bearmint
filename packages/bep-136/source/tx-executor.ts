import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP136Msg } from '@bearmint/bep-018'
import { HANDLER, selectNAT, upsertNAT } from '@bearmint/bep-134'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP136Msg> {
	return {
		async execute({ msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()

			// Act
			for (const [_opIndex, { hash }] of Object.entries(msg.ops)) {
				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: sender.address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: '@bearmint/bep-134',
					_opIndex,
					key: 'inventory',
					value: await state.getMultiStore().get(HANDLER).detach(sender.address, hash),
				})

				const entity = await upsertNAT(state.getMultiStore().get(HANDLER), hash, {
					...(await selectNAT(state.getMultiStore().get(HANDLER), hash)),
					currentOwner: '',
				})

				receipt.log(TxReceiptEvent.MetadataUpdated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: '@bearmint/bep-134',
					_opIndex,
					key: 'token',
					value: entity.toJson(),
				})

				cradle.DataSink.put(
					'@bearmint/bep-134',
					{
						id: entity.id,
						type: 'entity',
					},
					{
						key: entity.id,
						type: 'token',
						value: entity.toJson(),
					},
				)
			}

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
