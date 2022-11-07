import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { decimalsToPower } from '../../source/utils.js'

describe('Utilities', () => {
	it('should turn decimals to power', () => {
		expect(decimalsToPower(8).toString()).toStrictEqual(`1${'0'.repeat(8)}`)
		expect(decimalsToPower(16).toString()).toStrictEqual(`1${'0'.repeat(16)}`)
		expect(decimalsToPower(32).toString()).toStrictEqual(`1${'0'.repeat(32)}`)
		expect(decimalsToPower(64).toString()).toStrictEqual(`1${'0'.repeat(64)}`)
		expect(decimalsToPower(128).toString()).toStrictEqual(`1${'0'.repeat(128)}`)
		expect(decimalsToPower(256).toString()).toStrictEqual(`1${'0'.repeat(256)}`)
		expect(decimalsToPower(512).toString()).toStrictEqual(`1${'0'.repeat(512)}`)
		expect(decimalsToPower(1024).toString()).toStrictEqual(`1${'0'.repeat(1024)}`)
	})
})
