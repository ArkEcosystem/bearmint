import type { Cradle, FunctionReturning, ServiceProvider, TxPrioritizer } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { getModuleMilestone } from '@bearmint/bep-021'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunction(ContainerType.TxPrioritizer, (ctx: Cradle) =>
				ctx.Container.build(
					ctx.StrategyRegistry.get<FunctionReturning<TxPrioritizer>>(
						'@bearmint/bep-076',
						getModuleMilestone<{ strategy: string }>(
							ctx.ServiceProviderRepository,
							ctx.CommittedState,
							'@bearmint/bep-076',
						).strategy,
					),
				),
			)
		},
	}
}
