import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makeEcho } from '../../../source/connections/echo.js'

describe('Echo', () => {
	it('should respond without any errors', async () => {
		expect(
			await makeEcho().execute({
				message: 'hello',
			}),
		).toStrictEqual({
			message: 'hello',
		})
	})
})
