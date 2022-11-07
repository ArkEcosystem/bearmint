import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { camelCase, camelCaseKeys } from '../../source/camel-case.js'

describe('Camel Case', () => {
	it('camelCase', () => {
		expect(camelCase('')).toBe('')
		expect(camelCase('foo-bar')).toBe('fooBar')
		expect(camelCase('nested')).toBe('nested')
		expect(camelCase('unicorn_rainbow')).toBe('unicornRainbow')
	})

	it('camelCaseKeys', () => {
		expect(
			camelCaseKeys({
				block: {
					max_bytes: '22020096',
					max_gas: '-1',
					time_iota_ms: '1000',
				},
				evidence: {
					max_age_duration: '172800000000000',
					max_age_num_blocks: '100000',
					max_bytes: '1048576',
				},
				validator: {
					pub_key_types: ['ed25519'],
				},
				version: {
					app_version: '0',
				},
			}),
		).toStrictEqual({
			block: {
				maxBytes: '22020096',
				maxGas: '-1',
				timeIotaMs: '1000',
			},
			evidence: {
				maxAgeDuration: '172800000000000',
				maxAgeNumBlocks: '100000',
				maxBytes: '1048576',
			},
			validator: {
				pubKeyTypes: ['ed25519'],
			},
			version: {
				appVersion: '0',
			},
		})
	})
})
