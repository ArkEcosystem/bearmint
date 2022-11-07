import { assert } from '@bearmint/bep-009'
import type { Cradle, Milestone, StateStore } from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'

import { deepmerge } from './deepmerge.js'

export async function setMilestone(
	cradle: Cradle,
	state: StateStore,
	blockNumber: bigint,
): Promise<Milestone> {
	const matchingMilestones = await cradle.MilestoneStrategy.execute(blockNumber, cradle.Milestones)

	let latestMilestone = matchingMilestones[0]

	for (const previousMilestone of matchingMilestones.slice(1)) {
		assert.defined<object>(latestMilestone)

		latestMilestone = deepmerge(latestMilestone, previousMilestone)
	}

	assert.defined<Milestone>(latestMilestone)

	await cradle.EventDispatcher.dispatch(Event.MilestoneChanging, latestMilestone)

	await state.setMilestone(latestMilestone)

	await cradle.EventDispatcher.dispatch(Event.MilestoneChanged, latestMilestone)

	return latestMilestone
}
