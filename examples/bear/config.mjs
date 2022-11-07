/* eslint-disable @typescript-eslint/naming-convention */

import { semver } from '../../packages/bep-009/distribution/index.js'
import { makeKeyPairFactory } from '../../packages/bep-033/distribution/index.js'
import { makeAddressFactory } from '../../packages/bep-042/distribution/index.js'
import { consensusParameters, keyPairType } from '../config.base.mjs'

const keyPairFactory = makeKeyPairFactory()

export const BEAR = {
	distributeInitialSupply: true,
	genesis: {
		chainId: 'bearmint-testnet',
		consensusParameters,
		genesisTime: +Date.now(),
		keyPairType,
	},
	milestones: {
		'*': {
			blockNumber: '1',
			milestones: [
				{
					blockNumber: '1',
					parameters: {
						application: {
							protocolVersion: '0.0.0',
							semanticVersion: '0.0.0',
						},
						consensus: {
							block: {
								max_bytes: '22020096',
								max_gas: '-1',
								time_iota_ms: '1000',
							},
							evidence: {
								max_age_duration: {
									nanos: 1,
									seconds: (
										BigInt(consensusParameters.evidence.max_age_duration) / BigInt(10e8)
									).toString(),
								},
								max_age_num_blocks: '100000',
								max_bytes: '1048576',
							},
							validator: {
								pub_key_types: [keyPairType],
							},
							version: {
								app_version: semver.toNumber('0.0.0').toString(),
							},
						},
						denominations: {
							gas: 'BEAR',
							reward: 'BEAR',
							stake: 'BEAR',
							token: 'BEAR',
						},
						// denominations: {
						// 	gas: 'FIRE',
						// 	reward: 'GOLD',
						// 	stake: 'SEED',
						// 	token: 'BEAR',
						// },
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
										strategy: '@bearmint/bep-050',
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
								'@bearmint/bep-050': {
									'*': {
										'@bearmint/bep-055': { '*': { msg: '100', tx: '100' } },
										'@bearmint/bep-056': { '*': { msg: '100', tx: '100' } },
										'@bearmint/bep-057': { '*': { msg: '500', tx: '100' } },
										'@bearmint/bep-058': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-059': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-064': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-065': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-066': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-067': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-068': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-104': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-110': { '*': { msg: '500', tx: '100' } },
										'@bearmint/bep-122': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-126': { '*': { msg: '500', tx: '100' } },
										'@bearmint/bep-127': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-128': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-129': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-130': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-131': { '*': { msg: '500', tx: '100' } },
										'@bearmint/bep-132': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-133': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-134': { '*': { msg: '500', tx: '100' } },
										'@bearmint/bep-135': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-136': { '*': { msg: '250', tx: '100' } },
										'@bearmint/bep-137': { '*': { msg: '250', tx: '100' } },
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
										strategy: '@bearmint/bep-124',
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
												max: 1,
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
												max: 2,
												min: 1,
											},
											stakes: {
												max: 0,
												min: 0,
											},
										},
										range: {
											stake: {
												max: 0,
												min: 0,
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
											{ denomination: 'SEED', percentage: 25, type: 0 }, // UNKNOWN
											{ denomination: 'SEED', percentage: 75, type: 1 }, // DUPLICATE_VOTE
											{ denomination: 'SEED', percentage: 50, type: 2 }, // LIGHT_CLIENT_ATTACK
										],
									},
								},
								'@bearmint/bep-119': {
									'*': {
										punishments: [
											{ denomination: 'SEED', percentage: 25, type: 0 }, // UNKNOWN
											{ denomination: 'SEED', percentage: 75, type: 1 }, // DUPLICATE_VOTE
											{ denomination: 'SEED', percentage: 50, type: 2 }, // LIGHT_CLIENT_ATTACK
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
				},
			],
		},
	},
	services: {
		addressFactory: makeAddressFactory(keyPairFactory, 'bear'),
		keyPairFactory,
	},
	state: {
		initialSupply: BigInt(1_000_000_000e8).toString(),
	},
}
