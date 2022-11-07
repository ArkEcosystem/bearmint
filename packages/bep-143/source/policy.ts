/* eslint-disable unicorn/consistent-function-scoping */

import { hexToString } from '@bearmint/bep-009'
import type { Policy } from '@bearmint/bep-013'
import type { PolicyArgs } from '@bearmint/bep-126'

export function makePolicy(): Policy<PolicyArgs> {
	async function allows({ policy, state }) {
		try {
			return BigInt(hexToString(policy.args)) > (await state.getCommittedBlockNumber())
		} catch {
			return false
		}
	}

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
