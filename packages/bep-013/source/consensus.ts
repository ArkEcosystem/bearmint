import type { AccountWithValidator } from './account.js'
import type { StateStore } from './state.js'

export interface ValidatorElector {
	elect(state: StateStore): Promise<AccountWithValidator[]>
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
