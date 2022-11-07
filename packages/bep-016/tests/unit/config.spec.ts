import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { ServiceProviderConfig } from '@bearmint/bep-013'

import { makeServiceProviderConfig } from '../../source/config.js'

describe<{
	subject: ServiceProviderConfig
}>('Service Provider Config', () => {
	beforeEach((context) => {
		context.subject = makeServiceProviderConfig()
	})

	it('should get, set and unset values', (context) => {
		expect(Object.keys(context.subject.all())).toHaveLength(0)
		expect(context.subject.has('key')).toBeFalse()

		context.subject.set('key', 'value')

		expect(context.subject.all()).toMatchSnapshot()
		expect(context.subject.has('key')).toBeTrue()
		expect(context.subject.get('key')).toStrictEqual('value')

		context.subject.unset('key')

		expect(context.subject.has('key')).toBeFalse()
		expect(Object.keys(context.subject.all())).toHaveLength(0)

		expect(() => context.subject.get('key')).toThrow()
		expect(context.subject.get('key', 'defaultValue')).toStrictEqual('defaultValue')
	})

	it('should merge multiple values', (context) => {
		expect(context.subject.has('key')).toBeFalse()

		context.subject.merge({ key: 'value' })

		expect(context.subject.has('key')).toBeTrue()
	})
})
