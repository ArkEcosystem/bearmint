import type { Account, Denomination } from '@bearmint/bep-013'
import { AccountBalanceWentNegativeException } from '@bearmint/bep-109'

export function assertPositiveBalance(account: Account, balance: bigint | undefined): void {
	if (balance === undefined) {
		throw new AccountBalanceWentNegativeException(account, BigInt(0))
	}

	if (balance < 0) {
		throw new AccountBalanceWentNegativeException(account, balance)
	}
}

export function increaseBalance(
	account: Account,
	amount: bigint,
	denomination: Denomination,
): void {
	if (account.balances[denomination] === undefined) {
		account.balances[denomination] = BigInt(0)
	}

	account.balances[denomination] = account.balances[denomination]! + amount

	assertPositiveBalance(account, account.balances[denomination])
}

export function decreaseBalance(
	account: Account,
	amount: bigint,
	denomination: Denomination,
): void {
	account.balances[denomination] = account.balances[denomination]! - amount

	assertPositiveBalance(account, account.balances[denomination])
}

export function multiplyBalance(
	account: Account,
	percentage: number,
	denomination: Denomination,
): void {
	account.balances[denomination] =
		(account.balances[denomination]! * BigInt(percentage)) / BigInt(100)

	assertPositiveBalance(account, account.balances[denomination])
}
