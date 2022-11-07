import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { hexToBytes, hexToJson, hexToNumber } from '../../source/hex.js'
import { jsonToHex } from '../../source/json.js'

describe('Hex', () => {
	it('should convert a hex string to a number', () => {
		expect(hexToNumber('00')).toEqual(0)
	})

	it('should convert a hex string to bytes', () => {
		expect(hexToBytes('00')).toEqual(Uint8Array.from(Buffer.from('00', 'hex')))
		expect(hexToBytes('0x000102')).toEqual(Uint8Array.from(Buffer.from('000102', 'hex')))
	})

	it('should convert JSON to a hex and back to JSON', () => {
		expect(hexToJson(jsonToHex({ key: 'value' }))).toEqual({ key: 'value' })
	})
})
