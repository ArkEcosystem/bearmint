import type { ABCIController, Cradle } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

export function makeListSnapshots(
	cradle: Cradle,
): ABCIController<abci.RequestListSnapshots, abci.ResponseListSnapshots> {
	return {
		async execute() {
			return {
				snapshots: await cradle.SnapshotService.list(),
			}
		},
	}
}
