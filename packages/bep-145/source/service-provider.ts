import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { BEP126UserPermission } from '@bearmint/bep-126'

import { makePolicy } from './policy.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			for (const policyType of Object.values(BEP126UserPermission)) {
				cradle.PolicyRegistry.set(
					'@bearmint/bep-126',
					String(policyType),
					'@bearmint/bep-145',
					makePolicy,
				)
			}
		},
	}
}
