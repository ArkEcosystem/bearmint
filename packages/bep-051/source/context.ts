import { assert } from '@bearmint/bep-009'
import type { Account, Cradle, StateStore, Tx, TxManifest } from '@bearmint/bep-013'
import type { AnyMessage } from '@bearmint/bep-018'
import { getModuleMilestone } from '@bearmint/bep-021'

import { positiveNumber } from './assert.js'
import {
	allRecipients,
	findOrCreateAccountByAddress,
} from './utilities/find-or-create-account-by-address.js'
import { getSender } from './utilities/get-sender.js'
import { getSenderWithRecipient } from './utilities/get-sender-with-recipient.js'

export function createToolkit(
	cradle: Pick<
		Cradle,
		'AccountSerializer' | 'AddressFactory' | 'CommittedState' | 'ServiceProviderRepository'
	>,
	manifest: TxManifest,
	msg: AnyMessage,
	candidateState: StateStore,
	tx: Tx,
) {
	return {
		async findOrCreateAccountByAddress(address: string) {
			return findOrCreateAccountByAddress(
				candidateState,
				cradle.AddressFactory,
				cradle.AccountSerializer,
				address,
			)
		},
		async getActiveValidatorAddresses() {
			const activeValidators = new Set<string>()

			for (const validatorAddress of await candidateState
				.getAccountRepository()
				.allValidatorAddresses()) {
				const account = await candidateState
					.getAccountRepository()
					.findByValidatorAddress(validatorAddress)

				if (
					await candidateState.getMultiStore().get('@bearmint/bep-058').missing(account.address)
				) {
					activeValidators.add(validatorAddress)
				}
			}

			return [...activeValidators]
		},
		getBalance(account: Account, denomination: string, errorKey?: string | undefined) {
			const result: bigint | undefined = account.balances[denomination]

			positiveNumber(result, {
				key: errorKey ?? `sender.balances.${denomination}`,
			})

			assert.defined(result)

			return result
		},
		getModuleMilestone<T = Record<string, any>>(
			name?: string | undefined,
			version?: string | undefined,
		) {
			return getModuleMilestone<T>(
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				name ?? manifest.name(),
				version ?? manifest.version(),
			)
		},
		async getRecipientsFromOps(sender?: Account) {
			return allRecipients(
				candidateState,
				cradle.AddressFactory,
				cradle.AccountSerializer,
				msg['ops'],
				sender,
			)
		},
		async getSender() {
			return getSender(candidateState, tx)
		},
		async getSenderWithRecipient() {
			return getSenderWithRecipient(candidateState, tx)
		},
	}
}
