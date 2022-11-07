import { dot } from '@bearmint/bep-009'
import type { Account } from '@bearmint/bep-013'
import { Exception } from '@bearmint/bep-109'

export function getMetadata<T>(account: Account, key: string) {
	return dot.get<T>(account.metadata, key)
}

export function setMetadata<T = object>(account: Account, key: string, value: T) {
	dot.set(account.metadata, key, value)
}

export function hasMetadata(account: Account, key: string) {
	return dot.has(account.metadata, key)
}

export function missingMetadata(account: Account, key: string) {
	return !hasMetadata(account, key)
}

export function forgetMetadata(account: Account, key: string) {
	return dot.forget(account.metadata, key)
}

export function transferMetadata(sender: Account, recipient: Account, key: string) {
	setMetadata(recipient, key, getMetadata(sender, key))

	forgetMetadata(sender, key)
}

export function attachMetadata(account: Account, key: string, value: unknown) {
	if (missingMetadata(account, key)) {
		setMetadata(account, key, [])
	}

	const currentValue = getMetadata<unknown[]>(account, key)
	currentValue.push(value)

	setMetadata(account, key, currentValue)
}

export function detachMetadata(account: Account, key: string, value: unknown) {
	if (missingMetadata(account, key)) {
		throw new Exception(
			`Failed to detach [${String(value)}] from [${key}] because [${key}] does not exist.`,
		)
	}

	const currentValue = getMetadata<unknown[]>(account, key)

	setMetadata(
		account,
		key,
		currentValue.filter((element) => element !== value),
	)
}
