import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP135Msg } from '@bearmint/bep-018'
import { HANDLER as BEP134, selectNAT, upsertNAT } from '@bearmint/bep-134'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP135Msg> {
	return {
		async execute({ msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()
			const recipients = await toolkit.getRecipientsFromOps(sender)

			// Act
			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: sender.address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: BEP134,
					_opIndex,
					key: 'inventory',
					value: await state.getMultiStore().get(BEP134).detach(sender.address, op.hash),
				})

				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: recipients.get(op.recipient).address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: BEP134,
					_opIndex,
					key: 'inventory',
					value: await state
						.getMultiStore()
						.get(BEP134)
						.attach(recipients.get(op.recipient).address, op.hash),
				})

				const entity = await upsertNAT(state.getMultiStore().get(BEP134), op.hash, {
					...(await selectNAT(state.getMultiStore().get(BEP134), op.hash)),
					currentOwner: recipients.get(op.recipient).address,
				})

				receipt.log(TxReceiptEvent.MetadataUpdated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: BEP134,
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
			await state.getAccountRepository().index(recipients.values())
			await state.getAccountRepository().index([sender])
		},
	}
}
