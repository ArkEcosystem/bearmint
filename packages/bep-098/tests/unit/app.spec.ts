import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'

import { makeApplication } from '../../source/app.js'

describe('Application', () => {
	it('should create an instance with all bindings', () => {
		const container = makeContainer()

		expect(container.missing(ContainerType.Container)).toBeTrue()
		expect(container.missing(ContainerType.Application)).toBeTrue()
		expect(container.missing(ContainerType.ApplicationManifest)).toBeTrue()
		expect(container.missing(ContainerType.EventDispatcher)).toBeTrue()
		expect(container.missing(ContainerType.Logger)).toBeTrue()
		expect(container.missing(ContainerType.ServiceProviderRepository)).toBeTrue()

		expect(
			makeApplication(
				container,
				() => {},
				() => {
					return {
						warning() {
							//
						},
					}
				},
				() => {},
				{
					semanticVersion: '1.0.0',
					modules: [],
					name: 'Bearmint',
					protocolVersion: '1.0.0',
				},
			),
		).toBeTypeOf('object')

		expect(container.has(ContainerType.Container)).toBeTrue()
		expect(container.has(ContainerType.Application)).toBeTrue()
		expect(container.has(ContainerType.ApplicationManifest)).toBeTrue()
		expect(container.has(ContainerType.EventDispatcher)).toBeTrue()
		expect(container.has(ContainerType.Logger)).toBeTrue()
		expect(container.has(ContainerType.ServiceProviderRepository)).toBeTrue()
	})
})
