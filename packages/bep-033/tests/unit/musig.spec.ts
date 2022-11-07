import { expect, describe, it, beforeEach, beforeAll } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { hexToBytes } from '@bearmint/bep-009'
import type { SignatureFactory } from '@bearmint/bep-013'
import BLS from 'bls-eth-wasm'

import { makeSignatureFactory } from '../../source/sig.js'
import { generateMaster, generateMuSig, generateSlaves, makeMuSigFactory } from '../musig.js'

const msg = hexToBytes('690a91fc0a7a49bbc5afe9516c1831ca8845f281ef2e414f7dfeb71b5e91a902')

describe<{
	signatureFactory: SignatureFactory
	multiSignatureFactory: ReturnType<typeof makeMuSigFactory>
	privateKey: Buffer
	publicKey: Buffer
	accounts: Array<{
		id: string
		publicKey: string
		privateKey: string
	}>
}>('BLS12-381 Multi-Signature', () => {
	beforeAll(async () => {
		await BLS.init(BLS.BLS12_381)
	})

	beforeEach((context) => {
		context.signatureFactory = makeSignatureFactory()
		context.multiSignatureFactory = makeMuSigFactory({
			SignatureFactory: context.signatureFactory,
		})
		context.privateKey = Buffer.from(
			'10eff071cfc3ab543f628208cbcaf1b176be1ee5d856700722905e2a0a855250',
			'hex',
		)
		context.publicKey = Buffer.from(
			'a094fc3b0880874ab3cef04dcf91910901211fc71ed8202e4954001b8bc8656e313d35ab38e41a9e013577e1faa9a237',
			'hex',
		)
		context.accounts = [
			{
				id: '4bf94d385ec00d23a652717e384e1856d267dc8469092cd0d0d7b992a936976a',
				privateKey: '0af283be3ba696060636c0790d967380e8aff1e46d3d50c54fbd035b5ce3fa11',
				publicKey:
					'acaddab32e508845e601f6d67fce8d525b208fbcb8c437019cbff4154002cd0fd428497db89e2fae419390038e7bb9b6',
			},
			{
				id: '09bba3b4ea213f652d4718747622aeb2e17846c79ed8bc15a6ea18135f94e4e3',
				privateKey: '2755b1a9723ab1be5ea841c6270054f5d3f48322f76c9d1c9225d18c0c824d94',
				publicKey:
					'93e48f0084f3d3ac1c2c58a0f0e029d697f183b1d53f22c9cb0689d1448f7f6a0fcd8c6f7703c5b378392338bdee6ee8',
			},
			{
				id: '267d857c3a01f739055a34028f1c2051769b0ead4ef33a0eeea06be81a8ba503',
				privateKey: '36aa2cd61677af51081c07166eca89a2117b2579a4efb26ae8f18fa7d69b7c99',
				publicKey:
					'a0b72896d656c9a73ba34c2d38df03bf53257249f9515f57fa4276b838221a1e3aebde3f31d172ecac245220eef6c8ec',
			},
		]
	})

	it('should verify an aggregated signature with M-of-N participants', async (context) => {
		expect(
			await context.multiSignatureFactory.verify({
				hash: msg,
				muSig: {
					m: 2,
					master:
						'aadd7a686a7404877c38f0d343716f8d1c71ae8515902485335228b259689f16c506d6c571228c24fceeb42cb7f2fc7b',
					n: 3,
					slaves: [
						context.accounts[0].publicKey,
						context.accounts[1].publicKey,
						context.accounts[2].publicKey,
					],
				},
				signature: await context.multiSignatureFactory.recover({
					ids: [hexToBytes(context.accounts[0].id), hexToBytes(context.accounts[2].id)],
					signatures: [
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[0].id, 'hex'),
								privateKey: Buffer.from(context.accounts[0].privateKey, 'hex'),
							},
						}),
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[2].id, 'hex'),
								privateKey: Buffer.from(context.accounts[2].privateKey, 'hex'),
							},
						}),
					],
				}),
			}),
		).toBeTrue()
	})

	it('should fail verification an aggregated signature with M-of-N participants where M is not satisfied', async (context) => {
		expect(
			await context.multiSignatureFactory.verify({
				hash: msg,
				muSig: {
					m: 2,
					master:
						'aadd7a686a7404877c38f0d343716f8d1c71ae8515902485335228b259689f16c506d6c571228c24fceeb42cb7f2fc7b',
					n: 3,
					slaves: [
						context.accounts[0].publicKey,
						context.accounts[1].publicKey,
						context.accounts[2].publicKey,
					],
				},
				signature: await context.multiSignatureFactory.recover({
					ids: [hexToBytes(context.accounts[0].id)],
					signatures: [
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[0].id, 'hex'),
								privateKey: Buffer.from(context.accounts[0].privateKey, 'hex'),
							},
						}),
					],
				}),
			}),
		).toBeFalse()
	})

	it('should fail verification an aggregated signature with M-of-N participants', async (context) => {
		expect(
			await context.multiSignatureFactory.verify({
				hash: hexToBytes(context.accounts[0].publicKey),
				muSig: {
					m: 2,
					master:
						'aadd7a686a7404877c38f0d343716f8d1c71ae8515902485335228b259689f16c506d6c571228c24fceeb42cb7f2fc7b',
					n: 3,
					slaves: [
						context.accounts[0].publicKey,
						context.accounts[1].publicKey,
						context.accounts[2].publicKey,
					],
				},
				signature: await context.multiSignatureFactory.recover({
					ids: [hexToBytes(context.accounts[0].id), hexToBytes(context.accounts[2].id)],
					signatures: [
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[0].id, 'hex'),
								privateKey: Buffer.from(context.accounts[0].privateKey, 'hex'),
							},
						}),
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[2].id, 'hex'),
								privateKey: Buffer.from(context.accounts[2].privateKey, 'hex'),
							},
						}),
					],
				}),
			}),
		).toBeFalse()
	})

	it('should verify an aggregated signature with N-of-N participants', async (context) => {
		expect(
			await context.multiSignatureFactory.verify({
				hash: msg,
				muSig: {
					m: 2,
					master:
						'aadd7a686a7404877c38f0d343716f8d1c71ae8515902485335228b259689f16c506d6c571228c24fceeb42cb7f2fc7b',
					n: 3,
					slaves: [
						context.accounts[0].publicKey,
						context.accounts[1].publicKey,
						context.accounts[2].publicKey,
					],
				},
				signature: await context.multiSignatureFactory.recover({
					ids: [
						hexToBytes(context.accounts[0].id),
						hexToBytes(context.accounts[1].id),
						hexToBytes(context.accounts[2].id),
					],
					signatures: [
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[0].id, 'hex'),
								privateKey: Buffer.from(context.accounts[0].privateKey, 'hex'),
							},
						}),
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[1].id, 'hex'),
								privateKey: Buffer.from(context.accounts[1].privateKey, 'hex'),
							},
						}),
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[2].id, 'hex'),
								privateKey: Buffer.from(context.accounts[2].privateKey, 'hex'),
							},
						}),
					],
				}),
			}),
		).toBeTrue()
	})

	it('should fail verification an aggregated signature with N-of-N participants', async (context) => {
		expect(
			await context.multiSignatureFactory.verify({
				hash: hexToBytes(context.accounts[0].publicKey),
				muSig: {
					m: 2,
					master:
						'aadd7a686a7404877c38f0d343716f8d1c71ae8515902485335228b259689f16c506d6c571228c24fceeb42cb7f2fc7b',
					n: 3,
					slaves: [
						context.accounts[0].publicKey,
						context.accounts[1].publicKey,
						context.accounts[2].publicKey,
					],
				},
				signature: await context.multiSignatureFactory.recover({
					ids: [
						hexToBytes(context.accounts[0].id),
						hexToBytes(context.accounts[1].id),
						hexToBytes(context.accounts[2].id),
					],
					signatures: [
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[0].id, 'hex'),
								privateKey: Buffer.from(context.accounts[0].privateKey, 'hex'),
							},
						}),
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[1].id, 'hex'),
								privateKey: Buffer.from(context.accounts[1].privateKey, 'hex'),
							},
						}),
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: Buffer.from(context.accounts[2].id, 'hex'),
								privateKey: Buffer.from(context.accounts[2].privateKey, 'hex'),
							},
						}),
					],
				}),
			}),
		).toBeFalse()
	})

	it('should generate a master', async (context) => {
		const { publicKeys, secretKeys } = generateMaster(4)

		expect(publicKeys).toSatisfy((value) => Array.isArray(value))
		expect(publicKeys).toHaveLength(4)
		expect(secretKeys).toSatisfy((value) => Array.isArray(value))
		expect(secretKeys).toHaveLength(4)
	})

	it('should generate a set of slaves', async (context) => {
		const { ids, publicKeys, secretKeys } = generateSlaves({
			master: generateMaster(4),
			n: 8,
			slaves: ['1', '2', '3', '4', '5', '6', '7', '8'],
		})

		expect(ids).toSatisfy((value) => Array.isArray(value))
		expect(ids).toHaveLength(8)
		expect(publicKeys).toSatisfy((value) => Array.isArray(value))
		expect(publicKeys).toHaveLength(8)
		expect(secretKeys).toSatisfy((value) => Array.isArray(value))
		expect(secretKeys).toHaveLength(8)
	})

	it('should generate a Multi-Signature with M-of-N participants', async (context) => {
		const master = generateMaster(4)
		const slaves = generateSlaves({
			master: generateMaster(4),
			n: 8,
			slaves: ['1', '2', '3', '4', '5', '6', '7', '8'],
		})

		const muSig = generateMuSig({
			m: 4,
			masterPublicKeys: master.publicKeys,
			n: 8,
			slavesPublicKeys: slaves.publicKeys,
		})

		expect(muSig.m).toStrictEqual(4)
		expect(muSig.master).toBeTypeOf('string')
		expect(muSig.n).toStrictEqual(8)
		expect(muSig.slaves).toSatisfy((value) => Array.isArray(value))
		expect(muSig.slaves).toHaveLength(8)
	})

	it('should generate a Multi-Signature with M-of-N participants and verify', async (context) => {
		const master = generateMaster(2)

		const slaves = generateSlaves({
			master,
			n: 3,
			slaves: ['1', '2', '3', '4', '5', '6', '7', '8'],
		})

		const muSig = generateMuSig({
			m: 2,
			masterPublicKeys: master.publicKeys,
			n: 3,
			slavesPublicKeys: slaves.publicKeys,
		})

		expect(
			await context.multiSignatureFactory.verify({
				hash: msg,
				muSig,
				signature: await context.multiSignatureFactory.recover({
					ids: [
						hexToBytes(slaves.ids[0].serializeToHexStr()),
						hexToBytes(slaves.ids[1].serializeToHexStr()),
					],
					signatures: [
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: hexToBytes(slaves.publicKeys[0].serializeToHexStr()),
								privateKey: hexToBytes(slaves.secretKeys[0].serializeToHexStr()),
							},
						}),
						await context.multiSignatureFactory.sign({
							hash: msg,
							signatory: {
								id: hexToBytes(slaves.publicKeys[1].serializeToHexStr()),
								privateKey: hexToBytes(slaves.secretKeys[1].serializeToHexStr()),
							},
						}),
					],
				}),
			}),
		).toBeTrue()
	})
})
