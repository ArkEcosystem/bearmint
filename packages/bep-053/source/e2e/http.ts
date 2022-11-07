import {
	base64ToBytes,
	base64ToHex,
	base64ToJson,
	base64ToString,
	bytesToHex,
	dot,
} from '@bearmint/bep-009'
import type { Tx } from '@bearmint/bep-013'
import { randomUUID } from 'crypto'

import type { BroadcastTxResponse } from './types.js'

export async function plainRequest(method: string, params?: object) {
	const response = await (
		await fetch('http://127.0.0.1:26657/', {
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

export async function getJSON<T = any>(method: string, params?: object) {
	const { response } = await plainRequest(method, params)

	return base64ToJson<T>(response.value)
}

export async function getString(method: string, params?: object) {
	const { response } = await plainRequest(method, params)

	return base64ToString(response.value)
}

export async function getMixedString(method: string, params?: object) {
	const { response } = await plainRequest(method, params)

	try {
		return base64ToJson<any>(response.value)
	} catch {
		return base64ToString(response.value)
	}
}

export async function getHexString(method: string, params?: object) {
	const { response } = await plainRequest(method, params)

	return base64ToHex(response.value)
}

export async function getProto(method: string, params?: object) {
	const { response } = await plainRequest(method, params)

	return base64ToBytes(response.value)
}

export async function fetchAccount(publicKey: string) {
	return getJSON('abci_query', { path: `/account/filter/publicKey/${publicKey}` })
}

export async function fetchAccountByAddress(address: string) {
	return getJSON('abci_query', { path: `/account/filter/address/${address}` })
}

export async function getNextNonce(publicKey: string) {
	try {
		return (BigInt((await fetchAccount(publicKey)).nonce) + BigInt(1)).toString()
	} catch {
		return '1'
	}
}

export async function broadcastSignedTx(signedTx: Tx): Promise<BroadcastTxResponse> {
	const { result } = await (
		await fetch(`http://127.0.0.1:26657/broadcast_tx_commit?tx=0x${bytesToHex(signedTx.bytes)}`)
	).json()

	return result
}

export async function getCurrentBlockNumber() {
	const response = await plainRequest('status')

	return Number(dot.get(response, 'sync_info.latest_block_height'))
}
