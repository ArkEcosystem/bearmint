import type { Cradle, ValidatorRewarderStrategy } from '@bearmint/bep-013'
import { getModuleMilestone } from '@bearmint/bep-021'
import { increaseBalance } from '@bearmint/bep-022'

export function makeStrategy(cradle: Cradle): ValidatorRewarderStrategy {
	return {
		async execute(_, account, denomination) {
			const amount = BigInt(
				getModuleMilestone<{ amount: string }>(
					cradle.ServiceProviderRepository,
					cradle.CommittedState,
					'@bearmint/bep-081',
				).amount,
			)

			increaseBalance(account, amount, denomination)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-081',
				action: 'increase_balance',
				id: account.address,
				amount: amount.toString(),
				denomination,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */

			return amount
		},
	}
}
