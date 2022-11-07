import type { Policy } from '@bearmint/bep-013'
import { HANDLER } from '@bearmint/bep-134'

import type { PolicyArguments } from './types.js'

async function allows({ nativeTokenHash, sender, state }) {
	try {
		return (
			(await state.getMultiStore().get(HANDLER).getListHex(sender.address)).includes(
				nativeTokenHash,
			) === true
		)
	} catch {
		return false
	}
}

export function makePolicy(): Policy<PolicyArguments> {
	return {
		allows,
		async denies(args) {
			return !(await allows(args))
		},
		async validate(args) {
			return args === ''
		},
	}
}
