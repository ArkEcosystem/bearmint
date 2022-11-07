import type { Cradle, ValidatorRewarderStrategy } from '@bearmint/bep-013'
import { increaseBalance } from '@bearmint/bep-022'

export function makeStrategy(cradle: Cradle): ValidatorRewarderStrategy {
	return {
		async execute(_, account, denomination) {
			const amount = BigInt(0)

			increaseBalance(account, amount, denomination)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-079',
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
