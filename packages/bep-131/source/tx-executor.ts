import { NonNullableMap } from '@bearmint/bep-009'
import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP126Collection, BEP131Msg } from '@bearmint/bep-018'
import { getCollection, upsertCollection } from '@bearmint/bep-126'

import { HANDLER } from './types.js'
import { getPrimaryKey, makeTokenId, upsertNFT } from './utils.js'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP131Msg> {
	return {
		async execute({ eventRecorder, msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()
			const recipients = await toolkit.getRecipientsFromOps(sender)
			const collections = new NonNullableMap<BEP126Collection>()

			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				if (collections.has(op.hash)) {
					continue
				}

				const collection = await getCollection(
					state.getMultiStore().get('@bearmint/bep-126'),
					op.hash,
				)

				collections.set(op.hash, collection)
			}

			// Act
			for (const [_opIndex, { hash, recipient }] of Object.entries(msg.ops)) {
				// 1. Append to the collection tokens with the initial recipient
				const collection = collections.get(hash)

				// 2. Generate the token id (unique per collection)
				const tokenId = makeTokenId(collection)

				eventRecorder.captureEvent({
					key: `message.ops.${_opIndex}.id`,
					value: String(tokenId),
				})

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'id',
					value: { id: tokenId },
				})

				// 3. Generate the token hash (unique per ledger)
				const tokenHash = getPrimaryKey(collection.id, tokenId)

				eventRecorder.captureEvent({
					key: `message.ops.${_opIndex}.hash`,
					value: tokenHash,
				})

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'hash',
					value: { hash: tokenHash },
				})

				// 4. Attach the NFT to the collection
				collection.tokens.push(tokenHash)

				// 5. Attach the NFT to the specified recipient
				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: recipients.get(recipient).address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'inventory',
					value: await state
						.getMultiStore()
						.get(HANDLER)
						.attach(recipients.get(recipient).address, tokenHash),
				})

				// 6. Store identifiers to ensure global uniqueness later on
				const entity = await upsertNFT(state.getMultiStore().get(HANDLER), tokenHash, {
					collection: hash,
					hash: tokenHash,
					id: tokenId,
					owner: recipient,
				})

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'token',
					value: entity.toJson(),
				})

				cradle.DataSink.put(
					'@bearmint/bep-131',
					{
						id: entity.hash,
						type: 'entity',
					},
					{
						key: entity.hash,
						type: 'token',
						value: entity.toJson(),
					},
				)
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
