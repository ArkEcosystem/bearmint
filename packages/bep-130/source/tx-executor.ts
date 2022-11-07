import { assert as BEP3, dot, NonNullableMap } from '@bearmint/bep-009'
import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP126Collection, BEP126User, BEP130Msg } from '@bearmint/bep-018'
import { getCollection, HANDLER, upsertCollection } from '@bearmint/bep-126'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP130Msg> {
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

			// Act
			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				// 1. Grab the collection from the sender
				const collection = collections.get(op.hash)

				// 2. Grab the stewardship and make sure it's not undefined for some reason
				const stewardship = collection.accessControlList[op.steward]

				BEP3.defined<BEP126User>(stewardship)

				// 3. Revoke permissions from the steward
				stewardship.permissions = stewardship.permissions.filter(
					(permission) => !op.permissions.includes(permission),
				)

				if (stewardship.permissions.length === 0) {
					// 4. If no permissions are left we drop stewardship completely
					dot.forget(collection.accessControlList, op.steward)
				} else {
					// 5. If some permissions are left we update the stewardship
					collection.accessControlList[op.steward] = stewardship
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
