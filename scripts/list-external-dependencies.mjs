import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const BASE_PATH = join(fileURLToPath(new URL('.', import.meta.url)), '..', 'packages')
const DEVS_ONLY = ['bep4', 'bep5']
const WHITELIST = [
	'@bearmint',
	'@ethereumjs',
	'@noble',
	'@polkadot',
	'@scure',
	'@types',
	'ethereum-',
	'zod',
]

const directories = readdirSync(BASE_PATH, { withFileTypes: true })
	.filter((file) => file.isDirectory())
	.filter((directory) => !DEVS_ONLY.includes(directory.name))
	.map((directory) =>
		JSON.parse(readFileSync(join(BASE_PATH, directory.name, 'package.json')).toString()),
	)

const prod = new Set()
const devs = new Set()
for (const { dependencies, devDependencies } of directories) {
	if (dependencies) {
		for (const dependency of Object.keys(dependencies)) {
			if (WHITELIST.some((acceptable) => dependency.startsWith(acceptable))) {
				continue
			}

			prod.add(dependency)
		}
	}

	if (devDependencies) {
		for (const dependency of Object.keys(devDependencies)) {
			if (WHITELIST.some((acceptable) => dependency.startsWith(acceptable))) {
				continue
			}

			devs.add(dependency)
		}
	}
}

console.log({
	prod: [...prod].sort(),
	devs: [...devs].sort(),
})
