import type { TxTestContext } from '@bearmint/bep-006'
import { milestone } from '@bearmint/bep-006'
import { canonicalizeJson, Paths, snakeCase } from '@bearmint/bep-009'
import type { KVStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { BEP21Milestone } from '@bearmint/bep-018'
import { makeMultiStore, makeState, TK_MILESTONE } from '@bearmint/bep-020'
import { makeSecureKVStore } from '@bearmint/bep-023'

import { fakeAccountRepositoryFactory } from './account.js'

interface StateStoreKVStores {
	account: KVStore
	accountMoniker: KVStore
	accountPublicKey: KVStore
	accountValidatorAddress: KVStore
	milestone: KVStore
	tx: KVStore
	txReceipt: KVStore
	world: KVStore
}

export async function fakeStateStore(context: TxTestContext) {
	context.container.bindValue(ContainerType.CommittedState, {
		getCommittedBlockAppHash() {
			return Buffer.from('deadbeef')
		},
		getMilestone() {
			return { ...milestone }
		},
	})

	context.container.bindValue(ContainerType.DeliverTxState, {
		getCommittedBlockAppHashpHash() {
			return Buffer.from('deadbeef')
		},
		getMilestone() {
			return { ...milestone }
		},
	})

	const result = await makeState(
		fakeAccountRepositoryFactory(context),
		await fakeMultiStore({
			milestone: await fakeMilestoneKVStore(),
		}),
	)

	await result.setMilestone(milestone as any)

	return result
}

export async function fakeMilestoneKVStore() {
	const result = await makeSecureKVStore().make()
	await result.set(
		TK_MILESTONE,
		BEP21Milestone.fromJson(
			canonicalizeJson({
				blockNumber: '1',
				parameters: {
					application: milestone.parameters.application,
					consensus: milestone.parameters.consensus,
					denominations: milestone.parameters.denominations,
					mandatoryModules: milestone.parameters.modules.mandatory,
					transactions: milestone.parameters.transactions,
				},
			}),
		).toBinary(),
	)

	return result
}

export async function fakeKVStores(tries?: Partial<StateStoreKVStores>) {
	return {
		account: tries?.account ?? (await makeSecureKVStore().make()),
		accountMoniker: tries?.accountMoniker ?? (await makeSecureKVStore().make()),
		accountPublicKey: tries?.accountPublicKey ?? (await makeSecureKVStore().make()),
		accountValidatorAddress: tries?.accountValidatorAddress ?? (await makeSecureKVStore().make()),
		milestone: tries?.milestone ?? (await makeSecureKVStore().make()),
		tx: tries?.tx ?? (await makeSecureKVStore().make()),
		txReceipt: tries?.txReceipt ?? (await makeSecureKVStore().make()),
		world: tries?.world ?? (await makeSecureKVStore().make()),
	}
}

export async function fakeMultiStore(tries?: Partial<StateStoreKVStores>) {
	const result = makeMultiStore({
		KVStoreFactory: makeSecureKVStore(),
		// @ts-ignore
		Logger: {
			debug() {
				//
			},
		},
		// @ts-ignore
		Paths: {
			data: `${Paths.BM_PATH_HOME}/data`,
		},
	})

	for (const [key, trie] of Object.entries(await fakeKVStores(tries))) {
		result.set(`@bearmint/bep-020/${snakeCase(key)}`, trie)
	}

	return result
}
