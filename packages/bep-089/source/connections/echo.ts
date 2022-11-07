import type { ABCIController } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

export function makeEcho(): ABCIController<abci.RequestEcho, abci.ResponseEcho> {
	return {
		async execute(request) {
			return { message: request.message }
		},
	}
}
