import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { EventRecorder } from '@bearmint/bep-013'
import { makeEventRecorder } from '@bearmint/bep-090'

import { makeVerifyNetworkListener } from '../../../source/listeners/verify-network.js'

describe<{
	eventRecorder: EventRecorder
}>('Verify Version Listener', () => {
	beforeEach(async (context) => {
		context.eventRecorder = makeEventRecorder()
	})

	it('should pass if the version matches', async (context) => {
		await expect(
			makeVerifyNetworkListener({
				GenesisParameters: {
					app_hash: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
				},
			}).execute({
				eventRecorder: context.eventRecorder,
				tx: {
					checksum: {
						network: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
					},
				},
			}),
		).resolves.not.toThrow()
	})

	it('should fail if the version matches', async (context) => {
		await expect(
			makeVerifyNetworkListener({
				GenesisParameters: {
					app_hash: '',
				},
			}).execute({
				eventRecorder: context.eventRecorder,
				tx: {
					checksum: {
						network: 'network',
					},
				},
			}),
		).toThrowAttributes({
			attributes: [
				{
					index: false,
					key: 'checksum.network',
					value: 'ERR_TX_UNEXPECTED_TRANSACTION_NETWORK',
				},
			],
		})
	})
})
