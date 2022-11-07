import { randomUUID } from 'node:crypto'

import { base64ToJson, bytesToHex } from '@bearmint/bep-009'
import got from 'got'

async function callRaw(host: string, method: string, params: object) {
	const { result } = await got
		.post(host, {
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
		.json<any>()

	if (result.response.code === 1) {
		throw new Error(result.response.info)
	}

	return result.response.value
}

async function call(host: string, method: string, params: object) {
	return base64ToJson<any>(await callRaw(host, method, params))
}

export async function broadcast({ rpcHost, signedTx }: { rpcHost: string; signedTx: Uint8Array }) {
	const { result } = await got
		.post(`${rpcHost}broadcast_tx_commit`, {
			searchParams: {
				tx: `0x${bytesToHex(signedTx)}`,
			},
		})
		.json<any>()

	return result
}

export async function estimateGas(host: string, signedTx: Uint8Array) {
	return call(host, 'abci_query', {
		data: bytesToHex(signedTx),
		path: '/tx/gas',
	})
}

export async function fetchAccount(host: string, publicKey: string) {
	return call(host, 'abci_query', {
		path: `/account/filter/publicKey/${publicKey}`,
	})
}

export async function getNextNonce(host: string, publicKey: string) {
	return (BigInt((await fetchAccount(host, publicKey)).nonce) + BigInt(1)).toString()
}

export async function getMoniker(host: string, publicKey: string) {
	return (await fetchAccount(host, publicKey)).moniker
}

export async function fetchTx({ hash, rpcHost }: { rpcHost: string; hash: string }) {
	return call(rpcHost, 'abci_query', { path: `/tx/filter/hash/${hash}` })
}
