import { bytesToBase64, file } from '@bearmint/bep-009'

import { generateTendermintAccount } from './account.js'
import { getPrivateKeyType } from './tendermint.js'
import { getMoniker } from './utils.js'

export async function writeNodeKey({ keyPairType, path, privateKeyType }) {
	const nodeKeyAccount = await generateTendermintAccount({ keyPairType })

	path = `${path}/config/node_key.json`

	console.log(`Writing [${path}]`)

	file.writeJson(path, {
		id: nodeKeyAccount.address,
		priv_key: {
			type: privateKeyType,
			value: bytesToBase64(nodeKeyAccount.privateKey),
		},
	})

	return nodeKeyAccount
}

export async function generateNodeKeys({ count, keyPairType, numberOfValidators, path }) {
	const result: string[] = []

	for (let index = 0; index < count; index++) {
		const moniker = getMoniker(index + 1)

		const { address } = await writeNodeKey({
			keyPairType,
			path: numberOfValidators === 1 ? path : `${path}/${moniker}/.tendermint`,
			privateKeyType: getPrivateKeyType(keyPairType),
		})

		result.push(`${address}@${moniker}:26656`)
	}

	return result
}
