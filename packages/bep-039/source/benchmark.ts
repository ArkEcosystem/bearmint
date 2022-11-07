import { bench, mnemonic } from '@bearmint/bep-004'
import type {
	AddressFactory,
	FunctionReturning,
	PrivateKeyFactory,
	PublicKeyFactory,
} from '@bearmint/bep-013'

export async function benchAddress(args: {
	address: string
	beforeAll?: CallableFunction
	makeAddressFactory: FunctionReturning<AddressFactory>
	makePrivateKeyFactory: FunctionReturning<PrivateKeyFactory>
	makePublicKeyFactory: FunctionReturning<PublicKeyFactory>
	privateKey: string
	publicKey: string
	title: string
}) {
	const addressFactory = args.makeAddressFactory()
	const privateKeyFactory = args.makePrivateKeyFactory()
	const publicKeyFactory = args.makePublicKeyFactory()

	return bench(args.title, async ({ mark }) => {
		if (typeof args.beforeAll === 'function') {
			await args.beforeAll()
		}

		const address = await addressFactory.fromString(args.address)
		const privateKey = await privateKeyFactory.fromString(args.privateKey)
		const publicKey = await publicKeyFactory.fromString(args.publicKey)

		await mark('fromMnemonic', async () => {
			await addressFactory.fromMnemonic(mnemonic)
		})

		await mark('fromPublicKey', async () => {
			await addressFactory.fromPublicKey(publicKey)
		})

		await mark('fromPrivateKey', async () => {
			await addressFactory.fromPrivateKey(privateKey)
		})

		await mark('fromString', async () => {
			await addressFactory.fromString(args.address)
		})

		await mark('fromBytes', async () => {
			await addressFactory.fromBytes(address.toBytes())
		})
	})
}
