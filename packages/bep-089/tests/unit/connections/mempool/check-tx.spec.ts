import { makeContainer } from '@bearmint/bep-014'
import { makeEventDispatcher } from '@bearmint/bep-015'
import { TxFailuresRecordedException } from '@bearmint/bep-109'
import { makeEventRecorderFactory } from '@bearmint/bep-090'
import { makeGasMeterFactory } from '@bearmint/bep-048'
import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect, spy, spyFn } from '@bearmint/bep-005'
extendExpect(expect)

import { fakeStateStore } from '../../../state.js'
import { makeCheckTx } from '../../../../source/connections/mempool/check-tx.js'
import { abci } from '@bearmint/bep-018'

describe('CheckTx', () => {
	it('should respond without any errors', async () => {
		const CheckTxState = await fakeStateStore()
		CheckTxState.setCandidateBlock(new abci.RequestBeginBlock({ header: { height: BigInt(1) } }))
		await CheckTxState.setCommittedBlock(
			new abci.RequestBeginBlock({ header: { height: BigInt(1) } }),
		)

		const TxProcessor = spyFn()

		await CheckTxState.checkpoint()

		expect(
			await makeCheckTx({
				CheckTxState,
				Container: makeContainer(),
				EventDispatcher: makeEventDispatcher(),
				EventRecorderFactory: makeEventRecorderFactory(),
				GasCalculator: {
					execute() {
						return {
							expected: BigInt(5),
						}
					},
				},
				GasMeterFactory: makeGasMeterFactory(),
				Logger: console,
				TxFactory: {
					fromBytes() {
						return {
							checksum: {},
							data: {
								gas: BigInt(5),
								sender: 'sender',
							},
						}
					},
				},
				TxPrioritizer: {
					async execute() {
						return BigInt(5)
					},
				},
				TxProcessor: {
					execute() {
						TxProcessor.call()

						return {
							events: [],
							receipt: {
								logs() {
									return []
								},
								toBinary() {
									return Buffer.alloc(0)
								},
							},
						}
					},
				},
			}).execute({
				tx: Buffer.from(''),
			}),
		).toStrictEqual({
			code: 0,
			data: undefined,
			events: [],
			gasUsed: BigInt('0'),
			gasWanted: BigInt('5'),
			priority: BigInt('5'),
			sender: 'sender',
		})

		TxProcessor.calledOnce()
	})

	it('should respond without any errors if its a recheck', async () => {
		const CheckTxState = await fakeStateStore()
		CheckTxState.setCandidateBlock(new abci.RequestBeginBlock({ header: { height: BigInt(1) } }))
		await CheckTxState.setCommittedBlock(
			new abci.RequestBeginBlock({ header: { height: BigInt(1) } }),
		)

		const TxProcessor = spyFn()

		await CheckTxState.checkpoint()

		expect(
			await makeCheckTx({
				CheckTxState,
				Container: makeContainer(),
				EventDispatcher: makeEventDispatcher(),
				EventRecorderFactory: makeEventRecorderFactory(),
				GasCalculator: {
					execute() {
						return {
							expected: BigInt(5),
						}
					},
				},
				GasMeterFactory: makeGasMeterFactory(),
				Logger: console,
				TxFactory: {
					fromBytes() {
						return {
							checksum: {},
							data: {
								gas: BigInt(5),
								sender: 'sender',
							},
						}
					},
				},
				TxPrioritizer: {
					async execute() {
						return BigInt(5)
					},
				},
				TxProcessor: {
					execute() {
						TxProcessor.call()

						return {
							events: [],
							receipt: {
								logs() {
									return []
								},
								toBinary() {
									return Buffer.alloc(0)
								},
							},
						}
					},
				},
			}).execute({
				tx: Buffer.from(''),
				type: 1,
			}),
		).toStrictEqual({
			code: 0,
			data: undefined,
			events: [],
			gasUsed: BigInt('0'),
			gasWanted: BigInt('5'),
			priority: BigInt('5'),
			sender: 'sender',
		})

		TxProcessor.calledOnce()
	})

	it('should respond after handling an unexpected error', async () => {
		const CheckTxState = await fakeStateStore()

		const TxAuditorRegistry = spyFn()
		const TxProcessor = spyFn()
		const revert = spy(CheckTxState, 'revert')

		await CheckTxState.checkpoint()

		expect(
			await makeCheckTx({
				CheckTxState,
				Container: makeContainer(),
				EventDispatcher: makeEventDispatcher(),
				EventRecorderFactory: makeEventRecorderFactory(),
				GasCalculator: {
					execute() {
						return {
							expected: BigInt(5),
						}
					},
				},
				GasMeterFactory: makeGasMeterFactory(),
				Logger: console,
				TxFactory: {
					fromBytes() {
						return {
							checksum: {},
							data: {
								gas: BigInt(5),
								sender: 'sender',
							},
						}
					},
				},
				TxPrioritizer: {
					execute() {
						return BigInt(5)
					},
				},
				TxProcessor: {
					execute() {
						throw new Error('hello')
					},
				},
			}).execute({
				tx: Buffer.from(''),
			}),
		).toStrictEqual({
			code: 1,
			data: undefined,
			events: [],
			gasUsed: BigInt('0'),
			gasWanted: BigInt('5'),
			mempoolError: 'hello',
			sender: 'sender',
		})

		TxAuditorRegistry.neverCalled()
		TxProcessor.neverCalled()
		revert.calledOnce()
	})

	it('should respond after handling TxFailuresRecordedException', async () => {
		const CheckTxState = await fakeStateStore()

		const TxProcessor = spyFn()
		const TxAuditorRegistry = spyFn()
		const revert = spy(CheckTxState, 'revert')

		await CheckTxState.checkpoint()

		expect(
			await makeCheckTx({
				CheckTxState,
				Container: makeContainer(),
				EventDispatcher: makeEventDispatcher(),
				EventRecorderFactory: makeEventRecorderFactory(),
				GasCalculator: {
					execute() {
						return {
							expected: BigInt(5),
						}
					},
				},
				GasMeterFactory: makeGasMeterFactory(),
				Logger: console,
				TxFactory: {
					fromBytes() {
						return {
							checksum: {},
							data: {
								gas: BigInt(5),
								sender: 'sender',
							},
						}
					},
				},
				TxProcessor: {
					execute() {
						throw new TxFailuresRecordedException('hash', {
							attributes: ['attribute'],
						})
					},
				},
			}).execute({
				tx: Buffer.from(''),
			}),
		).toStrictEqual({
			code: 1,
			data: undefined,
			events: [{ attributes: ['attribute'] }],
			gasUsed: BigInt('0'),
			gasWanted: BigInt('5'),
			mempoolError: 'Tx (hash) contained (1) errors',
			sender: 'sender',
		})

		TxAuditorRegistry.neverCalled()
		TxProcessor.neverCalled()
		revert.calledOnce()
	})
})
