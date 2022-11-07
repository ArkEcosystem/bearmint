import type {
	Cradle,
	FunctionReturning,
	Slasher,
	SlasherExecutor,
	StateStore,
} from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'
import { getModuleMilestone } from '@bearmint/bep-021'

export function makeSlasher(cradle: Cradle): SlasherExecutor {
	return {
		async execute(state: StateStore, misbehaviors: abci.Misbehavior[]) {
			const { strategies } = getModuleMilestone<{ strategies: Record<string, number[]> }>(
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				'@bearmint/bep-103',
			)

			for (const misbehavior of misbehaviors) {
				if (typeof misbehavior.type !== 'number') {
					continue
				}

				if (!Object.values(abci.MisbehaviorType).includes(misbehavior.type)) {
					continue
				}

				for (const [strategy, supportedMisbehaviors] of Object.entries(strategies)) {
					if (!supportedMisbehaviors.includes(misbehavior.type)) {
						continue
					}

					await cradle.Container.build<Slasher>(
						cradle.StrategyRegistry.get<FunctionReturning<Slasher>>('@bearmint/bep-103', strategy),
					).execute(state, misbehavior)
				}
			}
		},
	}
}
