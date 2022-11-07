import type { Cradle, ValidatorRewarderStrategy } from '@bearmint/bep-013'
import { makeStrategy as BEP80 } from '@bearmint/bep-080'
import { makeStrategy as BEP81 } from '@bearmint/bep-081'

export function makeStrategy(cradle: Cradle): ValidatorRewarderStrategy {
	return {
		async execute(state, account, denomination) {
			return (
				(await cradle.Container.build<ValidatorRewarderStrategy>(BEP80).execute(
					state,
					account,
					denomination,
				)) +
				(await cradle.Container.build<ValidatorRewarderStrategy>(BEP81).execute(
					state,
					account,
					denomination,
				))
			)
		},
	}
}
