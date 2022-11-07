import { bytesToHex, canonicalizeJson } from '@bearmint/bep-009'
import type {
	Cradle,
	FunctionReturning,
	ValidatorRewarder,
	ValidatorRewarderStrategy,
} from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'
import { getModuleMilestone } from '@bearmint/bep-021'

/**
 * `getCandidateBlockProposer` can't be trusted to be the original proposer
 *
 * @see https://github.com/tendermint/tendermint/discussions/8326
 * @see https://github.com/cosmos/cosmos-sdk/blob/main/x/distribution/abci.go
 */
export function makeRewarder(cradle: Cradle): ValidatorRewarder {
	return {
		async execute(state) {
			const tendermintAddress: string = bytesToHex(state.getCandidateBlockProposer())

			if (!(await state.getAccountRepository().hasByValidatorAddress(tendermintAddress))) {
				throw new Error(`Validator (${tendermintAddress}) does not exist`)
			}

			const validator = await state.getAccountRepository().findByValidatorAddress(tendermintAddress)

			const reward = await cradle.Container.build(
				cradle.StrategyRegistry.get<FunctionReturning<ValidatorRewarderStrategy>>(
					'@bearmint/bep-078',
					getModuleMilestone<{
						strategy: string
					}>(cradle.ServiceProviderRepository, cradle.CommittedState, '@bearmint/bep-078').strategy,
				),
			).execute(state, validator, state.getMilestone().parameters.denominations.reward)

			await state.getAccountRepository().index([validator])

			return {
				events: [
					new abci.Event({
						attributes: [
							{
								key: 'address',
								value: validator.address,
							},
							{
								key: 'balances',
								value: JSON.stringify(canonicalizeJson(validator.balances)),
							},
						],
						type: 'validator.reward',
					}),
				],
				reward,
			}
		},
	}
}
