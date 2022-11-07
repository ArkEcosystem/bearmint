/* eslint-disable unicorn/consistent-function-scoping */
import { hexToString } from '@bearmint/bep-009'
import type { Policy } from '@bearmint/bep-013'
import type { PolicyArgs } from '@bearmint/bep-126'

export function makePolicy(): Policy<PolicyArgs> {
	async function allows({ collection, policy }) {
		try {
			return Object.keys(collection.tokens).length + 1 <= BigInt(hexToString(policy.args))
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
