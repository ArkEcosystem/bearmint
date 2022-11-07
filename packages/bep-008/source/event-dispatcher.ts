import type { TxTestContext } from '@bearmint/bep-006'
import { makeContainer } from '@bearmint/bep-014'
import { makeEventDispatcher } from '@bearmint/bep-015'

export function fakeEventDispatcher(context?: TxTestContext) {
	if (context === undefined) {
		// @ts-ignore
		return makeEventDispatcher({ Container: makeContainer() })
	}

	// @ts-ignore
	return makeEventDispatcher({ Container: context.container })
}
