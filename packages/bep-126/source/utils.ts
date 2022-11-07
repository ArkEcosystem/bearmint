import { blake3, bytesToHex } from '@bearmint/bep-009'

import { HANDLER } from './types.js'

export function getNameKey(value: string) {
	return `${HANDLER}/n/${value}`
}

export function getSymbolKey(value: string) {
	return `${HANDLER}/s/${value}`
}

export function getCollectionKey(hash: string, index: string) {
	return bytesToHex(blake3(`${HANDLER}/c/${hash}/${index}`))
}
