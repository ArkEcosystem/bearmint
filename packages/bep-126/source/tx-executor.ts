import { stringToBytes } from '@bearmint/bep-009'
import type { TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP126Msg } from '@bearmint/bep-018'
import { BEP126User } from '@bearmint/bep-018'

import { upsertCollection } from './collection.js'
import { BEP126UserPermission, BEP126UserRole, HANDLER } from './types.js'
import { getCollectionKey, getNameKey, getSymbolKey } from './utils.js'

export function makeTxExecutor(): TxExecutor<BEP126Msg> {
	return {
		async execute({ eventRecorder, msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()

			// Act
			for (const [idx, op] of Object.entries(msg.ops)) {
				const collectionId = getCollectionKey(tx.hash, idx)

				eventRecorder.captureEvent({
					key: `message.ops.${idx}.id`,
					value: collectionId,
				})

				await state
					.getMultiStore()
					.get(HANDLER)
					.set(getNameKey(op.name), stringToBytes(`${tx.hash}/${idx}`))

				await state
					.getMultiStore()
					.get(HANDLER)
					.set(getSymbolKey(op.symbol), stringToBytes(`${tx.hash}/${idx}`))

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					key: getNameKey(op.name),
					value: `${tx.hash}/${idx}`,
				})

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					key: getSymbolKey(op.symbol),
					value: `${tx.hash}/${idx}`,
				})

				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: sender.address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					key: 'inventory',
					value: await state.getMultiStore().get(HANDLER).attach(sender.address, collectionId),
				})

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					key: 'collection',
					value: (
						await upsertCollection(state.getMultiStore().get(HANDLER), collectionId, {
							accessControlList: {
								[sender.address]: new BEP126User({
									permissions: [
										BEP126UserPermission.BURN,
										BEP126UserPermission.MINT,
										BEP126UserPermission.TRANSFER,
									],
									role: BEP126UserRole.OWNER,
								}),
							},
							currentOwner: sender.address,
							id: collectionId,
							initialOwner: sender.address,
							name: op.name,
							policies: op.policies,
							symbol: op.symbol,
							tokens: [],
							uriPrefix: op.uriPrefix,
							uriSuffix: op.uriSuffix,
						})
					).toJson() as object,
				})

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					key: 'id',
					value: { id: collectionId },
				})
			}

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
