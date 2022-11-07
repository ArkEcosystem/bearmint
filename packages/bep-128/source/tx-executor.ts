import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP128Msg } from '@bearmint/bep-018'
import { getCollection, HANDLER, upsertCollection } from '@bearmint/bep-126'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP128Msg> {
	return {
		async execute({ msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()

			// Act
			for (const [_opIndex, { hash }] of Object.entries(msg.ops)) {
				// 1. Grab the collection from the sender
				const collection = await getCollection(state.getMultiStore().get(HANDLER), hash)
				collection.currentOwner = ''
				collection.accessControlList = {}

				// 2. Reindex collection without ownership
				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: sender.address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: '@bearmint/bep-126',
					_opIndex,
					key: 'inventory',
					value: await state.getMultiStore().get(HANDLER).detach(sender.address, hash),
				})

				// 3. Update ownership in the global registry
				receipt.log(TxReceiptEvent.MetadataUpdated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: '@bearmint/bep-126',
					_opIndex,
					key: 'collection',
					value: (
						await upsertCollection(state.getMultiStore().get('@bearmint/bep-126'), hash, collection)
					).toJson(),
				})

				cradle.DataSink.put(
					'@bearmint/bep-126',
					{
						id: collection.id,
						type: 'entity',
					},
					{
						key: collection.id,
						type: 'collection',
						value: collection.toJson(),
					},
				)
			}

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
