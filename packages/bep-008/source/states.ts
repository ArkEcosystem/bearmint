import { denominations } from '@bearmint/bep-006'
import type { StateStore } from '@bearmint/bep-013'

export function fakeCommittedState() {
	return {
		getMilestone() {
			return {
				parameters: {
					denominations,
				},
			}
		},
	} as StateStore
}
