import { canonicalizeJson, dot } from '@bearmint/bep-009'
import type {
	Account,
	AccountWithValidator,
	Cradle,
	DataSink,
	KVStore,
	StakingService as Contract,
	StateStore,
} from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import { BEP88Validator } from '@bearmint/bep-018'
import { AccountBalanceWentNegativeException } from '@bearmint/bep-109'

class WrappedValidator {
	readonly #validator: AccountWithValidator
	readonly #proto: BEP88Validator
	readonly #store: KVStore

	public constructor(validator: AccountWithValidator, proto: BEP88Validator, store: KVStore) {
		this.#validator = validator
		this.#proto = proto
		this.#store = store
	}

	public get delegators() {
		return this.#proto.delegators
	}

	public async save() {
		await this.#store.set(this.#validator.address, this.#proto.toBinary())
	}
}

export class StakingService implements Contract {
	readonly #dataSink: DataSink
	readonly #state: StateStore
	readonly #store: KVStore

	public constructor(state: StateStore, dataSink: DataSink) {
		this.#dataSink = dataSink
		this.#state = state
		this.#store = this.#state.getMultiStore().get('@bearmint/bep-088')
	}

	public async allByValidator(validator: AccountWithValidator) {
		try {
			return BEP88Validator.fromBinary(await this.#store.get(validator.address), PROTO_OPTS)
		} catch {
			return new BEP88Validator()
		}
	}

	public async keysByValidator(validator: AccountWithValidator) {
		return Object.keys((await this.allByValidator(validator)).delegators)
	}

	public async valuesByValidator(validator: AccountWithValidator) {
		return Object.values((await this.allByValidator(validator)).delegators)
	}

	public async increaseStake(validator: AccountWithValidator, delegator: Account, stake: bigint) {
		if (await this.#store.missing(validator.address)) {
			await this.#store.set(validator.address, new BEP88Validator().toBinary())
		}

		return this.#run(validator, async (wrappedValidator) => {
			const newStake = dot.get(wrappedValidator.delegators, delegator.address, BigInt(0)) + stake

			dot.set(wrappedValidator.delegators, delegator.address, newStake)
			dot.set(delegator, `stakes.${validator.moniker}`, newStake)

			this.#assertPositiveBalance(delegator, delegator.stakes[validator.moniker])
		})
	}

	public async decreaseStake(validator: AccountWithValidator, delegator: Account, stake: bigint) {
		return this.#run(validator, async (wrappedValidator) => {
			const newStake = dot.get(wrappedValidator.delegators, delegator.address, stake) - stake

			if (newStake === BigInt(0)) {
				dot.forget(wrappedValidator.delegators, delegator.address)
				dot.forget(delegator, `stakes.${validator.moniker}`)
			} else {
				dot.set(wrappedValidator.delegators, delegator.address, newStake)
				dot.set(delegator, `stakes.${validator.moniker}`, newStake)

				this.#assertPositiveBalance(delegator, delegator.stakes[validator.moniker])
			}
		})
	}

	public async multiplyStake(
		validator: AccountWithValidator,
		delegator: Account,
		percentage: number,
	) {
		return this.#run(validator, async (wrappedValidator) => {
			const newStake =
				(dot.get(wrappedValidator.delegators, delegator.address, BigInt(0)) * BigInt(percentage)) /
				BigInt(100)

			if (newStake === BigInt(0)) {
				dot.forget(wrappedValidator.delegators, delegator.address)
				dot.forget(delegator, `stakes.${validator.moniker}`)
			} else {
				dot.set(wrappedValidator.delegators, delegator.address, newStake)
				dot.set(delegator, `stakes.${validator.moniker}`, newStake)

				this.#assertPositiveBalance(delegator, delegator.stakes[validator.moniker])
			}
		})
	}

	public async attach(validator: AccountWithValidator, delegator: Account, stake: bigint) {
		if (await this.#store.missing(validator.address)) {
			await this.#store.set(validator.address, new BEP88Validator().toBinary())
		}

		return this.#run(validator, async (wrappedValidator) => {
			dot.set(wrappedValidator.delegators, delegator.address, stake)
			dot.set(delegator, `stakes.${validator.moniker}`, stake)

			this.#assertPositiveBalance(delegator, delegator.stakes[validator.moniker])
		})
	}

	public async detach(validator: AccountWithValidator, delegator: Account) {
		return this.#run(validator, async (wrappedValidator) => {
			dot.forget(wrappedValidator.delegators, delegator.address)
			dot.forget(delegator, `stakes.${validator.moniker}`)
		})
	}

	async #run(
		validator: AccountWithValidator,
		callback: (wrappedValidator: WrappedValidator) => Promise<void>,
	) {
		const wrappedValidator = await this.#wrap(validator)

		await callback(wrappedValidator)

		this.#aggregatePower(validator, wrappedValidator)

		// Once we reach 0 delegators we delete the entry
		if (Object.values(wrappedValidator.delegators).length === 0) {
			await this.#store.forget(validator.address)

			this.#dataSink.del(
				'@bearmint/bep-088',
				{
					id: validator.address,
					subType: 'metadata',
					type: 'account',
				},
				{
					key: 'delegators',
					value: canonicalizeJson(wrappedValidator.delegators),
				},
			)

			return
		}

		// If we have more than 1 delegator we save the changes
		await wrappedValidator.save()

		this.#dataSink.put(
			'@bearmint/bep-088',
			{
				id: validator.address,
				subType: 'metadata',
				type: 'account',
			},
			{
				key: 'delegators',
				value: canonicalizeJson(wrappedValidator.delegators),
			},
		)
	}

	#aggregatePower(account: AccountWithValidator, validator: WrappedValidator): void {
		account.validator.power = BigInt(0)

		for (const stake of Object.values(validator.delegators)) {
			account.validator.power += BigInt(stake)
		}
	}

	async #wrap(validator: AccountWithValidator) {
		return new WrappedValidator(validator, await this.allByValidator(validator), this.#store)
	}

	#assertPositiveBalance(account: Account, balance: bigint | undefined): void {
		if (balance === undefined) {
			throw new AccountBalanceWentNegativeException(account, BigInt(0))
		}

		if (balance < 0) {
			throw new AccountBalanceWentNegativeException(account, balance)
		}
	}
}

export function makeStakingServiceFactory(cradle: Cradle) {
	return {
		make(state: StateStore) {
			return new StakingService(state, cradle.DataSink)
		},
	}
}
