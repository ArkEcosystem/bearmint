import { NonNullableMap } from '@bearmint/bep-009'
import type { Account, Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP126Collection, BEP131Token, BEP133Msg } from '@bearmint/bep-018'
import { getCollection, upsertCollection } from '@bearmint/bep-126'
import { destroyNFT, getNFT, HANDLER } from '@bearmint/bep-131'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP133Msg> {
	return {
		async execute({ msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()
			const tokens = new NonNullableMap<BEP131Token>()
			const collections = new NonNullableMap<BEP126Collection>()
			const owners = new NonNullableMap<Account>()

			for (const { hash } of msg.ops) {
				// Cache NFTs
				const nft = await getNFT(state.getMultiStore().get(HANDLER), hash)
				tokens.set(hash, nft)

				// Cache Collections
				if (collections.missing(nft.collection)) {
					collections.set(
						nft.collection,
						await getCollection(state.getMultiStore().get('@bearmint/bep-126'), nft.collection),
					)
				}

				// Cache Accounts
				if (owners.has(nft.owner)) {
					continue
				}

				if (sender.address === nft.owner) {
					owners.set(nft.owner, sender)
				} else {
					owners.set(nft.owner, await toolkit.findOrCreateAccountByAddress(nft.owner))
				}
			}

			// Act
			for (const [_opIndex, { hash }] of Object.entries(msg.ops)) {
				// 1. Retrieve the NFT from the global registry
				const nft = tokens.get(hash)

				// 2. Revoke ownership from the current owner
				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: owners.get(nft.owner).address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'inventory',
					value: await state.getMultiStore().get(HANDLER).detach(sender.address, hash),
				})

				// 3. Remove the NFT from the global registry
				await destroyNFT(state.getMultiStore().get(HANDLER), hash)

				// 4. Grab the collection and token hash
				const collection = collections.get(nft.collection)

				// 5. Remove the NFT from the collection
				collection.tokens = collection.tokens.filter((currentToken) => currentToken !== hash)

				// 6. Record delete ops
				receipt.log(TxReceiptEvent.MetadataDeleted, {
					_modelKey: owners.get(nft.owner).address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'token',
					value: nft.toJson() as object,
				})

				cradle.DataSink.put(
					'@bearmint/bep-131',
					{
						id: nft.hash,
						type: 'entity',
					},
					{
						key: nft.hash,
						type: 'token',
						value: nft.toJson(),
					},
				)

				receipt.log(TxReceiptEvent.MetadataDeleted, {
					_modelKey: owners.get(nft.owner).address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'id',
					value: { id: nft.id },
				})

				receipt.log(TxReceiptEvent.MetadataDeleted, {
					_modelKey: owners.get(nft.owner).address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'hash',
					value: { hash },
				})
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

			await state.getAccountRepository().index(owners.values())
		},
	}
}
