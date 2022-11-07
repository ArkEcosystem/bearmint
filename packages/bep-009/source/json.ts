import type { JsonValue } from '@bearmint/bep-013'

import { bufferToHex } from './buffer.js'
import { bytesToBase64, bytesToHex } from './bytes.js'
import { isBigInt, isBuffer, isCryptography, isMap, isSet, isUint8Array } from './is.js'
import { stringToBytes } from './string.js'

export function jsonToBytes(value: object | JsonValue) {
	return stringToBytes(JSON.stringify(canonicalizeJson(value)))
}

export function jsonToHex(value: object | JsonValue) {
	return bufferToHex(jsonToBytes(value))
}

export function jsonToBase64(value: object | JsonValue) {
	return bytesToBase64(jsonToBytes(value))
}

export function canonicalizeJson<T>(input: object | JsonValue): T {
	return JSON.parse(
		JSON.stringify(input, (_, value) => {
			if (value === undefined) {
				return value
			}

			if (isBuffer(value)) {
				return bufferToHex(Buffer.from(value.data))
			}

			if (isUint8Array(value)) {
				return bytesToHex(value)
			}

			if (isMap(value)) {
				return Object.fromEntries(value.entries())
			}

			if (isSet(value)) {
				return [...value]
			}

			if (isBigInt(value)) {
				return value.toString()
			}

			if (isCryptography(value)) {
				return value.toString()
			}

			return value
		}),
	)
}
