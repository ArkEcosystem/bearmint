import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { numberToHex } from '../../source/number.js'

describe('Number', () => {
	it('should convert a number to a hex string', () => {
		expect(numberToHex(0)).toBe('00')
	})
})
