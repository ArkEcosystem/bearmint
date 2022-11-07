import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { dot } from '../../source/dot-property.js'

describe('Dot Property', () => {
	it('should get nested properties', () => {
		expect(dot.get({ a: { b: { c: 'd' } } }, 'a.b.c')).toBe('d')
		expect(dot.get({ a: { b: { c: 'd' } } }, '')).toBeUndefined()
		expect(dot.get({ a: { b: { c: undefined } } }, 'b', 'defaultValue')).toBe('defaultValue')
	})

	it('should set nested properties', () => {
		const object = {}

		dot.set(object, 'a.b.c', 'd')

		expect(dot.get(object, 'a.b.c')).toStrictEqual('d')
	})

	it('should forget nested properties', () => {
		const object = {}

		expect(dot.has(object, 'a.b.c')).toBe(false)

		dot.set(object, 'a.b.c', 'd')

		expect(dot.has(object, 'a.b.c')).toBe(true)

		dot.forget(object, 'a.b.c')

		expect(dot.has(object, 'a.b.c')).toBe(false)
	})
})
