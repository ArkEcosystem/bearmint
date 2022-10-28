import { assert } from '@bearmint/bep-009'
import type { ABCIController, Cradle, Tx } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'
import { TxFailuresRecordedException } from '@bearmint/bep-109'

/**
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#mempool-connection
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#checktx
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#checktx-2
 */
export function makeCheckTx(
	cradle: Cradle,
): ABCIController<abci.RequestCheckTx, abci.ResponseCheckTx> {
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
					mempoolError: error.message,
					sender: '',
				}
			}

			try {
				if (request.type === abci.CheckTxType.RECHECK) {
					/* eslint-disable sort-keys-fix/sort-keys-fix */
					cradle.Logger.debug('%s', {
						module: '@bearmint/bep-089',
						action: 'recheck_tx_state',
						hash: tx.hash,
					})
					/* eslint-enable sort-keys-fix/sort-keys-fix */
				}

				await cradle.CheckTxState.checkpoint()

				const { events } = await cradle.TxProcessor.execute(
					cradle.EventRecorderFactory.make(),
					cradle.GasMeterFactory.make(),
					cradle.CheckTxState,
					tx,
				)

				await cradle.CheckTxState.commit()

				/* eslint-disable sort-keys-fix/sort-keys-fix */
				cradle.Logger.debug('%s', {
					module: '@bearmint/bep-089',
					action: 'commit_check_tx_state',
					hash: tx.hash,
				})
				/* eslint-enable sort-keys-fix/sort-keys-fix */

				return {
					code: 0,
					data: tx.bytes,
					events,
					gasUsed: BigInt('0'),
					gasWanted: (await cradle.GasCalculator.execute(cradle.ExecuteTxState, tx)).expected,
					priority: await cradle.TxPrioritizer.execute(tx),
					sender: tx.data.sender.toString(),
				}
			} catch (error) {
				await cradle.CheckTxState.revert()

				/* eslint-disable sort-keys-fix/sort-keys-fix */
				cradle.Logger.debug('%s', {
					module: '@bearmint/bep-089',
					action: 'revert_check_tx_state',
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
					gasWanted: (await cradle.GasCalculator.execute(cradle.ExecuteTxState, tx)).expected,
					mempoolError: error.message,
					sender: tx.data.sender.toString(),
				}
			}
		},
	}
}
