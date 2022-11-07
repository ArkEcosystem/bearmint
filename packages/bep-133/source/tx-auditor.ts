import type { Cradle, TxAuditor } from '@bearmint/bep-013'
import type { BEP133Msg } from '@bearmint/bep-018'
import {
	assertCollectionPolicies,
	BEP126UserPermission,
	getCollectionHash,
} from '@bearmint/bep-126'
import { HANDLER } from '@bearmint/bep-131'

export function makeTxAuditor(cradle: Cradle): TxAuditor<BEP133Msg> {
	return {
		async execute({ assert, msg, state, toolkit }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ hash }) => hash)

			const sender = await toolkit.getSender()

			for (const [index, { hash }] of Object.entries(msg.ops)) {
				await assertCollectionPolicies(
					state,
					cradle.PolicyRegistry,
					sender,
					BEP126UserPermission.BURN,
					await getCollectionHash(state.getMultiStore().get(HANDLER), hash),
					hash,
					index,
				)
			}
		},
	}
}
