import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { bytesConcat, bytesToBase64, bytesToHex, bytesToNumber } from '../../source/bytes.js'
import { stringToBytes } from '../../source/string.js'

describe('Uint8Array', () => {
	it('should convert a Uint8Array to a number', () => {
		expect(bytesToNumber(Uint8Array.from([0, 1, 2]))).toBe(0)
	})

	it('should convert a Uint8Array to a hex string', () => {
		expect(bytesToHex(Uint8Array.from([0, 1, 2]))).toBe('000102')
	})

	it('should convert a buffer to a base64 string', () => {
		expect(bytesToBase64(stringToBytes('Hello, World!'))).toBe('SGVsbG8sIFdvcmxkIQ==')
	})

	it('should convert a buffer to a base64 string', () => {
		expect(
			bytesToBase64(
				bytesConcat([stringToBytes('Hello,'), stringToBytes(' '), stringToBytes('World!')]),
			),
		).toBe('SGVsbG8sIFdvcmxkIQ==')
	})
})
