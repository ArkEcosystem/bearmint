import { bytesToBase64, bytesToHex, file } from '@bearmint/bep-009'
import type { AddressFactory, KeyPairFactory, Milestones } from '@bearmint/bep-013'

import { generateAccount, generateTendermintAccount } from './account.js'
import { getPrivateKeyType, getPublicKeyType } from './tendermint.js'
import { getMoniker } from './utils.js'

export function persistValidatorKey({ account, path, type }) {
	console.log(`Writing [${path}/config/priv_validator_key.json]`)

	file.writeJson(`${path}/config/priv_validator_key.json`, {
		address: account.address,
		priv_key: {
			type: getPrivateKeyType(type),
			value: bytesToBase64(account.privateKey),
		},
		pub_key: {
			type: getPublicKeyType(type),
			value: bytesToBase64(account.publicKey),
		},
	})

	file.writeJson(`${path}/data/priv_validator_state.json`, {
		height: '0',
		round: 0,
		step: 0,
	})
}

export async function generateValidators({
	accounts,
	addressFactory,
	countAccounts,
	countValidators,
	distributeInitialSupply,
	initialSupply,
	keyPairFactory,
	keyPairType,
	milestones,
	state,
}: {
	accounts: any[]
	addressFactory: AddressFactory
	countAccounts: number
	countValidators: number
	distributeInitialSupply: boolean
	keyPairFactory: KeyPairFactory
	keyPairType: string
	milestones: Milestones
	state: Record<string, any>
	initialSupply: string
}) {
	const validators: any[] = []

	for (let power = 0; power < countValidators; power++) {
		const validator = await generateTendermintAccount({ keyPairType })
		const account = await generateAccount({
			addressFactory,
			keyPairFactory,
			mnemonic: validator.mnemonic,
		})
		const moniker = getMoniker(power + 1)

		accounts.push(account)

		validators.push({
			...validator,
			moniker,
		})

		const balance =
			distributeInitialSupply === true
				? (BigInt(initialSupply) / BigInt(countAccounts + countValidators)).toString()
				: '0'

		state['app_state'].accounts.push({
			address: account.address.toString(),
			balances: {
				[milestones['*']!.milestones[0]!.parameters.denominations.gas]: balance,
				[milestones['*']!.milestones[0]!.parameters.denominations.reward]: balance,
				[milestones['*']!.milestones[0]!.parameters.denominations.stake]: balance,
				[milestones['*']!.milestones[0]!.parameters.denominations.token]: balance,
			},
			moniker,
			publicKey: bytesToHex(account.publicKey),
			validator: {
				address: validator.address,
				power: String(Number(power) + 1),
				publicKey: bytesToHex(validator.publicKey),
			},
		})

		state['validators'].push({
			address: validator.address,
			name: moniker,
			power: String(Number(power) + 1),
			pub_key: {
				type: getPublicKeyType(keyPairType),
				value: bytesToBase64(validator.publicKey),
			},
		})
	}

	return validators
}
