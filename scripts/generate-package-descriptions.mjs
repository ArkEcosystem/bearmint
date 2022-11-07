import { lstatSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const source = resolve(fileURLToPath(new URL('.', import.meta.url)), '../packages')

const designations = readdirSync(source)
	.filter((name) => lstatSync(`${source}/${name}`).isDirectory())
	.sort((a, b) =>
		a.localeCompare(b, undefined, {
			numeric: true,
			sensitivity: 'base',
		}),
	)

for (const designation of designations) {
	const content = JSON.parse(readFileSync(`${source}/${designation}/package.json`).toString())

	const name = content.name.split('/')[1].toUpperCase()

	writeFileSync(
		`${source}/${designation}/package.json`,
		JSON.stringify(
			{
				...content,
				description: `This library is the official reference implementation for ${name} (https://bep.dev/${name.replace(
					'BEP-',
					'',
				)})`,
			},
			undefined,
			'\t',
		),
	)
}
