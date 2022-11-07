import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { milestone } from '@bearmint/bep-006'
import {
	fakeAccountSerializer,
	fakeAddressFactory,
	fakeCommittedState,
	fakeMultiStore,
} from '@bearmint/bep-008'
import { hexToBytes } from '@bearmint/bep-009'
import type { EventRecorder, StateStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeEventDispatcher } from '@bearmint/bep-015'
import { makeState } from '@bearmint/bep-020'
import { makeAccountSerializer, makeAccountRepository } from '@bearmint/bep-022'
import { makeEventRecorder } from '@bearmint/bep-090'

import { makeVerifySignatureListener } from '../../../source/listeners/verify-signature.js'

describe<{
	eventRecorder: EventRecorder
	state: StateStore
}>('Verify Signature Listener', () => {
	beforeEach(async (context) => {
		const container = makeContainer()
		container.bindValue(ContainerType.DeliverTxState, fakeCommittedState())

		context.eventRecorder = makeEventRecorder()

		context.state = await makeState(
			makeAccountRepository({
				AccountSerializer: fakeAccountSerializer(),
				AddressFactory: fakeAddressFactory(),
				EventDispatcher: makeEventDispatcher(),
			}),
			await fakeMultiStore(),
		)

		context.state.setMilestone(milestone as any)
	})

	it('should exit early if the signature is not MuSig and valid', async (context) => {
		await context.state.getAccountRepository().index([
			await makeAccountSerializer({
				CommittedState: context.state,
				DeliverTxState: context.state,
				EventDispatcher: makeEventDispatcher(),
			}).deserialize({
				address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
				publicKey: '30783a1197d29da3cc08f3d301489b27cf91d5b08d300c4c73e8c6f16ca26d2b',
			}),
		])

		await expect(
			makeVerifySignatureListener({
				SignatureFactory: {
					from() {
						return {
							verify: () => true,
						}
					},
				},
			}).execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					hash: 'hash',
					data: {
						sender: {
							toBytes: () =>
								hexToBytes('30783a1197d29da3cc08f3d301489b27cf91d5b08d300c4c73e8c6f16ca26d2b'),
							toString: () => '30783a1197d29da3cc08f3d301489b27cf91d5b08d300c4c73e8c6f16ca26d2b',
							verify: () => true,
						},
						signature: hexToBytes(
							'458561a00f87f53fa594303bccc3eaca6c09b38b091807e33a9ef53000ce31ca818b9509d37d055479a0038e06142d70fa83541a8d1d3589035c339491f2fa11',
						),
					},
					raw: {
						gas: '1',
						hash: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						message: {
							content: Buffer.alloc(0),
							handler: 'handler',
							network: 'network',
							version: 'version',
						},
						network: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						nonce: '1',
						recipient: 'recipient',
						sender: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						signature:
							'134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						version: '1.0.0',
					},
				},
			}),
		).resolves.not.toThrow()
	})

	it('should capture an event if the signature is not MuSig and invalid', async (context) => {
		context.eventRecorder.actingAs('verify-signature-invalid-non-musig')

		await context.state.getAccountRepository().index([
			await makeAccountSerializer({
				CommittedState: context.state,
				DeliverTxState: context.state,
				EventDispatcher: makeEventDispatcher(),
			}).deserialize({
				address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
				publicKey: '30783a1197d29da3cc08f3d301489b27cf91d5b08d300c4c73e8c6f16ca26d2b',
			}),
		])

		await expect(
			makeVerifySignatureListener({
				SignatureFactory: {
					from() {
						return {
							verify: () => false,
						}
					},
				},
			}).execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					hash: 'hash',
					data: {
						sender: {
							toBytes: () =>
								hexToBytes('30783a1197d29da3cc08f3d301489b27cf91d5b08d300c4c73e8c6f16ca26d2b'),
							toString: () => '30783a1197d29da3cc08f3d301489b27cf91d5b08d300c4c73e8c6f16ca26d2b',
							verify: () => true,
						},
						signature: hexToBytes(
							'458561a00f87f53fa594303bccc3eaca6c09b38b091807e33a9ef53000ce31ca818b9509d37d055479a0038e06142d70fa83541a8d1d3589035c339491f2fa11',
						),
					},
					raw: {
						gas: '1',
						hash: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						message: {
							content: Buffer.alloc(0),
							handler: 'handler',
							network: 'network',
							version: 'version',
						},
						network: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						nonce: '1',
						recipient: 'recipient',
						sender: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						signature:
							'134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						version: '1.0.0',
					},
				},
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'signature',
					value: 'ERR_TX_SIGNATURE_DOES_NOT_VERIFY',
				},
			],
		})
	})

	it('should exit early if the signature is MuSig and valid', async (context) => {
		await context.state.getAccountRepository().index([
			await makeAccountSerializer({
				CommittedState: context.state,
				DeliverTxState: context.state,
				EventDispatcher: makeEventDispatcher(),
			}).deserialize({
				address: 'bear1zd9renpnx5r30f7m0x5nk4gkag996nds5c8s8gyrxhsvfjt4690qxdkwq3',
				attributes: { muSig: {} },
				publicKey: '30783a1197d29da3cc08f3d301489b27cf91d5b08d300c4c73e8c6f16ca26d2b',
			}),
		])

		await expect(
			makeVerifySignatureListener({
				SignatureFactory: {
					from() {
						return {
							verify: () => true,
						}
					},
				},
			}).execute({
				eventRecorder: context.eventRecorder,
				state: context.state,
				tx: {
					hash: 'hash',
					data: {
						sender: {
							toBytes: () =>
								hexToBytes('30783a1197d29da3cc08f3d301489b27cf91d5b08d300c4c73e8c6f16ca26d2b'),
							toString: () => '30783a1197d29da3cc08f3d301489b27cf91d5b08d300c4c73e8c6f16ca26d2b',
							verify: () => true,
						},
						signature: hexToBytes(
							'458561a00f87f53fa594303bccc3eaca6c09b38b091807e33a9ef53000ce31ca818b9509d37d055479a0038e06142d70fa83541a8d1d3589035c339491f2fa11458561a00f87f53fa594303bccc3eaca6c09b38b091807e33a9ef53000ce31ca818b9509d37d055479a0038e06142d70fa83541a8d1d3589035c339491f2fa11',
						),
					},
					raw: {
						gas: '1',
						hash: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						message: {
							content: Buffer.alloc(0),
							handler: 'handler',
							network: 'network',
							version: 'version',
						},
						network: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						nonce: '1',
						recipient: 'recipient',
						sender: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						signature:
							'134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						version: '1.0.0',
					},
				},
			}),
		).resolves.not.toThrow()
	})
})
