import { assert, bytesToHex } from '@bearmint/bep-009'
import type { Cradle, Slasher, StateStore } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { getPunishment, slashAccount } from '@bearmint/bep-101'

import { recordMisbehavior } from './utils.js'

export function makeStrategy(cradle: Cradle): Slasher {
	return {
		async execute(state: StateStore, misbehavior: abci.Misbehavior) {
			assert.defined<abci.Validator>(misbehavior.validator)

			const punishment = getPunishment(
				'@bearmint/bep-118',
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				misbehavior.type,
			)

			if (punishment === undefined) {
				return
			}

			const account = await state
				.getAccountRepository()
				.findByValidatorAddress(bytesToHex(misbehavior.validator.address))

			const stakingService = cradle.StakingServiceFactory.make(state)

			await slashAccount(
				stakingService,
				account,
				account,
				punishment,
				state.getMilestone().parameters.denominations.stake,
			)

			cradle.DataSink.put(
				'@bearmint/bep-118',
				{
					id: account.address,
					subType: 'metadata',
					type: 'account',
				},
				{
					key: 'misbehavior',
					value: (await recordMisbehavior(state, account, misbehavior, punishment)).toJson(),
				},
			)

			await state.getAccountRepository().index([account])
		},
	}
}
