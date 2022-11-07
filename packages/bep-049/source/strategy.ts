import type { Cradle, GasCalculatorStrategy } from '@bearmint/bep-013'
import { denom, getModuleMilestone } from '@bearmint/bep-021'
import {
	TxGasTooHighException,
	TxGasTooLowException,
	TxHasNoGasConfigurationException,
} from '@bearmint/bep-109'

export function makeStrategy(cradle: Cradle): GasCalculatorStrategy {
	return {
		async execute(state, tx) {
			const milestone = getModuleMilestone<object>(
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				'@bearmint/bep-049',
			)[tx.checksum.handler]

			let fixedCost = milestone[tx.checksum.version] ?? milestone['*']

			if (fixedCost === undefined) {
				throw new TxHasNoGasConfigurationException(tx.type)
			}

			fixedCost = BigInt(fixedCost)

			if (tx.data.gas === fixedCost) {
				return {
					actual: tx.data.gas,
					expected: fixedCost,
				}
			}

			if (tx.data.gas < fixedCost) {
				throw new TxGasTooLowException(tx.hash, denom(state, 'gas'), tx.data.gas, fixedCost)
			}

			throw new TxGasTooHighException(tx.hash, denom(state, 'gas'), tx.data.gas, fixedCost)
		},
	}
}
