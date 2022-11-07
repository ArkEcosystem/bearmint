import { lstatSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

function generatePackageTable() {
	const source = resolve(fileURLToPath(new URL('.', import.meta.url)), '../packages')

	const designations = readdirSync(source)
		.filter((name) => lstatSync(`${source}/${name}`).isDirectory())
		.sort((a, b) =>
			a.localeCompare(b, undefined, {
				numeric: true,
				sensitivity: 'base',
			}),
		)

	const items = []
	for (const designation of designations) {
		const { description, name } = JSON.parse(
			readFileSync(`${source}/${designation}/package.json`).toString(),
		)

		const nameShort = name.replace('@bearmint/', '')
		const namePadded = name.replace('@bearmint/bep-', '').padStart(3, '0')

		items.push([
			`[**${name}**](https://github.com/bearmint/bearmint/tree/main/packages/${nameShort})`,
			description
				.replace(`(https://bep.dev/${nameShort.replace('bep-', '')})`, '')
				.replace(
					nameShort.toUpperCase(),
					`[${nameShort.toUpperCase()}](https://bep.dev/${nameShort.replace('bep-', '')})`,
				)
				.trim(),
			`[![Release](https://badgen.net/npm/v/${name})](https://www.npmjs.com/package/${name})`,
		])
	}

	return items
		.map((item) => '| ' + item.join(' | ') + ' |')
		.join('\n')
		.trim()
}

const pattern = /<!-- MODULE-TABLE:START -->([\S\s]*?)<!-- MODULE-TABLE:END -->/
const content = readFileSync('MODULES.md').toString()

writeFileSync(
	'MODULES.md',
	content.replace(
		pattern.exec(content)[0],
		`<!-- MODULE-TABLE:START -->
| Name | Description | Release |
| ---- | ----------- | ------- |
${generatePackageTable()}
<!-- MODULE-TABLE:END -->`,
	),
)
