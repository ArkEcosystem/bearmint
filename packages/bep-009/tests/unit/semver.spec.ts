import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { semver } from '../../source/semver.js'

describe('semver.toNumber', () => {
	it('should convert the patch number properly', () => {
		expect(0).toBe(semver.toNumber('0.0.0'))
		expect(1).toBe(semver.toNumber('0.0.1'))
		expect(10).toBe(semver.toNumber('0.0.10'))
		expect(11).toBe(semver.toNumber('0.0.11'))
		expect(99).toBe(semver.toNumber('0.0.99'))
	})

	it('should convert the minor number properly', () => {
		expect(100).toBe(semver.toNumber('0.1.0'))
		expect(1000).toBe(semver.toNumber('0.10.0'))
		expect(1100).toBe(semver.toNumber('0.11.0'))
		expect(9900).toBe(semver.toNumber('0.99.0'))
	})

	it('should convert the major number properly', () => {
		expect(10_000).toBe(semver.toNumber('1.0.0'))
		expect(100_000).toBe(semver.toNumber('10.0.0'))
		expect(110_000).toBe(semver.toNumber('11.0.0'))
		expect(990_000).toBe(semver.toNumber('99.0.0'))
	})

	it('should pad each part (major, minor, patch) to two digits', () => {
		expect(202).toBe(semver.toNumber('0.2.2'))
		expect(20_202).toBe(semver.toNumber('2.2.2'))
		expect(121_212).toBe(semver.toNumber('12.12.12'))
	})
})

describe('Semantic Version', () => {
	it('lt', () => {
		expect(semver.lt('0.9.0', '1.0.0')).toBe(true)
		expect(semver.lt('2.0.0', '1.0.0')).toBe(false)
	})

	it('lte', () => {
		expect(semver.lte('0.9.0', '1.0.0')).toBe(true)
		expect(semver.lte('1.0.0', '1.0.0')).toBe(true)
		expect(semver.lte('2.0.0', '1.0.0')).toBe(false)
	})

	it('eq', () => {
		expect(semver.eq('1.0.0', '1.0.0')).toBe(true)
		expect(semver.eq('1.0.0', '2.0.0')).toBe(false)
	})

	it('gt', () => {
		expect(semver.gt('2.0.0', '1.0.0')).toBe(true)
		expect(semver.gt('1.0.0', '2.0.0')).toBe(false)
	})

	it('gte', () => {
		expect(semver.gte('3.0.0', '2.0.0')).toBe(true)
		expect(semver.gte('2.0.0', '2.0.0')).toBe(true)
		expect(semver.gte('1.0.0', '2.0.0')).toBe(false)
	})

	it('satisfies', () => {
		expect(semver.satisfies('0.0.0', '>=0.0.0')).toBe(true)
		expect(semver.satisfies('3.0.0', '*')).toBe(true)
		expect(semver.satisfies('3.0.0', '>=2.0.0')).toBe(true)
		expect(semver.satisfies('2.0.0', '>=2.0.0')).toBe(true)
		expect(semver.satisfies('1.0.0', '>=2.0.0')).toBe(false)
	})
})
