import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { getModuleMilestone } from '../../source/get-module-milestone.js'

describe('getModuleMilestone', () => {
	it('should always merge wildcard options', () => {
		expect(
			getModuleMilestone(
				{},
				{
					getMilestone() {
						return {
							blockNumber: '1',
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-042': {
											'*': {
												prefix: 'bear',
											},
										},
									},
								},
							},
						}
					},
				},
				'@bearmint/bep-042',
				'1.3.0',
			),
		).toStrictEqual({
			prefix: 'bear',
		})
	})

	it('should merge options for literal version if no wildcards are specified', () => {
		expect(
			getModuleMilestone(
				{},
				{
					getMilestone() {
						return {
							blockNumber: '1',
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-042': {
											'>=1.3.0': {
												length: 32,
												prefix: 'deer',
												random: true,
											},
											'=1.4.0': {
												length: 48,
												prefix: 'bark',
											},
											'=1.5.0': {
												length: 64,
												prefix: 'bork',
											},
										},
									},
								},
							},
						}
					},
				},
				'@bearmint/bep-042',
				'1.4.0',
			),
		).toStrictEqual({
			length: 48,
			prefix: 'bark',
			random: true,
		})
	})

	it('should merge options up to the supported literal version', () => {
		expect(
			getModuleMilestone(
				{},
				{
					getMilestone() {
						return {
							blockNumber: '1',
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-042': {
											'*': {
												prefix: 'bear',
											},
											'>=1.3.0': {
												length: 32,
												prefix: 'deer',
												random: true,
											},
											'=1.4.0': {
												length: 48,
												prefix: 'bark',
											},
											'=1.5.0': {
												length: 64,
												prefix: 'bork',
											},
										},
									},
								},
							},
						}
					},
				},
				'@bearmint/bep-042',
				'1.4.0',
			),
		).toStrictEqual({
			length: 48,
			prefix: 'bark',
			random: true,
		})
	})

	it('should merge options up to the supported constrained version', () => {
		expect(
			getModuleMilestone(
				{},
				{
					getMilestone() {
						return {
							blockNumber: '1',
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-042': {
											'*': {
												prefix: 'bear',
											},
											'>=1.3.0': {
												length: 32,
												prefix: 'deer',
												random: true,
											},
											'>=1.4.0': {
												length: 48,
												prefix: 'bark',
											},
											'>=1.5.0': {
												length: 64,
												prefix: 'bork',
											},
										},
									},
								},
							},
						}
					},
				},
				'@bearmint/bep-042',
				'1.4.0',
			),
		).toStrictEqual({
			length: 48,
			prefix: 'bark',
			random: true,
		})
	})

	it('should merge deep nested properties', () => {
		expect(
			getModuleMilestone(
				{},
				{
					getMilestone() {
						return {
							blockNumber: '1',
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-042': {
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
											'>=1.3.0': {
												count: {
													validators: {
														max: 2,
													},
												},
												range: {
													power: {
														max: 3,
													},
												},
											},
											'>=1.5.0': {
												mode: 'delegated',
											},
										},
									},
								},
							},
						}
					},
				},
				'@bearmint/bep-042',
				'1.4.0',
			),
		).toStrictEqual({
			count: {
				validators: {
					max: 2,
					min: 1,
				},
			},
			mode: 'standard',
			range: {
				power: {
					max: 3,
					min: 1,
				},
			},
		})
	})

	it('should use the implicit service provider version if no explicit version is specified', () => {
		expect(
			getModuleMilestone(
				{
					get() {
						return {
							version() {
								return '1.3.0'
							},
						}
					},
				},
				{
					getMilestone() {
						return {
							blockNumber: '1',
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-042': {
											'*': {
												prefix: 'bear',
											},
											'=1.3.0': {
												prefix: 'deer',
											},
										},
									},
								},
							},
						}
					},
				},
				'@bearmint/bep-042',
			),
		).toStrictEqual({
			prefix: 'deer',
		})
	})

	it('should ignore version-specific options if the version is a wildcard', () => {
		expect(
			getModuleMilestone(
				{},
				{
					getMilestone() {
						return {
							blockNumber: '1',
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-042': {
											'*': {
												prefix: 'bear',
											},
											'=1.3.0': {
												prefix: 'deer',
											},
										},
									},
								},
							},
						}
					},
				},
				'@bearmint/bep-042',
				'*',
			),
		).toStrictEqual({
			prefix: 'bear',
		})
	})

	it('should throw if no options are specified', () => {
		expect(() =>
			getModuleMilestone(
				{},
				{
					getMilestone() {
						return {
							blockNumber: '1',
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-042': {},
									},
								},
							},
						}
					},
				},
				'@bearmint/bep-042',
				'*',
			),
		).toThrow(
			'Failed to retrieve service provider configuration from milestone by version or wildcard.',
		)
	})

	it('should overwrite arrays instead of merging them', () => {
		const milestone = {
			getMilestone() {
				return {
					blockNumber: '1',
					parameters: {
						modules: {
							mandatory: {
								'@bearmint/bep-042': {
									'1.0.0': {
										key: ['bear', 'mint', 'fire', 'seed', 'gold'],
									},
									'1.1.0': {
										key: ['bear', 'mint', 'fire', 'seed'],
									},
									'1.2.0': {
										key: ['bear', 'mint', 'fire'],
									},
									'1.3.0': {
										key: ['bear', 'mint'],
									},
									'1.4.0': {
										key: ['bear'],
									},
								},
							},
						},
					},
				}
			},
		}

		expect(getModuleMilestone({}, milestone, '@bearmint/bep-042', '1.0.0')).toStrictEqual({
			key: ['bear', 'mint', 'fire', 'seed', 'gold'],
		})

		expect(getModuleMilestone({}, milestone, '@bearmint/bep-042', '1.1.0')).toStrictEqual({
			key: ['bear', 'mint', 'fire', 'seed'],
		})

		expect(getModuleMilestone({}, milestone, '@bearmint/bep-042', '1.2.0')).toStrictEqual({
			key: ['bear', 'mint', 'fire'],
		})

		expect(getModuleMilestone({}, milestone, '@bearmint/bep-042', '1.3.0')).toStrictEqual({
			key: ['bear', 'mint'],
		})

		expect(getModuleMilestone({}, milestone, '@bearmint/bep-042', '1.4.0')).toStrictEqual({
			key: ['bear'],
		})
	})
})
