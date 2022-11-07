import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { Container } from '@bearmint/bep-013'

import { makeContainer } from '../../source/index.js'

describe<{
	subject: Container
}>('Container', () => {
	beforeEach((context) => {
		context.subject = makeContainer()
	})

	it('should bind a class', (context) => {
		expect(context.subject.missing('hello')).toBeTrue()

		context.subject.bindClass('hello', class Hello {})

		expect(context.subject.has('hello')).toBeTrue()
		expect(typeof context.subject.resolve('hello') === 'object').toBeTrue()
	})

	it('should bind a constant value', (context) => {
		expect(context.subject.missing('hello')).toBeTrue()

		context.subject.bindValue('hello', 'world')

		expect(context.subject.has('hello')).toBeTrue()
		expect(typeof context.subject.resolve('hello') === 'string').toBeTrue()
	})

	it('should bind a function', (context) => {
		expect(context.subject.missing('hello')).toBeTrue()

		context.subject.bindFunction('hello', () => 'world')

		expect(context.subject.has('hello')).toBeTrue()
		expect(context.subject.resolve('hello')).toStrictEqual('world')
	})

	it('should bind a singleton class', (context) => {
		expect(context.subject.missing('hello')).toBeTrue()

		context.subject.bindClassSingleton('hello', class World {})

		expect(context.subject.has('hello')).toBeTrue()
		expect(typeof context.subject.resolve('hello') === 'object').toBeTrue()
	})

	it('should bind a singleton function', (context) => {
		expect(context.subject.missing('hello')).toBeTrue()

		context.subject.bindFunctionSingleton('hello', () => 'world')

		expect(context.subject.has('hello')).toBeTrue()
		expect(context.subject.resolve('hello')).toStrictEqual('world')
	})

	it('should build a class', (context) => {
		class Hello {
			public world(): string {
				return 'Hello, World!'
			}
		}

		expect(context.subject.build(Hello).world()).toStrictEqual('Hello, World!')
	})

	it('should build a function', (context) => {
		function Hello() {
			return {
				world(): string {
					return 'Hello, World!'
				},
			}
		}

		expect(context.subject.build(Hello).world()).toStrictEqual('Hello, World!')
	})
})
