#!/usr/bin/env node
import { join } from 'node:path'

import { globby } from 'globby'
import meow from 'meow'

process.env.NODE_ENV = 'test'

const { flags } = meow({
	flags: {
		config: {
			type: 'string',
		},
	},
	importMeta: import.meta,
})

const { files } = (await import(join(process.cwd(), flags.config))).default
const tests = (await globby(files)).map((path) => join(process.cwd(), path))

for (const test of tests) {
	await import(test)
}
