import { BN } from '@bearmint/bep-009'
import type { Account, Cradle, ValidatorRewarderStrategy } from '@bearmint/bep-013'
import { denom, getModuleMilestone } from '@bearmint/bep-021'
import { increaseBalance } from '@bearmint/bep-022'
import { StrategyRequiresSingleDenominationException } from '@bearmint/bep-109'

export function logReward(
	cradle: Cradle,
	account: Account,
	amount: bigint,
	denomination: string,
	origin: string,
) {
	/* eslint-disable sort-keys-fix/sort-keys-fix */
	cradle.Logger.debug('%s', {
		module: '@bearmint/bep-124',
		action: 'distribute',
		origin,
		amount: amount.toString(),
		denomination,
		account: account.address,
	})
	/* eslint-enable sort-keys-fix/sort-keys-fix */
}

export function makeStrategy(cradle: Cradle): ValidatorRewarderStrategy {
	return {
		async execute(state, account, denomination) {
			if (denom(state, 'token') !== denom(state, 'reward')) {
				throw new StrategyRequiresSingleDenominationException()
			}

			if (denom(state, 'gas') !== denom(state, 'reward')) {
				throw new StrategyRequiresSingleDenominationException()
			}

			const maxReward = BigInt(
				getModuleMilestone<{ amount: string }>(
					cradle.ServiceProviderRepository,
					cradle.CommittedState,
					'@bearmint/bep-124',
				).amount,
			)

			const consumedGas = state.getConsumedGas()

			// 1. No gas has been consumed
			// 1.1. Reward the fixed reward amount and exit
			if (consumedGas === BigInt(0)) {
				increaseBalance(account, maxReward, denomination)

				logReward(cradle, account, maxReward, denomination, 'mint')

				return maxReward
			}

			// 2. More gas than fixed rewards has been consumed.
			// 2.1. Reward the total amount of gas and exit
			if (consumedGas > maxReward) {
				increaseBalance(account, consumedGas, denomination)

				logReward(cradle, account, consumedGas, denomination, 'gas')

				return consumedGas
			}

			// 3. Gas has been consumed but not enough to cover the reward
			// 3.1. Reward the consumed gas and difference to reach the fixed reward amount
			const rewardDifference = BN.absolute(BN.difference(consumedGas, maxReward))
			const reward = consumedGas + rewardDifference

			increaseBalance(account, reward, denomination)

			logReward(cradle, account, rewardDifference, denomination, 'mint')

			logReward(cradle, account, consumedGas, denomination, 'gas')

			return consumedGas
		},
	}
}
