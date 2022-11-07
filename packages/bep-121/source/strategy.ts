import { assert, bytesToHex } from '@bearmint/bep-009'
import type { Cradle, Slasher, StateStore } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { BEP101Misbehavior } from '@bearmint/bep-018'
import { getModuleMilestone } from '@bearmint/bep-021'
import { isGenesis } from '@bearmint/bep-022'
import { getFile } from '@bearmint/bep-120'

import type { Milestone } from './types.js'

export function makeStrategy(cradle: Cradle): Slasher {
	return {
		async execute(state: StateStore, misbehavior: abci.Misbehavior) {
			assert.defined<abci.Validator>(misbehavior.validator)

			const account = await state
				.getAccountRepository()
				.findByValidatorAddress(bytesToHex(misbehavior.validator.address))

			// Already tombstoned, no need to tombstone them again
			if (await state.getMultiStore().get('@bearmint/bep-121').has(account.address)) {
				return
			}

			// We can't jail genesis validators because they serve as fallbacks
			if (isGenesis(cradle.GenesisParameters.validators, account)) {
				return
			}

			// If there is no punishment we can't do anything
			const punishment = getModuleMilestone<Milestone>(
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				'@bearmint/bep-121',
			).punishments.find((p) => p.type.toString() === misbehavior.type.toString() || p.type === '*')

			if (punishment === undefined) {
				return
			}

			// Check the file of the convict
			const file = await getFile(state, account)

			// If we haven't reached the required count yet we stop
			if (file.count < punishment.jailSentences) {
				return
			}

			// We can't tombstone if they are still serving their current sentence
			if (file.jailed === true) {
				return
			}

			/**
			 * If we get to this point we have 2 conditions that have been satisfied:
			 * - The validator has been jailed N times
			 * - The validator has served N sentences
			 *
			 * The result of this is that at (N + 1) we will tombstone
			 */
			await state
				.getMultiStore()
				.get('@bearmint/bep-121')
				.set(account.address, new BEP101Misbehavior(misbehavior).toBinary())

			cradle.DataSink.put(
				'@bearmint/bep-121',
				{
					id: account.address,
					subType: 'metadata',
					type: 'account',
				},
				{
					key: 'misbehavior',
					value: misbehavior.toJson(),
				},
			)
		},
	}
}
