import type { Cradle } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

import { resetState } from '../utils.js'

/**
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#consensus-connection
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#beginblock
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#beginblock
 */
export async function beginBlock(cradle: Cradle, request: abci.RequestFinalizeBlock) {
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

	if (Array.isArray(request.misbehavior)) {
		if (cradle.Container.has(ContainerType.ValidatorSlasher)) {
			await cradle.ValidatorSlasher.execute(cradle.ExecuteTxState, request.misbehavior)
		}

		if (cradle.Container.has(ContainerType.DelegatorSlasher)) {
			await cradle.DelegatorSlasher.execute(cradle.ExecuteTxState, request.misbehavior)
		}
	}

	return {
		events,
	}
}
