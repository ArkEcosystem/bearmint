import type { TxTestContext } from '@bearmint/bep-006'
import { makeEventDispatcher } from '@bearmint/bep-015'
import { makeAccountSerializer, makeAccountRepository } from '@bearmint/bep-022'

export function fakeAccountRepositoryFactory(context: TxTestContext) {
	// @ts-ignore
	return makeAccountRepository({
		// @ts-ignore
		AccountSerializer: context.accountSerializer,
		// @ts-ignore
		EventDispatcher: makeEventDispatcher({ Container: context.container }),
	})
}

export function fakeAccountSerializer(context: TxTestContext) {
	// @ts-ignore
	return makeAccountSerializer({
		CommittedState: context.state,
		DeliverTxState: context.state,
		// @ts-ignore
		EventDispatcher: makeEventDispatcher({ Container: context.container }),
	})
}
