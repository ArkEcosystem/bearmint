import { fakeMilestoneKVStore, fakeMultiStore } from '@bearmint/bep-008'
import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeState } from '@bearmint/bep-020'

import { fakeAccountSerializer, fakeAccountRepositoryFactory } from './account.js'
import { denominations } from './fixtures.js'

export async function fakeStateStore() {
	const container = makeContainer()
	container.bindValue(ContainerType.ExecuteTxState, {
		getCommittedBlockAppHash() {
			return Buffer.from('deadbeef')
		},
		getMilestone() {
			return {
				parameters: {
					denominations,
					governance: {
						validatorCount: {
							max: 5,
							min: 1,
						},
					},
					modules: {
						mandatory: {
							'@bearmint/bep-068': {
								'*': {
									blobByteLength: 0,
								},
							},
						},
					},
					transactions: {},
				},
			}
		},
	})

	return makeState(
		fakeAccountRepositoryFactory({
			accountSerializer: fakeAccountSerializer({ container }),
			container,
		}),
		await fakeMultiStore({
			milestone: await fakeMilestoneKVStore(),
		}),
	)
}
