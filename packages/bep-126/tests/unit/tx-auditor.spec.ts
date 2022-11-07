import { expect, describe, it, beforeEach, afterEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { stringToBytes } from '@bearmint/bep-009'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { getNameKey, getSymbolKey } from '../../source/utils.js'
import { createTx, setUp, tearDown } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)
	tearDown(afterEach)

	it('should fail if the tx is relational', async (context) => {
		const { tx } = await createTx(context, undefined, true)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'sender',
				value: ErrorCode.TX_UNEXPECTED_RELATIONAL_DIRECTION,
			},
		])
	})

	it('should fail if there are too few ops', async (context) => {
		const { tx } = await createTx(context, {
			ops: [],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops',
				value: ErrorCode.TX_COUNT_MIN_NOT_SATISFIED,
			},
		])
	})

	it('should fail if there are duplicate ops by name', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					name: 'name',
					symbol: 'symbol',
				},
				{
					name: 'name',
					symbol: 'symbol',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops',
				value: ErrorCode.TX_ARRAY_CONTAINS_DUPLICATES,
			},
		])
	})

	it('should fail if there are duplicate ops by symbol', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					name: 'namea',
					symbol: 'symbol',
				},
				{
					name: 'nameb',
					symbol: 'symbol',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops',
				value: ErrorCode.TX_ARRAY_CONTAINS_DUPLICATES,
			},
		])
	})

	it('should fail if there are too many ops', async (context) => {
		const { tx } = await createTx(context, {
			ops: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops',
				value: ErrorCode.TX_COUNT_MAX_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the name is already used', async (context) => {
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-126')
			.set(getNameKey('name'), stringToBytes('name'))

		const { tx } = await createTx(context)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.name',
				value: ErrorCode.TX_DUPLICATED_VALUE,
			},
		])
	})

	it('should fail if the symbol is already used', async (context) => {
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-126')
			.set(getSymbolKey('symbol'), stringToBytes('symbol'))

		const { tx } = await createTx(context)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.symbol',
				value: ErrorCode.TX_DUPLICATED_VALUE,
			},
		])
	})

	it('should fail if the URI prefix is too short', async (context) => {
		const { tx } = await createTx(context, {
			ops: [{ uriPrefix: '' }],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.uri_prefix',
				value: ErrorCode.TX_BYTE_LENGTH_MIN_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the URI prefix is too long', async (context) => {
		const { tx } = await createTx(context, {
			ops: [{ uriPrefix: '#'.repeat(33) }],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.uri_prefix',
				value: ErrorCode.TX_BYTE_LENGTH_MAX_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the URI suffix is too short', async (context) => {
		const { tx } = await createTx(context, {
			ops: [{ uriPrefix: 'Hello', uriSuffix: '' }],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.uri_suffix',
				value: ErrorCode.TX_BYTE_LENGTH_MIN_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the URI suffix is too long', async (context) => {
		const { tx } = await createTx(context, {
			ops: [{ uriPrefix: 'Hello', uriSuffix: '#'.repeat(33) }],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.uri_suffix',
				value: ErrorCode.TX_BYTE_LENGTH_MAX_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the policies are too few', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					name: 'name',
					policies: [],
					symbol: 'symbol',
					uriPrefix: 'prefix',
					uriSuffix: 'suffix',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies',
				value: ErrorCode.TX_COUNT_MIN_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the policies are too many', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					name: 'name',
					policies: [{}, {}, {}, {}, {}, {}, {}],
					symbol: 'symbol',
					uriPrefix: 'prefix',
					uriSuffix: 'suffix',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies',
				value: ErrorCode.TX_COUNT_MAX_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the burn policy is unknown', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					name: 'name',
					policies: [{ name: '@bearmint/junkyard', type: 0 }],
					symbol: 'symbol',
					uriPrefix: 'prefix',
					uriSuffix: 'suffix',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies.burn',
				value: ErrorCode.TX_UNKNOWN_POLICY,
			},
		])
	})

	it('should fail if the burn policy is unknown', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					name: 'name',
					policies: [{ name: '@bearmint/junkyard', type: 1 }],
					symbol: 'symbol',
					uriPrefix: 'prefix',
					uriSuffix: 'suffix',
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

	it('should fail if the burn policy is unknown', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					name: 'name',
					policies: [{ name: '@bearmint/junkyard', type: 2 }],
					symbol: 'symbol',
					uriPrefix: 'prefix',
					uriSuffix: 'suffix',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.policies.transfer',
				value: ErrorCode.TX_UNKNOWN_POLICY,
			},
		])
	})

	Unit.testMemoLength({ expect, createTx, it })
})
