import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { z } from 'zod'

import { makeAsteriskListener } from './listeners.js'
import { Config } from './types.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	const base = makeServiceProviderSkeleton(import.meta.url)

	return {
		...base,
		async register() {
			base.config().merge(
				z
					.object({
						hooks: z.array(
							z.object({
								events: z.array(z.string()),
								host: z.string(),
								token: z.string(),
							}),
						),
					})
					.parse(base.config().all()),
			)

			cradle.Container.bindValue(Config, base.config().all())

			for (const eventName of Object.values(Event)) {
				cradle.EventDispatcher.listen(eventName, makeAsteriskListener)
			}
		},
	}
}
