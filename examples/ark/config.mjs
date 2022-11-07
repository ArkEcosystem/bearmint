/* eslint-disable @typescript-eslint/naming-convention */

import { semver } from '../../packages/bep-009/distribution/index.js'
import { makeKeyPairFactory } from '../../packages/bep-033/distribution/index.js'
import { makeAddressFactory } from '../../packages/bep-042/distribution/index.js'
import { consensusParameters, keyPairType } from '../config.base.mjs'

const keyPairFactory = makeKeyPairFactory()

export const ARK = {
	distributeInitialSupply: false,
	genesis: {
		chainId: 'ark-testnet',
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
							gas: 'ARK',
							reward: 'ARK',
							stake: 'ARK',
							token: 'ARK',
						},
						modules: {
							mandatory: {
								// Milestones
								'@bearmint/bep-021': {
									'*': {
										strategy: '@bearmint/bep-115',
									},
								},
								// Crypto - BLS12-381
								'@bearmint/bep-030': {
									'*': {
										strategy: '@bearmint/bep-033',
									},
								},
								// Address Service
								'@bearmint/bep-038': {
									'*': {
										strategy: '@bearmint/bep-042',
									},
								},
								// Address - Bech32m
								'@bearmint/bep-042': {
									'*': {
										prefix: 'ark',
									},
								},
								// Gas Service
								'@bearmint/bep-048': {
									'*': {
										strategy: '@bearmint/bep-050',
									},
								},
								// Gas - Cost-per-Byte
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
								// Tx Service
								'@bearmint/bep-051': {
									'*': {
										version: '1.0.0',
									},
								},
								// Tx - Token Transfer
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
								// Tx - Token Burn
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
								// Tx - Validator Registration
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
								// Tx - Validator Resignation
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
								// Tx - Validator Distribution
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
								// Tx - HTLC Lock
								'@bearmint/bep-064': {
									'*': {
										byteLength: {
											memo: {
												max: 256,
												min: 0,
											},
										},
										count: {
											ops: {
												max: 8,
												min: 1,
											},
										},
										list: {
											secretAlgorithm: ['blake3', 'keccak_256', 'sha256'],
										},
									},
								},
								// Tx - HTLC Claim
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
								// Tx - HTLC Refund
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
								// Tx - IPFS Registration
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
								// Tx - Blob Registration
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
								// Tx Prioritizer
								'@bearmint/bep-076': {
									'*': {
										strategy: '@bearmint/bep-077',
									},
								},
								// Validator Rewarder
								'@bearmint/bep-078': {
									'*': {
										strategy: '@bearmint/bep-124',
									},
								},
								// Delegator Rewarder - Equity Strategy
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
								// Consensus
								'@bearmint/bep-087': {
									'*': {
										strategy: '@bearmint/bep-088',
									},
								},
								// Proof-of-Stake (Delegated)
								'@bearmint/bep-088': {
									'*': {
										count: {
											validators: {
												max: 53,
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
								// Tendermint
								'@bearmint/bep-089': {
									'*': {
										retainBlocks: 0,
									},
								},
								// Validator Slashing
								'@bearmint/bep-102': {
									'*': {
										strategies: {
											'@bearmint/bep-118': [0, 1, 2], // UNKNOWN, DUPLICATE_VOTE, LIGHT_CLIENT_ATTACK
											'@bearmint/bep-120': [0, 1, 2], // UNKNOWN, DUPLICATE_VOTE, LIGHT_CLIENT_ATTACK
											'@bearmint/bep-121': [0, 1, 2], // UNKNOWN, DUPLICATE_VOTE, LIGHT_CLIENT_ATTACK
										},
									},
								},
								// Delegator Slashing
								'@bearmint/bep-103': {
									'*': {
										strategies: {
											'@bearmint/bep-119': [0, 1, 2], // UNKNOWN, DUPLICATE_VOTE, LIGHT_CLIENT_ATTACK
										},
									},
								},
								// Tx - Stake
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
												max: 1,
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
								// Name Registration
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
												pattern: '[0-9a-z!$&.@_]+',
											},
										},
									},
								},
								// Delegator Slashing - Stake Strategy
								'@bearmint/bep-119': {
									'*': {
										punishments: [
											{ denomination: 'ARK', percentage: 1, type: 0 }, // UNKNOWN
											{ denomination: 'ARK', percentage: 25, type: 1 }, // DUPLICATE_VOTE
											{ denomination: 'ARK', percentage: 5, type: 2 }, // LIGHT_CLIENT_ATTACK
										],
									},
								},
								// Validator Slashing - Jailing
								'@bearmint/bep-120': {
									'*': {
										punishments: [{ durations: [256, 512, 1024], type: '*' }],
									},
								},
								// Validator Slashing - Tombstoning
								'@bearmint/bep-121': {
									'*': {
										punishments: [{ jailSentences: 3, type: '*' }],
									},
								},
								// Tx - Validator Release
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
								// Validator Rewarder - Traffic Strategy
								'@bearmint/bep-124': {
									'*': {
										amount: 2e8,
									},
								},
								// Tx - NFT Collection Registration
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
								// Tx - NFT Collection Ownership Transfer
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
								// Tx - NFT Collection Ownership Resignation
								'@bearmint/bep-128': {
									'*': {
										byteLength: {
											memo: {
												max: 256,
												min: 1,
											},
										},
										count: {
											collections: {
												max: 8,
												min: 1,
											},
										},
									},
								},
								// Tx - NFT Collection Permission Grant
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
								// Tx - NFT Collection Permission Revoke
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
								// Tx - NFT Mint
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
								// Tx - NFT Transfer
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
								// Tx - NFT Burn
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
								// Tx - Native Token Registration
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
								// Tx - Native Token Ownership Transfer
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
								// Tx - Native Token Ownership Resignation
								'@bearmint/bep-136': {
									'*': {
										byteLength: {
											memo: {
												max: 256,
												min: 1,
											},
										},
										count: {
											hashes: {
												max: 8,
												min: 1,
											},
										},
									},
								},
								// Tx - Native Token Mint
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
		addressFactory: makeAddressFactory(keyPairFactory, 'ark'),
		keyPairFactory,
	},
	state: {
		initialSupply: BigInt(125_000_000e8).toString(),
	},
}
