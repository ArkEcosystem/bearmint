import type { abci } from '@bearmint/bep-018'

import type { StateStore } from './state.js'

export interface ValidatorElector {
	elect(state: StateStore): Promise<abci.ValidatorUpdate[]>
}

export interface BEP88Milestone {
	mode: 'standard' | 'delegated'
	range: {
		power: {
			max: number
			min: number
		}
	}
	count: {
		validators: {
			max: number
			min: number
		}
	}
}
