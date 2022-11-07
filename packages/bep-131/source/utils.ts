import { blake3, bytesToHex } from '@bearmint/bep-009'
import type { KVStore } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import type { BEP126Collection, Plain } from '@bearmint/bep-018'
import { BEP131Token } from '@bearmint/bep-018'

import { HANDLER } from './types.js'

export function makeTokenId(collection: BEP126Collection) {
	return Object.keys(collection.tokens).length + 1
}

export function getPrimaryKey(collectionId: string, tokenId: number) {
	return bytesToHex(blake3(`${HANDLER}/c/${collectionId}/t/${tokenId}`))
}

export async function getNFT(bep131Store: KVStore, hash: string) {
	return BEP131Token.fromBinary(await bep131Store.get(hash), PROTO_OPTS)
}

export async function upsertNFT(bep131Store: KVStore, hash: string, nft: Plain<BEP131Token>) {
	const result = new BEP131Token(nft)

	await bep131Store.set(hash, result.toBinary())

	return result
}

export async function destroyNFT(bep131Store: KVStore, hash: string) {
	await bep131Store.forget(hash)
}
