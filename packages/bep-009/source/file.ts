import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, extname } from 'node:path'

import { assert } from './assert.js'

function remove(path: string) {
	if (existsSync(path) === true) {
		rmSync(path, { force: true, recursive: true })
	}
}

function read(path: string) {
	return readFileSync(path).toString()
}

function readJson<T>(path: string) {
	if (existsSync(path) === true) {
		return JSON.parse(readFileSync(path).toString()) as T
	}

	return undefined
}

function readJsonSafe<T = object>(path: string) {
	const result = readJson(path)

	assert.defined(result)

	return result as T
}

function write(path: string, data: string) {
	ensure(path)

	writeFileSync(path, data)
}

function writeJson(path: string, data: object) {
	write(path, JSON.stringify(data, undefined, 4))
}

function ensure(paths: string | string[]) {
	if (!Array.isArray(paths)) {
		paths = [paths]
	}

	for (const path of paths) {
		if (existsSync(path) === false) {
			mkdirSync(extname(path) !== '' ? dirname(path) : path, { recursive: true })

			if (extname(path) !== '') {
				writeFileSync(path, '')
			}
		}
	}
}

function exists(path: string) {
	return existsSync(path)
}

export const file = {
	ensure,
	exists,
	read,
	readJson,
	readJsonSafe,
	remove,
	write,
	writeJson,
}
