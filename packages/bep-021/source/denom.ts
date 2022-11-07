import type { DenominationType, StateStore } from '@bearmint/bep-013'

export function denom(state: StateStore, type: DenominationType) {
	return state.getMilestone().parameters.denominations[type]
}
