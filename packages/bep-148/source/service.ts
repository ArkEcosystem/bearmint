import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { blake3, RLP } from '@bearmint/bep-009'
import type { Cradle, SnapshotService } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'
import { Semaphore } from 'async-mutex'
import { Level } from 'level'

function buildPath(height: bigint, format: number, chunk: number) {
	return `@bearmint/bep-148/snapshots/${height.toString()}/${format.toString()}/${chunk.toString()}.bin`
}

const MUTEX_DUMP = new Semaphore(1)
const MUTEX_LOAD = new Semaphore(1)

export function makeSnapshotService(cradle: Cradle): SnapshotService {
	const db = new Level<string, Uint8Array>(join(cradle.Paths.data, '@bearmint/bep-148/state'), {
		keyEncoding: 'utf8',
		valueEncoding: 'binary',
	})

	const multiStore = cradle.CommittedState.getMultiStore().get('@bearmint/bep-020/world')

	return {
		async dump(format: number) {
			return MUTEX_DUMP.runExclusive(async () => {
				const committedBlockNumber = await cradle.CommittedState.getCommittedBlockNumber()
				const committedBlockAppHash = await cradle.CommittedState.getCommittedBlockAppHash()

				const snapshot = new abci.Snapshot({
					chunks: 0,
					format: cradle.ServiceProviderRepository.get('@bearmint/bep-148').config().get('format'),
					height: committedBlockNumber,
				})

				let totalByteLength = 0
				for await (const [index, chunk] of multiStore.takeSnapshot()) {
					writeFileSync(join(cradle.Paths.data, buildPath(snapshot.height, format, index)), chunk)

					snapshot.chunks++

					totalByteLength += chunk.byteLength
				}

				snapshot.metadata = RLP.encode([committedBlockAppHash, totalByteLength])

				snapshot.hash = blake3(snapshot.toBinary())

				await db.put(snapshot.height.toString(), snapshot.toBinary())

				return snapshot
			})
		},
		async find(height: bigint, format: number, chunk: number) {
			return readFileSync(join(cradle.Paths.data, buildPath(height, format, chunk)))
		},
		async list() {
			const snapshots: abci.Snapshot[] = []

			for await (const value of db.values()) {
				snapshots.push(abci.Snapshot.fromBinary(value))
			}

			return snapshots
		},
		async load(chunk: Uint8Array) {
			await MUTEX_LOAD.runExclusive(async () => {
				await multiStore.loadSnapshot(chunk)
			})
		},
	}
}
