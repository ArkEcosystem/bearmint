import { assert, canonicalizeJson } from '@bearmint/bep-009'
import type { ABCIController, Cradle, DataSink, Tx, TxReceipt } from '@bearmint/bep-013'
import { ContainerType, Event, TxReceiptModelSubType, TxReceiptModelType } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'
import { getPublicKeyType, setMilestone } from '@bearmint/bep-021'
import { TxFailuresRecordedException } from '@bearmint/bep-109'

import { canonicalizeValidatorUpdates, resetState } from './utils.js'

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
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#consensus-connection
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#beginblock
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#beginblock
 */
async function beginBlock(cradle: Cradle, request: abci.RequestFinalizeBlock) {
	// This being `false` means we haven't called `Commit` yet.
	if (!cradle.CommittedState.hasCheckpoints()) {
		/* eslint-disable sort-keys-fix/sort-keys-fix */
		cradle.Logger.debug('%s', {
			module: '@bearmint/bep-089',
			action: 'reset_state',
		})
		/* eslint-enable sort-keys-fix/sort-keys-fix */

		await resetState(cradle)
	}

	// Distribute rewards for the previous block
	let events: abci.Event[] = []

	if (
		request.decidedLastCommit?.votes !== undefined &&
		request.decidedLastCommit.votes.length > 0 &&
		cradle.Container.has(ContainerType.ValidatorRewarder)
	) {
		// TODO: When ABCI++ lands we should store the proposer address separately
		if (!cradle.ExecuteTxState.hasCandidateBlock()) {
			cradle.ExecuteTxState.setCandidateBlock(await cradle.ExecuteTxState.getCommittedBlock())
		}

		const validator = await cradle.ValidatorRewarder.execute(cradle.ExecuteTxState)

		events = validator.events

		if (cradle.Container.has(ContainerType.DelegatorRewarder)) {
			events = [
				...events,
				...(await cradle.DelegatorRewarder.execute(cradle.ExecuteTxState, validator.reward)),
			]
		}
	}

	// Set new candidate block after we paid rewards.
	cradle.ExecuteTxState.setCandidateBlock(request)

	if (Array.isArray(request.misbehaviors)) {
		if (cradle.Container.has(ContainerType.ValidatorSlasher)) {
			await cradle.ValidatorSlasher.execute(cradle.ExecuteTxState, request.misbehaviors)
		}

		if (cradle.Container.has(ContainerType.DelegatorSlasher)) {
			await cradle.DelegatorSlasher.execute(cradle.ExecuteTxState, request.misbehaviors)
		}
	}

	return {
		events,
	}
}

/**
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#consensus-connection
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#delivertx
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#delivertx-2
 */
async function executeTx(cradle: Cradle, data: Uint8Array) {
	let tx: Tx

	try {
		assert.defined<Uint8Array>(data)

		tx = await cradle.TxFactory.fromBytes(data)
	} catch (error) {
		return {
			code: 1,
			data,
			events: [],
			gasUsed: BigInt('0'),
			gasWanted: BigInt('0'),
			info: error.message,
		}
	}

	try {
		await cradle.ExecuteTxState.checkpoint()

		const gasMeter = cradle.GasMeterFactory.make()

		const { events, receipt } = await cradle.TxProcessor.execute(
			cradle.EventRecorderFactory.make(),
			gasMeter,
			cradle.ExecuteTxState,
			tx,
		)

		cradle.ExecuteTxState.setConsumedGas(cradle.ExecuteTxState.getConsumedGas() + gasMeter.total())

		await cradle.ExecuteTxState.getTxStore().set(tx.hash, tx.bytes)
		await cradle.ExecuteTxState.getTxReceiptStore().set(tx.hash, receipt.toBinary())

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

		await cradle.ExecuteTxState.commit()

		return {
			code: 0,
			data: tx.bytes,
			events,
			gasUsed: tx.data.gas,
			gasWanted: (await cradle.GasCalculator.execute(cradle.ExecuteTxState, tx)).expected,
		}
	} catch (error) {
		await cradle.ExecuteTxState.revert()

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
			gasWanted: (await cradle.GasCalculator.execute(cradle.ExecuteTxState, tx)).expected,
			info: error.message,
		}
	}
}

/**
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#consensus-connection
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#endblock
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#endblock
 */
async function endBlock(cradle: Cradle, request: abci.RequestFinalizeBlock) {
	assert.defined<bigint>(request.height)

	const consensusParameterUpdates = (
		await setMilestone(cradle, cradle.ExecuteTxState, request.height)
	).parameters.consensus

	const validatorUpdates = canonicalizeValidatorUpdates({
		type: getPublicKeyType(cradle.ExecuteTxState.getMilestone()),
		validators: await cradle.ValidatorElector.elect(cradle.ExecuteTxState),
	})

	cradle.DataSink.put(
		'@bearmint/bep-089',
		{
			id: cradle.ExecuteTxState.getCandidateBlockNumber().toString(),
			type: 'validator_updates',
		},
		{
			blockNumber: cradle.ExecuteTxState.getCandidateBlockNumber(),
			value: canonicalizeJson(validatorUpdates.map((u) => u.toJson())),
		},
	)

	return {
		consensusParamUpdates: consensusParameterUpdates,
		events: [],
		validatorUpdates,
	}
}

/**
 * @see https://github.com/tendermint/tendermint/blob/main/spec/abci/abci%2B%2B_methods.md#processproposal
 */
export function makeFinalizeBlock(
	cradle: Cradle,
): ABCIController<abci.RequestFinalizeBlock, abci.ResponseFinalizeBlock> {
	return {
		async execute(request) {
			for (const tx of request.txs) {
				if (tx.byteLength === 0) {
					return {
						status: abci.ResponseProcessProposal_ProposalStatus.REJECT,
					}
				}
			}

			// TODO: The Application may fully execute the block as though it was handling the calls to BeginBlock-ExecuteTx-EndBlock.
			// TODO: However, any resulting state changes must be kept as candidate state, and the Application should be ready to discard it in case another block is decided.

			const beginBlockResult = await beginBlock(cradle, request)

			const txResults: abci.ExecTxResult[] = []
			for (const tx of request.txs) {
				await executeTx(cradle, tx)
			}

			const endBlockResult = await endBlock(cradle, request)

			// Tendermint expects `last_block_app_hash` and `last_block_height` to be updated during `FinalizeBlock` and persisted during `Commit`
			// TODO: set height and root and use world root after that as agreedAppData

			return {
				/**
				 * This differs from the pre-ABCI++ implementation in that we
				 * previously used the world trie root AFTER we committed
				 * (written to disk) any state changes. The new value is the
				 * world trie root of the candidate state before we commit.
				 */
				agreedAppData: cradle.ExecuteTxState.getAppHash(),
				consensusParamUpdates: endBlockResult.consensusParamUpdates,
				events: [...beginBlockResult.events, ...endBlockResult.events],
				txResults,
				validatorUpdates: endBlockResult.validatorUpdates,
			}
		},
	}
}
