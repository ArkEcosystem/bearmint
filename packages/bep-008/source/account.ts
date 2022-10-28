import type { TxTestContext } from '@bearmint/bep-006'
import { makeEventDispatcher } from '@bearmint/bep-015'
import { makeAccountRepository, makeAccountSerializer } from '@bearmint/bep-022'

import { fakeAddressFactory } from './address.js'
import { fakeEventDispatcher } from './event-dispatcher.js'
import { fakeCommittedState } from './states.js'

export function fakeAccountRepositoryFactory(context: TxTestContext) {
	// @ts-ignore
	return makeAccountRepository({
		// @ts-ignore
		AccountSerializer: context.accountSerializer,
		// @ts-ignore
		EventDispatcher: makeEventDispatcher({ Container: context.container }),
	})
}

export function fakeAccountSerializer(context?: TxTestContext) {
	if (context === undefined) {
		// @ts-ignore
		return makeAccountSerializer({
			AddressFactory: fakeAddressFactory(),
			CommittedState: fakeCommittedState(),
			EventDispatcher: fakeEventDispatcher(),
			ExecuteTxState: fakeCommittedState(),
		})
	}

	// @ts-ignore
	return makeAccountSerializer({
		AddressFactory: context.addressFactory ?? fakeAddressFactory(),
		CommittedState: context.state ?? fakeCommittedState(),
		EventDispatcher: fakeEventDispatcher(context),
		ExecuteTxState: context.state ?? fakeCommittedState(),
	})
}
