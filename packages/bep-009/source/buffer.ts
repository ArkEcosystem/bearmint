export function bufferToHex(value: Buffer | Uint8Array) {
	if (value instanceof Uint8Array) {
		value = Buffer.from(value)
	}

	return value.toString('hex')
}

export function bufferToString(value: Buffer) {
	return value.toString()
}

export function bufferToJson<T = object>(value: Buffer) {
	return JSON.parse(value.toString()) as T
}

export function bufferToBase64(value: Buffer) {
	return value.toString('base64')
}

export function bufferToBytes(value: Buffer) {
	return Uint8Array.from(value)
}
