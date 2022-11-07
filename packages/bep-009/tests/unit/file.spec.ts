import { join } from 'node:path'

import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { dirname } from '../../source/directory.js'
import { file } from '../../source/file.js'

const STUB_PATH = join(dirname(), 'test')

describe('File', () => {
	it('should remove a file', () => {
		const STUB_FILE = join(STUB_PATH, 'remove.txt')

		file.ensure(STUB_FILE)

		expect(file.exists(STUB_FILE)).toBe(true)

		file.remove(STUB_FILE)

		expect(file.exists(STUB_FILE)).toBe(false)
	})

	it('should ensure a file', () => {
		const STUB_FILE = join(STUB_PATH, 'ensure-file.txt')

		file.remove(STUB_FILE)

		expect(file.exists(STUB_FILE)).toBe(false)

		file.ensure(STUB_FILE)

		expect(file.exists(STUB_FILE)).toBe(true)
	})

	it('should ensure a directory', () => {
		const STUB_FILE = join(dirname(), 'test-ensure')

		file.remove(STUB_FILE)

		expect(file.exists(STUB_FILE)).toBe(false)

		file.ensure(STUB_FILE)

		expect(file.exists(STUB_FILE)).toBe(true)
	})

	it('should write and read a JSON file', () => {
		const STUB_FILE = join(STUB_PATH, 'file.json')

		file.remove(STUB_FILE)

		file.ensure(STUB_FILE)

		file.writeJson(STUB_FILE, {})

		expect(file.readJson(STUB_FILE)).toStrictEqual({})

		file.remove(STUB_FILE)
	})

	it('should fail to read a JSON file', () => {
		expect(file.readJson(join(STUB_PATH, 'file.json'))).toBe(undefined)
	})
})
