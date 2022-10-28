import { ok } from 'node:assert'

import { assert, canonicalizeJson } from '@bearmint/bep-009'
import type {
	AccountRepository,
	AccountRepositoryFactory,
	KVStore,
	Milestone,
	MultiStore,
	StateStore,
} from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import { abci, BEP21Milestone } from '@bearmint/bep-018'

import {
	STORE_ACCOUNT,
	STORE_ACCOUNT_MONIKER,
	STORE_ACCOUNT_PUBLIC_KEY,
	STORE_ACCOUNT_VALIDATOR_ADDRESS,
	STORE_MILESTONE,
	STORE_TX,
	STORE_TX_RECEIPT,
	STORE_WORLD,
} from './constants.js'
import { TK_COMMITTED_BLOCK, TK_MILESTONE } from './types.js'

export async function makeState(
	accountRepositoryFactory: AccountRepositoryFactory,
	multiStore: MultiStore,
): Promise<StateStore> {
	let accounts: AccountRepository = accountRepositoryFactory.make({
		account: multiStore.get(STORE_ACCOUNT),
		accountMoniker: multiStore.get(STORE_ACCOUNT_MONIKER),
		accountPublicKey: multiStore.get(STORE_ACCOUNT_PUBLIC_KEY),
		accountValidatorAddress: multiStore.get(STORE_ACCOUNT_VALIDATOR_ADDRESS),
	})
	let consumedGas = BigInt(0)
	let milestone: Milestone | undefined
	let candidateBlock: abci.RequestFinalizeBlock | undefined

	function getMultiStore() {
		return multiStore
	}

	function getAccountRepository() {
		assert.defined<AccountRepository>(accounts)

		return accounts
	}

	function getConsumedGas() {
		assert.defined<bigint>(consumedGas)

		return consumedGas
	}

	function setCandidateBlock(value: abci.RequestFinalizeBlock) {
		assert.defined(value)

		candidateBlock = value
	}

	/**
	 * The `AppHash` or `AgreedAppData` is the root after all updates
	 */
	function getAppHash() {
		return multiStore.get(STORE_WORLD).root()
	}

	function getMilestone<T>() {
		assert.defined<Milestone>(milestone)

		return milestone as unknown as Milestone<T>
	}

	function setAccountRepository(value: AccountRepository) {
		accounts = value
	}

	function setConsumedGas(value: bigint) {
		consumedGas = value
	}

	async function setCommittedBlock(block: abci.RequestFinalizeBlock) {
		assert.defined(block?.height)

		await multiStore.get(STORE_WORLD).set(TK_COMMITTED_BLOCK, block.toBinary())
	}

	async function setMilestone(value: Milestone) {
		assert.defined<Milestone>(value)

		milestone = value

		await multiStore.get(STORE_MILESTONE).set(
			TK_MILESTONE,
			BEP21Milestone.fromJson(
				canonicalizeJson({
					blockNumber: value.blockNumber,
					parameters: {
						application: value.parameters.application,
						consensus: value.parameters.consensus,
						denominations: value.parameters.denominations,
						mandatoryModules: value.parameters.modules.mandatory,
						transactions: value.parameters.transactions,
					},
				}),
			).toBinary(),
		)
	}

	async function getCommittedBlock() {
		return abci.RequestFinalizeBlock.fromBinary(
			await multiStore.get(STORE_WORLD).get(TK_COMMITTED_BLOCK),
			PROTO_OPTS,
		)
	}

	return {
		async checkpoint() {
			multiStore.checkpoint()
		},
		async commit(candidateState?: StateStore) {
			// CheckTx & ExecuteTx don't care about another candidate state
			if (candidateState === undefined) {
				for (const trie of Object.values(multiStore.all())) {
					await trie.commit()
				}
			} else {
				// CommittedState cares about all changes from the CandidateState (ExecuteTx)
				for (const [type, candidateStore] of Object.entries(candidateState.getMultiStore().all())) {
					const candidateCheckpoints = candidateStore.checkpoints()

					if (candidateCheckpoints.length !== 2) {
						throw new Error('Candidate State should have 2 checkpoints.')
					}

					const committedStore: KVStore = multiStore.get(type)

					// Take the final checkpoint of the candidate state (ExecuteTx)
					const candidateCheckpoint = candidateCheckpoints[1]

					assert.defined(candidateCheckpoint)

					committedStore.addCheckpoint(candidateCheckpoint)

					// Commit the CommittedState trie
					while (committedStore.hasCheckpoints()) {
						await committedStore.commit()
					}

					// Skip modifying root if they are equal
					if (committedStore.root().equals(candidateStore.root())) {
						continue
					}

					// Set the root on the CommittedState trie
					await committedStore.persistRoot(candidateStore.root())
				}

				// We need to set this so we can distribute rewards
				// at the start of the next block during BeginBlock
				setCandidateBlock(candidateState.getCandidateBlock())

				await setCommittedBlock(candidateState.getCandidateBlock())
			}

			/**
			 * We store the root of every module store in the world trie
			 * to ensure that every node has the exact same data for all
			 * its stores or it will not be possible to reach consensus.
			 */
			for (const [key, trie] of Object.entries(multiStore.all())) {
				await multiStore.get(STORE_WORLD).set(`${key}/root`, trie.root())
			}

			// If we are processing a candidate state we want to reset and verify states
			if (candidateState !== undefined) {
				consumedGas = BigInt(0)

				// Make sure the persisted trie hasn't been corrupted!
				for (const trie of Object.values(multiStore.all())) {
					ok(await trie.verifyIntegrity())
				}
			}

			assert.defined(candidateBlock?.height)

			/**
			 * The `AppHash` is the root hash after all updates.
			 * > We don't need to persist this since it will be restored!
			 */
			return {
				height: candidateBlock.height,
				root: multiStore.get(STORE_WORLD).root(),
			}
		},
		async copy() {
			const result = await makeState(accountRepositoryFactory, multiStore.copy())

			if (milestone !== undefined) {
				await result.setMilestone(milestone)
			}

			if (consumedGas !== undefined) {
				result.setConsumedGas(consumedGas)
			}

			if (candidateBlock !== undefined) {
				result.setCandidateBlock(candidateBlock)
			}

			return result
		},
		getAccountRepository,
		getAppHash,
		getCandidateBlock() {
			assert.defined(candidateBlock)

			return candidateBlock
		},
		getCandidateBlockHash(): Uint8Array {
			assert.defined(candidateBlock?.hash)

			return candidateBlock.hash
		},
		getCandidateBlockNumber(): bigint {
			assert.defined(candidateBlock?.height)

			return candidateBlock.height
		},
		getCandidateBlockProposer() {
			assert.defined<Buffer>(candidateBlock?.proposerAddress)

			return candidateBlock.proposerAddress
		},
		getCommittedBlock,
		async getCommittedBlockAppHash() {
			return getAppHash()
		},
		async getCommittedBlockNumber() {
			const committedBlock = await getCommittedBlock()

			assert.defined(committedBlock?.height)

			return committedBlock.height
		},
		getConsumedGas,
		getMilestone,
		getMultiStore,
		getTxReceiptStore() {
			return multiStore.get(STORE_TX_RECEIPT)
		},
		getTxStore() {
			return multiStore.get(STORE_TX)
		},
		hasCandidateBlock() {
			return candidateBlock !== undefined
		},
		hasCheckpoints() {
			return multiStore.hasCheckpoints()
		},
		async revert() {
			await multiStore.revert()
		},
		setAccountRepository,
		setCandidateBlock,
		setCommittedBlock,
		setConsumedGas,
		setMilestone,
	}
}
