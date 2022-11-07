import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP67Msg } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'
import * as isIPFS from 'is-ipfs'

import { HANDLER } from './types.js'
import { getPrimaryKey } from './utils.js'

export function makeTxAuditor(): TxAuditor<BEP67Msg> {
	return {
		async execute({ assert, msg }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ type, value }) => `${type}${value}`)

			for (const [index, op] of Object.entries(msg.ops)) {
				assert.byteLengthFromString('value', op.value, {
					key: `message.ops.${index}.value`,
				})

				assert.knownByList('type', op.type, {
					key: `message.ops.${index}.type`,
					value: ErrorCode.TX_UNKNOWN_STRATEGY,
				})

				try {
					if (isIPFS[op.type](op.value) === false) {
						throw new TxAuditException({
							key: `message.ops.${index}.value`,
							value: ErrorCode.TX_MALFORMED_VALUE,
						})
					}
				} catch {
					throw new TxAuditException({
						key: `message.ops.${index}.value`,
						value: ErrorCode.TX_MALFORMED_VALUE,
					})
				}

				await assert.uniqueModuleStoreKey(HANDLER, getPrimaryKey(op.type, op.value), {
					key: `message.ops.${index}.value`,
					value: ErrorCode.TX_DUPLICATED_VALUE,
				})
			}
		},
	}
}
