import type { abci } from '@bearmint/bep-018'

import type { Account, AccountWithValidator } from './account.js'
import type { StateStore } from './state.js'

export interface DelegatorRewarder {
	execute(state: StateStore, reward: bigint): Promise<abci.Event[]>
}

export interface DelegatorRewarderStrategy {
	execute(
		state: StateStore,
		validator: AccountWithValidator,
		delegator: Account,
		reward: bigint,
		denomination: string,
	): Promise<bigint>
	validate(args: string): Promise<boolean>
}

export interface ValidatorRewarder {
	execute(state: StateStore): Promise<{ events: abci.Event[]; reward: bigint }>
}

export interface ValidatorRewarderStrategy {
	execute(state: StateStore, account: AccountWithValidator, denomination: string): Promise<bigint>
}
