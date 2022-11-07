// eslint-disable-next-line unicorn/import-style
import { resolve } from 'path'

import { dirname } from './directory.js'
import { file } from './file.js'

export function readPackageJson(path: string): { name: string; version: string } {
	try {
		// Root Module?
		return JSON.parse(file.read(resolve(dirname(path), '../package.json')))
	} catch {
		// Sub Module?
		return JSON.parse(file.read(resolve(dirname(path), './package.json')))
	}
}
