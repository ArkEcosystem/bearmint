import { dot, NonNullableMap } from '@bearmint/bep-009'
import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP126Collection, BEP127Msg } from '@bearmint/bep-018'
import { BEP126User } from '@bearmint/bep-018'
import {
	BEP126UserPermission,
	BEP126UserRole,
	getCollection,
	HANDLER,
	upsertCollection,
} from '@bearmint/bep-126'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP127Msg> {
	return {
		async execute({ msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()
			const recipients = await toolkit.getRecipientsFromOps(sender)
			const collections = new NonNullableMap<BEP126Collection>()

			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				if (collections.has(op.hash)) {
					continue
				}

				const collection = await getCollection(state.getMultiStore().get(HANDLER), op.hash)

				collections.set(op.hash, collection)
			}

			// Act
			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				// 1. Grab the collection that we are about to transfer
				const collection = collections.get(op.hash)

				// 2. Revoke privileges from the ancestor
				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: sender.address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: '@bearmint/bep-126',
					_opIndex,
					key: 'inventory',
					value: await state.getMultiStore().get(HANDLER).detach(sender.address, op.hash),
				})

				dot.forget(collection.accessControlList, sender.address)

				// 3. Grant privileges to the recipient
				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: recipients.get(op.recipient).address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: '@bearmint/bep-126',
					_opIndex,
					key: 'inventory',
					value: await state
						.getMultiStore()
						.get(HANDLER)
						.attach(recipients.get(op.recipient).address, op.hash),
				})

				dot.set(
					collection.accessControlList,
					op.recipient,
					new BEP126User({
						permissions: [
							BEP126UserPermission.BURN,
							BEP126UserPermission.MINT,
							BEP126UserPermission.TRANSFER,
						],
						role: BEP126UserRole.OWNER,
					}),
				)

				collection.currentOwner = op.recipient
			}

			// Abide
			for (const collection of collections.values()) {
				receipt.log(TxReceiptEvent.MetadataUpdated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: '@bearmint/bep-126',
					key: 'collection',
					value: (
						await upsertCollection(
							state.getMultiStore().get('@bearmint/bep-126'),
							collection.id,
							collection,
						)
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

			await state.getAccountRepository().index(recipients.values())
			await state.getAccountRepository().index([sender])
		},
	}
}
