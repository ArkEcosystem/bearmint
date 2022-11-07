import { assert, inRange } from '@bearmint/bep-009'
import type {
	Account,
	AccountWithValidator,
	ServiceProviderRepository,
	StakingService,
	StateStore,
} from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { getModuleMilestone } from '@bearmint/bep-021'
import { multiplyBalance, multiplyLockedBalance } from '@bearmint/bep-022'

interface Punishment {
	denomination: string
	percentage: number
	type: number
}

export function getPunishment(
	name: string,
	serviceProviderRepository: ServiceProviderRepository,
	committedState: StateStore,
	type: abci.MisbehaviorType,
) {
	const punishment: Punishment | undefined = getModuleMilestone<{
		punishments: Punishment[]
	}>(serviceProviderRepository, committedState, name).punishments.find((p) => p.type === type)

	assert.defined<object>(punishment)

	// Percentages must be unsigned integers
	if (!Number.isInteger(punishment.percentage)) {
		throw new TypeError(
			`Expected percentage to be a number but received (${typeof punishment.percentage})`,
		)
	}

	// Percentages must be unsigned integers between 1 and 100
	if (!inRange(punishment.percentage, 1, 100)) {
		throw new Error(
			`Expected percentage to be a number between 1 and 100 but received (${punishment.percentage})`,
		)
	}

	// Explicit 0 means no slashing
	if (punishment.percentage === 0) {
		return
	}

	return punishment
}
export async function slashAccount(
	stakingService: StakingService,
	delegator: Account,
	validator: AccountWithValidator,
	punishment: Punishment,
	stakeDenomination: string,
) {
	const { denomination, percentage } = punishment

	// When the slashing and staking denominations are different we slash the tokens directly
	if (denomination !== stakeDenomination) {
		multiplyBalance(delegator, percentage, denomination)

		return
	}

	// When the slashing and staking denominations are the same we slash the locked tokens and stake
	multiplyLockedBalance(delegator, percentage, denomination)

	await stakingService.multiplyStake(validator, delegator, percentage)
}
