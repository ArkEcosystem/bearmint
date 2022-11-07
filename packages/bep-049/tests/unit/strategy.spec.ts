import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { GasCalculator, StateStore } from '@bearmint/bep-013'

import { makeStrategy } from '../../source/strategy.js'

describe<{
	subject: GasCalculator
	state: StateStore
}>('Fixed Gas Meter', () => {
	beforeEach((context) => {
		context.state = {
			getMilestone() {
				return {
					parameters: {
						modules: {
							mandatory: {
								'@bearmint/bep-049': {
									'*': {
										'@bearmint/known': {
											'*': 5,
										},
									},
								},
							},
						},
						transactions: {},
					},
				}
			},
		}

		context.subject = makeStrategy({
			CommittedState: context.state,
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
		})
	})

	it('should pass if the gas is an exact match', async (context) => {
		await expect(
			context.subject.execute(context.state, {
				checksum: { handler: '@bearmint/known' },
				data: {
					gas: BigInt(5),
				},
				type: 'known',
			}),
		).resolves.not.toThrow()
	})

	it('should fail if the milestone contains no gas configuration at all', async (context) => {
		await expect(() =>
			context.subject.execute(
				{
					getMilestone() {
						return {
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-049': {
											'*': {
												'@bearmint/known': {
													'*': undefined,
												},
											},
										},
									},
								},
								transactions: {},
							},
						}
					},
				},
				{ checksum: { handler: '@bearmint/known' }, type: 'known' },
			),
		).rejects.toThrow()
	})

	it('should fail if the milestone contains no gas configuration for a specific version', async (context) => {
		await expect(() =>
			context.subject.execute(
				{
					getMilestone() {
						return {
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-049': {
											'*': {
												'@bearmint/known': {
													'*': undefined,
												},
											},
										},
									},
								},
								transactions: {},
							},
						}
					},
				},
				{ checksum: { handler: 'known' }, type: 'unknown' },
			),
		).rejects.toThrow()
	})

	it('should fail if the gas is too low', async (context) => {
		await expect(() =>
			context.subject.execute(context.state, {
				checksum: { handler: '@bearmint/known' },
				data: {
					gas: BigInt(4),
				},
				type: 'known',
			}),
		).rejects.toThrow()
	})

	it('should fail if the gas is too high', async (context) => {
		await expect(() =>
			context.subject.execute(context.state, {
				checksum: { handler: '@bearmint/known' },
				data: {
					gas: BigInt(6),
				},
				type: 'known',
			}),
		).rejects.toThrow()
	})
})
