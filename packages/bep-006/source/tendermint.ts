/* eslint-disable @typescript-eslint/naming-convention */
import { denominations } from './fixtures.js'

export const genesisParameters = {
	app_hash: '55419c4d6abdea7ffed10f7265accd8ca11afcf25fcfa60cc0260acd9d08fa0d',
	app_state: {
		accounts: [
			{
				address:
					'bear1kwxk32w3sjcsu7e5e2lhl6fj4gdctcr6ax8edde9dwd7lpdkxeqevhxwzt5azp0kl7em9uf2gq64ju2fknr',
				balances: {
					BEAR: '100000000000000000',
					FIRE: '100000000000000000',
				},
				publicKey:
					'b38d68a9d184b10e7b34cabf7fe932aa1b85e07ae98f96b7256b9bef85b63641965cce12e9d105f6ffb3b2f12a403559',
			},
			{
				address:
					'bear1se4ecex5kxguux9vje80nh6v042xcam0phgjnfw7zznxysuhh03pujdh5gafq00s3nw9u3x2m6lhvz2ftl9',
				publicKey:
					'866b9c64d4b191ce18ac964ef9df4c7d546c776f0dd129a5de10a6624397bbe21e49b7a23a903df08cdc5e44cadebf76',
				validator: {
					address: 'b8e4eac7074603e133b627aa01dcea4d131c6bc6',
					moniker: 'genesis_1',
					power: '1',
					publicKey: '0b95c6245d852c3497b51c2cf9d7c98a1af8a094d5eca63454ce0e4d445df366',
				},
			},
		],
		txs: [],
	},
	chain_id: 'bearmint-testnet',
	consensus_params: {
		block: {
			maxBytes: '22020096',
			maxGas: '-1',
		},
		evidence: {
			maxAgeDuration: '172800000000000',
			maxAgeNumBlocks: '100000',
			maxBytes: '1048576',
		},
		validator: {
			pubKeyTypes: ['ed25519'],
		},
		version: {
			appVersion: '0',
		},
	},
	genesis_time: '2022-05-29T00:25:53.588Z',
	initial_height: '0',
	validators: [
		{
			address: 'b8e4eac7074603e133b627aa01dcea4d131c6bc6',
			moniker: 'genesis_1',
			power: '1',
			pub_key: {
				type: 'tendermint/PubKeyEd25519',
				value: 'C5XGJF2FLDSXtRws+dfJihr4oJTV7KY0VM4OTURd82Y=',
			},
		},
	],
}

export const milestone = {
	blockNumber: '1',
	parameters: {
		application: {
			protocolVersion: '0.0.0',
			semanticVersion: '0.0.0',
		},
		consensus: {
			block: {
				maxBytes: '22020096',
				maxGas: '-1',
			},
			evidence: {
				maxAgeDuration: '172800000000000',
				maxAgeNumBlocks: '100000',
				maxBytes: '1048576',
			},
			validator: {
				pubKeyTypes: ['secp256k1'],
			},
			version: {
				appVersion: '0',
			},
		},
		denominations,
		modules: {
			mandatory: {
				'@bearmint/bep-021': {
					'*': {
						strategy: '@bearmint/bep-115',
					},
				},
				'@bearmint/bep-030': {
					'*': {
						strategy: '@bearmint/bep-033',
					},
				},
				'@bearmint/bep-038': {
					'*': {
						strategy: '@bearmint/bep-042',
					},
				},
				'@bearmint/bep-042': {
					'*': {
						prefix: 'bear',
					},
				},
				'@bearmint/bep-048': {
					'*': {
						strategy: '@bearmint/bep-049',
					},
				},
				'@bearmint/bep-049': {
					'*': {
						'@bearmint/bep-055': { '*': `${1e8}` },
						'@bearmint/bep-056': { '*': `${1e8}` },
						'@bearmint/bep-057': { '*': `${1e8}` },
						'@bearmint/bep-058': { '*': `${1e8}` },
						'@bearmint/bep-059': { '*': `${1e8}` },
						'@bearmint/bep-064': { '*': `${1e8}` },
						'@bearmint/bep-065': { '*': `${1e8}` },
						'@bearmint/bep-066': { '*': `${1e8}` },
						'@bearmint/bep-067': { '*': `${1e8}` },
						'@bearmint/bep-068': { '*': `${1e8}` },
						'@bearmint/bep-104': { '*': `${1e8}` },
						'@bearmint/bep-110': { '*': `${1e8}` },
						'@bearmint/bep-122': { '*': `${1e8}` },
						'@bearmint/bep-126': { '*': `${1e8}` },
						'@bearmint/bep-127': { '*': `${1e8}` },
						'@bearmint/bep-128': { '*': `${1e8}` },
						'@bearmint/bep-129': { '*': `${1e8}` },
						'@bearmint/bep-130': { '*': `${1e8}` },
						'@bearmint/bep-131': { '*': `${1e8}` },
						'@bearmint/bep-132': { '*': `${1e8}` },
						'@bearmint/bep-133': { '*': `${1e8}` },
						'@bearmint/bep-134': { '*': `${1e8}` },
						'@bearmint/bep-135': { '*': `${1e8}` },
						'@bearmint/bep-136': { '*': `${1e8}` },
						'@bearmint/bep-137': { '*': `${1e8}` },
					},
				},
				'@bearmint/bep-051': {
					'*': {
						version: '1.0.0',
					},
				},
				'@bearmint/bep-055': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 256,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-056': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 256,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-057': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-058': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						detachDelegators: true,
					},
				},
				'@bearmint/bep-059': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						list: {
							strategy: ['@bearmint/bep-084', '@bearmint/bep-085', '@bearmint/bep-086'],
						},
					},
				},
				'@bearmint/bep-064': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
						list: {
							secretAlgorithm: [
								'blake2b',
								'blake2s',
								'blake3',
								'keccak_224',
								'keccak_256',
								'keccak_384',
								'keccak_512',
								'ripemd160',
								'sha1',
								'sha256',
								'sha3_224',
								'sha3_256',
								'sha3_384',
								'sha3_512',
								'sha384',
								'sha512',
								'shake128',
								'shake256',
							],
						},
					},
				},
				'@bearmint/bep-065': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-066': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-067': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
							value: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 64,
								min: 1,
							},
						},
						list: {
							type: [
								'base32cid',
								'cid',
								'cidPath',
								'ipfsPath',
								'ipfsSubdomain',
								'ipfsUrl',
								'ipnsPath',
								'ipnsSubdomain',
								'ipnsUrl',
								'multiaddr',
								'multihash',
								'path',
								'peerMultiaddr',
								'subdomain',
								'url',
								'urlOrPath',
							],
						},
					},
				},
				'@bearmint/bep-068': {
					'*': {
						byteLength: {
							data: {
								max: 64,
								min: 32,
							},
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-076': {
					'*': {
						strategy: '@bearmint/bep-077',
					},
				},
				'@bearmint/bep-078': {
					'*': {
						strategy: 'fixed',
					},
				},
				'@bearmint/bep-081': {
					'*': {
						amount: 2e8,
					},
				},
				'@bearmint/bep-086': {
					'*': {
						range: {
							percentage: {
								max: 100,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-087': {
					'*': {
						strategy: '@bearmint/bep-088',
					},
				},
				'@bearmint/bep-088': {
					'*': {
						count: {
							validators: {
								max: 5,
								min: 1,
							},
						},
						mode: 'delegated',
						range: {
							power: {
								max: 0,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-089': {
					'*': {
						retainBlocks: 0,
					},
				},
				'@bearmint/bep-102': {
					'*': {
						strategies: {
							'@bearmint/bep-118': [0, 1, 2], // UNKNOWN, DUPLICATE_VOTE, LIGHT_CLIENT_ATTACK
						},
					},
				},
				'@bearmint/bep-103': {
					'*': {
						strategies: {
							'@bearmint/bep-119': [0, 1, 2], // UNKNOWN, DUPLICATE_VOTE, LIGHT_CLIENT_ATTACK
						},
					},
				},
				'@bearmint/bep-104': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 10,
								min: 1,
							},
							stakes: {
								max: 1,
								min: 0,
							},
						},
						range: {
							stake: {
								max: 10e8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-110': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						regex: {
							moniker: {
								pattern: '^[da-zA-Z](?:[da-zA-Z]|-(?=[da-zA-Z])){1,32}$',
							},
						},
					},
				},
				'@bearmint/bep-118': {
					'*': {
						punishments: [
							{ denomination: denominations.stake, percentage: 10, type: 0 }, // UNKNOWN
							{ denomination: denominations.stake, percentage: 50, type: 1 }, // DUPLICATE_VOTE
							{ denomination: denominations.stake, percentage: 50, type: 2 }, // LIGHT_CLIENT_ATTACK
						],
					},
				},
				'@bearmint/bep-119': {
					'*': {
						punishments: [
							{ denomination: denominations.stake, percentage: 10, type: 0 }, // UNKNOWN
							{ denomination: denominations.stake, percentage: 50, type: 1 }, // DUPLICATE_VOTE
							{ denomination: denominations.stake, percentage: 50, type: 2 }, // LIGHT_CLIENT_ATTACK
						],
					},
				},
				'@bearmint/bep-120': {
					'*': {
						punishments: [{ durations: [256, 512, 1024], type: '*' }],
					},
				},
				'@bearmint/bep-121': {
					'*': {
						punishments: [{ jailSentences: 3, type: '*' }],
					},
				},
				'@bearmint/bep-122': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-124': {
					'*': {
						amount: 2e8,
					},
				},
				'@bearmint/bep-126': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
							uriPrefix: {
								max: 32,
								min: 1,
							},
							uriSuffix: {
								max: 32,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
							policies: {
								max: 6,
								min: 1,
							},
						},
						list: {
							policies: {
								burn: [
									'@bearmint/bep-141',
									'@bearmint/bep-142',
									'@bearmint/bep-143',
									'@bearmint/bep-144',
									'@bearmint/bep-145',
								],
								mint: [
									'@bearmint/bep-141',
									'@bearmint/bep-142',
									'@bearmint/bep-143',
									'@bearmint/bep-144',
									'@bearmint/bep-145',
								],
								transfer: [
									'@bearmint/bep-141',
									'@bearmint/bep-142',
									'@bearmint/bep-143',
									'@bearmint/bep-144',
									'@bearmint/bep-145',
								],
							},
						},
						regex: {
							name: {
								pattern: '^([a-zA-Z0-9_-]){1,128}$',
							},
							symbol: {
								pattern: '^([a-zA-Z0-9_-]){1,128}$',
							},
						},
					},
				},
				'@bearmint/bep-127': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-128': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-129': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-130': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-131': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-132': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-133': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-134': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
							policies: {
								max: 2,
								min: 1,
							},
						},
						list: {
							policies: {
								burn: ['@bearmint/bep-138', '@bearmint/bep-139', '@bearmint/bep-140'],
								mint: ['@bearmint/bep-138', '@bearmint/bep-139', '@bearmint/bep-140'],
								transfer: ['@bearmint/bep-138', '@bearmint/bep-139', '@bearmint/bep-140'],
							},
						},
						range: {
							decimals: {
								max: 32,
								min: 8,
							},
						},
						regex: {
							denomination: {
								pattern: '^([a-zA-Z0-9_-]){1,32}$',
							},
							name: {
								pattern: '^([a-zA-Z0-9_-]){1,32}$',
							},
						},
					},
				},
				'@bearmint/bep-135': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-136': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
				'@bearmint/bep-137': {
					'*': {
						byteLength: {
							memo: {
								max: 256,
								min: 1,
							},
						},
						count: {
							ops: {
								max: 8,
								min: 1,
							},
						},
					},
				},
			},
		},
		transactions: {
			handlers: {
				'@bearmint/bep-055': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-056': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-057': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-058': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-059': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-064': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-065': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-066': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-067': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-068': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-104': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-110': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-122': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-126': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-127': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-128': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-129': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-130': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-131': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-132': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-133': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-134': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-135': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-136': { ranges: ['>=0.0.0'] },
				'@bearmint/bep-137': { ranges: ['>=0.0.0'] },
			},
		},
	},
}
