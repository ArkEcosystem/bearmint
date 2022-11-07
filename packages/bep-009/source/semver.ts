// @ts-expect-error
import semantic from 'semver'

import { assert } from './assert.js'

function safeCall(callback: CallableFunction): boolean {
	try {
		return callback()
	} catch {
		return false
	}
}

function valid(version: string) {
	return safeCall(() => semantic.valid(version) !== null)
}

function badRange(range: string) {
	return safeCall(() => semantic.validRange(range) === null)
}

function satisfies(version: string, range: string): boolean {
	if (range === '*') {
		return true
	}

	return safeCall(() => semantic.satisfies(version, range))
}

function dissatisfies(version: string, range: string): boolean {
	return !satisfies(version, range)
}

function lt(a: string, b: string) {
	return safeCall(() => semantic.lt(a, b))
}

function lte(a: string, b: string) {
	return safeCall(() => semantic.lte(a, b))
}

function eq(a: string, b: string) {
	return safeCall(() => semantic.eq(a, b))
}

function gt(a: string, b: string) {
	return safeCall(() => semantic.gt(a, b))
}

function gte(a: string, b: string) {
	return safeCall(() => semantic.gte(a, b))
}

function toNumber(version: string) {
	const [major, minor, patch] = version.split('.')

	return +[major, minor, patch]
		.map((item) => {
			assert.defined(item)

			return +item < 10 ? `0${item}` : item
		})
		.join('')
}

export const semver = {
	badRange,
	dissatisfies,
	eq,
	gt,
	gte,
	lt,
	lte,
	satisfies,
	toNumber,
	valid,
}
