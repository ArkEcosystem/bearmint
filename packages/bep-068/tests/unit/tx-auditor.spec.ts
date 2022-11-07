import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, milestone } from '@bearmint/bep-006'
import { stringToBytes } from '@bearmint/bep-009'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { mimeTypeList } from '../../source/mime-types.js'
import { getPrimaryKey } from '../../source/utils.js'
import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail if the data is already registered', async (context) => {
		await context.state
			.getMultiStore()
			.get('@bearmint/bep-068')
			.set(
				getPrimaryKey(stringToBytes('The quick brown fox jumps over the lazy dog')),
				Buffer.from('hash'),
			)

		const { tx } = await createTx(context)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.data',
				value: ErrorCode.TX_DUPLICATED_VALUE,
			},
		])
	})

	it('should fail if the mime-type is unknown', async (context) => {
		const { tx } = await createTx(context, {
			mimeType: 'unknown',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.mimeType',
				value: ErrorCode.TX_UNKNOWN_VALUE,
			},
		])
	})

	it('should fail if the byte-length is undefined', async (context) => {
		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-068': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
								},
								count: {
									ops: {
										max: 8,
										min: 1,
									},
								},
								list: { mimeType: mimeTypeList },
							},
						},
					},
				},
				transactions: {},
			},
		})

		const { tx } = await createTx(context)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.data',
				value: ErrorCode.TX_BYTE_LENGTH_UNDEFINED,
			},
		])
	})

	it('should fail if the byte-length.min is undefined', async (context) => {
		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-068': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
									data: {
										max: 64,
										min: undefined,
									},
								},
								count: {
									ops: {
										max: 8,
										min: 1,
									},
								},
								list: { mimeType: mimeTypeList },
							},
						},
					},
				},
				transactions: {},
			},
		})

		const { tx } = await createTx(context)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.data',
				value: ErrorCode.TX_BYTE_LENGTH_UNDEFINED,
			},
		])
	})

	it('should fail if the byte-length.max is undefined', async (context) => {
		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-068': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
									data: {
										max: undefined,
										min: 32,
									},
								},
								count: {
									ops: {
										max: 8,
										min: 1,
									},
								},
								list: { mimeType: mimeTypeList },
							},
						},
					},
				},
				transactions: {},
			},
		})

		const { tx } = await createTx(context)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.data',
				value: ErrorCode.TX_BYTE_LENGTH_UNDEFINED,
			},
		])
	})

	it('should fail if the byte-length.min/max are undefined', async (context) => {
		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-068': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
									data: {
										max: undefined,
										min: undefined,
									},
								},
								count: {
									ops: {
										max: 8,
										min: 1,
									},
								},
								list: { mimeType: mimeTypeList },
							},
						},
					},
				},
				transactions: {},
			},
		})

		const { tx } = await createTx(context)

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.data',
				value: ErrorCode.TX_BYTE_LENGTH_UNDEFINED,
			},
		])
	})

	it('should fail if the data is too short', async (context) => {
		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-068': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
									data: {
										max: 64,
										min: 32,
									},
								},
								count: {
									ops: {
										max: 8,
										min: 1,
									},
								},
								list: { mimeType: mimeTypeList },
							},
						},
					},
				},
				transactions: {},
			},
		})

		const { tx } = await createTx(context, {
			data: '1',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.data',
				value: ErrorCode.TX_BYTE_LENGTH_MIN_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the data is too long', async (context) => {
		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-068': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
									data: {
										max: 32,
										min: 32,
									},
								},
								count: {
									ops: {
										max: 8,
										min: 1,
									},
								},
								list: { mimeType: mimeTypeList },
							},
						},
					},
				},
				transactions: {},
			},
		})

		const { tx } = await createTx(context, {
			data: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.data',
				value: ErrorCode.TX_BYTE_LENGTH_MAX_NOT_SATISFIED,
			},
		])
	})

	Unit.testMemoLength({ expect, createTx, it })
})
