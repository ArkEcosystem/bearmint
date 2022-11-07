import type { Account, PolicyRegistry, StateStore } from '@bearmint/bep-013'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import { getCollection } from './collection.js'

// eslint-disable-next-line max-params
export async function assertCollectionPolicies(
	state: StateStore,
	policyRegistry: PolicyRegistry,
	actor: Account,
	policyType: number,
	collectionHash: string,
	tokenHash: string | undefined,
	index: string,
) {
	const collection = await getCollection(
		state.getMultiStore().get('@bearmint/bep-126'),
		collectionHash,
	)

	for (const policy of collection.policies) {
		if (policy.type !== policyType) {
			continue
		}

		if (
			await policyRegistry.get('@bearmint/bep-126', String(policy.type), policy.name).denies({
				actor,
				collection,
				policy,
				state,
				token: tokenHash,
			})
		) {
			throw new TxAuditException({
				key: `message.ops.${index}.policies.${policy.name}`,
				value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
			})
		}
	}
}
