import { NonNullableMap } from '@bearmint/bep-009'
import type { Account, AccountSerializer, AddressFactory, StateStore } from '@bearmint/bep-013'
import { BEP22Account } from '@bearmint/bep-018'
import { ErrorCode, Exception } from '@bearmint/bep-109'

export async function findOrCreateAccountByAddress(
	state: StateStore,
	addressFactory: AddressFactory,
	accountSerializer: AccountSerializer,
	address: string,
) {
	if (await state.getAccountRepository().hasByAddress(address)) {
		return state.getAccountRepository().findByAddress(address)
	}

	const virtualAddress = await addressFactory.fromString(address)

	if (await virtualAddress.verify()) {
		const result = await accountSerializer.deserialize(
			BEP22Account.fromJson({
				address,
			}),
		)

		await state.getAccountRepository().index([result])

		return result
	}

	throw new Exception(ErrorCode.TX_MALFORMED_ADDRESS)
}

export async function allRecipients(
	state: StateStore,
	addressFactory: AddressFactory,
	accountSerializer: AccountSerializer,
	ops: Array<{ recipient: string }>,
	sender?: Account,
) {
	const result = new NonNullableMap<Account>()

	for (const op of ops) {
		if (result.has(op.recipient)) {
			continue
		}

		if (sender !== undefined && sender.address === op.recipient) {
			result.set(op.recipient, sender)
		} else {
			result.set(
				op.recipient,
				await findOrCreateAccountByAddress(state, addressFactory, accountSerializer, op.recipient),
			)
		}
	}

	return result
}
