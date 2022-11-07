import type { Paths } from '@bearmint/bep-013'
import envPaths from 'env-paths'

export function environmentPaths(name: string, suffix?: string | undefined): Paths {
	if (suffix === undefined) {
		return envPaths(name)
	}

	return envPaths(name, { suffix })
}
