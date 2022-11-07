import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { ServiceProvider } from '@bearmint/bep-013'

import { makeServiceProviderSkeleton } from '../../source/skeleton.js'

describe<{
	subject: ServiceProvider
}>('Service Provider', () => {
	beforeEach((context) => {
		context.subject = makeServiceProviderSkeleton(import.meta.url)
	})

	it('should create the foundation for a service provider', async (context) => {
		expect(await context.subject.boot()).toBeUndefined()
		expect(await context.subject.bootWhen()).toBeTypeOf('boolean')
		expect(context.subject.config()).toBeTypeOf('object')
		expect(context.subject.dependencies()).toStrictEqual([])
		expect(await context.subject.dispose()).toBeUndefined()
		expect(await context.subject.disposeWhen()).toBeTypeOf('boolean')
		expect(await context.subject.register()).toBeUndefined()
		expect(await context.subject.required()).toBeTypeOf('boolean')
		expect(context.subject.name()).toBeTypeOf('string')
		expect(context.subject.version()).toBeTypeOf('string')
	})
})
