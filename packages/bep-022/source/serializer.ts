import { assert, canonicalizeJson, dot, uniq } from '@bearmint/bep-009'
import type {
	Account,
	AccountPropertySerializer,
	AccountSerializer,
	ClassOrFunctionReturning,
	Cradle,
} from '@bearmint/bep-013'
import { BEP22Account } from '@bearmint/bep-018'

export function makeAccountSerializer(cradle: Cradle): AccountSerializer {
	const macros: Record<string, AccountPropertySerializer> = {}

	return {
		async deserialize(account: BEP22Account) {
			assert.defined(account.address)

			const result: Account = {
				address: account.address,
				balances: account.balances ?? {},
				lockedBalances: account.lockedBalances ?? {},
				metadata: account.metadata !== undefined ? (account.metadata.toJson() as object) : {},
				moniker: account.moniker,
				nonce: account.nonce ?? BigInt(0),
				publicKey: account.publicKey,
				stakes: account.stakes ?? {},
			}

			if (account.validator !== undefined) {
				result.validator = {
					address: account.validator.address,
					power: account.validator.power,
					publicKey: account.validator.publicKey,
				}
			}

			const milestone = cradle.CommittedState.getMilestone()

			for (const denomination of uniq(Object.values(milestone.parameters.denominations))) {
				if (result.balances[denomination] === undefined) {
					result.balances[denomination] = BigInt(0)
				}

				if (result.lockedBalances[denomination] === undefined) {
					result.lockedBalances[denomination] = BigInt(0)
				}
			}

			for (const [property, serializer] of Object.entries(macros)) {
				dot.set(result, property, await serializer.deserialize(dot.get(result, property)))
			}

			return result
		},
		macro(property: string, serializer: ClassOrFunctionReturning<AccountPropertySerializer>) {
			macros[property] = cradle.Container.build(serializer)
		},
		async serialize(account: Account) {
			for (const [property, serializer] of Object.entries(macros)) {
				dot.set(account, property, await serializer.serialize(dot.get(account, property)))
			}

			return BEP22Account.fromJson(canonicalizeJson(account))
		},
	}
}
