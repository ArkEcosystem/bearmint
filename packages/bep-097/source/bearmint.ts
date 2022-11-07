import { resolve } from 'node:path'

import { bytesToHex, dirname, file } from '@bearmint/bep-009'

export async function persistBearmint({ accounts, path, validators }) {
	console.log(`Writing [${path}/config/config.toml]`)

	file.write(
		`${path}/config/config.toml`,
		file.read(resolve(dirname(import.meta.url), '../bearmint.toml')),
	)

	const validatorsCopy = [...validators]

	for (let index = 0; index < validatorsCopy.length; index++) {
		validatorsCopy[index] = {
			address: validatorsCopy[index].address,
			mnemonic: validatorsCopy[index].mnemonic,
			name: validatorsCopy[index].moniker,
			privateKey: bytesToHex(validatorsCopy[index].privateKey),
			publicKey: bytesToHex(validatorsCopy[index].publicKey),
		}
	}

	console.log(`Writing [${path}/accounts.json]`)

	file.writeJson(`${path}/accounts.json`, {
		accounts: accounts.map((account) => ({
			address: account.address.toString(),
			mnemonic: account.mnemonic,
			name: validatorsCopy.find(({ mnemonic }) => account.mnemonic === mnemonic)?.moniker,
			privateKey: bytesToHex(account.privateKey),
			publicKey: bytesToHex(account.publicKey),
		})),
		validators: validators.map((validator) => ({
			address: validator.address,
			mnemonic: validator.mnemonic,
			name: validator.moniker,
			privateKey: bytesToHex(validator.privateKey),
			publicKey: bytesToHex(validator.publicKey),
		})),
	})
}
