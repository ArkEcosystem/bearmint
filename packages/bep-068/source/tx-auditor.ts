import { bytesToHex } from '@bearmint/bep-009'
import type { TxAuditor } from '@bearmint/bep-013'
import type { BEP68Msg } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import { mimeTypeList } from './mime-types.js'
import { HANDLER } from './types.js'
import { getPrimaryKey } from './utils.js'

export function makeTxAuditor(): TxAuditor<BEP68Msg> {
	return {
		async execute({ assert, msg }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ data }) => bytesToHex(data))

			for (const [index, op] of Object.entries(msg.ops)) {
				assert.byteLength('data', op.data, {
					key: `message.ops.${index}.data`,
				})

				if (!mimeTypeList.includes(op.mimeType)) {
					throw new TxAuditException({
						key: `message.ops.${index}.mimeType`,
						value: ErrorCode.TX_UNKNOWN_VALUE,
					})
				}

				await assert.uniqueModuleStoreKey(HANDLER, getPrimaryKey(op.data), {
					key: `message.ops.${index}.data`,
					value: ErrorCode.TX_DUPLICATED_VALUE,
				})
			}
		},
	}
}
