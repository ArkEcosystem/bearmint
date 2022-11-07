import { expect, describe, it } from 'vitest'
import { extendExpect, spyFn } from '@bearmint/bep-005'
extendExpect(expect)
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'

import { makeStrategy } from '../../../bep-115/distribution/index.js'
import { setMilestone } from '../../source/set-milestone.js'

const consensus = {
	block: {
		max_bytes: '22020096',
		max_gas: '-1',
		time_iota_ms: '1000',
	},
	evidence: {
		max_age_duration: {
			nanos: 1,
			seconds: '172800',
		},
		max_age_num_blocks: '100000',
		max_bytes: '1048576',
	},
	validator: {
		pub_key_types: ['ed25519'],
	},
	version: {
		app_version: '0',
	},
}

const denominations = {
	gas: 'FIRE',
	reward: 'GOLD',
	stake: 'SEED',
	token: 'BEAR',
}

describe('setMilestone', () => {
	it('should create a strategy and execute it', async () => {
		const setMilestoneState = spyFn()

		const Container = makeContainer()
		Container.bindValue(ContainerType.ApplicationManifest, {
			semanticVersion: '2.5.0',
		})

		expect(
			await setMilestone(
				{
					Container,
					EventDispatcher: { dispatch() {} },
					MilestoneStrategy: Container.build(makeStrategy),
					Milestones: {
						'*': {
							blockNumber: '1',
							milestones: [
								{
									blockNumber: 1,
									parameters: {
										consensus,
										denominations,
										modules: {
											mandatory: {
												'@bearmint/bep1': {
													key: '1r',
												},
											},
											optional: {
												'@bearmint/bep1': {
													key: '1o',
												},
											},
										},
										transactions: {
											handlers: {
												'@bearmint/bep1': { ranges: ['>=1.0.0'] },
											},
										},
									},
								},
								{
									blockNumber: 2,
									parameters: {
										consensus,
										denominations,
										modules: {
											mandatory: {
												'@bearmint/bep1': {
													key: '2r',
													keyNew2: '2rn',
												},
											},
											optional: {
												'@bearmint/bep1': {
													key: '2o',
													keyNew2: '2on',
												},
											},
										},
										transactions: {
											handlers: {
												'@bearmint/bep1': { ranges: ['>=2.0.0'] },
											},
										},
									},
								},
							],
						},
						'>=2.0.0': {
							blockNumber: '2',
							milestones: [
								{
									blockNumber: 3,
									parameters: {
										consensus,
										denominations,
										modules: {
											mandatory: {
												'@bearmint/bep1': {
													key: '3r',
													keyNew3: '3rn',
												},
											},
											optional: {
												'@bearmint/bep1': {
													key: '3o',
													keyNew3: '3on',
												},
											},
										},
										transactions: {
											handlers: {
												'@bearmint/bep1': { ranges: ['>=3.0.0'] },
											},
										},
									},
								},
							],
						},
						// This won't be activated because the semanticVersion matches but not the activation blockNumber
						'>=2.3.0': {
							blockNumber: '4',
							milestones: [
								{
									blockNumber: 3,
									parameters: {
										consensus,
										denominations,
										modules: {
											mandatory: {
												'@bearmint/bep1': {
													key: '4r',
													keyNew4: '4rn',
												},
											},
											optional: {
												'@bearmint/bep1': {
													key: '4o',
													keyNew4: '4on',
												},
											},
										},
										transactions: {
											handlers: {
												'@bearmint/bep1': { ranges: ['>=3.0.0'] },
											},
										},
									},
								},
							],
						},
					},
				},
				{ setMilestone: setMilestoneState.toFunction() },
				BigInt(3),
			),
		).toStrictEqual({
			blockNumber: 3,
			parameters: {
				consensus: {
					block: {
						max_bytes: '22020096',
						max_gas: '-1',
						time_iota_ms: '1000',
					},
					evidence: {
						max_age_duration: {
							nanos: 1,
							seconds: '172800',
						},
						max_age_num_blocks: '100000',
						max_bytes: '1048576',
					},
					validator: {
						pub_key_types: ['ed25519'],
					},
					version: {
						app_version: '0',
					},
				},
				denominations: {
					gas: 'FIRE',
					reward: 'GOLD',
					stake: 'SEED',
					token: 'BEAR',
				},
				modules: {
					mandatory: {
						'@bearmint/bep1': {
							key: '3r',
							keyNew2: '2rn',
							keyNew3: '3rn',
						},
					},
					optional: {
						'@bearmint/bep1': {
							key: '3o',
							keyNew2: '2on',
							keyNew3: '3on',
						},
					},
				},
				transactions: {
					handlers: {
						'@bearmint/bep1': { ranges: ['>=3.0.0'] },
					},
				},
			},
		})

		setMilestoneState.calledOnce()
	})
})
