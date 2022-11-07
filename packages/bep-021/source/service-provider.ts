import { existsSync } from 'node:fs'

import { file, Paths } from '@bearmint/bep-009'
import type { Cradle, FactoryFunction, MilestoneStrategy, ServiceProvider } from '@bearmint/bep-013'
import { ContainerType, Event } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { getModuleMilestone } from './get-module-milestone.js'
import { setMilestone } from './set-milestone.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async register() {
			cradle.Container.bindFunction(ContainerType.MilestoneStrategy, (ctx: Cradle) => {
				try {
					return ctx.Container.build(
						ctx.StrategyRegistry.get<FactoryFunction<MilestoneStrategy>>(
							'@bearmint/bep-021',
							getModuleMilestone<{ strategy: string }>(
								ctx.ServiceProviderRepository,
								ctx.CommittedState,
								'@bearmint/bep-021',
							).strategy,
						),
					)
				} catch {
					// When booting we have no access to milestones yet so we use the height strategy!
					return ctx.Container.build(
						ctx.StrategyRegistry.get<FactoryFunction<MilestoneStrategy>>(
							'@bearmint/bep-021',
							'@bearmint/bep-115',
						),
					)
				}
			})

			const milestonePaths = {
				js: `${Paths.BM_PATH_CONF}/milestones.js`,
				json: `${Paths.BM_PATH_CONF}/milestones.json`,
			}

			for (const [type, path] of Object.entries(milestonePaths)) {
				if (existsSync(path)) {
					if (type === 'js') {
						cradle.Container.bindValue(ContainerType.Milestones, await import(path))
					} else {
						cradle.Container.bindValue(ContainerType.Milestones, file.readJson(path))
					}
				}
			}

			// We want to set the milestone as soon as the last committed state is available
			cradle.EventDispatcher.listen(Event.CommittedStateCreated, () => ({
				async execute() {
					try {
						await setMilestone(
							cradle,
							cradle.CommittedState,
							await cradle.CommittedState.getCommittedBlockNumber(),
						)
					} catch {
						// First launch! The blockchain initialiser will set the milestone.
					}
				},
			}))
		},
	}
}
