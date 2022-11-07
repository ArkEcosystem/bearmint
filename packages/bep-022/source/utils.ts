import type { AccountWithValidator, GenesisValidator } from '@bearmint/bep-013'

export function isGenesis(validators: GenesisValidator[], account: AccountWithValidator) {
	return validators.some(({ address }) => address === account.validator.address)
}
