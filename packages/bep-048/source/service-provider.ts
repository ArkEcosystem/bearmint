import type {
	Cradle,
	FunctionReturning,
	GasCalculatorStrategy,
	ServiceProvider,
} from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'
import { getModuleMilestone } from '@bearmint/bep-021'

import { makeGasMeterFactory } from './meter.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunction(ContainerType.GasCalculator, (ctx: Cradle) =>
				ctx.Container.build(
					cradle.StrategyRegistry.get<FunctionReturning<GasCalculatorStrategy>>(
						'@bearmint/bep-048',
						getModuleMilestone<{ strategy: string }>(
							cradle.ServiceProviderRepository,
							cradle.CommittedState,
							'@bearmint/bep-048',
						).strategy,
					),
				),
			)

			cradle.Container.bindFunctionSingleton(ContainerType.GasMeterFactory, makeGasMeterFactory)
		},
	}
}
