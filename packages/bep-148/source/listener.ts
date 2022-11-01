import type { Cradle, EventListener } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

export function makePrepareProposalListener(
	cradle: Cradle,
): EventListener<{ method: string; request: abci.RequestPrepareProposal }> {
	return {
		async execute(data) {
			if (data.method !== 'prepareProposal') {
				return
			}

			const config = cradle.ServiceProviderRepository.get('@bearmint/bep-148').config()

			if (data.request.height % BigInt(config.get('interval')) !== BigInt(0)) {
				return
			}

			await cradle.SnapshotService.dump(config.get('format'))
		},
	}
}
