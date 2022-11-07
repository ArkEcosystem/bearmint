import { isMatch } from 'super-regex'

import { assert } from './assert.js'

export function regexReplace(value: string, search: RegExp, replace: string) {
	const matches = value.match(search)

	if (matches !== null) {
		assert.defined(matches[0])

		return value.replace(matches[0], replace)
	}

	return value
}

export function regexMatch(value: string, pattern: string | RegExp, flags?: string | undefined) {
	// eslint-disable-next-line security/detect-non-literal-regexp
	return isMatch(new RegExp(pattern, flags), value, { timeout: 1000 })
}

export function regexMismatch(value: string, pattern: string | RegExp, flags?: string | undefined) {
	return regexMatch(value, pattern, flags) !== true
}
