import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import { makeInfo } from '../../../../source/connections/info/info.js'

describe('makeInfo', () => {
	it('it should respond without any errors', async () => {
		const commitedAppHash = Buffer.from('deadbeef')
		const commitedBlockNumber = BigInt(1)

		expect(
			await makeInfo({
				ApplicationManifest: {
					semanticVersion: '1.0.0',
					name: 'Bearmint',
					protocolVersion: '1.0.0',
				},
				CommittedState: {
					getAppHash() {
						return commitedAppHash
					},
					getCommittedBlockNumber() {
						return commitedBlockNumber
					},
					getMultiStore() {
						return {
							roots() {
								return {
									world: Buffer.alloc(8),
								}
							},
						}
					},
				},
			}).execute({}),
		).toMatchSnapshot()
	})
})
