import { bufferToBytes } from './buffer.js'
import { bytesToJson, bytesToString } from './bytes.js'

export function hexToNumber(value: string) {
	return Number.parseInt(value.slice(0, 2), 16)
}

export function hexToBytes(value: string) {
	if (value.toLowerCase().startsWith('0x')) {
		value = value.slice(2)
	}

	return bufferToBytes(Buffer.from(value, 'hex'))
}

export function hexToJson<T = object>(value: string) {
	return bytesToJson<T>(hexToBytes(value))
}

export function hexToString(value: string) {
	return bytesToString(hexToBytes(value))
}

// export function hexToBytes(hex: string): Uint8Array {
// 	if (typeof hex !== 'string') {
// 		throw new TypeError(`hexToBytes: expected string, got ${typeof hex}`)
// 	}

// 	if (hex.length % 2) {
// 		throw new Error('hexToBytes: received invalid unpadded hex')
// 	}

// 	const array = new Uint8Array(hex.length / 2)
// 	for (let i = 0; i < array.length; i++) {
// 		const j = i * 2
// 		array[i] = Number.parseInt(hex.slice(j, j + 2), 16)
// 	}

// 	return array
// }
