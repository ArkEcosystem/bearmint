import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect, spyFn } from '@bearmint/bep-005'
extendExpect(expect)
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeStrategy as BEP115 } from '@bearmint/bep-115'

import { denominations } from '../../../fixtures.js'
import { fakeStateStore } from '../../../state.js'
import { makeEndBlock } from '../../../../source/connections/consensus/end-block.js'
import { abci } from '@bearmint/bep-018'

describe('EndBlock', () => {
	it('it should respond without any errors', async () => {
		const CommittedState = await fakeStateStore()
		const ExecuteTxState = await CommittedState.copy()
		ExecuteTxState.setCandidateBlock(
			new abci.RequestFinalizeBlock({ header: { height: BigInt(1) } }),
		)

		await CommittedState.checkpoint()

		const elect = spyFn()

		const Container = makeContainer()
		Container.bindValue(ContainerType.ApplicationManifest, { semanticVersion: '1.0.0' })
		Container.bindValue(ContainerType.DelegatorRewarder, true)
		Container.bindValue(ContainerType.ValidatorRewarder, true)

		expect(
			await makeEndBlock({
				Container,
				DataSink: { put() {} },
				ExecuteTxState,
				EventDispatcher: { dispatch() {} },
				MilestoneStrategy: Container.build(BEP115),
				Milestones: {
					'*': {
						blockNumber: '1',
						milestones: [
							{
								blockNumber: '1',
								parameters: {
									application: {},
									consensus: {
										validator: {
											pubKeyTypes: ['ed25519'],
										},
									},
									denominations,
									modules: { mandatory: {} },
									transactions: {},
								},
							},
						],
					},
				},
				CommittedState,
				ValidatorElector: {
					elect() {
						elect.call()

						return []
					},
				},
			}).execute({
				height: '1',
			}),
		).toStrictEqual({
			consensusParamUpdates: {
				validator: {
					pubKeyTypes: ['ed25519'],
				},
			},
			events: [],
			validatorUpdates: [],
		})

		elect.calledOnce()
	})
})
