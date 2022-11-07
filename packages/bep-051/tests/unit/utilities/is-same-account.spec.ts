import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { isSameAccount } from '../../../source/utilities/is-same-account.js'

describe('Same Account', () => {
	it('isSameAccount', async () => {
		expect(isSameAccount({ address: 'a' }, { address: 'a' })).toBeTrue()
		expect(isSameAccount({ address: 'a' }, { address: 'b' })).toBeFalse()
	})
})
