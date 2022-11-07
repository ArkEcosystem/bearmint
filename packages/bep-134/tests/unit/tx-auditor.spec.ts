import { expect, describe, it, beforeEach, afterEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { stringToBytes } from '@bearmint/bep-009'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { BEP134UserPermission, MintPolicy } from '../../source/types.js'
import { getDenominationKey, getNameKey } from '../../source/utils.js'
import { createTx, setUp, tearDown } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)
	tearDown(afterEach)

	it('should fail if the name is forbidden', async (context) => {
		const { tx } = await createTx(context, {
			name: 'BEAR',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.name',
				value: ErrorCode.TX_FORBIDDEN_VALUE,
			},
		])
	})

	it('should fail if the name is already used', async (context) => {
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-134')
			.set(getNameKey('name'), stringToBytes('name'))

		const { sender, tx } = await createTx(context)
		sender.metadata = {}

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.name',
				value: ErrorCode.TX_DUPLICATED_VALUE,
			},
		])
	})

	it('should fail if the name is not alphanumeric', async (context) => {
		const { tx } = await createTx(context, {
			name: '$$$',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.name',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the name is too short', async (context) => {
		const { tx } = await createTx(context, {
			name: '',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.name',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the name is too long', async (context) => {
		const { tx } = await createTx(context, {
			name: 'a'.repeat(420),
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.name',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the denomination is forbidden', async (context) => {
		const { tx } = await createTx(context, {
			denomination: 'BEAR',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.denomination',
				value: ErrorCode.TX_FORBIDDEN_VALUE,
			},
		])
	})

	it('should fail if the denomination is already used', async (context) => {
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-134')
			.set(getDenominationKey('denomination'), stringToBytes('denomination'))

		const { sender, tx } = await createTx(context)
		sender.metadata = {}

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.denomination',
				value: ErrorCode.TX_DUPLICATED_VALUE,
			},
		])
	})

	it('should fail if the denomination is not alphanumeric', async (context) => {
		const { tx } = await createTx(context, {
			denomination: '$$$',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.denomination',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the denomination is too short', async (context) => {
		const { tx } = await createTx(context, {
			denomination: '',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.denomination',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the denomination is too long', async (context) => {
		const { tx } = await createTx(context, {
			denomination: 'a'.repeat(420),
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.denomination',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the policies contain duplicates', async (context) => {
		const { tx } = await createTx(context, {
			policies: [
				{
					name: MintPolicy.ONLY_OWNER,
					type: BEP134UserPermission.MINT,
				},
				{
					name: MintPolicy.ONLY_OWNER,
					type: BEP134UserPermission.MINT,
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies',
				value: ErrorCode.TX_ARRAY_CONTAINS_DUPLICATES,
			},
		])
	})

	it('should fail if the policies contain unknown policies', async (context) => {
		const { tx } = await createTx(context, {
			policies: [
				{
					name: MintPolicy.ONLY_OWNER,
					type: BEP134UserPermission.MINT,
				},
				{
					name: 'junk',
					type: BEP134UserPermission.MINT,
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies.mint',
				value: ErrorCode.TX_UNKNOWN_POLICY,
			},
		])
	})

	it('should fail if the policies are empty', async (context) => {
		const { tx } = await createTx(context, {
			policies: [],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies',
				value: ErrorCode.TX_COUNT_MIN_NOT_SATISFIED,
			},
		])
	})

	Unit.testMemoLength({ expect, createTx, it })
})
