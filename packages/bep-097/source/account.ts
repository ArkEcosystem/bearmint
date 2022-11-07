import { assert, bytesConcat, bytesToHex } from '@bearmint/bep-009'
import type { AddressFactory, KeyPairFactory, Milestones } from '@bearmint/bep-013'
import {
	deriveEd25519Address,
	deriveSecp256k1Address,
	deriveSr25519Address,
} from '@bearmint/bep-089'
import { getPublicKey as ed25519 } from '@noble/ed25519'
// import { getPublicKey as secp256k1 } from '@noble/secp256k1'
import { generateMnemonic, mnemonicToSeedSync } from '@scure/bip39'
import { wordlist } from '@scure/bip39/wordlists/english.js'

export async function generateAccount({
	addressFactory,
	keyPairFactory,
	mnemonic,
}: {
	addressFactory: AddressFactory
	keyPairFactory: KeyPairFactory
	mnemonic?: string
}) {
	if (mnemonic === undefined) {
		mnemonic = generateMnemonic(wordlist, 256)
	}

	const keyPair = await keyPairFactory.fromMnemonic(mnemonic)

	return {
		address: await addressFactory.fromMnemonic(mnemonic),
		mnemonic,
		privateKey: keyPair.toPrivateKey().toBytes(),
		publicKey: keyPair.toPublicKey().toBytes(),
	}
}

export async function generateAccounts({
	addressFactory,
	countAccounts,
	countValidators,
	distributeInitialSupply,
	initialSupply,
	keyPairFactory,
	milestones,
	state,
}: {
	addressFactory: AddressFactory
	countAccounts: number
	countValidators: number
	distributeInitialSupply: boolean
	keyPairFactory: KeyPairFactory
	milestones: Milestones
	state: Record<string, any>
	initialSupply: string
}) {
	// Generate bearmint accounts...
	const result: any[] = []

	for (let index = 0; index < countAccounts; index++) {
		const account = await generateAccount({
			addressFactory,
			keyPairFactory,
		})

		result.push(account)

		const balance =
			distributeInitialSupply === true
				? (BigInt(initialSupply) / BigInt(countAccounts + countValidators)).toString()
				: initialSupply

		state['app_state'].accounts.push({
			address: account.address.toString(),
			balances: {
				[milestones['*']!.milestones[0]!.parameters.denominations.gas]: balance,
				[milestones['*']!.milestones[0]!.parameters.denominations.reward]: balance,
				[milestones['*']!.milestones[0]!.parameters.denominations.stake]: balance,
				[milestones['*']!.milestones[0]!.parameters.denominations.token]: balance,
			},
			publicKey: bytesToHex(account.publicKey),
		})
	}

	return result
}

export async function generateTendermintAccount({
	keyPairType,
	mnemonic,
}: {
	mnemonic?: string
	keyPairType: string
}) {
	mnemonic ??= generateMnemonic(wordlist, 256)

	let privateKey: Uint8Array | undefined
	let publicKey: Uint8Array | undefined

	if (keyPairType === 'ed25519') {
		privateKey = mnemonicToSeedSync(mnemonic).subarray(0, 32)
		publicKey = await ed25519(privateKey)

		assert.defined<Buffer>(publicKey)

		// https://github.com/oasisprotocol/curve25519-voi/blob/master/primitives/ed25519/ed25519.go#L625-L648
		privateKey = bytesConcat([privateKey, publicKey])
	}

	// if (keyPairType === 'sr25519') {
	// 	const sr25519 = sr25519PairFromSeed(privateKey);

	// 	publicKey = sr25519.publicKey;

	// 	assert.defined<Buffer>(publicKey);

	// 	privateKey = Buffer.concat([sr25519.secretKey, publicKey]);
	// }

	// if (keyPairType === 'secp256k1') {
	// 	privateKey = mnemonicToSeedSync(mnemonic).subarray(0, 32)
	// 	publicKey = secp256k1(privateKey)
	// }

	assert.defined<Buffer>(privateKey)
	assert.defined<Buffer>(publicKey)

	return {
		address: bytesToHex(
			{
				ed25519: deriveEd25519Address,
				secp256k1: deriveSecp256k1Address,
				sr25519: deriveSr25519Address,
			}[keyPairType](publicKey),
		),
		mnemonic,
		privateKey,
		publicKey,
	}
}

// export type GenesisAccount = Awaited<ReturnType<typeof generateAccount>>
// export type TendermintAccount = Awaited<ReturnType<typeof generateTendermintAccount>>
export interface GenesisAccount {
	address: string
	balances: Record<string, string>
	publicKey: string
}
