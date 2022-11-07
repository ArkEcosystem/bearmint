import type { Account, Denomination } from '@bearmint/bep-013'

import { assertPositiveBalance } from './balance.js'

export function increaseLockedBalance(
	account: Account,
	amount: bigint,
	denomination: Denomination,
): void {
	if (account.lockedBalances[denomination] === undefined) {
		account.lockedBalances[denomination] = BigInt(0)
	}

	account.lockedBalances[denomination] = account.lockedBalances[denomination]! + amount

	assertPositiveBalance(account, account.lockedBalances[denomination])
}

export function decreaseLockedBalance(
	account: Account,
	amount: bigint,
	denomination: Denomination,
): void {
	account.lockedBalances[denomination] = account.lockedBalances[denomination]! - amount

	assertPositiveBalance(account, account.lockedBalances[denomination])
}

export function multiplyLockedBalance(
	account: Account,
	percentage: number,
	denomination: Denomination,
): void {
	account.lockedBalances[denomination] =
		(account.lockedBalances[denomination]! * BigInt(percentage)) / BigInt(100)

	assertPositiveBalance(account, account.lockedBalances[denomination])
}
