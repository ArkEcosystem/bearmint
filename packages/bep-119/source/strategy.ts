import { assert, bytesToHex } from '@bearmint/bep-009'
import type { Account, Cradle, Slasher, StateStore } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { getPunishment, slashAccount } from '@bearmint/bep-101'

import { recordMisbehavior } from './utils.js'

export function makeStrategy(cradle: Cradle): Slasher {
	return {
		async execute(state: StateStore, misbehavior: abci.Misbehavior) {
			assert.defined<abci.Validator>(misbehavior.validator)

			const punishment = getPunishment(
				'@bearmint/bep-119',
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				misbehavior.type,
			)

			if (punishment === undefined) {
				return
			}

			const stakingService = cradle.StakingServiceFactory.make(state)

			// Start slashing
			let validatorAccount = await state
				.getAccountRepository()
				.findByValidatorAddress(bytesToHex(misbehavior.validator.address))

			for (const delegatorAddress of await cradle.StakingServiceFactory.make(state).keysByValidator(
				validatorAccount,
			)) {
				let delegator: Account

				if (delegatorAddress === validatorAccount.address) {
					delegator = validatorAccount
				} else {
					delegator = await state.getAccountRepository().findByAddress(delegatorAddress)
				}

				await slashAccount(
					stakingService,
					delegator.address === validatorAccount.address ? validatorAccount : delegator,
					validatorAccount,
					punishment,
					state.getMilestone().parameters.denominations.stake,
				)

				cradle.DataSink.put(
					'@bearmint/bep-119',
					{
						id: delegator.address,
						subType: 'metadata',
						type: 'account',
					},
					{
						key: 'misbehavior',
						value: (await recordMisbehavior(state, delegator, misbehavior, punishment)).toJson(),
					},
				)

				await state.getAccountRepository().index([delegator])

				// Delegator & Validator were equal so we need to refresh after mutations!
				if (delegator.address === validatorAccount.address) {
					validatorAccount = await state
						.getAccountRepository()
						.findByValidatorAddress(bytesToHex(misbehavior.validator.address))
				}
			}

			await state.getAccountRepository().index([validatorAccount])
		},
	}
}
