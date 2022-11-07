import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { TxTestContext } from '@bearmint/bep-006'
import { denominations, milestone, mnemonics } from '@bearmint/bep-006'
import { Unit } from '@bearmint/bep-053'
import { ErrorCode } from '@bearmint/bep-109'

import { createTx, setUp } from '../setup.js'

describe<TxTestContext>('Tx Auditor', () => {
	setUp(beforeEach)

	it('should fail if the mode is required to be "standard" but the stake is "delegated"', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					moniker: 'borkley',
					stake: BigInt(-1e8),
				},
			],
		})

		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-088': {
							'*': {
								count: {
									validators: {
										max: 1,
										min: 1,
									},
								},
								mode: 'standard',
								range: {
									power: {
										max: 0,
										min: 1,
									},
								},
							},
						},
						'@bearmint/bep-104': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
								},
								count: {
									ops: {
										max: 2,
										min: 1,
									},
									stakes: {
										max: 0,
										min: 0,
									},
								},
								range: {
									stake: {
										max: 0,
										min: 0,
									},
								},
							},
						},
					},
				},
				transactions: {},
			},
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops',
				value: ErrorCode.TX_FORBIDDEN_ACTION,
			},
		])
	})

	it('should fail if the mode is required to be "delegated" but the stake is "standard"', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					moniker: 'buckley',
					stake: BigInt(-1e8),
				},
			],
		})

		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-088': {
							'*': {
								count: {
									validators: {
										max: 1,
										min: 1,
									},
								},
								mode: 'delegated',
								range: {
									power: {
										max: 0,
										min: 1,
									},
								},
							},
						},
						'@bearmint/bep-104': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
								},
								count: {
									ops: {
										max: 2,
										min: 1,
									},
									stakes: {
										max: 0,
										min: 0,
									},
								},
								range: {
									stake: {
										max: 0,
										min: 0,
									},
								},
							},
						},
					},
				},
				transactions: {},
			},
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops',
				value: ErrorCode.TX_FORBIDDEN_ACTION,
			},
		])
	})

	it('should fail if there are no ops', async (context) => {
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

	it('should fail if there are too many ops', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
				{
					moniker: 'a',
					stake: BigInt(1e8),
				},
			],
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops',
				value: ErrorCode.TX_COUNT_MAX_NOT_SATISFIED,
			},
		])
	})

	it('should fail if there are duplicated ops', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					action: 'unknown',
					moniker: 'buckley',
					stake: BigInt(1e8),
				},
				{
					action: 'unknown',
					moniker: 'buckley',
					stake: BigInt(1e8),
				},
				{
					action: 'unknown',
					moniker: 'buckley',
					stake: BigInt(1e8),
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

	it('should fail if the validator does not exist', async (context) => {
		const { tx } = await createTx(context)

		await context.state.getAccountRepository().forgetByMoniker('borkley')

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'moniker',
				value: ErrorCode.TX_NOT_FOUND,
			},
		])
	})

	it('should fail if the sender does not vote for the validator', async (context) => {
		const { sender, tx } = await createTx(context)
		// sender.moniker = 'buckley'
		sender.stakes['borkley'] = undefined
		sender.stakes['bustley'] = BigInt(0)
		await context.state.getAccountRepository().index([sender])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.stake',
				value: ErrorCode.TX_FORBIDDEN_ACTION,
			},
		])
	})

	it('should fail if the stake to remove is greater than the actual stake', async (context) => {
		const { sender, tx } = await createTx(context)
		// sender.moniker = 'buckley'
		sender.stakes['borkley'] = BigInt(0)
		await context.state.getAccountRepository().index([sender])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.stake',
				value: ErrorCode.TX_FORBIDDEN_ACTION,
			},
		])
	})

	it('should fail if the stake balance for increases is insufficient', async (context) => {
		const { sender, tx } = await createTx(context, {
			ops: [
				{
					moniker: 'borkley',
					stake: BigInt(1e8),
				},
			],
		})

		sender.balances[denominations.stake] = BigInt(0)
		await context.state.getAccountRepository().index([sender])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.stake',
				value: ErrorCode.TX_INSUFFICIENT_BALANCE,
			},
		])
	})

	it('should fail if the stake is too low', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					moniker: 'borkley',
					stake: BigInt(11e8),
				},
			],
		})

		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-088': {
							'*': {
								count: {
									validators: {
										max: 1,
										min: 1,
									},
								},
								mode: 'delegated',
								range: {
									power: {
										max: 0,
										min: 1,
									},
								},
							},
						},
						'@bearmint/bep-104': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
								},
								count: {
									ops: {
										max: 2,
										min: 1,
									},
									stakes: {
										max: 0,
										min: 0,
									},
								},
								range: {
									stake: {
										max: 0,
										min: 20e8,
									},
								},
							},
						},
					},
				},
				transactions: {},
			},
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.stake',
				value: ErrorCode.TX_RANGE_MIN_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the stake is too high', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					moniker: 'borkley',
					stake: BigInt(30e8),
				},
			],
		})

		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-088': {
							'*': {
								count: {
									validators: {
										max: 1,
										min: 1,
									},
								},
								mode: 'delegated',
								range: {
									power: {
										max: 0,
										min: 1,
									},
								},
							},
						},
						'@bearmint/bep-104': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
								},
								count: {
									ops: {
										max: 2,
										min: 1,
									},
									stakes: {
										max: 0,
										min: 0,
									},
								},
								range: {
									stake: {
										max: 20e8,
										min: 10e8,
									},
								},
							},
						},
					},
				},
				transactions: {},
			},
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.ops.0.stake',
				value: ErrorCode.TX_RANGE_MAX_NOT_SATISFIED,
			},
		])
	})

	it('should pass verification if the stake max is 0', async (context) => {
		const { tx } = await createTx(context)

		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-088': {
							'*': {
								count: {
									validators: {
										max: 1,
										min: 1,
									},
								},
								mode: 'delegated',
								range: {
									power: {
										max: 0,
										min: 1,
									},
								},
							},
						},
						'@bearmint/bep-104': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
								},
								count: {
									ops: {
										max: 2,
										min: 1,
									},
									stakes: {
										max: 0,
										min: 0,
									},
								},
								range: {
									stake: {
										max: 0,
										min: 0,
									},
								},
							},
						},
					},
				},
				transactions: {},
			},
		})

		await expect(await context.execute(tx)).toPassAudit()
	})

	it('should fail if the vote count is too low', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					moniker: 'bustley',
					stake: BigInt(1e8),
				},
				{
					moniker: 'borkley',
					stake: BigInt(1e8),
				},
			],
		})
		const { account: bustley } = await context.accountFromMnemonic(mnemonics[1])
		bustley.moniker = 'bustley'
		bustley.validator = {}
		await context.state.getAccountRepository().index([bustley])

		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-088': {
							'*': {
								count: {
									validators: {
										max: 1,
										min: 1,
									},
								},
								mode: 'delegated',
								range: {
									power: {
										max: 0,
										min: 1,
									},
								},
							},
						},
						'@bearmint/bep-104': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
								},
								count: {
									ops: {
										max: 2,
										min: 1,
									},
									stakes: {
										max: 0,
										min: 3,
									},
								},
								range: {
									stake: {
										max: 0,
										min: 0,
									},
								},
							},
						},
					},
				},
				transactions: {},
			},
		})

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.stakes',
				value: ErrorCode.TX_COUNT_MIN_NOT_SATISFIED,
			},
		])
	})

	it('should fail if the vote count is too high', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					moniker: 'bustley',
					stake: BigInt(1e8),
				},
				{
					moniker: 'borkley',
					stake: BigInt(1e8),
				},
			],
		})
		const { account: bustley } = await context.accountFromMnemonic(mnemonics[1])
		bustley.moniker = 'bustley'
		bustley.validator = {}
		await context.state.getAccountRepository().index([bustley])

		await expect(await context.audit(tx)).toFailAudit([
			{
				key: 'message.stakes',
				value: ErrorCode.TX_COUNT_MAX_NOT_SATISFIED,
			},
		])
	})

	it('should pass verification if the vote max is 0', async (context) => {
		const { tx } = await createTx(context, {
			ops: [
				{
					moniker: 'bustley',
					stake: BigInt(1e8),
				},
				{
					moniker: 'borkley',
					stake: BigInt(1e8),
				},
			],
		})
		const { account: bustley } = await context.accountFromMnemonic(mnemonics[1])
		bustley.moniker = 'bustley'
		bustley.validator = {}
		await context.state.getAccountRepository().index([bustley])

		await context.state.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations,
				modules: {
					mandatory: {
						...milestone.parameters.modules.mandatory,
						'@bearmint/bep-088': {
							'*': {
								count: {
									validators: {
										max: 1,
										min: 1,
									},
								},
								mode: 'delegated',
								range: {
									power: {
										max: 0,
										min: 1,
									},
								},
							},
						},
						'@bearmint/bep-104': {
							'*': {
								byteLength: {
									memo: {
										max: 256,
										min: 1,
									},
								},
								count: {
									ops: {
										max: 2,
										min: 1,
									},
									stakes: {
										max: 0,
										min: 0,
									},
								},
								range: {
									stake: {
										max: 0,
										min: 0,
									},
								},
							},
						},
					},
				},
				transactions: {},
			},
		})

		await expect(await context.execute(tx)).toPassAudit()
	})

	Unit.testMemoLength({ expect, createTx, it })
})
