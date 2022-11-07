import { assert, bytesToHex } from '@bearmint/bep-009'
import type { Cradle, Slasher, StateStore } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { isGenesis } from '@bearmint/bep-022'

import { recordMisbehavior } from './utils.js'

export function makeStrategy(cradle: Cradle): Slasher {
	return {
		async execute(state: StateStore, misbehavior: abci.Misbehavior) {
			assert.defined<abci.Validator>(misbehavior.validator)

			const account = await state
				.getAccountRepository()
				.findByValidatorAddress(bytesToHex(misbehavior.validator.address))

			// Already tombstoned, no need to jail them
			if (await state.getMultiStore().get('@bearmint/bep-121').has(account.address)) {
				return
			}

			// We can't jail genesis validators because they serve as fallbacks
			if (isGenesis(cradle.GenesisParameters.validators, account)) {
				return
			}

			// We attempt to hand out a jail sentence
			const record = await recordMisbehavior(cradle, state, account, misbehavior)

			if (record !== undefined) {
				cradle.DataSink.put(
					'@bearmint/bep-120',
					{
						id: account.address,
						subType: 'metadata',
						type: 'account',
					},
					{
						key: 'misbehavior',
						value: record.toJson(),
					},
				)
			}
		},
	}
}
