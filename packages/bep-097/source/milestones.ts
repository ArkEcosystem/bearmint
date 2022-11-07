import { file } from '@bearmint/bep-009'

export function persistMilestones({ milestones, path }) {
	console.log(`Writing [${path}/config/milestones.json]`)

	file.writeJson(`${path}/config/milestones.json`, milestones)
}
