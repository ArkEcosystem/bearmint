import { semver } from '@bearmint/bep-009'
import type { Cradle, Milestone, MilestoneStrategy } from '@bearmint/bep-013'

export function makeStrategy(cradle: Cradle): MilestoneStrategy {
	return {
		async execute(blockNumber, milestones) {
			const result: Milestone[] = []

			for (const [range, appMilestone] of Object.entries(milestones)) {
				if (semver.dissatisfies(cradle.ApplicationManifest.semanticVersion, range)) {
					continue
				}

				if (blockNumber < BigInt(appMilestone.blockNumber)) {
					continue
				}

				for (const child of appMilestone.milestones.filter(
					(milestone) => blockNumber >= BigInt(milestone.blockNumber),
				)) {
					result.push(child)
				}
			}

			return result
		},
	}
}
