import { stringToBytes } from '@bearmint/bep-009'
import type { Cradle, TxExecutor } from '@bearmint/bep-013'
import { TxReceiptEvent, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { BEP134Msg } from '@bearmint/bep-018'

import { HANDLER } from './types.js'
import { getDenominationKey, getNameKey, getPrimaryKey, upsertNAT } from './utils.js'

export function makeTxExecutor(cradle: Cradle): TxExecutor<BEP134Msg> {
	return {
		async execute({ eventRecorder, msg, receipt, state, toolkit, tx }) {
			// Arrange
			const sender = await toolkit.getSender()

			// Act
			for (const [_opIndex, op] of Object.entries(msg.ops)) {
				sender.balances[op.denomination] = BigInt(op.initialSupply)

				const primaryKey = getPrimaryKey(tx.hash, _opIndex)

				eventRecorder.captureEvent({
					key: `message.ops.${_opIndex}.id`,
					value: primaryKey,
				})

				await state
					.getMultiStore()
					.get(HANDLER)
					.set(getNameKey(op.name), stringToBytes(`${tx.hash}/${_opIndex}`))

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					key: getNameKey(op.name),
					value: `${tx.hash}/${_opIndex}`,
				})

				await state
					.getMultiStore()
					.get(HANDLER)
					.set(getDenominationKey(op.denomination), stringToBytes(`${tx.hash}/${_opIndex}`))

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					key: getDenominationKey(op.denomination),
					value: `${tx.hash}/${_opIndex}`,
				})

				receipt.log(TxReceiptEvent.MetadataUpdated, {
					_modelKey: sender.address,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Account,
					_module: HANDLER,
					_opIndex,
					key: 'inventory',
					list: await state.getMultiStore().get(HANDLER).attach(sender.address, primaryKey),
				})

				const entity = await upsertNAT(state.getMultiStore().get(HANDLER), primaryKey, {
					...op,
					currentOwner: sender.address,
					id: primaryKey,
					initialOwner: sender.address,
				})

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
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

				receipt.log(TxReceiptEvent.MetadataCreated, {
					_modelKey: tx.hash,
					_modelSubType: TxReceiptModelSubType.Metadata,
					_modelType: TxReceiptModelType.Tx,
					_module: HANDLER,
					_opIndex,
					key: 'id',
					value: { id: primaryKey },
				})
			}

			// Abide
			await state.getAccountRepository().index([sender])
		},
	}
}
