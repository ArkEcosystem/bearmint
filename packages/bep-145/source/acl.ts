import type { Account, KVStore } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import { BEP131Token } from '@bearmint/bep-018'
import { getMetadata } from '@bearmint/bep-022'
import type { BEP126UserPermission } from '@bearmint/bep-126'
import { getCollection, getCollectionHash } from '@bearmint/bep-126'

export async function allowsCollectionAccess(
	bep126Store: KVStore,
	collectionHash: string,
	address: string,
	permission: BEP126UserPermission,
) {
	try {
		const user = (await getCollection(bep126Store, collectionHash)).accessControlList[address]

		if (user === undefined) {
			return false
		}

		return user.permissions.includes(permission)
	} catch {
		return false
	}
}

export async function deniesCollectionAccess(
	bep126Store: KVStore,
	collectionHash: string,
	address: string,
	permission: BEP126UserPermission,
) {
	return !(await allowsCollectionAccess(bep126Store, collectionHash, address, permission))
}

export async function ownedByMinter(
	bep126Store: KVStore,
	bep131Store: KVStore,
	collectionHash: string,
	tokenHash: string,
) {
	try {
		const { owner } = BEP131Token.fromBinary(await bep131Store.get(tokenHash), PROTO_OPTS)

		const { initialOwner } = await getCollection(bep126Store, collectionHash)

		return owner === initialOwner
	} catch {
		return false
	}
}

export async function deniesTokenAccess(
	bep126Store: KVStore,
	bep131Store: KVStore,
	tokenHash: string,
	account: Account,
	permission: BEP126UserPermission,
) {
	try {
		const collectionHash = await getCollectionHash(bep131Store, tokenHash)

		// Stewardship
		if (await ownedByMinter(bep126Store, bep131Store, collectionHash, tokenHash)) {
			const user = (await getCollection(bep126Store, collectionHash)).accessControlList[
				account.address
			]

			if (user === undefined) {
				return true
			}

			return !user.permissions.includes(permission)
		}

		// Ownership
		return (
			getMetadata<string[] | undefined>(account, '@bearmint/bep-131')?.includes(tokenHash) === false
		)
	} catch {
		return true
	}
}

export async function allowsTokenAccess(
	bep126Store: KVStore,
	bep131Store: KVStore,
	tokenHash: string,
	account: Account,
	permission: BEP126UserPermission,
) {
	return !(await deniesTokenAccess(bep126Store, bep131Store, tokenHash, account, permission))
}
