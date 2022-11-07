import type {
	AccountSerializer,
	AddressFactory,
	PublicKeyFactory,
	StateStore,
} from '@bearmint/bep-013'
import { BEP22Account } from '@bearmint/bep-018'
import { ErrorCode, Exception } from '@bearmint/bep-109'

export async function findOrCreateAccountByPublicKey(
	accountSerializer: AccountSerializer,
	addressFactory: AddressFactory,
	publicKey: string,
	publicKeyFactory: PublicKeyFactory,
	state: StateStore,
) {
	if (await state.getAccountRepository().hasByPublicKey(publicKey)) {
		return state.getAccountRepository().findByPublicKey(publicKey)
	}

	const recoveredPublicKey = await publicKeyFactory.fromString(publicKey)

	if (!(await recoveredPublicKey.verify())) {
		throw new Exception(ErrorCode.TX_MALFORMED_PUBLIC_KEY)
	}

	const result = await accountSerializer.deserialize(
		BEP22Account.fromJson({
			address: (await addressFactory.fromPublicKey(recoveredPublicKey)).toString(),
			publicKey,
		}),
	)

	await state.getAccountRepository().index([result])

	return result
}
