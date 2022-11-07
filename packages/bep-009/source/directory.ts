import { fileURLToPath } from 'node:url'

export function dirname(path?: string) {
	return fileURLToPath(new URL('.', path ?? import.meta.url))
}
