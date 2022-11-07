// import type { FunctionReturning } from 'awilix'

import type { StateStore } from './state.js'
import type { Tx } from './tx.js'

export interface GasCalculator {
	execute(
		state: StateStore,
		tx: Tx,
	): Promise<{
		actual: bigint
		expected: bigint
	}>
}

export type GasCalculatorStrategy = GasCalculator

export interface GasMeter {
	consume(reason: string, value: bigint): void
	total(): bigint
}

export interface GasMeterFactory {
	make(): GasMeter
}
