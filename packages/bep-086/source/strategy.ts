import { assert, BN, inRange } from '@bearmint/bep-009'
import type { Cradle, DelegatorRewarderStrategy } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import { BEP59Strategy } from '@bearmint/bep-018'
import { getModuleMilestone } from '@bearmint/bep-021'
import { decreaseBalance, increaseBalance } from '@bearmint/bep-022'

import type { Milestone } from './types.js'

export function makeStrategy(cradle: Cradle): DelegatorRewarderStrategy {
	return {
		async execute(state, validator, delegator, reward, denomination) {
			const validatorStake = BN.sum(
				await cradle.StakingServiceFactory.make(state).valuesByValidator(validator),
			)
			const delegatorStake = delegator.stakes[validator.moniker]

			assert.defined<bigint>(delegatorStake)

			const delegatorStakePercentage = (delegatorStake * BigInt(100)) / validatorStake
			const validatorSharePercentage = Number(
				BEP59Strategy.fromBinary(
					await state.getMultiStore().get('@bearmint/bep-059').get(validator.address),
					PROTO_OPTS,
				).strategyArgs,
			)

			const amount =
				(((reward * BigInt(validatorSharePercentage)) / BigInt(100)) * delegatorStakePercentage) /
				BigInt(100)

			increaseBalance(delegator, amount, denomination)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-086',
				action: 'increase_balance',
				id: delegator.address,
				amount: amount.toString(),
				denomination,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */

			decreaseBalance(validator, amount, denomination)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-086',
				action: 'decrease_balance',
				id: validator.address,
				amount: amount.toString(),
				denomination,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */

			return amount
		},
		async validate(args) {
			const { range } = getModuleMilestone<Milestone>(
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				'@bearmint/bep-086',
			)

			return inRange(Number(args), range.percentage.min, range.percentage.max)
		},
	}
}
