import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { ContainerType, Event } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { z } from 'zod'

import { makePrepareProposalListener } from './listener.js'
import { makeSnapshotService } from './service.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	const base = makeServiceProviderSkeleton(import.meta.url)

	return {
		...base,
		async register() {
			z.object({
				format: z.number(),
				interval: z.number(),
			}).parse(base.config().all())

			cradle.Container.bindFunctionSingleton(ContainerType.SnapshotService, makeSnapshotService)

			cradle.EventDispatcher.listen(Event.AbciRequestProcessed, makePrepareProposalListener)
		},
	}
}
