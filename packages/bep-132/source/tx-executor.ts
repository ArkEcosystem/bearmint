import { NonNullableMap } from '@bearmint/bep-009'
import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP131Token, BEP132Msg } from '@bearmint/bep-018'
import { allRecipients } from '@bearmint/bep-051'
import { getNFT, HANDLER, upsertNFT } from '@bearmint/bep-131'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP132Msg> {
	return {
		async execute({ msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()
			const tokens = new NonNullableMap<BEP131Token>()
			const recipients = await allRecipients(
				state,
				cradle.AddressFactory,
				cradle.AccountSerializer,
				msg.ops,
			)

			for (const { hash } of msg.ops) {
				const nft = await getNFT(state.getMultiStore().get(HANDLER), hash)

				tokens.set(hash, nft)

				if (recipients.has(nft.owner)) {
					continue
				}

				if (sender.address === nft.owner) {
					recipients.set(nft.owner, sender)
				} else {
					recipients.set(nft.owner, await toolkit.findOrCreateAccountByAddress(nft.owner))
				}
			}

			// Act
			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				// 1. Retrieve the NFT from the global registry
				const nft = tokens.get(op.hash)

				// 2. Revoke privileges from the ancestor
				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: recipients.get(nft.owner).address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'inventory',
					value: await state
						.getMultiStore()
						.get(HANDLER)
						.detach(recipients.get(nft.owner).address, op.hash),
				})

				// 3. Grant privileges to the recipient
				receipt.log(TxReceiptEvent.OwnerChanged, {
					_modelKey: recipients.get(op.recipient).address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'inventory',
					value: state
						.getMultiStore()
						.get(HANDLER)
						.attach(recipients.get(op.recipient).address, op.hash),
				})

				// 4. Update the NFT in the global registry
				receipt.log(TxReceiptEvent.MetadataUpdated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: '@bearmint/bep-131',
					_opIndex,
					key: 'token',
					value: (
						await upsertNFT(state.getMultiStore().get(HANDLER), op.hash, {
							collection: nft.collection,
							hash: nft.hash,
							id: nft.id,
							owner: op.recipient,
						})
					).toJson(),
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
			}

			// Abide
			await state.getAccountRepository().index(recipients.values())
		},
	}
}
