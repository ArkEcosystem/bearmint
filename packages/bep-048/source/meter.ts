import { BN } from '@bearmint/bep-009'
import type { GasMeter, GasMeterFactory } from '@bearmint/bep-013'

export function makeGasMeter(): GasMeter {
	const registry: Record<string, bigint> = {}

	return {
		consume(reason: string, value: bigint) {
			registry[reason] = value
		},
		total() {
			return BN.sum(Object.values(registry))
		},
	}
}

export function makeGasMeterFactory(): GasMeterFactory {
	return {
		make() {
			return makeGasMeter()
		},
	}
}
