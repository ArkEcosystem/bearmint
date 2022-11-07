import type { AddressFactory, Cradle, FunctionReturning, ServiceProvider } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { getModuleMilestone } from '@bearmint/bep-021'

export interface AddressStrategy {
	makeAddressFactory: FunctionReturning<AddressFactory>
}

export function makeServiceProvider(cradle: Pick<Cradle, 'Container'>): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunction(ContainerType.AddressFactory, (ctx: Cradle) =>
				ctx.Container.build(
					ctx.StrategyRegistry.get<AddressStrategy>(
						'@bearmint/bep-038',
						getModuleMilestone<{ strategy: string }>(
							ctx.ServiceProviderRepository,
							ctx.CommittedState,
							'@bearmint/bep-038',
						).strategy,
					).makeAddressFactory,
				),
			)
		},
	}
}
