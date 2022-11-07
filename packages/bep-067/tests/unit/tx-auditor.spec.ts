import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { getPrimaryKey } from '../../source/utils.js'
import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail value does not pass [base32cid]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'base32cid',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [cid]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'cid',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [cidPath]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'cidPath',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [ipfsPath]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'ipfsPath',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [ipfsSubdomain]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'ipfsSubdomain',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [ipfsUrl]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'ipfsUrl',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [ipnsPath]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'ipnsPath',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [ipnsSubdomain]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'ipnsSubdomain',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [ipnsUrl]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'ipnsUrl',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [multiaddr]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'multiaddr',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [multihash]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'multihash',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [path]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'path',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [peerMultiaddr]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'peerMultiaddr',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [subdomain]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'subdomain',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [url]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'url',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail value does not pass [urlOrPath]', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'urlOrPath',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the hash is not a CID', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'multihash',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the hash is not a CID', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'multihash',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the hash is not a CID', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'multihash',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the hash is not a CID', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'multihash',
					value: 'junk',
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_MALFORMED_VALUE,
			},
		])
	})

	it('should fail if the value is already registered', async (context) => {
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-067')
			.set(
				getPrimaryKey('multihash', 'QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o'),
				Buffer.from('hash'),
			)

		const { tx } = await createTx(context)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.value',
				value: ErrorCode.TX_DUPLICATED_VALUE,
			},
		])
	})

	it('should fail if there are duplicated ops', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					type: 'multihash',
					value: 'junk',
				},
				{
					type: 'multihash',
					value: 'junk',
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

	it('should fail if the ops are too few', async (context) => {
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

	it('should fail if the ops are too many', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
				{},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops',
				value: ErrorCode.TX_COUNT_MAX_NOT_SATISFIED,
			},
		])
	})

	Unit.testMemoLength({ expect, createTx, it })
})
