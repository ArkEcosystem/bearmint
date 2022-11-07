import { resolve } from 'node:path'

import { dirname, file, regexReplace } from '@bearmint/bep-009'

export function getPrivateKeyType(type: string) {
	return {
		ed25519: 'tendermint/PrivKeyEd25519',
		secp256k1: 'tendermint/PrivKeySecp256k1',
	}[type]
}

export function getPublicKeyType(type: string) {
	return {
		ed25519: 'tendermint/PubKeyEd25519',
		secp256k1: 'tendermint/PubKeySecp256k1',
	}[type]
}

export function modifyTendermintConfig(path: string, moniker: string, persistentPeers: string[]) {
	let data = file.read(resolve(dirname(import.meta.url), '../tendermint.toml'))

	data = regexReplace(data, /moniker = "(.*)"/, `moniker = "${moniker}"`)

	data = regexReplace(
		data,
		/persistent_peers = "(.*)"/,
		`persistent_peers = "${persistentPeers.join(',')}"`,
	)

	console.log(`Writing [${path}/config/config.toml]`)

	file.write(`${path}/config/config.toml`, data)

	console.log(`Writing [${path}/data/priv_validator_state.json]`)

	file.writeJson(`${path}/data/priv_validator_state.json`, {
		height: '0',
		round: 0,
		step: 0,
	})
}
