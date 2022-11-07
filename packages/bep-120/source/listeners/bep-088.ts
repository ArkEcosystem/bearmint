import type { Account, EventListener, StateStore } from '@bearmint/bep-013'
import { DoesNotSatisfyElectionConditionsError } from '@bearmint/bep-109'

import { isJailed } from '../utils.js'

export function makeBEP88Listener(): EventListener<{ account: Account; state: StateStore }> {
	return {
		async execute({ account, state }) {
			if (await isJailed(state, account)) {
				throw new DoesNotSatisfyElectionConditionsError('jailed')
			}
		},
	}
}
