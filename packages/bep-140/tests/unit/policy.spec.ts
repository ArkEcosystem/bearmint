import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { makeContainer } from '@bearmint/bep-014'

import { makePolicy } from '../../source/policy.js'
import type { Policy } from '../../source/types.js'

describe<{ subject: Policy }>('BEP140', () => {
	beforeEach((context) => {
		context.subject = makePolicy({ Container: makeContainer() })
	})

	it('should pass', async (context) => {
		expect(await context.subject.allows()).toBeFalse()
		expect(await context.subject.denies()).toBeTrue()
	})
})
