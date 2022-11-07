import { NonNullableMap } from '@bearmint/bep-009'
import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP126Collection, BEP129Msg } from '@bearmint/bep-018'
import { BEP126User } from '@bearmint/bep-018'
import { BEP126UserRole, getCollection, HANDLER, upsertCollection } from '@bearmint/bep-126'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP129Msg> {
	return {
		async execute({ msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()
			const collections = new NonNullableMap<BEP126Collection>()

			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				if (collections.has(op.hash)) {
					continue
				}

				const collection = await getCollection(state.getMultiStore().get(HANDLER), op.hash)

				collections.set(op.hash, collection)
			}

			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				// 1. Grab the collection from the sender
				const collection = collections.get(op.hash)

				// 2. If the address isn't a steward yet we make it one
				if (collection.accessControlList[op.steward] === undefined) {
					collection.accessControlList[op.steward] = new BEP126User({
						permissions: [],
						role: BEP126UserRole.STEWARD,
					})
				}

				// 3. Grant permissions to the recipient
				for (const permission of op.permissions) {
					collection.accessControlList[op.steward]?.permissions.push(Number(permission))
				}
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

			await state.getAccountRepository().index([sender])
		},
	}
}
