import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToHex } from '@bearmint/bep-009'
import type { StateStore } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeEventDispatcher } from '@bearmint/bep-015'
import { abci } from '@bearmint/bep-018'
import { makeAccountSerializer, makeAccountRepository } from '@bearmint/bep-022'

import {
	fakeAddressFactory,
	fakeCommittedState,
	fakeMultiStore,
	fakeKVStores,
} from '../../../bep-008/distribution/index.js'
import { makeState } from '../../source/state-store.js'

describe<{
	opts: object
	subject: StateStore
}>('State', () => {
	beforeEach(async (context) => {
		context.opts = {
			accountRepositoryFactory: makeAccountRepository({
				AccountSerializer: makeAccountSerializer({
					AddressFactory: fakeAddressFactory(),
					DeliverTxState: fakeCommittedState(),
					EventDispatcher: makeEventDispatcher({ Container: makeContainer() }),
				}),
				EventDispatcher: makeEventDispatcher({ Container: makeContainer() }),
			}),
			tries: await fakeKVStores(),
		}

		context.subject = await makeState(
			context.opts.accountRepositoryFactory,
			await fakeMultiStore(context.opts.tries),
		)
	})

	it('should get the account repository', (context) => {
		context.subject.setAccountRepository(context.subject.getAccountRepository())

		expect(context.subject.getAccountRepository()).toBeTypeOf('object')
	})

	it('should get the tx trie', (context) => {
		expect(context.subject.getTxStore()).toBeTypeOf('object')
	})

	it('should get the last block app hash', async (context) => {
		await context.subject.setCommittedBlock(
			new abci.RequestFinalizeBlock({
				header: {
					appHash: Buffer.from(
						'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
						'hex',
					),
					height: BigInt(1),
				},
			}),
		)

		expect(bytesToHex(await context.subject.getCommittedBlockAppHash())).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)
	})

	it('should get the last block height', async (context) => {
		await context.subject.setCommittedBlock(
			new abci.RequestFinalizeBlock({ header: { height: BigInt(1) } }),
		)

		expect((await context.subject.getCommittedBlockNumber()).toString()).toStrictEqual('1')
	})

	it('should get the milestone', async (context) => {
		await context.subject.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations: {},
				modules: { mandatory: {} },
				transactions: {},
			},
		})

		expect(context.subject.getMilestone()).toStrictEqual({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations: {},
				modules: { mandatory: {} },
				transactions: {},
			},
		})
	})

	it('should get the proposer', (context) => {
		context.subject.setCandidateBlock({ header: { proposerAddress: Buffer.alloc(0) } })

		expect(context.subject.getCandidateBlockProposer()).toStrictEqual(Buffer.alloc(0))
	})

	it('should get the consumed gas', (context) => {
		context.subject.setConsumedGas(BigInt(1))

		expect(context.subject.getConsumedGas().toString()).toStrictEqual(BigInt(1).toString())
	})

	it('should copy the state store', async (context) => {
		await context.subject.setCommittedBlock(
			new abci.RequestFinalizeBlock({ header: { height: BigInt(1) } }),
		)
		await context.subject.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations: {},
				modules: { mandatory: {} },
				transactions: {},
			},
		})
		context.subject.setCandidateBlock({ header: { proposerAddress: Buffer.alloc(0) } })

		expect(await context.subject.copy()).toBeTypeOf('object')
	})

	it('should take a checkpoint and revert to the previous state', async (context) => {
		const beforeRoots = context.subject.getMultiStore().roots()

		expect(beforeRoots).toBeTypeOf('object')

		await context.subject.checkpoint()

		await context.subject.getAccountRepository().index([{ address: 'address' }])

		expect(context.subject.getMultiStore().roots()).not.toStrictEqual(beforeRoots)

		await context.subject.revert()

		expect(context.subject.getMultiStore().roots()).toStrictEqual(beforeRoots)
	})

	it('should take a checkpoint and commit the state', async (context) => {
		const beforeRoots = context.subject.getMultiStore().roots()

		expect(beforeRoots).toBeTypeOf('object')

		await context.subject.checkpoint()
		await context.subject.checkpoint()

		context.subject.setCandidateBlock(
			new abci.RequestFinalizeBlock({
				header: { height: BigInt(2), proposerAddress: Buffer.alloc(0) },
			}),
		)
		await context.subject.setCommittedBlock(
			new abci.RequestFinalizeBlock({
				header: {
					appHash: Buffer.from(
						'd3db1ad667c6189ca5e5164edf897fbb62ce15847b436d2c2cc363fefa866133',
						'hex',
					),
					height: BigInt(1),
				},
			}),
		)
		await context.subject.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations: {},
				modules: { mandatory: {} },
				transactions: {},
			},
		})
		context.subject.setConsumedGas(BigInt(1))

		expect(context.subject.getConsumedGas().toString()).toStrictEqual('1')
		expect(context.subject.getCandidateBlockProposer().toString()).toStrictEqual('')

		await context.subject.commit(context.subject)

		expect(context.subject.getConsumedGas().toString()).toStrictEqual('0')
		// expect(() => context.subject.getCandidateBlockProposer()).toThrow()
	})

	it('should take a checkpoint and commit the state with the transient roots', async (context) => {
		const beforeRoots = context.subject.getMultiStore().roots()

		expect(beforeRoots).toBeTypeOf('object')

		await context.subject.checkpoint()
		await context.subject.checkpoint()

		context.subject.setCandidateBlock(
			new abci.RequestFinalizeBlock({
				header: {
					appHash: Buffer.from(
						'd3db1ad667c6189ca5e5164edf897fbb62ce15847b436d2c2cc363fefa866133',
						'hex',
					),
					height: BigInt(2),
				},
			}),
		)
		await context.subject.setCommittedBlock(
			new abci.RequestFinalizeBlock({
				header: {
					appHash: Buffer.from(
						'd3db1ad667c6189ca5e5164edf897fbb62ce15847b436d2c2cc363fefa866133',
						'hex',
					),
					height: BigInt(1),
				},
			}),
		)
		await context.subject.commit(context.subject)

		expect(context.subject.getMultiStore().roots()).not.toStrictEqual(beforeRoots)
		expect(await context.subject.getCommittedBlockNumber()).toStrictEqual(BigInt(2)) // Commit increases last height by 1
	})

	it('should restore trie state', async (context) => {
		await context.subject.checkpoint()

		context.subject.setCandidateBlock(
			new abci.RequestFinalizeBlock({ header: { height: BigInt(1) } }),
		)
		await context.subject.setCommittedBlock(
			new abci.RequestFinalizeBlock({
				header: {
					appHash: Buffer.from(
						'd3db1ad667c6189ca5e5164edf897fbb62ce15847b436d2c2cc363fefa866133',
						'hex',
					),
					height: BigInt(1),
				},
			}),
		)
		await context.subject.setMilestone({
			blockNumber: '1',
			parameters: {
				application: {},
				consensus: {},
				denominations: {},
				modules: { mandatory: {} },
				transactions: {},
			},
		})

		expect(bytesToHex(await context.subject.getCommittedBlockAppHash())).toStrictEqual(
			'd3db1ad667c6189ca5e5164edf897fbb62ce15847b436d2c2cc363fefa866133',
		)
		expect((await context.subject.getCommittedBlockNumber()).toString()).toStrictEqual('1')

		await context.subject.commit()

		// New instance with same 'application' trie
		const restored = await makeState(
			context.opts.accountRepositoryFactory,
			await fakeMultiStore(context.opts.tries),
		)

		expect(bytesToHex(await restored.getCommittedBlockAppHash())).toStrictEqual(
			bytesToHex(await context.subject.getCommittedBlockAppHash()),
		)
		expect((await restored.getCommittedBlockNumber()).toString()).toStrictEqual('1')
	})

	it('should determine if the state is at a checkpoint', async (context) => {
		expect(context.subject.hasCheckpoints()).toBeFalse()

		await context.subject.checkpoint()

		expect(context.subject.hasCheckpoints()).toBeTrue()

		await context.subject.revert()

		expect(context.subject.hasCheckpoints()).toBeFalse()
	})
})
