import { dot, file } from '@bearmint/bep-009'

import { CFG_PATH } from './constants.js'

export function getConfig<T = string>(key: string) {
	const result = dot.get<T>(file.readJsonSafe<object>(CFG_PATH), key)

	if (result === undefined) {
		throw new Error(`Failed to retrieve [${key}] from the configuration`)
	}

	return result
}
