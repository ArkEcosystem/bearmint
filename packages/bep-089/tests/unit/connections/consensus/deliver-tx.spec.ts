import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect, spy, spyFn } from '@bearmint/bep-005'
extendExpect(expect)

import { makeContainer } from '@bearmint/bep-014'
import { makeEventDispatcher } from '@bearmint/bep-015'
import { makeEventRecorderFactory } from '@bearmint/bep-090'
import { TxFailuresRecordedException } from '@bearmint/bep-109'
import { makeGasMeterFactory } from '@bearmint/bep-048'

import { fakeStateStore } from '../../../state.js'
import { makeDeliverTx } from '../../../../source/connections/consensus/deliver-tx.js'
import { abci } from '@bearmint/bep-018'

describe('DeliverTx', () => {
	it('it should respond without any errors', async () => {
		const DeliverTxState = await fakeStateStore()
		DeliverTxState.setCandidateBlock(new abci.RequestBeginBlock({ header: { height: BigInt(1) } }))
		await DeliverTxState.setCommittedBlock(
			new abci.RequestBeginBlock({ header: { height: BigInt(1) } }),
		)

		const TxProcessor = spyFn()

		expect(
			await makeDeliverTx({
				Container: makeContainer(),
				DataSink: { put() {} },
				DeliverTxState,
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
							bytes: Buffer.alloc(0),
							checksum: {},
							data: {
								gas: BigInt(5),
								hash: Buffer.alloc(32).toString('hex'),
							},
						}
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
								toJson() {
									return {}
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
		).toMatchSnapshot()

		TxProcessor.calledOnce()
	})

	it('it should respond after handling an unexpected error', async () => {
		const DeliverTxState = await fakeStateStore()

		const TxProcessor = spyFn()
		const TxAuditorRegistry = spyFn()
		const revert = spy(DeliverTxState, 'revert')

		expect(
			await makeDeliverTx({
				Container: makeContainer(),
				DeliverTxState,
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
							},
						}
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
			info: 'hello',
		})

		TxAuditorRegistry.neverCalled()
		TxProcessor.neverCalled()
		revert.calledOnce()
	})

	it('it should respond after handling TxFailuresRecordedException', async () => {
		const DeliverTxState = await fakeStateStore()

		const TxProcessor = spyFn()
		const TxAuditorRegistry = spyFn()
		const revert = spy(DeliverTxState, 'revert')

		expect(
			await makeDeliverTx({
				Container: makeContainer(),
				DeliverTxState,
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
			info: 'Tx (hash) contained (1) errors',
		})

		TxAuditorRegistry.neverCalled()
		TxProcessor.neverCalled()
		revert.calledOnce()
	})
})
