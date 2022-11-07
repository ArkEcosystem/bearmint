import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { ServiceProviderRepository } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'

import { makeServiceProviderRepository } from '../../source/repository.js'

describe<{
	subject: ServiceProviderRepository
}>('Service Provider Repository', () => {
	beforeEach((context) => {
		context.subject = makeServiceProviderRepository({
			Container: makeContainer(),
			EventDispatcher: {
				dispatch: () => {},
			},
		})
	})

	it('should return all service providers', async (context) => {
		expect(context.subject.all()).toBeInstanceOf(Map)
	})

	it('should return all service providers that have been loaded', async (context) => {
		expect(context.subject.allLoadedProviders()).toSatisfy((value) => Array.isArray(value))
	})

	it('should mark the given service provider as deferred', async (context) => {
		expect(context.subject.deferred('provider')).toBeFalse()

		context.subject.defer('provider')

		expect(context.subject.deferred('provider')).toBeTrue()
	})

	it('should mark the given service provider as failed', async (context) => {
		expect(context.subject.failed('provider')).toBeFalse()
		context.subject.fail('provider')
		expect(context.subject.failed('provider')).toBeTrue()
	})

	it('should mark the given service provider as loaded', async (context) => {
		expect(context.subject.loaded('provider')).toBeFalse()

		context.subject.load('provider')

		expect(context.subject.loaded('provider')).toBeTrue()
	})

	it('should get, set and see the given service provider', async (context) => {
		expect(context.subject.has('provider')).toBeFalse()

		context.subject.set('provider', {})

		expect(context.subject.has('provider')).toBeTrue()
		expect(context.subject.get('provider')).toBeTypeOf('object')
	})

	it('should register the given service provider', async (context) => {
		context.subject.set('provider', {
			config: () => {},
			register: () => {},
		})

		await context.subject.register('provider')
	})

	it('should boot the given service provider', async (context) => {
		expect(context.subject.loaded('provider')).toBeFalse()

		context.subject.set('provider', { boot: () => {} })

		await context.subject.boot('provider')

		expect(context.subject.loaded('provider')).toBeTrue()
	})

	it('should dispose the given service provider', async (context) => {
		expect(context.subject.loaded('provider')).toBeFalse()
		expect(context.subject.deferred('provider')).toBeFalse()

		context.subject.set('provider', { dispose: () => {} })

		await context.subject.dispose('provider')

		expect(context.subject.loaded('provider')).toBeFalse()
		expect(context.subject.deferred('provider')).toBeTrue()
	})
})
