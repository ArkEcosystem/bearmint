/**
 * Based on https://github.com/sindresorhus/env-paths/blob/main/test.js
 * because we don't want to use ESM but also not use an old release.
 */

import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { environmentPaths } from '../../source/environment-paths.js'

describe('Environment Paths', () => {
	it('default', () => {
		const name = 'bearmint'
		const paths = environmentPaths(name)

		for (const value of Object.values(paths)) {
			expect(value.endsWith(`${name}-nodejs`)).toBe(true)
		}
	})

	it('should handle custom suffix', () => {
		const name = 'bearmint'
		const options = { suffix: 'horn' }
		const paths = environmentPaths(name, options.suffix)
		expect(paths.data.endsWith(`${name}-${options.suffix}`)).toBe(true)
	})

	it('should handle no suffix', () => {
		const name = 'bearmint'
		const paths = environmentPaths(name, '')
		expect(paths.data.endsWith(name)).toBe(true)
	})

	if (process.platform === 'linux') {
		it('should set correct paths with XDG_*_HOME', () => {
			const environmentVariables = {
				cache: 'XDG_CACHE_HOME',
				config: 'XDG_CONFIG_HOME',
				data: 'XDG_DATA_HOME',
				log: 'XDG_STATE_HOME',
			}

			for (const environment of Object.values(environmentVariables)) {
				process.env[environment] = `/tmp/${environment}`
			}

			const name = 'bearmint'
			const paths = environmentPaths(name)

			for (const environment of Object.keys(environmentVariables)) {
				const expectedPath = process.env[environmentVariables[environment]]
				expect(paths[environment].startsWith(expectedPath)).toBe(true)
				expect(paths[environment].endsWith(name)).toBe(true)
			}
		})
	}
})
