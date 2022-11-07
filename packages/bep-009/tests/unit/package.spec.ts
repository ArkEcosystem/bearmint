import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { readPackageJson } from '../../source/package.js'

describe('Package', () => {
	it('should read the package json', async () => {
		expect(readPackageJson(import.meta.url)).toBeTypeOf('object')
	})
})
