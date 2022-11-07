import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { snakeCase } from '../../source/snake-case.js'

describe('Snake Case', () => {
	it('snakeCase', () => {
		expect(snakeCase('camelCase')).toBe('camel_case')
		expect(snakeCase('some text')).toBe('some_text')
		expect(snakeCase('kebab-case')).toBe('kebab_case')
		expect(snakeCase('some-mixed_string With spaces_underscores-and-hyphens')).toBe(
			'some_mixed_string_with_spaces_underscores_and_hyphens',
		)
		expect(snakeCase('AllThe-small Things')).toBe('all_the_small_things')
	})
})
