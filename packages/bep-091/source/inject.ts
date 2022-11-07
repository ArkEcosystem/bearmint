import { canonicalizeJson } from '@bearmint/bep-009'

export async function injectRequest(method: string, parameters?: object, headers?: HeadersInit) {
	return (
		await fetch('http://127.0.0.1:12345', {
			body: JSON.stringify({
				id: 'id',
				jsonrpc: '2.0',
				method,
				params: canonicalizeJson(parameters ?? {}),
			}),
			headers: headers ?? {
				Accept: 'application/json',
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
	).json()
}

export async function injectRawRequest(body: object) {
	return (
		await fetch('http://127.0.0.1:12345', {
			body: JSON.stringify(body),
			headers: {
				Accept: 'application/json',
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
	).json()
}
