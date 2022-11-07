import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { file, Paths } from '@bearmint/bep-009'

import { generateNodeKeys } from '../../source/node-key.js'

describe('Node Keys', () => {
	it('should 1 node key', async () => {
		file.remove(`${Paths.TM_PATH_CONF}/node_key.json`)

		expect(`${Paths.TM_PATH_CONF}/node_key.json`).toBeMissingFile()

		expect(
			await generateNodeKeys({
				count: 1,
				keyPairType: 'ed25519',
				numberOfValidators: 1,
				path: Paths.TM_PATH_HOME,
			}),
		).toHaveLength(1)

		expect(`${Paths.TM_PATH_CONF}/node_key.json`).toHaveFile()

		file.remove(`${Paths.TM_PATH_CONF}/node_key.json`)
	})

	it('should 2 node keys', async () => {
		file.remove(`${Paths.TM_PATH_HOME}/genesis_1/.tendermint/config/node_key.json`)

		expect(`${Paths.TM_PATH_HOME}/genesis_1/.tendermint/config/node_key.json`).toBeMissingFile()

		expect(
			await generateNodeKeys({
				count: 1,
				keyPairType: 'ed25519',
				numberOfValidators: 2,
				path: Paths.TM_PATH_HOME,
			}),
		).toHaveLength(1)

		expect(`${Paths.TM_PATH_HOME}/genesis_1/.tendermint/config/node_key.json`).toHaveFile()

		file.remove(`${Paths.TM_PATH_HOME}/genesis_1/.tendermint/config/node_key.json`)
	})
})
