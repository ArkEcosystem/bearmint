import { canonicalizeJson } from '@bearmint/bep-009'
import type { Account, Cradle, EventListener } from '@bearmint/bep-013'

import type { Hook } from './types.js'
import { Config } from './types.js'

export function makeAsteriskListener(cradle: Cradle): EventListener<Account> {
	return {
		async execute(data, name) {
			const { hooks } = cradle.Container.resolve<{ hooks: Hook[] }>(Config)

			const promises: Array<Promise<Response>> = []

			for (const { events, host, token } of hooks) {
				if (events.includes('*') || events.includes(name.toString())) {
					promises.push(
						fetch(host, {
							body: canonicalizeJson({ data, name })!,
							headers: {
								Accept: 'application/json',
								Authorization: `Bearer ${token}`,
								// eslint-disable-next-line @typescript-eslint/naming-convention
								'Content-Type': 'application/json',
							},
							method: 'POST',
						}),
					)
				}
			}

			await Promise.allSettled(promises)
		},
	}
}
