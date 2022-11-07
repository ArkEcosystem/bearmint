import type { Cradle, EventListener } from '@bearmint/bep-013'
import type { BEP104Msg } from '@bearmint/bep-018'
import { getModuleMilestone } from '@bearmint/bep-021'
import type { TxListenerPayload } from '@bearmint/bep-051'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

export function makeBEP104Listener(cradle: Cradle): EventListener<TxListenerPayload<BEP104Msg>> {
	return {
		async execute(data) {
			if (data.tx.checksum.handler !== '@bearmint/bep-104') {
				return
			}

			if (
				!Object.keys(
					getModuleMilestone<{ strategies: string[] }>(
						cradle.ServiceProviderRepository,
						cradle.CommittedState,
						'@bearmint/bep-102',
					).strategies,
				).includes('@bearmint/bep-121')
			) {
				return
			}

			for (const [index, { moniker, stake }] of Object.entries(data.msg.ops)) {
				if (stake < 0) {
					continue
				}

				const validator = await data.state.getAccountRepository().findByMoniker(moniker)

				if (await data.state.getMultiStore().get('@bearmint/bep-121').has(validator.address)) {
					throw new TxAuditException({
						key: `message.ops.${index}.moniker`,
						value: ErrorCode.TX_VALIDATOR_TOMBSTONED,
					})
				}
			}
		},
	}
}
