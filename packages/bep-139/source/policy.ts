import { assert, hexToString } from '@bearmint/bep-009'
import type { Policy } from '@bearmint/bep-013'

import type { PolicyArguments } from './types.js'

async function allows({ policy, state }: PolicyArguments) {
	try {
		assert.defined<string>(policy.args)

		return (await state.getCommittedBlockNumber()) <= BigInt(hexToString(policy.args))
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
			return Number.isInteger(Number(hexToString(args)))
		},
	}
}
