import type { KVStore, TxAssertionsErrorStruct } from '@bearmint/bep-013'
import { TxAuditException } from '@bearmint/bep-109'

import { getCollection } from './collection.js'

export async function assertStewardCannot(
	bep126Store: KVStore,
	collectionHash: string,
	steward: string,
	permission: number,
	error: TxAssertionsErrorStruct,
) {
	const { accessControlList } = await getCollection(bep126Store, collectionHash)

	if (accessControlList[steward]?.permissions.includes(permission) === true) {
		throw new TxAuditException(error)
	}
}

export async function assertStewardCan(
	bep126Store: KVStore,
	collectionHash: string,
	steward: string,
	permission: number,
	error: TxAssertionsErrorStruct,
) {
	const { accessControlList } = await getCollection(bep126Store, collectionHash)

	if (accessControlList[steward]?.permissions.includes(permission) !== true) {
		throw new TxAuditException(error)
	}
}
