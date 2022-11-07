import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import {
	bufferToBase64,
	bufferToBytes,
	bufferToHex,
	bufferToJson,
	bufferToString,
} from '../../source/buffer.js'
import { jsonToBytes } from '../../source/json.js'
import { stringToBytes } from '../../source/string.js'

describe('Buffer', () => {
	it('should convert a hex string to bytes', () => {
		expect(bufferToHex(Buffer.from('00', 'hex'))).toBe('00')
	})

	it('should convert a buffer to an Uint8Array', () => {
		expect(bufferToBytes(Buffer.from([0, 1, 2]))).toStrictEqual(
			Uint8Array.from(Buffer.from([0, 1, 2])),
		)
	})

	it('should convert a string to bytes', () => {
		expect(bufferToString(Buffer.from(stringToBytes('Hello, World!')))).toBe('Hello, World!')
	})

	it('should convert a buffer to a base64 string', () => {
		expect(bufferToBase64(Buffer.from('Hello, World!'))).toBe('SGVsbG8sIFdvcmxkIQ==')
	})

	it('should convert JSON to bytes and back to JSON', () => {
		expect(bufferToJson(Buffer.from(jsonToBytes({ key: 'value' })))).toStrictEqual({ key: 'value' })
	})
})
