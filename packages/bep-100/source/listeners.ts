import { bytesToHex } from '@bearmint/bep-009'
import type { Account, EventListener, Tx } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

import type { Cradle } from './types'
import { InternalContainerType } from './types.js'

export function makeAccountListener(cradle: Cradle): EventListener<Account> {
	return {
		async execute(data) {
			cradle.DataSink.put(
				'@bearmint/bep-022',
				{
					id: data.address,
					type: 'account',
				},
				(await cradle.AccountSerializer.serialize(data)).toJson() as object,
			)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-100',
				action: 'queue',
				type: 'account',
				address: data.address,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */
		},
	}
}

export function makeBlockListener(
	cradle: Cradle,
): EventListener<{ method: string; request: abci.RequestBeginBlock }> {
	return {
		async execute(data) {
			if (data.method !== 'beginBlock') {
				return
			}

			cradle.DataSink.put(
				'@bearmint/bep-089',
				{
					id: bytesToHex(data.request.hash),
					type: 'block',
				},
				data.request.toJson() as object,
			)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-100',
				action: 'queue',
				type: 'block',
				hash: bytesToHex(data.request.hash),
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */
		},
	}
}

export function makeTxListener(cradle: Cradle): EventListener<Tx> {
	return {
		async execute(data) {
			cradle.DataSink.put(
				'@bearmint/bep-089',
				{
					id: data.hash,
					type: 'tx',
				},
				{
					...data.data,
					blockNumber: cradle.CommittedState.getCandidateBlockNumber().toString(),
					deserialized: await cradle.TxMsgFactoryRegistry.get(
						data.checksum.handler,
						data.checksum.version,
					).fromTx(data),
				},
			)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-100',
				action: 'queue',
				type: 'tx',
				hash: data.hash,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */
		},
	}
}

/**
 * This function persists the cache because Tendermint
 * signaled that we can commit to our latest changes.
 */
export function makeCommitListener(cradle: Cradle): EventListener<{ method: string }> {
	return {
		async execute(data) {
			if (data.method !== 'commit' && data.method !== 'initChain') {
				return
			}

			for (const value of cradle.DataSink.values()) {
				for (const { database } of cradle[InternalContainerType.BUCKETS]) {
					await database.put(value)
				}
			}
		},
	}
}
