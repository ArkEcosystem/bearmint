import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import {
	isBigInt,
	isBuffer,
	isCryptography,
	isFalsy,
	isFunction,
	isHex,
	isMap,
	isNumber,
	isSet,
	isString,
	isTruthy,
	isUint8Array,
	isURL,
} from '../../source/is.js'

describe('is', () => {
	it('should determine if a value is Buffer', () => {
		expect(isBuffer(Buffer.alloc(0))).toBe(true)
		expect(isBuffer(Uint8Array.from([0]))).toBe(false)
		expect(isBuffer(undefined)).toBe(false)
		expect(isBuffer({ type: undefined })).toBe(false)
		expect(isBuffer({ type: 'uffer' })).toBe(false)
	})

	it('should determine if a value is Uint8Array', () => {
		expect(isUint8Array(new Uint8Array())).toBe(true)
		expect(isUint8Array(Buffer.alloc(0))).toBe(true)
		expect(isUint8Array(false)).toBe(false)
	})

	it('should determine if a value is Map', () => {
		expect(isMap(new Map())).toBe(true)
		expect(isMap(new Set())).toBe(false)
	})

	it('should determine if a value is Set', () => {
		expect(isSet(new Set())).toBe(true)
		expect(isSet(new Map())).toBe(false)
	})

	it('should determine if a value is BigInt', () => {
		expect(isBigInt(0n)).toBe(true)
		expect(isBigInt(0)).toBe(false)
	})

	it('should determine if a value is Cryptography', () => {
		expect(isCryptography({ verify: console.log })).toBe(true)
		expect(isCryptography(false)).toBe(false)
	})

	it('should determine if a value is Number', () => {
		expect(isNumber(0)).toBe(true)
		expect(isNumber(false)).toBe(false)
	})

	it('should determine if a value is String', () => {
		expect(isString('')).toBe(true)
		expect(isString(false)).toBe(false)
	})

	it('should determine if a value is Function', () => {
		expect(isFunction(console.log)).toBe(true)
		expect(isFunction(false)).toBe(false)
	})

	it('should determine if a value is Falsy', () => {
		expect(isFalsy(false)).toBe(true)
		expect(isFalsy('')).toBe(true)
		expect(isFalsy(0)).toBe(true)
		expect(isFalsy(null)).toBe(true)
		expect(isFalsy(undefined)).toBe(true)
		expect(isFalsy(0n)).toBe(true)
		expect(isFalsy(true)).toBe(false)
	})

	it('should determine if a value is Truthy', () => {
		expect(isTruthy(true)).toBe(true)
		expect(isTruthy('a')).toBe(true)
		expect(isTruthy(false)).toBe(false)
		expect(isTruthy('')).toBe(false)
		expect(isTruthy(0)).toBe(false)
		expect(isTruthy(null)).toBe(false)
		expect(isTruthy(undefined)).toBe(false)
		expect(isTruthy(0n)).toBe(false)
	})

	it('should determine if a string is hex', () => {
		expect(isHex('deadbeef')).toBe(true)
		expect(isHex('SGVsbG8gV29ybGQ=')).toBe(false)
		expect(isHex('bear1p7faktss2evuy6y2rpth9ad98jl3j4c083g2lflffujl74fga4qs3q5ca2')).toBe(false)
		expect(isHex([1, 2, 3])).toBe(false)
	})

	it('should determine if a string is hex', () => {
		expect(isURL('https://google.com')).toBe(true)
		expect(isURL(undefined)).toBe(false)
		expect(isURL('deadbeef')).toBe(false)
		expect(isURL('SGVsbG8gV29ybGQ=')).toBe(false)
		expect(isURL('bear1p7faktss2evuy6y2rpth9ad98jl3j4c083g2lflffujl74fga4qs3q5ca2')).toBe(false)
		expect(isURL([1, 2, 3])).toBe(false)
	})
})
