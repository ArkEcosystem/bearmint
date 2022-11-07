import { join } from 'node:path'

import { blake3, bytesToHex } from '@bearmint/bep-009'
import type { DataSinkOp, ServiceProvider } from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { ClassicLevel } from 'classic-level'
import { scheduleJob } from 'node-schedule'
import { z } from 'zod'

import { LevelDB } from './level.js'
import {
	makeAccountListener,
	makeBlockListener,
	makeCommitListener,
	makeTxListener,
} from './listeners.js'
import { indexPendingEntries } from './queue.js'
import { calculateScheduleTime } from './time.js'
import type { Buckets, Cradle } from './types.js'
import { InternalContainerType } from './types.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	const base = makeServiceProviderSkeleton(import.meta.url)

	return {
		...base,
		async register() {
			// Parse configuration
			const config = z
				.object({
					hosts: z
						.array(
							z.object({
								host: z.string(),
								token: z.string(),
							}),
						)
						.optional(),
				})
				.optional()
				.parse(base.config().all())

			if (config?.hosts === undefined || !Array.isArray(config?.hosts)) {
				return
			}

			// Buckets that hold pending items in host-specific tables
			const database = new ClassicLevel<string, DataSinkOp>(join(cradle.Paths.data, 'bep-100'), {
				valueEncoding: 'json',
			})

			const buckets: Buckets = []

			for (const host of config.hosts) {
				buckets.push({
					database: new LevelDB(
						database.sublevel<string, typeof Blob>(bytesToHex(blake3(host.host)), {
							valueEncoding: 'json',
						}),
					),
					host,
				})
			}

			cradle.Container.bindValue(InternalContainerType.BUCKETS, buckets)

			// Store data in EventSink
			cradle.EventDispatcher.listen(Event.AccountIndexed, makeAccountListener)

			// Store data in EventSink
			cradle.EventDispatcher.listen(Event.AbciRequestProcessed, makeBlockListener)

			// Store data in EventSink
			cradle.EventDispatcher.listen(Event.TransactionIndexed, makeTxListener)

			// Persist data from EventSink
			cradle.EventDispatcher.listen(Event.AbciRequestProcessed, makeCommitListener)

			if (process.env['NODE_ENV'] !== 'test') {
				// Schedule a job that indexes pending items
				scheduleJob(
					`*/${calculateScheduleTime(cradle.TendermintConfiguration)} * * * * *`,
					async () => indexPendingEntries(cradle),
				)
			}
		},
	}
}
