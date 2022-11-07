import { assert } from '@bearmint/bep-009'
import type { ABCIController, Cradle, DataSink, Tx, TxReceipt } from '@bearmint/bep-013'
import { Event, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { TxFailuresRecordedException } from '@bearmint/bep-109'

function receiptToDataSink(tx: Tx, receipt: TxReceipt, dataSink: DataSink) {
	for (const log of receipt.logs()) {
		const json = log.args?.toJson() as Record<string, string>

		if (json['_module'] === undefined) {
			continue
		}

		if (json['_modelKey'] === undefined) {
			continue
		}

		if (json['_modelType'] === undefined) {
			continue
		}

		if (json['_modelSubType'] === undefined) {
			continue
		}

		dataSink.put(
			json['_module'],
			{
				id: json['_modelKey'],
				subType: json['_modelSubType'],
				type: json['_modelType'],
			},
			{ key: json['key'], value: json['value'] },
		)
	}

	// We also want to index the receipt itself
	dataSink.put(
		tx.checksum.handler,
		{
			id: tx.hash,
			subType: TxReceiptModelSubType.Receipt,
			type: TxReceiptModelType.Tx,
		},
		receipt.toJson(),
	)
}

/**
 * @deprecated going to be replaced by "finalizeBlock"
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#consensus-connection
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#delivertx
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#delivertx-2
 */
export function makeDeliverTx(
	cradle: Cradle,
): ABCIController<abci.RequestDeliverTx, abci.ResponseDeliverTx> {
	return {
		async execute(request) {
			let tx: Tx

			try {
				assert.defined<Uint8Array>(request.tx)

				tx = await cradle.TxFactory.fromBytes(request.tx)
			} catch (error) {
				return {
					code: 1,
					data: request.tx,
					events: [],
					gasUsed: BigInt('0'),
					gasWanted: BigInt('0'),
					info: error.message,
				}
			}

			try {
				await cradle.DeliverTxState.checkpoint()

				const gasMeter = cradle.GasMeterFactory.make()

				const { events, receipt } = await cradle.TxProcessor.execute(
					cradle.EventRecorderFactory.make(),
					gasMeter,
					cradle.DeliverTxState,
					tx,
				)

				cradle.DeliverTxState.setConsumedGas(
					cradle.DeliverTxState.getConsumedGas() + gasMeter.total(),
				)

				await cradle.DeliverTxState.getTxStore().set(tx.hash, tx.bytes)
				await cradle.DeliverTxState.getTxReceiptStore().set(tx.hash, receipt.toBinary())

				// Send all receipt logs to the data sink
				receiptToDataSink(tx, receipt, cradle.DataSink)

				await cradle.EventDispatcher.dispatch(Event.TransactionIndexed, tx)

				/* eslint-disable sort-keys-fix/sort-keys-fix */
				cradle.Logger.debug('%s', {
					module: '@bearmint/bep-089',
					action: 'commit_deliver_tx_state',
					hash: tx.hash,
				})
				/* eslint-enable sort-keys-fix/sort-keys-fix */

				await cradle.DeliverTxState.commit()

				return {
					code: 0,
					data: tx.bytes,
					events,
					gasUsed: tx.data.gas,
					gasWanted: (await cradle.GasCalculator.execute(cradle.DeliverTxState, tx)).expected,
				}
			} catch (error) {
				await cradle.DeliverTxState.revert()

				/* eslint-disable sort-keys-fix/sort-keys-fix */
				cradle.Logger.debug('%s', {
					module: '@bearmint/bep-089',
					action: 'revert_deliver_tx_state',
					hash: tx.hash,
				})
				/* eslint-enable sort-keys-fix/sort-keys-fix */

				const events: abci.Event[] = []

				if (error instanceof TxFailuresRecordedException) {
					events.push(error.event)
				}

				cradle.Logger.error(error.stack)

				return {
					code: 1,
					data: tx.bytes,
					events,
					gasUsed: BigInt('0'),
					gasWanted: (await cradle.GasCalculator.execute(cradle.DeliverTxState, tx)).expected,
					info: error.message,
				}
			}
		},
	}
}
