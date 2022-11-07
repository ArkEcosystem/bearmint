import { base64ToBytes, base64ToJson, base64ToString } from '@bearmint/bep-009'
import { randomUUID } from 'crypto'

export async function executeCall(host: string, method: string, params?: object) {
	const response = await (
		await fetch(host, {
			body: JSON.stringify({
				id: randomUUID(),
				jsonrpc: '2.0',
				method,
				params,
			}),
			// eslint-disable-next-line @typescript-eslint/naming-convention
			headers: { accept: 'application/json', 'content-type': 'application/json' },
			method: 'POST',
		})
	).json()

	if (response.result.code === 1) {
		throw new Error(response.result.info)
	}

	return response.result
}

export async function getJSON<T = any>(host: string, method: string, params?: object) {
	const { response } = await executeCall(host, method, params)

	return base64ToJson<T>(response.value)
}

export async function getString(host: string, method: string, params?: object) {
	const { response } = await executeCall(host, method, params)

	return base64ToString(response.value)
}

export async function getMixedString(host: string, method: string, params?: object) {
	const { response } = await executeCall(host, method, params)

	try {
		return base64ToJson<any>(response.value)
	} catch {
		return base64ToString(response.value)
	}
}

export async function getProto(host: string, method: string, params?: object) {
	const { response } = await executeCall(host, method, params)

	return base64ToBytes(response.value)
}
