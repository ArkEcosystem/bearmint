import type { ClassOrFunctionReturning, Cradle, ServiceProvider } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { getModuleMilestone } from '@bearmint/bep-021'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunction(ContainerType.ValidatorElector, (ctx: Cradle) =>
				ctx.Container.build(
					ctx.StrategyRegistry.get<ClassOrFunctionReturning<unknown>>(
						'@bearmint/bep-087',
						getModuleMilestone<{ strategy: string }>(
							ctx.ServiceProviderRepository,
							ctx.CommittedState,
							'@bearmint/bep-087',
						).strategy,
					),
				),
			)
		},
	}
}
