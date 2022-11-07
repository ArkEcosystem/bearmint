import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { inRange, isPrime } from '../../source/numbers.js'

describe('Numbers', async () => {
	it('should determine if the number is within the given range', () => {
		expect(inRange(2, 1, 3)).toBe(true)
		expect(inRange(5, 1, 3)).toBe(false)
	})

	it('should determine if the number is a prime number', () => {
		expect(isPrime(2)).toBe(true)
		expect(isPrime(3)).toBe(true)
		expect(isPrime(5)).toBe(true)
		expect(isPrime(7)).toBe(true)
		expect(isPrime(11)).toBe(true)
		expect(isPrime(13)).toBe(true)
		expect(isPrime(17)).toBe(true)
		expect(isPrime(19)).toBe(true)
		expect(isPrime(23)).toBe(true)
		expect(isPrime(29)).toBe(true)

		expect(isPrime(1)).toBe(false)
		expect(isPrime(4)).toBe(false)
		expect(isPrime(6)).toBe(false)
		expect(isPrime(8)).toBe(false)
	})
})
