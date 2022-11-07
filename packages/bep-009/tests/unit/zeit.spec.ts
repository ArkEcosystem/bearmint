/**
 * Based on https://github.com/sindresorhus/env-paths/blob/main/test.js
 * because we don't want to use ESM but also not use an old release.
 */

import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
// @ts-expect-error
import dayjs from 'dayjs'

import { zeit } from '../../source/zeit.js'

describe('Zeit', () => {
	it('diffInSeconds (plus)', () => {
		expect([4, 5].includes(zeit.diffInSeconds(dayjs().add(5, 'seconds').unix()))).toBe(true)
	})

	it('diffInSeconds (minus)', () => {
		expect(zeit.diffInSeconds(dayjs().subtract(5, 'seconds').unix())).toBe(-5)
	})

	it('diffInMinutes (plus)', () => {
		expect([4, 5].includes(zeit.diffInMinutes(dayjs().add(5, 'minutes').unix()))).toBe(true)
	})

	it('diffInMinutes (minus)', () => {
		expect(zeit.diffInMinutes(dayjs().subtract(5, 'minutes').unix())).toBe(-5)
	})

	it('diffInHours (plus)', () => {
		expect([4, 5].includes(zeit.diffInHours(dayjs().add(5, 'hours').unix()))).toBe(true)
	})

	it('diffInHours (minus)', () => {
		expect(zeit.diffInHours(dayjs().subtract(5, 'hours').unix())).toBe(-5)
	})

	it('isFuture', () => {
		expect(zeit.isFuture(dayjs().add(1, 'hour').unix())).toBe(true)
		expect(zeit.isFuture(dayjs().subtract(1, 'hour').unix())).toBe(false)
	})

	it('isPast', () => {
		expect(zeit.isPast(dayjs().subtract(1, 'hour').unix())).toBe(true)
		expect(zeit.isPast(dayjs().add(1, 'hour').unix())).toBe(false)
	})

	it('toUnix', () => {
		expect(zeit.toUnix()).toBeTypeOf('number')
	})
})
