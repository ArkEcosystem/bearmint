import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { assert as assertToTest } from '../../source/index.js'

describe('Assert', () => {
	it('.array', () => {
		expect(() => assertToTest.array('abc'), 'Expected value which is "array".').toThrow()
		expect(assertToTest.array([])).toBeUndefined()
	})

	it('.bigint', () => {
		expect(() => assertToTest.bigint('abc'), 'Expected value which is "bigint".').toThrow()
		expect(() => assertToTest.bigint(1), 'Expected value which is "bigint".').toThrow()
		expect(assertToTest.bigint(BigInt(1))).toBeUndefined()
	})

	it('.boolean', () => {
		expect(() => assertToTest.boolean('abc'), 'Expected value which is "boolean".').toThrow()
		expect(assertToTest.boolean(true)).toBeUndefined()
		expect(assertToTest.boolean(false)).toBeUndefined()
	})

	it('.buffer', () => {
		expect(() => assertToTest.buffer('abc'), 'Expected value which is "buffer".').toThrow()
		expect(assertToTest.buffer(Buffer.alloc(8))).toBeUndefined()
	})

	it('.defined', () => {
		expect(
			() => assertToTest.defined(undefined),
			'Expected value which is "non-null and non-undefined".',
		).toThrow()

		expect(
			() => assertToTest.defined(null),
			'Expected value which is "non-null and non-undefined".',
		).toThrow()

		expect(assertToTest.defined('abc')).toBeUndefined()
	})

	it('.number', () => {
		expect(() => assertToTest.number('abc'), 'Expected value which is "number".').toThrow()
		expect(assertToTest.number(1)).toBeUndefined()
	})

	it('.object', () => {
		expect(() => assertToTest.object('abc'), 'Expected value which is "object".').toThrow()
		expect(assertToTest.object({})).toBeUndefined()
	})

	it('.string', () => {
		expect(() => assertToTest.string(1), 'Expected value which is "string".').toThrow()
		expect(assertToTest.string('abc')).toBeUndefined()
	})

	it('.symbol', () => {
		expect(() => assertToTest.symbol('abc'), 'Expected value which is "symbol".').toThrow()
		expect(assertToTest.symbol(Symbol(1))).toBeUndefined()
	})

	it('.undefined', () => {
		expect(() => assertToTest.undefined('abc'), 'Expected value which is "undefined".').toThrow()
		expect(assertToTest.undefined(undefined)).toBeUndefined()
	})
})
