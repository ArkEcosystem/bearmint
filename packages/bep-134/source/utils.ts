import { blake3, bytesToHex } from '@bearmint/bep-009'
import type { Account, KVStore, StateStore } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import type { PlainMessage } from '@bearmint/bep-018'
import { BEP134Token } from '@bearmint/bep-018'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import { HANDLER } from './types.js'

export function getNameKey(value: string) {
	return `${HANDLER}/n/${value}`
}

export function getDenominationKey(value: string) {
	return `${HANDLER}/d/${value}`
}

export function getPrimaryKey(hash: string, index: string) {
	return bytesToHex(blake3(`${HANDLER}/${hash}/${index}`))
}

export function decimalsToPower(value: number) {
	return BigInt(`1${'0'.repeat(value)}`)
}

export async function ownsNativeToken(state: StateStore, hash: string, account: Account) {
	try {
		return (
			(await state.getMultiStore().get(HANDLER).getListHex(account.address)).includes(hash) === true
		)
	} catch {
		return false
	}
}

export async function assertNativeTokenOwnership(
	state: StateStore,
	account: Account,
	hash: string,
	key: string,
) {
	if (await ownsNativeToken(state, hash, account)) {
		return
	}

	throw new TxAuditException({
		key,
		value: ErrorCode.TX_UNAUTHORIZED_ACCESS,
	})
}

export async function selectNAT(bep134Store: KVStore, hash: string) {
	return BEP134Token.fromBinary(await bep134Store.get(hash), PROTO_OPTS)
}

export async function upsertNAT(
	bep134Store: KVStore,
	hash: string,
	value: PlainMessage<BEP134Token>,
) {
	const result = new BEP134Token(value)

	await bep134Store.set(hash, result.toBinary())

	return result
}
