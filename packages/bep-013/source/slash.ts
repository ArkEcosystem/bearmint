import type { abci } from '@bearmint/bep-018'

import type { StateStore } from './state.js'

export interface Slasher {
	execute(state: StateStore, misbehavior: abci.Misbehavior): Promise<void>
}

export interface SlasherExecutor {
	execute(state: StateStore, misbehaviors: abci.Misbehavior[]): Promise<void>
}
