import type { Cradle, DelegatorRewarderStrategy } from '@bearmint/bep-013'
import { decreaseBalance, increaseBalance } from '@bearmint/bep-022'

export function makeStrategy(cradle: Cradle): DelegatorRewarderStrategy {
	return {
		async execute(_state, validator, delegator, _reward, denomination) {
			const amount = BigInt(0)

			increaseBalance(delegator, amount, denomination)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-084',
				action: 'increase_balance',
				id: delegator.address,
				amount: amount.toString(),
				denomination,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */

			decreaseBalance(validator, amount, denomination)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-084',
				action: 'decrease_balance',
				id: validator.address,
				amount: amount.toString(),
				denomination,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */

			return amount
		},
		async validate(args) {
			return args === ''
		},
	}
}
