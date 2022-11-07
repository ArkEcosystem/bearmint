import { assert, bytesToHex, canonicalizeJson } from '@bearmint/bep-009'
import type {
	Cradle,
	DelegatorRewarder,
	DelegatorRewarderStrategy,
	FunctionReturning,
} from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import { abci, BEP59Strategy } from '@bearmint/bep-018'
import { denom } from '@bearmint/bep-021'

/**
 * `getCandidateBlockProposer` can't be trusted to be the original proposer
 *
 * @see https://github.com/tendermint/tendermint/discussions/8326
 * @see https://github.com/cosmos/cosmos-sdk/blob/main/x/distribution/abci.go
 */
export function makeRewarder(cradle: Cradle): DelegatorRewarder {
	return {
		async execute(state, reward) {
			const validator = await state
				.getAccountRepository()
				.findByValidatorAddress(bytesToHex(state.getCandidateBlockProposer()))

			assert.defined<object>(validator.validator)

			const validatorState = await cradle.StakingServiceFactory.make(state).allByValidator(
				validator,
			)

			if (Object.keys(validatorState.delegators).length === 0) {
				return []
			}

			// Distribution Strategies are optional so we should exit if the validator has none. Otherwise we'll crash!
			if (await state.getMultiStore().get('@bearmint/bep-059').missing(validator.address)) {
				return []
			}

			const distributionStrategy = BEP59Strategy.fromBinary(
				await state.getMultiStore().get('@bearmint/bep-059').get(validator.address),
				PROTO_OPTS,
			)

			// Build the strategy
			const calculateShare = cradle.Container.build(
				cradle.StrategyRegistry.get<FunctionReturning<DelegatorRewarderStrategy>>(
					'@bearmint/bep-083',
					distributionStrategy.strategy,
				),
			)

			/* eslint-disable sort-keys-fix/sort-keys-fix */
			cradle.Logger.debug('%s', {
				module: '@bearmint/bep-083',
				action: 'execute',
				strategy: distributionStrategy.strategy,
			})
			/* eslint-enable sort-keys-fix/sort-keys-fix */

			const events: abci.Event[] = []

			for (const address of await cradle.StakingServiceFactory.make(state).keysByValidator(
				validator,
			)) {
				// No point in rewarding ourselves...
				if (address === validator.address) {
					continue
				}

				const delegator = await state.getAccountRepository().findByAddress(address)

				await calculateShare.execute(state, validator, delegator, reward, denom(state, 'reward'))

				await state.getAccountRepository().index([delegator, validator])

				events.push(
					new abci.Event({
						attributes: [
							new abci.EventAttribute({
								key: 'delegator.address',
								value: delegator.address,
							}),
							new abci.EventAttribute({
								key: 'delegator.balances',
								value: JSON.stringify(canonicalizeJson(delegator.balances)),
							}),
							new abci.EventAttribute({
								key: 'validator.address',
								value: validator.address,
							}),
							new abci.EventAttribute({
								key: 'validator.balances',
								value: JSON.stringify(canonicalizeJson(validator.balances)),
							}),
						],
						type: 'delegator.reward',
					}),
				)
			}

			return events
		},
	}
}
