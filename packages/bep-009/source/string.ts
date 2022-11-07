import { TextEncoder } from 'node:util'

import { bytesToHex } from './bytes.js'

export function stringToBytes(value: string) {
	return new TextEncoder().encode(value)
}

export function stringToHex(value: string) {
	return bytesToHex(stringToBytes(value))
}
