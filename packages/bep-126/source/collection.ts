import type { Account, KVStore, StateStore, TxAssertionsErrorStruct } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import type { Plain } from '@bearmint/bep-018'
import { BEP126Collection, BEP131Token } from '@bearmint/bep-018'
import { TxAuditException } from '@bearmint/bep-109'

import { BEP126UserPermission, HANDLER } from './types.js'

export async function getCollection(bep126Store: KVStore, hash: string) {
	return BEP126Collection.fromBinary(await bep126Store.get(hash), PROTO_OPTS)
}

export async function getCollectionHash(bep131Store: KVStore, hash: string) {
	return BEP131Token.fromBinary(await bep131Store.get(hash), PROTO_OPTS).collection
}

export async function getCollectionFromToken(
	bep126Store: KVStore,
	bep131Store: KVStore,
	hash: string,
) {
	// 1. Retrieve the hash of the collection the NFT belongs to
	const collectionHash = await getCollectionHash(bep131Store, hash)

	// 2. Retrieve the actual collection
	const collection = await getCollection(bep126Store, collectionHash)

	// 3. Return both to allow for easy referencing
	return { collection, collectionHash }
}

export async function hasCollection(bep126Store: KVStore, hash: string) {
	return bep126Store.has(hash)
}

export async function hasCollectionOwnership(state: StateStore, hash: string, account: Account) {
	try {
		return (
			(await state.getMultiStore().get(HANDLER).getListHex(account.address)).includes(hash) === true
		)
	} catch {
		return false
	}
}

export async function assertCollectionOwnership(
	state: StateStore,
	hash: string,
	account: Account,
	error: TxAssertionsErrorStruct,
) {
	if (await hasCollectionOwnership(state, hash, account)) {
		return
	}

	throw new TxAuditException(error)
}

export function isUnknownPermission(permission: number, error: TxAssertionsErrorStruct) {
	if (permission in BEP126UserPermission) {
		return
	}

	throw new TxAuditException(error)
}

export async function upsertCollection(
	bep126Store: KVStore,
	collectionHash: string,
	collection: Plain<BEP126Collection>,
) {
	const result = new BEP126Collection(collection)

	await bep126Store.set(collectionHash, result.toBinary())

	return result
}
