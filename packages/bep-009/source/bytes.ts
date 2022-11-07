import { TextDecoder } from 'node:util'

import { bufferToBase64, bufferToHex } from './buffer.js'
import { hexToNumber } from './hex.js'

export function bytesToHex(value: Uint8Array) {
	return bufferToHex(Buffer.from(value))
}

export function bytesToHexMany(values: Uint8Array[]) {
	return values.map((value) => bytesToHex(value))
}

export function bytesToNumber(value: Uint8Array) {
	return hexToNumber(bufferToHex(Buffer.from(value)))
}

export function bytesToBase64(value: Uint8Array) {
	return bufferToBase64(Buffer.from(value))
}

export function bytesToJson<T = object>(value: Uint8Array) {
	return JSON.parse(new TextDecoder().decode(value)) as T
}

export function bytesConcat(values: Uint8Array[]) {
	const accumulator: number[] = []

	for (const value of values) {
		accumulator.push(...value)
	}

	return new Uint8Array(accumulator)
}

export function bytesToString(value: Uint8Array) {
	return new TextDecoder().decode(value)
}
