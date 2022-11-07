import type { Cradle, ValidatorRewarderStrategy } from '@bearmint/bep-013'
import { increaseBalance } from '@bearmint/bep-022'

export function makeStrategy(cradle: Cradle): ValidatorRewarderStrategy {
	return {
		async execute(state, account, denomination) {
			const amount = state.getConsumedGas()

			if (amount === BigInt(0)) {
				return amount
			}

			increaseBalance(account, amount, denomination)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-080',
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
