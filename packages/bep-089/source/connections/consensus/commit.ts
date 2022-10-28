import { bytesToHex, canonicalizeJson } from '@bearmint/bep-009'
import type { ABCIController, Cradle } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { getModuleMilestone } from '@bearmint/bep-021'

import { resetState } from './utils.js'

/**
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#consensus-connection
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#commit
 *
 * @see https://cosmos-network.gitbooks.io/cosmos-academy/content/cosmos-for-developers/tendermint/abci-protocol.html
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#info
 */
export function makeCommit(
	cradle: Cradle,
): ABCIController<abci.RequestCommit, abci.ResponseCommit> {
	return {
		async execute(_request) {
			const { height, root } = await cradle.CommittedState.commit(cradle.ExecuteTxState)

			// We reset here because `CheckTx` will be called next if there are pending txs.
			await resetState(cradle)

			if (cradle.Logger !== undefined) {
				/* eslint-disable sort-keys-fix/sort-keys-fix */
				const msg = {
					module: '@bearmint/bep-089',
					action: 'commit_roots',
					blockNumber: (await cradle.CommittedState.getCommittedBlockNumber()).toString(),
				}

				for (const [submodule, value] of Object.entries(
					cradle.CommittedState.getMultiStore().roots(),
				)) {
					cradle.Logger.debug('%s', { ...msg, submodule, root: bytesToHex(value) })
				}

				cradle.Logger.debug('%s', {
					module: '@bearmint/bep-089',
					action: 'commit_app_hash',
					root: bytesToHex(root),
				})
				/* eslint-enable sort-keys-fix/sort-keys-fix */
			}

			// Dump the genesis and milestone parameters
			cradle.DataSink.put(
				'@bearmint/bep-097',
				{
					id: 'genesis',
					type: 'entity',
				},
				{
					key: 'genesis',
					type: 'configuration',
					value: canonicalizeJson(cradle.GenesisParameters),
				},
			)

			cradle.DataSink.put(
				'@bearmint/bep-021',
				{
					id: 'milestones',
					type: 'entity',
				},
				{
					key: 'milestones',
					type: 'configuration',
					value: canonicalizeJson(cradle.Milestones),
				},
			)

			/**
			 * Use RetainHeight with caution!
			 * -----------------------------------------------------------------
			 * If all nodes in the network remove historical blocks then this
			 * data is permanently lost, and no new nodes will be able to join
			 * the network and bootstrap. Historical blocks may also be required
			 * for other purposes, e.g. auditing, replay of non-persisted
			 * heights, light client verification, and so on.
			 */
			let retainHeight = BigInt(0)

			const { retainBlocks } = getModuleMilestone<{ retainBlocks: number }>(
				cradle.ServiceProviderRepository,
				cradle.CommittedState,
				'@bearmint/bep-089',
			)

			if (retainBlocks > 0) {
				retainHeight = BigInt(height - BigInt(retainBlocks + 1))
			}

			return {
				data: root,
				retainHeight,
			}
		},
	}
}
