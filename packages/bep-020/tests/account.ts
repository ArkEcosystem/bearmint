import { makeEventDispatcher } from '@bearmint/bep-015'
import { makeAccountSerializer, makeAccountRepository } from '@bearmint/bep-022'

export function fakeAccountRepositoryFactory(context) {
	// @ts-ignore
	return makeAccountRepository({
		AccountSerializer: context.accountSerializer,
		// @ts-ignore
		EventDispatcher: makeEventDispatcher({ Container: context.container }),
	})
}

export function fakeAccountSerializer(context) {
	// @ts-ignore
	return makeAccountSerializer({
		CommittedState: context.state,
		DeliverTxState: context.state,
		// @ts-ignore
		EventDispatcher: makeEventDispatcher({ Container: context.container }),
	})
}
