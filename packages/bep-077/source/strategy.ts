import type { TxPrioritizer } from '@bearmint/bep-013'

export function makeStrategy(): TxPrioritizer {
	return {
		async execute(tx) {
			return tx.data.gas
		},
	}
}
