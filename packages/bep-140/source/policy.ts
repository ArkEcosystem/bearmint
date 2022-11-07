import type { Policy } from '@bearmint/bep-013'

export function makePolicy(): Policy {
	return {
		async allows() {
			return false
		},
		async denies() {
			return true
		},
		async validate(args) {
			return args === ''
		},
	}
}
