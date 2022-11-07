import { bufferToHex } from './buffer.js'
import { hexToBytes } from './hex.js'

function isSameDataViews(a: DataView, b: DataView) {
	try {
		if (a.byteLength !== b.byteLength) {
			return false
		}

		for (let index = 0; index < a.byteLength; index++) {
			if (a.getUint8(index) !== b.getUint8(index)) {
				return false
			}
		}

		return true
	} catch {
		return false
	}
}

export type Falsy = false | '' | 0 | null | undefined | 0n

export function isBuffer(value?: { type: unknown }) {
	if (value instanceof Buffer) {
		return true
	}

	if (value === undefined) {
		return false
	}

	if (value.type === undefined) {
		return false
	}

	return value.type === 'Buffer'
}

export function isUint8Array(value: unknown) {
	return value instanceof Uint8Array
}

export function isMap(value: unknown) {
	return value instanceof Map
}

export function isSet(value: unknown) {
	return value instanceof Set
}

export function isBigInt(value: unknown) {
	return typeof value === 'bigint'
}

export function isCryptography(value: { verify: unknown }) {
	return typeof value.verify === 'function'
}

// function isObject(value: unknown) {
// 	return typeof value === 'object' && !Array.isArray(value) && value !== null;
// }

export function isNumber(value: unknown) {
	return typeof value === 'number'
}

export function isString(value: unknown) {
	return typeof value === 'string'
}

export function isFunction(value: unknown) {
	return typeof value === 'function'
}

export function isFalsy(value: unknown): value is Falsy {
	return (
		value === false ||
		value === '' ||
		value === 0 ||
		Number.isNaN(value) ||
		value === null ||
		typeof value === 'undefined' ||
		value === BigInt(0)
	)
}

export function isTruthy<T>(value: T | Falsy): value is T {
	return !isFalsy(value)
}

export function isURL(value?: string) {
	if (value === undefined) {
		return false
	}

	try {
		new URL(value)

		return true
	} catch {
		return false
	}
}

export function isHex(value: string) {
	try {
		return bufferToHex(hexToBytes(value)) === value
	} catch {
		return false
	}
}

export function isSameBytes(a: Uint8Array, b: Uint8Array) {
	try {
		return isSameDataViews(new DataView(a), new DataView(b))
	} catch {
		return false
	}
}
