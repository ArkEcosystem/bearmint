import type { Cradle, TxAuditor } from '@bearmint/bep-013'
import type { BEP126Msg } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import { BEP126UserPermission, HANDLER } from './types.js'
import { getNameKey, getSymbolKey } from './utils.js'

export function makeTxAuditor(cradle: Cradle): TxAuditor<BEP126Msg> {
	return {
		async execute({ assert, msg }) {
			await assert.loopback()

			assert.count('ops', msg.ops)

			assert.memoLength(msg.memo, msg.ops)

			assert.uniqueOps(msg.ops, ({ name }) => name)
			assert.uniqueOps(msg.ops, ({ symbol }) => symbol)

			for (const [index, op] of Object.entries(msg.ops)) {
				assert.byteLengthFromString('uriPrefix', op.uriPrefix, {
					key: `message.ops.${index}.uri_prefix`,
				})

				assert.byteLengthFromString('uriSuffix', op.uriSuffix, {
					key: `message.ops.${index}.uri_suffix`,
				})

				assert.regex('name', op.name, {
					key: `message.ops.${index}.name`,
					value: ErrorCode.TX_MALFORMED_VALUE,
				})

				assert.regex('symbol', op.symbol, {
					key: `message.ops.${index}.symbol`,
					value: ErrorCode.TX_MALFORMED_VALUE,
				})

				await assert.uniqueModuleStoreKey(HANDLER, getNameKey(op.name), {
					key: `message.ops.${index}.name`,
					value: ErrorCode.TX_DUPLICATED_VALUE,
				})

				await assert.uniqueModuleStoreKey(HANDLER, getSymbolKey(op.symbol), {
					key: `message.ops.${index}.symbol`,
					value: ErrorCode.TX_DUPLICATED_VALUE,
				})

				assert.count('policies', op.policies, {
					key: `message.ops.${index}.policies`,
				})

				assert.knownByList(
					'policies.burn',
					op.policies
						.filter(({ type }) => type === BEP126UserPermission.BURN)
						.map(({ name }) => name),
					{
						key: `message.ops.${index}.policies.burn`,
						value: ErrorCode.TX_UNKNOWN_POLICY,
					},
				)

				assert.knownByList(
					'policies.mint',
					op.policies
						.filter(({ type }) => type === BEP126UserPermission.MINT)
						.map(({ name }) => name),
					{
						key: `message.ops.${index}.policies.mint`,
						value: ErrorCode.TX_UNKNOWN_POLICY,
					},
				)

				assert.knownByList(
					'policies.transfer',
					op.policies
						.filter(({ type }) => type === BEP126UserPermission.TRANSFER)
						.map(({ name }) => name),
					{
						key: `message.ops.${index}.policies.transfer`,
						value: ErrorCode.TX_UNKNOWN_POLICY,
					},
				)

				assert.uniqueList(op.policies, ({ name, type }) => `${type}${name}`, {
					key: `message.ops.${index}.policies`,
					value: ErrorCode.TX_ARRAY_CONTAINS_DUPLICATES,
				})

				for (const [policyIndex, policy] of Object.entries(op.policies)) {
					if (
						!(await cradle.PolicyRegistry.get(
							'@bearmint/bep-126',
							String(policy.type),
							policy.name,
						).validate(policy.args))
					) {
						throw new TxAuditException({
							key: `message.ops.${index}.policies.${policyIndex}`,
							value: ErrorCode.TX_INVALID_ARGUMENTS,
						})
					}
				}
			}
		},
	}
}
