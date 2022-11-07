import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { BN } from '../../source/big-number.js'

describe('BigNumber', async () => {
	it('#toString should succeed when input is provided as string', () => {
		expect(BigInt('0').toString()).toBe('0')
		expect(BigInt('1').toString()).toBe('1')
	})

	it('#toString should succeed when input is provided as number', () => {
		expect(BigInt(0).toString()).toBe('0')
		expect(BigInt(1).toString()).toBe('1')
	})

	it('#toString should succeed when input is provided as bigint', () => {
		expect(BigInt(0).toString()).toBe('0')
		expect(BigInt(1).toString()).toBe('1')
		expect(BigInt(10).toString()).toBe('10')
		expect(BigInt(1_234_567_890).toString()).toBe('1234567890')
	})

	it('#toString should succeed when input is provided as BigNumber', () => {
		expect(BigInt(1).toString()).toBe('1')
	})

	it('#sum', () => {
		expect(BN.sum([BigInt(1), 1, '2', 3, 5]).toString()).toBe('12')
	})

	it('#comparedTo', () => {
		expect(BN.comparedTo(BigInt(1), BigInt(1))).toBe(0)
		expect(BN.comparedTo(BigInt(1), BigInt(0))).toBe(1)
		expect(BN.comparedTo(BigInt(1), BigInt(-1))).toBe(1)
		expect(BN.comparedTo(BigInt(1), BigInt(2))).toBe(-1)
	})

	it('#difference', () => {
		expect(BN.difference(BigInt(1), BigInt(1)).toString()).toBe('0')
		expect(BN.absolute(BN.difference(BigInt(1), BigInt(1))).toString()).toBe('0')
		expect(BN.difference(BigInt(1), BigInt(2)).toString()).toBe('-1')
		expect(BN.absolute(BN.difference(BigInt(1), BigInt(2))).toString()).toBe('1')
	})

	it('#isBetween', () => {
		expect(BN.isBetween(BigInt(1), BigInt(0), BigInt(0))).toBe(true)
		expect(BN.isBetween(BigInt(1), BigInt(0), BigInt(1))).toBe(true)
		expect(BN.isBetween(BigInt(1), BigInt(1), BigInt(1))).toBe(true)
		expect(BN.isBetween(BigInt(1), BigInt(1), BigInt(2))).toBe(true)
		expect(BN.isBetween(BigInt(1), BigInt(2), BigInt(3))).toBe(false)
	})

	it('#isForbidden', () => {
		expect(BN.isForbidden(BigInt(-1))).toBe(true)
		expect(BN.isForbidden(BigInt(-0))).toBe(true)
		expect(BN.isForbidden(BigInt(0))).toBe(true)
		expect(BN.isForbidden(BigInt(1))).toBe(false)
	})

	it('#toFixed', () => {
		expect(BN.toFixed(BigInt(1))).toBe('1')
		expect(BN.toFixed(BigInt(123_456))).toBe('123456')
	})

	it('#toJSON', () => {
		expect(BN.toJSON(BigInt(1))).toBe('1')
	})

	it('#toBytes', () => {
		expect(BN.toBytes(BigInt(1)).toString('hex')).toBe('0000000000000001')
	})

	it('#sumBy', () => {
		expect(BN.sumBy([{ value: 1 }, { value: 2 }, { value: 3 }], 'value').toString()).toBe('6')
	})
})
