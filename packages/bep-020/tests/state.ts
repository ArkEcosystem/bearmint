import { ContainerType } from '@bearmint/bep-013'
import { makeContainer } from '@bearmint/bep-014'
import { makeSecureKVStore } from '@bearmint/bep-023'

import { makeState } from '../source/index.js'
import { fakeAccountSerializer, fakeAccountRepositoryFactory } from './account.js'
import { denominations } from './fixtures.js'

export async function fakeStateStore() {
	const container = makeContainer()
	container.bindValue(ContainerType.DeliverTxState, {
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
									blobByteLength: {
										max: 0,
										min: 0,
									},
								},
							},
						},
					},
					transactions: {},
				},
			}
		},
	})

	return makeState({
		accountRepositoryFactory: fakeAccountRepositoryFactory({
			accountSerializer: fakeAccountSerializer({ container }),
			container,
		}),
		tries: {
			account: await makeSecureKVStore().make(),
			milestone: await makeSecureKVStore().make(),
			tx: await makeSecureKVStore().make(),
			txReceipt: await makeSecureKVStore().make(),
			world: await makeSecureKVStore().make(),
		},
	})
}
