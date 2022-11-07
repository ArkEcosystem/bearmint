import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { regexMatch, regexMismatch, regexReplace } from '../../source/regex.js'

describe('RegEx', () => {
	it('should replace all numbers', () => {
		expect(regexReplace('Hello123', /\d+/, '')).toBe('Hello')
		expect(regexReplace('Hello', /\d+/, '')).toBe('Hello')
	})

	it('should determine if the string is a match', () => {
		expect(regexMatch('Hello123', /\d+/, 'g')).toBe(true)
		expect(regexMatch('Hello', /\d+/, 'g')).toBe(false)
	})

	it('should determine if the string is a mismatch', () => {
		expect(regexMismatch('Hello', /\d+/, 'g')).toBe(true)
		expect(regexMismatch('Hello123', /\d+/, 'g')).toBe(false)
	})
})
