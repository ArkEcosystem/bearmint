import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import {
	makeKeyPairFactory,
	makePrivateKeyFactory,
	makePublicKeyFactory,
	makeSignatureFactory,
} from '@bearmint/bep-033'
import { makeStrategyRegistry } from '@bearmint/bep-146'

import { makeServiceProvider } from '../../source/service-provider.js'

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
								'@bearmint/bep-030': {
									'*': {
										strategy: '@bearmint/bep-032',
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

		StrategyRegistry.set('@bearmint/bep-030', '@bearmint/bep-032', {
			makeKeyPairFactory,
			makePrivateKeyFactory,
			makePublicKeyFactory,
			makeSignatureFactory,
		})

		expect(Container.has(ContainerType.KeyPairFactory)).toBeTrue()
		expect(Container.resolve(ContainerType.KeyPairFactory)).toBeTypeOf('object')

		expect(Container.has(ContainerType.PrivateKeyFactory)).toBeTrue()
		expect(Container.resolve(ContainerType.PrivateKeyFactory)).toBeTypeOf('object')

		expect(Container.has(ContainerType.PublicKeyFactory)).toBeTrue()
		expect(Container.resolve(ContainerType.PublicKeyFactory)).toBeTypeOf('object')

		expect(Container.has(ContainerType.SignatureFactory)).toBeTrue()
		expect(Container.resolve(ContainerType.SignatureFactory)).toBeTypeOf('object')
	})
})
