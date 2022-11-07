import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { LevelDB } from '../../source/level.js'

describe('LevelDB', () => {
	it('should return null for keys that are not set', async () => {
		const level = await LevelDB.make()

		expect(await level.get(Buffer.from('hello'))).toBeNull()
	})
})
