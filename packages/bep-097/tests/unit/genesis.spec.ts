/* eslint-disable security/detect-non-literal-fs-filename */
import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { file, Paths, zeit } from '@bearmint/bep-009'
import { makeKeyPairFactory } from '@bearmint/bep-032'
import { makeAddressFactory } from '@bearmint/bep-042'

import { getHomePath, makeNode } from '../../source/genesis.js'

describe('Genesis', () => {
	it(`should return ${Paths.TM_PATH_HOME}`, async () => {
		expect(getHomePath(1)).toStrictEqual(Paths.TM_PATH_HOME)
	})

	it(`should return ${Paths.BM_PATH_HOME}`, async () => {
		expect(getHomePath(0)).toStrictEqual(Paths.BM_PATH_HOME)
	})

	it('should generate `ed25519` configuration files with `distributeInitialSupply=true`', async () => {
		file.remove(Paths.BM_PATH_ACCS)
		file.remove(Paths.TM_PATH_CONF)

		expect(Paths.TM_PATH_CONF).toBeMissingFile()
		expect(Paths.BM_PATH_ACCS).toBeMissingFile()
		expect(Paths.TM_PATH_CONF_NODE_KEY).toBeMissingFile()
		expect(Paths.TM_PATH_CONF_GENESIS).toBeMissingFile()
		expect(`${Paths.TM_PATH_CONF}/priv_validator_key`).toBeMissingFile()
		expect(Paths.TM_PATH_CONF_PRIV_VALIDATOR_KEY).toBeMissingFile()

		await makeNode({
			distributeInitialSupply: true,
			entities: {
				accounts: 1,
				nodes: 1,
				validators: 1,
			},
			genesis: {
				chainId: 'bearmint-livenet',
				consensusParameters: {},
				genesisTime: zeit.toUnix(),
				keyPairType: 'ed25519',
			},
			milestones: {
				'*': {
					blockNumber: '1',
					milestones: [
						{
							blockNumber: '1',
							parameters: {
								consensus: {},
								denominations: {
									gas: 'BEAR',
									reward: 'BEAR',
									stake: 'BEAR',
									token: 'BEAR',
								},
								modules: {
									mandatory: {
										'@bearmint/bep-088': {
											'*': { validatorCount: { min: 3 } },
										},
									},
								},
								transactions: {},
							},
						},
					],
				},
			},
			services: {
				addressFactory: makeAddressFactory(makeKeyPairFactory(), 'bear'),
				keyPairFactory: makeKeyPairFactory(),
			},
			state: {
				accounts: [],
				initialSupply: `${1e8}`,
				txs: [],
			},
		})

		expect(Paths.TM_PATH_CONF).toHaveFile()
		expect(Paths.BM_PATH_ACCS).toHaveFile()
		expect(Paths.TM_PATH_CONF_NODE_KEY).toHaveFile()
		expect(Paths.TM_PATH_CONF_GENESIS).toHaveFile()
		expect(Paths.TM_PATH_CONF_PRIV_VALIDATOR_KEY).toHaveFile()

		file.remove(Paths.BM_PATH_ACCS)
		file.remove(Paths.TM_PATH_CONF)
	})

	it('should generate `ed25519` configuration files with `distributeInitialSupply=false`', async () => {
		file.remove(Paths.BM_PATH_ACCS)
		file.remove(Paths.TM_PATH_CONF)

		expect(Paths.TM_PATH_CONF).toBeMissingFile()
		expect(Paths.BM_PATH_ACCS).toBeMissingFile()
		expect(Paths.TM_PATH_CONF_NODE_KEY).toBeMissingFile()
		expect(Paths.TM_PATH_CONF_GENESIS).toBeMissingFile()
		expect(`${Paths.TM_PATH_CONF}/priv_validator_key`).toBeMissingFile()
		expect(Paths.TM_PATH_CONF_PRIV_VALIDATOR_KEY).toBeMissingFile()

		await makeNode({
			distributeInitialSupply: false,
			entities: {
				accounts: 1,
				nodes: 1,
				validators: 1,
			},
			genesis: {
				chainId: 'bearmint-livenet',
				consensusParameters: {},
				genesisTime: zeit.toUnix(),
				keyPairType: 'ed25519',
			},
			milestones: {
				'*': {
					blockNumber: '1',
					milestones: [
						{
							blockNumber: '1',
							parameters: {
								consensus: {},
								denominations: {
									gas: 'BEAR',
									reward: 'BEAR',
									stake: 'BEAR',
									token: 'BEAR',
								},
								modules: {
									mandatory: {
										'@bearmint/bep-088': {
											'*': { validatorCount: { min: 3 } },
										},
									},
								},
								transactions: {},
							},
						},
					],
				},
			},
			services: {
				addressFactory: makeAddressFactory(makeKeyPairFactory(), 'bear'),
				keyPairFactory: makeKeyPairFactory(),
			},
			state: {
				accounts: [],
				initialSupply: `${1e8}`,
				txs: [],
			},
		})

		expect(Paths.TM_PATH_CONF).toHaveFile()
		expect(Paths.BM_PATH_ACCS).toHaveFile()
		expect(Paths.TM_PATH_CONF_NODE_KEY).toHaveFile()
		expect(Paths.TM_PATH_CONF_GENESIS).toHaveFile()
		expect(Paths.TM_PATH_CONF_PRIV_VALIDATOR_KEY).toHaveFile()

		file.remove(Paths.BM_PATH_ACCS)
		file.remove(Paths.TM_PATH_CONF)
	})

	// it('should generate `secp256k1` configuration files', async () => {
	// 	file.remove(Paths.BM_PATH_ACCS)
	// 	file.remove(Paths.TM_PATH_CONF)

	// 	expect(Paths.TM_PATH_CONF).toBeMissingFile()
	// 	expect(Paths.BM_PATH_ACCS).toBeMissingFile()
	// 	expect(Paths.TM_PATH_CONF_NODE_KEY).toBeMissingFile()
	// 	expect(Paths.TM_PATH_CONF_GENESIS).toBeMissingFile()
	// 	expect(`${Paths.TM_PATH_CONF}/priv_validator_key`).toBeMissingFile()
	// 	expect(Paths.TM_PATH_CONF_PRIV_VALIDATOR_KEY).toBeMissingFile()

	// 	await makeNode({
	// 		entities: {
	// 			accounts: 10,
	// 			nodes: 1,
	// 			validators: 1,
	// 		},
	// 		state: {
	// 			accounts: [],
	// 			initialSupply: `${1e8}`,
	// 			txs: [],
	// 		},
	// 		genesis: {
	// 			chainId: 'bearmint-livenet',
	// 			consensusParameters: {},
	// 			genesisTime: zeit.toUnix(),
	// 			keyPairType: 'secp256k1',
	// 		},
	// 		milestones: {
	// 			'*': {
	// 				blockNumber: '1',
	// 				milestones: [
	// 					{
	// 						blockNumber: '1',
	// 						parameters: {
	// 							consensus: {},
	// 							denominations: {},
	// 							modules: {
	// 								mandatory: {
	// 									'@bearmint/bep-088': {
	// 										'*': { validatorCount: { min: 3 } },
	// 									},
	// 								},
	// 							},
	// 							transactions: {},
	// 						},
	// 					},
	// 				],
	// 			},
	// 		},
	// 		services: {
	// 			addressFactory: makeAddressFactory(makeKeyPairFactory(), 'bear'),
	// 			keyPairFactory: makeKeyPairFactory(),
	// 		},
	// 	})

	// 	expect(Paths.TM_PATH_CONF).toHaveFile()
	// 	expect(Paths.BM_PATH_ACCS).toHaveFile()
	// 	expect(Paths.TM_PATH_CONF_NODE_KEY).toHaveFile()
	// 	expect(Paths.TM_PATH_CONF_GENESIS).toHaveFile()
	// 	expect(Paths.TM_PATH_CONF_PRIV_VALIDATOR_KEY).toHaveFile()

	// 	file.remove(Paths.BM_PATH_ACCS)
	// 	file.remove(Paths.TM_PATH_CONF)
	// })
})
