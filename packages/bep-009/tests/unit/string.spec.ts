import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { stringToBytes } from '../../source/string.js'

describe('String', () => {
	it('should convert a string to bytes', () => {
		expect(stringToBytes('Hello, World!')).toBeInstanceOf(Uint8Array)
	})
})
