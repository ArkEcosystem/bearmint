import { matcher } from 'matcher'

export function glob(inputs: string | readonly string[], patterns: string | readonly string[]) {
	return matcher(inputs, patterns)
}
