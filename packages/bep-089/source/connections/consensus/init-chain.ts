import { bytesToJson, hexToBytes } from '@bearmint/bep-009'
import type { ABCIController, Cradle } from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { getPublicKeyType, setMilestone } from '@bearmint/bep-021'

import { canonicalizeValidatorUpdates, setCheckTxState, setDeliverTxState } from './utils.js'

/**
 * @remarks
 * - Called once upon genesis.
 * - If ResponseInitChain.Validators is empty, the initial validator set will be the RequestInitChain.Validators
 * - If ResponseInitChain.Validators is not empty, it will be the initial validator set (regardless of what is in RequestInitChain.Validators).
 * - This allows the app to decide if it wants to accept the initial validator set proposed by tendermint (ie. in the genesis file), or if it wants to use a different one (perhaps computed based on some application specific information in the genesis file).
 */
export function makeInitChain(
	cradle: Cradle,
): ABCIController<abci.RequestInitChain, abci.ResponseInitChain> {
	return {
		async execute(request) {
			if (request.initialHeight === null) {
				await cradle.Application.dispose(
					'The request does not contain an initial height. Terminating!',
				)
			}

			if (request.initialHeight.toString() !== cradle.GenesisParameters.initial_height) {
				await cradle.Application.dispose(
					`The expected (${
						cradle.GenesisParameters.initial_height
					}) and actual (${request.initialHeight.toString()}) height do not match. Terminating!`,
				)
			}

			if (!(request.appStateBytes instanceof Uint8Array)) {
				await cradle.Application.dispose(
					'Did not receive appStateBytes. Failed to initialise application state.',
				)
			}

			const { accounts, txs } = bytesToJson<any>(Buffer.from(request.appStateBytes))

			const initialBlockNumber = BigInt(cradle.GenesisParameters.initial_height)
			// await cradle.CommittedState.setCommittedBlock(initialBlockNumber)
			await cradle.CommittedState.setMilestone(Object.values(cradle.Milestones)[0]!.milestones[0]!)

			await setMilestone(cradle, cradle.CommittedState, initialBlockNumber)

			if (Array.isArray(accounts)) {
				for (const account of accounts) {
					await cradle.CommittedState.getAccountRepository().index([
						await cradle.AccountSerializer.deserialize(
							await cradle.AccountSerializer.serialize(account),
						),
					])
				}
			}

			if (Array.isArray(txs)) {
				for (const item of txs) {
					const tx = await cradle.TxFactory.fromBytes(item)

					await cradle.TxProcessor.execute(
						cradle.EventRecorderFactory.make(),
						cradle.GasMeterFactory.make(),
						cradle.CommittedState,
						tx,
					)

					await cradle.CommittedState.getTxStore().set(tx.hash, tx.bytes)

					await cradle.EventDispatcher.dispatch(Event.TransactionIndexed, tx.data)
				}
			}

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-089',
				action: 'init_chain',
				accounts: accounts.length,
				txs: txs.length,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */

			setCheckTxState(cradle.Container, await cradle.CommittedState.copy())
			setDeliverTxState(cradle.Container, await cradle.CommittedState.copy())

			return {
				appHash: hexToBytes(cradle.GenesisParameters.app_hash),
				consensusParams: request.consensusParams,
				validators: canonicalizeValidatorUpdates({
					type: getPublicKeyType(cradle.CommittedState.getMilestone()),
					validators: await cradle.ValidatorElector.elect(cradle.CommittedState),
				}),
			}
		},
	}
}
