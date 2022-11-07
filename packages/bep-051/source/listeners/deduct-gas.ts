import type { Account, EventListener } from '@bearmint/bep-013'
import { denom } from '@bearmint/bep-021'
import { decreaseBalance } from '@bearmint/bep-022'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'

import type { TxListenerPayload } from './types.js'

/**
 * @remarks
 * This mutates the sender account. If you store the sender account during the `context` to avoid
 * retrieving it again during `verify` (they don't mutate) you'll need to make
 * sure that you retrieve the sender account again at the top of `execute` to have a fresh instance.
 */
export function makeDeductGasListener(): EventListener<TxListenerPayload> {
	return {
		async execute(data) {
			const account: Account = await data.state
				.getAccountRepository()
				.findByPublicKey(data.tx.data.sender.toString())

			if (account.balances[denom(data.state, 'gas')]! < data.tx.data.gas) {
				throw new TxAuditException({
					key: 'gas',
					value: ErrorCode.TX_INSUFFICIENT_BALANCE,
				})
			}

			decreaseBalance(account, data.tx.data.gas, denom(data.state, 'gas'))

			await data.state.getAccountRepository().index([account])

			data.gasMeter.consume('cost', data.tx.data.gas)
		},
	}
}
