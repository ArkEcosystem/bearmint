import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { EventRecorder } from '@bearmint/bep-013'
import { makeEventRecorder } from '@bearmint/bep-090'

import { makeVerifyTxVersionListener } from '../../../source/listeners/verify-tx-version.js'

describe<{
	eventRecorder: EventRecorder
}>('Verify Tx Version Listener', () => {
	beforeEach(async (context) => {
		context.eventRecorder = makeEventRecorder()
	})

	it('should pass if the version matches', async (context) => {
		await expect(
			makeVerifyTxVersionListener({
				CommittedState: {
					getMilestone() {
						return {
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-051': {
											'*': {
												version: '1.0.0',
											},
										},
									},
								},
								transactions: {},
							},
						}
					},
				},
				ServiceProviderRepository: {
					get() {
						return {
							version() {
								return '0.0.0'
							},
						}
					},
				},
			}).execute({
				eventRecorder: context.eventRecorder,
				tx: {
					data: {
						gas: '1',
						hash: 'b0825845b5cc31f49cf56fc9d7e052e099a6d4016d583e3754bc19df0bec92d1',
						message: {
							content: Buffer.alloc(0),
							handler: 'handler',
							network: 'network',
							version: '0.0.0',
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

	it('should fail if the version matches', async (context) => {
		await expect(
			makeVerifyTxVersionListener({
				CommittedState: {
					getMilestone() {
						return {
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-051': {
											'*': {
												version: '1.0.0',
											},
										},
									},
								},
								transactions: {},
							},
						}
					},
				},
				ServiceProviderRepository: {
					get() {
						return {
							version() {
								return '0.0.0'
							},
						}
					},
				},
			}).execute({
				eventRecorder: context.eventRecorder,
				tx: {
					data: {
						gas: '1',
						hash: 'b0825845b5cc31f49cf56fc9d7e052e099a6d4016d583e3754bc19df0bec92d1',
						message: {
							content: Buffer.alloc(0),
							handler: 'handler',
							network: 'network',
							version: '0.0.0',
						},
						network: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						nonce: '1',
						recipient: 'recipient',
						sender: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						signature:
							'134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
						version: '1.1.1',
					},
				},
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'version',
					value: 'ERR_TX_UNKNOWN_TRANSACTION_VERSION',
				},
			],
		})
	})
})
