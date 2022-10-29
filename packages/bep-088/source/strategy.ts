/**
 * @see https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/
 * @see https://ethereum.org/en/staking/
 */

import type { BEP88Milestone, Cradle, StateStore, ValidatorElector } from '@bearmint/bep-013'
import { getModuleMilestone, getPublicKeyType } from '@bearmint/bep-021'

import {
	canonicalizeValidatorUpdates,
	diffValidatorUpdates,
	electValidators,
	formatValidatorUpdatesDiff,
	gatherEligibleValidators,
} from './utils.js'

export function makeStrategy(cradle: Cradle): ValidatorElector {
	return {
		async elect(state: StateStore) {
			const milestone = getModuleMilestone<BEP88Milestone>(
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				'@bearmint/bep-088',
			)

			return formatValidatorUpdatesDiff(
				diffValidatorUpdates(
					await state.getValidatorUpdates(),
					canonicalizeValidatorUpdates(
						getPublicKeyType(state.getMilestone()),
						await electValidators(
							cradle.CommittedState.getAccountRepository(),
							await gatherEligibleValidators(state, cradle.EventDispatcher, milestone.range.power),
							milestone.count.validators,
							cradle.GenesisParameters.validators,
						),
					),
				),
			)
		},
	}
}
