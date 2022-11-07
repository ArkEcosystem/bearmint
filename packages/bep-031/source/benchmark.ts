import { bench, mnemonic } from '@bearmint/bep-004'
import type {
	FunctionReturning,
	KeyPairFactory,
	PrivateKeyFactory,
	PublicKeyFactory,
	SignatureFactory,
} from '@bearmint/bep-013'

export async function benchKeyPair(args: {
	beforeAll?: CallableFunction
	makeKeyPairFactory: FunctionReturning<KeyPairFactory>
	makePrivateKeyFactory: FunctionReturning<PrivateKeyFactory>
	makePublicKeyFactory: FunctionReturning<PublicKeyFactory>
	makeSignatureFactory: FunctionReturning<SignatureFactory>
	privateKey: string
	publicKey: string
	signatureFail: string
	signaturePass: string
	title: string
}) {
	const keyPairFactory = args.makeKeyPairFactory()
	const privateKeyFactory = args.makePrivateKeyFactory()
	const publicKeyFactory = args.makePublicKeyFactory()
	const signatureFactory = args.makeSignatureFactory()

	const hash = Buffer.from(
		'690a91fc0a7a49bbc5afe9516c1831ca8845f281ef2e414f7dfeb71b5e91a902',
		'hex',
	)

	const signaturePass = Buffer.from(args.signaturePass, 'hex')
	const signatureFail = Buffer.from(args.signaturePass, 'hex')

	return bench(args.title, async ({ mark }) => {
		if (typeof args.beforeAll === 'function') {
			await args.beforeAll()
		}

		const keyPair = await keyPairFactory.fromMnemonic(mnemonic)
		const privateKey = await privateKeyFactory.fromString(args.privateKey)
		const publicKey = await publicKeyFactory.fromString(args.publicKey)

		await mark('KeyPairFactory#fromMnemonic', async () => {
			await keyPairFactory.fromMnemonic(mnemonic)
		})

		await mark('KeyPairFactory#fromPrivateKey', async () => {
			await keyPairFactory.fromPrivateKey(privateKey.toBytes())
		})

		await mark('PrivateKeyFactory#fromBytes', async () => {
			await privateKeyFactory.fromBytes(privateKey.toBytes())
		})

		await mark('PrivateKeyFactory#fromString', async () => {
			await privateKeyFactory.fromString(privateKey.toString())
		})

		await mark('PublicKeyFactory#fromBytes', async () => {
			await publicKeyFactory.fromBytes(publicKey.toBytes())
		})

		await mark('PublicKeyFactory#fromString', async () => {
			await publicKeyFactory.fromString(publicKey.toString())
		})

		await mark('PublicKey#verify', async () => {
			await publicKey.verify()
		})

		await mark('SignatureFactory#sign', async () => {
			await signatureFactory.sign(hash, keyPair)
		})

		await mark('SignatureFactory#verify (pass)', async () => {
			await (await signatureFactory.from(hash, publicKey.toBytes(), signaturePass)).verify()
		})

		await mark('SignatureFactory#verify (fail)', async () => {
			await (await signatureFactory.from(hash, publicKey.toBytes(), signatureFail)).verify()
		})
	})
}
