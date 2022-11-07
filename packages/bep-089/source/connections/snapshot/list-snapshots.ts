import type { ABCIController } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

export function makeListSnapshots(): ABCIController<
	abci.RequestListSnapshots,
	abci.ResponseListSnapshots
> {
	return {
		async execute() {
			return {
				snapshots: [],
			}
		},
	}
}
