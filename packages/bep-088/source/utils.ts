import { BN } from '@bearmint/bep-009'
import type {
	AccountRepository,
	AccountWithValidator,
	EventDispatcher,
	GenesisValidator,
	StateStore,
} from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'
import { DoesNotSatisfyElectionConditionsError, Exception } from '@bearmint/bep-109'

export function sortValidators(validators: AccountWithValidator[]) {
	return validators.sort((a, b) => {
		const result = BN.comparedTo(b.validator.power, a.validator.power)

		if (result !== 0) {
			return result
		}

		if (a.validator.publicKey === b.validator.publicKey) {
			throw new Error(
				`The balance and public key of both validators are identical. Validator [${a.moniker}] appears twice in the list.`,
			)
		}

		return a.validator.publicKey.localeCompare(b.validator.publicKey, 'en')
	})
}

export function inPowerRange(account: AccountWithValidator, range: { min: number; max: number }) {
	if (range.max === 0) {
		return account.validator.power >= range.min
	}

	return BN.isBetween(account.validator.power, BigInt(range.min), BigInt(range.max))
}

export async function gatherEligibleValidators(
	state: StateStore,
	eventDispatcher: EventDispatcher,
	range: { min: number; max: number },
) {
	const candidates: AccountWithValidator[] = []

	for (const address of await state.getAccountRepository().allValidatorAddresses()) {
		const account = await state.getAccountRepository().findByValidatorAddress(address)

		try {
			// Modules that want to prevent election will throw `DoesNotSatisfyElectionConditionsError`
			await eventDispatcher.dispatchSerial(Event.ValidatorCandidateElecting, {
				account,
				candidates,
				state,
			})
		} catch (error) {
			if (error instanceof DoesNotSatisfyElectionConditionsError) {
				continue
			}

			throw error
		}

		if (inPowerRange(account, range)) {
			candidates.push(account)
		}

		await eventDispatcher.dispatchSerial(Event.ValidatorCandidateElected, {
			account,
			candidates,
			state,
		})
	}

	return candidates
}

export async function electValidators(
	accountRepository: AccountRepository,
	accounts: AccountWithValidator[],
	validatorCount: { min: number; max: number },
	genesis: GenesisValidator[],
) {
	// 1. If we don't have enough accounts for elections we need to fill in some genesis validators!
	if (accounts.length < validatorCount.min) {
		for (const fallback of genesis) {
			accounts.push(await accountRepository.findByValidatorAddress(fallback.address))
		}
	}

	// 2. If we for some reason still don't have enough accounts for elections we need to panic!
	if (accounts.length < validatorCount.min) {
		throw new Exception(
			`Expected at least (${validatorCount.min}) validators but only got (${accounts.length})`,
		)
	}

	if (validatorCount.max === 0) {
		return sortValidators(accounts).slice(0, validatorCount.min)
	}

	accounts = sortValidators(accounts).slice(0, validatorCount.max)

	if (accounts.length > validatorCount.max) {
		throw new Exception(
			`Expected at most (${validatorCount.max}) validators but got (${accounts.length})`,
		)
	}

	return accounts
}
