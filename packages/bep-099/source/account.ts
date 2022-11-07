import type { AccountSerializer, AddressFactory, KeyPairFactory } from '@bearmint/bep-013'
import { BEP22Account } from '@bearmint/bep-018'

export async function makeAccount({
	accountSerializer,
	addressFactory,
	keyPairFactory,
	mnemonic,
}: {
	accountSerializer: AccountSerializer
	addressFactory: AddressFactory
	keyPairFactory: KeyPairFactory
	mnemonic: string
}) {
	const keypair = await keyPairFactory.fromMnemonic(mnemonic)

	return {
		account: await accountSerializer.deserialize(
			BEP22Account.fromJson({
				address: (await addressFactory.fromMnemonic(mnemonic)).toString(),
				publicKey: keypair.toPublicKey().toString(),
			}),
		),
		keypair,
	}
}
