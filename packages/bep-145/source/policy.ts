import type { Policy } from '@bearmint/bep-013'
import type { PolicyArgs } from '@bearmint/bep-126'

import {
	allowsCollectionAccess,
	allowsTokenAccess,
	deniesCollectionAccess,
	deniesTokenAccess,
} from './acl.js'

export function makePolicy(): Policy<PolicyArgs> {
	return {
		async allows({ actor, collection, policy, state, token }) {
			try {
				// eslint-disable-next-line security/detect-possible-timing-attacks
				if (token !== undefined) {
					return await allowsTokenAccess(
						state.getMultiStore().get('@bearmint/bep-126'),
						state.getMultiStore().get('@bearmint/bep-131'),
						token,
						actor,
						policy.type,
					)
				}

				return await allowsCollectionAccess(
					state.getMultiStore().get('@bearmint/bep-126'),
					collection.id,
					actor.address,
					policy.type,
				)
			} catch {
				return false
			}
		},
		async denies({ actor, collection, policy, state, token }) {
			try {
				// eslint-disable-next-line security/detect-possible-timing-attacks
				if (token !== undefined) {
					return await deniesTokenAccess(
						state.getMultiStore().get('@bearmint/bep-126'),
						state.getMultiStore().get('@bearmint/bep-131'),
						token,
						actor,
						policy.type,
					)
				}

				return await deniesCollectionAccess(
					state.getMultiStore().get('@bearmint/bep-126'),
					collection.id,
					actor.address,
					policy.type,
				)
			} catch {
				return true
			}
		},
		async validate(args) {
			return args === ''
		},
	}
}
