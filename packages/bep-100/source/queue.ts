import { bytesToHex, canonicalizeJson, dot } from '@bearmint/bep-009'
import type { DataSinkOp } from '@bearmint/bep-013'
import got from 'got'

import type { LevelDB } from './level.js'
import type { Cradle, Host } from './types'
import { InternalContainerType } from './types.js'

async function broadcastBlob(
	cradle: Cradle,
	database: LevelDB,
	host: Host,
	key: string,
	value: DataSinkOp,
) {
	let retriesLeft = 5

	while (retriesLeft > 0) {
		let identifier = dot.get(value, 'data.address') ?? dot.get(value, 'data.hash')

		if (identifier instanceof Uint8Array) {
			identifier = bytesToHex(identifier)
		}

		try {
			const response = await got
				.post(host.host, {
					headers: {
						Accept: 'application/json',
						Authorization: `Bearer ${host.token}`,
						// eslint-disable-next-line @typescript-eslint/naming-convention
						'Content-Type': 'application/json',
					},
					json: canonicalizeJson(value),
				})
				.json<any>()

			if (response.status === 404) {
				/* eslint-disable sort-keys-fix/sort-keys-fix */
				cradle.Logger.debug('%s', {
					module: '@bearmint/bep-100',
					action: 'index',
					status: 'requeue',
					type: value.type,
					id: identifier,
				})
				/* eslint-enable sort-keys-fix/sort-keys-fix */

				throw new Error(response.statusText)
			}

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-100',
				action: 'index',
				status: 'success',
				type: value.type,
				id: identifier,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */

			await database.del(key)

			// Exit the while...
			break
		} catch {
			retriesLeft--

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-100',
				action: 'index',
				status: 'failure',
				type: value.type,
				id: identifier,
				retriesLeft,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */

			if (retriesLeft === 0) {
				throw new Error('All attempts failed.')
			}
		}
	}
}

export async function indexPendingEntries(cradle: Cradle) {
	const requests: Array<Promise<void>> = []

	for (const { database, host } of cradle[InternalContainerType.BUCKETS]) {
		for (const { key, value } of await database.all()) {
			requests.push(broadcastBlob(cradle, database, host, key, value))
		}
	}

	await Promise.allSettled(requests)
}
