import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { makeContainer } from '@bearmint/bep-014'
import { makeStrategyRegistry } from '@bearmint/bep-146'
import { makeAddressFactory } from '@bearmint/bep-042'

import { makeServiceProvider } from '../../source/service-provider.js'

import { ContainerType } from '@bearmint/bep-013'

describe('Service Provider', () => {
	it('should register the service implementations and resolve them via dynamic functions', async (context) => {
		const Container = makeContainer()
		const StrategyRegistry = makeStrategyRegistry({ Container })

		Container.bindValue(ContainerType.Container, Container)
		Container.bindValue(ContainerType.CommittedState, {
			getMilestone() {
				return {
					blockNumber: 1,
					parameters: {
						modules: {
							mandatory: {
								'@bearmint/bep-038': {
									'*': {
										strategy: '@bearmint/bep-042',
									},
								},
							},
						},
					},
				}
			},
		})
		Container.bindValue(ContainerType.ServiceProviderRepository, {
			get() {
				return {
					version() {
						return '1.0.0'
					},
				}
			},
		})
		Container.bindValue(ContainerType.StrategyRegistry, StrategyRegistry)

		await makeServiceProvider({ Container }).register()

		StrategyRegistry.set('@bearmint/bep-038', '@bearmint/bep-042', {
			makeAddressFactory,
		})

		expect(Container.has(ContainerType.AddressFactory)).toBeTrue()
		expect(Container.resolve(ContainerType.AddressFactory)).toBeTypeOf('object')
	})
})
