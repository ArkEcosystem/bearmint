import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { Container, TxExecutorRegistry } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeVersionedRegistryFactory } from '@bearmint/bep-146'

import { makeTxExecutorRegistry } from '../../source/registry.js'

describe<{
	container: Container
	handler: object
	subject: TxExecutorRegistry
}>('Tx Handler Registry', () => {
	beforeEach((context) => {
		context.container = makeContainer()
		context.handler = {}

		context.subject = makeTxExecutorRegistry({
			Container: context.container,
			VersionedRegistryFactory: makeVersionedRegistryFactory({ Container: context.container }),
		})
	})

	it('should set a handler', (context) => {
		expect(() => context.subject.set('handler', 'version', () => context.handler)).not.toThrow()
		expect(() => context.subject.set('handler', 'version', () => context.handler)).toThrow()
	})

	it('should get a handler', (context) => {
		expect(() => context.subject.get('handler', 'version')).toThrow()

		context.subject.set('handler', 'version', () => context.handler)

		expect(context.subject.get('handler', 'version')).toBeTypeOf('object')
	})

	it('should get all handlers', (context) => {
		expect(Object.keys(context.subject.all())).toHaveLength(0)

		context.subject.set('handler', 'version', () => context.handler)

		expect(Object.keys(context.subject.all())).toHaveLength(1)
	})

	it('should forget a handler', (context) => {
		expect(Object.keys(context.subject.all())).toHaveLength(0)

		expect(() => context.subject.forget('handler', 'version')).toThrow()

		expect(Object.keys(context.subject.all())).toHaveLength(0)

		context.subject.set('handler', 'version', () => context.handler)

		expect(Object.keys(context.subject.all())).toHaveLength(1)

		context.subject.forget('handler', 'version')

		expect(Object.keys(context.subject.all())).toHaveLength(0)
	})
})
