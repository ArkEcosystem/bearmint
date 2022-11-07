import { bufferToBytes, bufferToHex, bufferToJson } from './buffer.js'
import { bytesToString } from './bytes.js'

export function base64ToJson<T = object>(value: string): T {
	return bufferToJson(Buffer.from(value, 'base64'))
}

export function base64ToBytes(value: string) {
	return bufferToBytes(Buffer.from(value, 'base64'))
}

export function base64ToHex(value: string) {
	return bufferToHex(base64ToBytes(value))
}

export function base64ToString(value: string) {
	return bytesToString(base64ToBytes(value))
}
