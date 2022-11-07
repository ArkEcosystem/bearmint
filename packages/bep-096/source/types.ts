import { readPackageJson } from '@bearmint/bep-009'

const { name } = readPackageJson(import.meta.url)

export const Config = `${name}/config`

export interface Hook {
	events: string[]
	host: string
	token: string
}
