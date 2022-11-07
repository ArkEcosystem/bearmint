import { existsSync, rmSync } from 'node:fs'
import { join } from 'node:path'

import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { dirname } from '@bearmint/bep-009'
import { ClassicLevel } from 'classic-level'

import { LevelDB } from '../../source/level.js'

describe('LevelDB', () => {
	it('should return the entries from oldest to newest', async () => {
		const path = join(dirname(), './db')

		if (existsSync(path)) {
			rmSync(path, { recursive: true })
		}

		const level = new LevelDB(new ClassicLevel(path).sublevel('sub', { valueEncoding: 'json' }))

		const expectedKeys = [
			[await level.put({ time: 1 }), 1],
			[await level.put({ time: 2 }), 2],
			[await level.put({ time: 3 }), 3],
			[await level.put({ time: 4 }), 4],
			[await level.put({ time: 5 }), 5],
		]

		const actualKeys = []

		for (const { key, value } of await level.all()) {
			actualKeys.push([key, value.time])
		}

		expect(actualKeys).toStrictEqual(expectedKeys)
	})
})
