import type { Cradle, GasCalculatorStrategy } from '@bearmint/bep-013'
import { denom, getModuleMilestone } from '@bearmint/bep-021'
import { TxGasTooLowException, TxHasNoGasConfigurationException } from '@bearmint/bep-109'
import { strictEqual } from 'assert'

import type { Milestone } from './types.js'

export function makeStrategy(cradle: Cradle): GasCalculatorStrategy {
	return {
		async execute(state, tx) {
			const milestone = getModuleMilestone<Milestone>(
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				'@bearmint/bep-050',
			)[tx.checksum.handler]

			// Can't process if we have no milestone!
			if (milestone === undefined) {
				throw new TxHasNoGasConfigurationException(tx.type)
			}

			// Can't process if we have no configuration!
			const costPerByte = milestone[tx.checksum.version] ?? milestone['*']

			if (costPerByte === undefined) {
				throw new TxHasNoGasConfigurationException(tx.type)
			}

			// Making sure the sizes match the size of the entire tx!
			const sizeMsg = tx.data.message.toBinary().byteLength
			const sizeTx = tx.bytes.byteLength - sizeMsg

			strictEqual(sizeMsg + sizeTx, tx.bytes.byteLength)

			// Time to do the math!
			const expectedMsgMinimum = BigInt(sizeMsg) * BigInt(costPerByte.msg)
			const expectedTxMinimum = BigInt(sizeTx) * BigInt(costPerByte.tx)
			const expectedMinimum = expectedTxMinimum + expectedMsgMinimum

			if (tx.data.gas >= expectedMinimum) {
				return {
					actual: tx.data.gas,
					expected: expectedMinimum,
				}
			}

			throw new TxGasTooLowException(tx.hash, denom(state, 'gas'), tx.data.gas, expectedMinimum)
		},
	}
}
