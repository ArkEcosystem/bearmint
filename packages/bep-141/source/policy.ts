/* eslint-disable unicorn/consistent-function-scoping */
import type { Policy } from '@bearmint/bep-013'
import type { PolicyArgs } from '@bearmint/bep-126'

export function makePolicy(): Policy<PolicyArgs> {
	async function allows({ actor, collection }) {
		try {
			return actor.address === collection.currentOwner
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
			return args === ''
		},
	}
}
