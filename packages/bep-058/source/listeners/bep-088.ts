import type { Account, EventListener, StateStore } from '@bearmint/bep-013'
import { DoesNotSatisfyElectionConditionsError } from '@bearmint/bep-109'

export function makeBEP88Listener(): EventListener<{ account: Account; state: StateStore }> {
	return {
		async execute({ account, state }) {
			if (await state.getMultiStore().get('@bearmint/bep-058').has(account.address)) {
				throw new DoesNotSatisfyElectionConditionsError('resigned')
			}
		},
	}
}
