import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { blake3, hexToBytes, stringToBytes } from '@bearmint/bep-009'
import * as ed25519 from '@noble/ed25519'
import * as secp256k1 from '@noble/secp256k1'

import { createAssertionFunctions } from '../../source/assert.js'

describe('relational', () => {
	it('should pass if the sender and recipient are not the same', async () => {
		await expect(() =>
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				undefined,
				{
					data: {
						recipient: 'recipient',
						sender: 'sender',
					},
				},
			).relational(),
		).not.toThrow()
	})

	it('should fail if the sender and recipient are the same', async () => {
		await expect(
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				undefined,
				{
					data: {
						recipient: 'sender',
						sender: 'sender',
					},
				},
			).relational(),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'recipient',
					value: 'ERR_TX_UNEXPECTED_LOOPBACK_DIRECTION',
				},
			],
		})
	})
})

describe('loopback', () => {
	it('should match the sender and recipient', async () => {
		await expect(() =>
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				undefined,
				{
					data: {
						recipient: 'sender',
						sender: 'sender',
					},
				},
			).loopback(),
		).not.toThrow()
	})

	it('should fail to match the sender and recipient', async () => {
		await expect(
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				undefined,
				{
					data: {
						recipient: 'recipient',
						sender: 'sender',
					},
				},
			).loopback(),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'sender',
					value: 'ERR_TX_UNEXPECTED_RELATIONAL_DIRECTION',
				},
			],
		})
	})
})

describe('verifyValidatorIdentity', () => {
	it('should verify an identity that uses tendermint/PubKeyEd25519', async () => {
		await expect(async () =>
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				{
					getMilestone() {
						return {
							parameters: {
								consensus: {
									validator: {
										pubKeyTypes: ['ed25519'],
									},
								},
							},
						}
					},
				},
				undefined,
			).validatorAuthenticity(
				stringToBytes('moniker'),
				hexToBytes('cc697c4c0a143cf62f7ffc7df358e8542dbe1d1d002b9843015a9972d8fd455c'),
				await ed25519.sign(
					blake3('moniker'),
					'e95d870cccba6d4ea19a910a53eecf23029694813a7d201aaab8e832c490ae7e',
				),
			),
		).not.toThrow()
	})

	it('should fail to verify an identity that uses tendermint/PubKeyEd25519', async () => {
		await expect(
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				{
					getMilestone() {
						return {
							parameters: {
								application: {},
								consensus: {
									validator: {
										pubKeyTypes: ['ed25519'],
									},
								},
							},
						}
					},
				},
				undefined,
			).validatorAuthenticity(
				stringToBytes('moniker'),
				hexToBytes('deadbeef'),
				hexToBytes('deadbeef'),
			),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'message.publicKey',
					value: 'ERR_TX_ED25519_PUBLIC_KEY_DOES_NOT_VERIFY',
				},
			],
		})
	})

	it('should verify an identity that uses tendermint/PubKeySecp256k1', async () => {
		await expect(async () =>
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				{
					getMilestone() {
						return {
							parameters: {
								consensus: {
									validator: {
										pubKeyTypes: ['secp256k1'],
									},
								},
							},
						}
					},
				},
				undefined,
			).validatorAuthenticity(
				stringToBytes('moniker'),
				hexToBytes('03134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e'),
				await secp256k1.sign(
					blake3('moniker'),
					'e46bd7365d8f3fb498a4b2bdaadb3f758b2ecd5fe2b7a1935931939e3117b732',
				),
			),
		).not.toThrow()
	})

	it('should fail to verify an identity that uses tendermint/PubKeySecp256k1', async () => {
		await expect(
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				{
					getMilestone() {
						return {
							parameters: {
								application: {},
								consensus: {
									validator: {
										pubKeyTypes: ['secp256k1'],
									},
								},
							},
						}
					},
				},
				undefined,
			).validatorAuthenticity(
				stringToBytes('moniker'),
				hexToBytes('deadbeef'),
				hexToBytes('deadbeef'),
			),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'message.publicKey',
					value: 'ERR_TX_SECP256K1_PUBLIC_KEY_DOES_NOT_VERIFY',
				},
			],
		})
	})
})

describe('future', () => {
	it('should pass if the value is in the future', async () => {
		await expect(() =>
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				{
					getCommittedBlockNumber() {
						return BigInt(5)
					},
				},
				{
					data: {
						recipient: 'recipient',
						sender: 'sender',
					},
				},
			).future(10, {
				key: 'message.ops.0.expiration',
			}),
		).not.toThrow()
	})

	it('should fail if the value is in the past or present', async () => {
		await expect(
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				{
					getCommittedBlockNumber() {
						return BigInt(5)
					},
				},
				{
					data: {
						recipient: 'recipient',
						sender: 'sender',
					},
				},
			).future(3, {
				key: 'message.ops.0.expiration',
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'message.ops.0.expiration',
					value: 'ERR_TX_BLOCK_NUMBER_IS_PAST',
				},
			],
		})

		await expect(
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				{
					getCommittedBlockNumber() {
						return BigInt(5)
					},
				},
				{
					data: {
						recipient: 'recipient',
						sender: 'sender',
					},
				},
			).future(5, {
				key: 'message.ops.0.expiration',
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'message.ops.0.expiration',
					value: 'ERR_TX_BLOCK_NUMBER_IS_PAST',
				},
			],
		})
	})
})

describe('past', () => {
	it('should pass if the value is in the past', async () => {
		await expect(
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				{
					getCommittedBlockNumber() {
						return BigInt(10)
					},
				},
				{
					data: {
						recipient: 'recipient',
						sender: 'sender',
					},
				},
			).past(5, {
				key: 'message.ops.0.expiration',
			}),
		).resolves.not.toThrow()
	})

	it('should fail if the value is in the future or present', async () => {
		await expect(
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				{
					getCommittedBlockNumber() {
						return BigInt(5)
					},
				},
				{
					data: {
						recipient: 'recipient',
						sender: 'sender',
					},
				},
			).past(10, {
				key: 'message.ops.0.expiration',
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'message.ops.0.expiration',
					value: 'ERR_TX_BLOCK_NUMBER_IS_FUTURE',
				},
			],
		})

		await expect(
			createAssertionFunctions(
				{
					AddressFactory: {
						fromPublicKey() {
							return {
								toString() {
									return 'sender'
								},
							}
						},
					},
					CommittedState: {},
					ServiceProviderRepository: {},
				},
				undefined,
				{
					getCommittedBlockNumber() {
						return BigInt(5)
					},
				},
				{
					data: {
						recipient: 'recipient',
						sender: 'sender',
					},
				},
			).past(5, {
				key: 'message.ops.0.expiration',
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'message.ops.0.expiration',
					value: 'ERR_TX_BLOCK_NUMBER_IS_FUTURE',
				},
			],
		})
	})
})
