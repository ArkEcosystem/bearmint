import type { ABCIController, Cradle } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

import { resetState } from './utils.js'

/**
 * @deprecated going to be replaced by "finalizeBlock"
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#consensus-connection
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#beginblock
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#beginblock
 */
export function makeBeginBlock(
	cradle: Cradle,
): ABCIController<abci.RequestBeginBlock, abci.ResponseBeginBlock> {
	return {
		async execute(request) {
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
				request.lastCommitInfo?.votes !== undefined &&
				request.lastCommitInfo.votes.length > 0 &&
				cradle.Container.has(ContainerType.ValidatorRewarder)
			) {
				// TODO: When ABCI++ lands we should store the proposer address separately
				if (!cradle.DeliverTxState.hasCandidateBlock()) {
					cradle.DeliverTxState.setCandidateBlock(await cradle.DeliverTxState.getCommittedBlock())
				}

				const validator = await cradle.ValidatorRewarder.execute(cradle.DeliverTxState)

				events = validator.events

				if (cradle.Container.has(ContainerType.DelegatorRewarder)) {
					events = [
						...events,
						...(await cradle.DelegatorRewarder.execute(cradle.DeliverTxState, validator.reward)),
					]
				}
			}

			// Set new candidate block after we paid rewards.
			cradle.DeliverTxState.setCandidateBlock(request)

			if (Array.isArray(request.byzantineValidators)) {
				if (cradle.Container.has(ContainerType.ValidatorSlasher)) {
					await cradle.ValidatorSlasher.execute(cradle.DeliverTxState, request.byzantineValidators)
				}

				if (cradle.Container.has(ContainerType.DelegatorSlasher)) {
					await cradle.DelegatorSlasher.execute(cradle.DeliverTxState, request.byzantineValidators)
				}
			}

			return {
				events,
			}
		},
	}
}
