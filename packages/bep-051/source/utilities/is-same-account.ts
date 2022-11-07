import type { Account } from '@bearmint/bep-013'

export function isSameAccount(a: Account, b: Account) {
	return a.address === b.address
}
