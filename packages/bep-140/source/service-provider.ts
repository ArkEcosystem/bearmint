import type { Cradle, ServiceProvider } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { BEP134UserPermission } from '@bearmint/bep-134'

import { makePolicy } from './policy.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			for (const policyType of Object.values(BEP134UserPermission)) {
				cradle.PolicyRegistry.set(
					'@bearmint/bep-134',
					String(policyType),
					'@bearmint/bep-140',
					makePolicy,
				)
			}
		},
	}
}
