/**
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#consensus-connection
 */

import { assert, canonicalizeJson } from '@bearmint/bep-009'
import type { ABCIController, Cradle } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { getPublicKeyType, setMilestone } from '@bearmint/bep-021'

import { canonicalizeValidatorUpdates } from './utils.js'

/**
 * @deprecated going to be replaced by "finalizeBlock"
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#consensus-connection
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#endblock
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#endblock
 */
export function makeEndBlock(
	cradle: Cradle,
): ABCIController<abci.RequestEndBlock, abci.ResponseEndBlock> {
	return {
		async execute(request) {
			assert.defined<bigint>(request.height)

			const consensusParameterUpdates = (
				await setMilestone(cradle, cradle.DeliverTxState, request.height)
			).parameters.consensus

			const validatorUpdates = canonicalizeValidatorUpdates({
				type: getPublicKeyType(cradle.DeliverTxState.getMilestone()),
				validators: await cradle.ValidatorElector.elect(cradle.DeliverTxState),
			})

			cradle.DataSink.put(
				'@bearmint/bep-089',
				{
					id: cradle.DeliverTxState.getCandidateBlockNumber().toString(),
					type: 'validator_updates',
				},
				{
					blockNumber: cradle.DeliverTxState.getCandidateBlockNumber(),
					value: canonicalizeJson(validatorUpdates.map((u) => u.toJson())),
				},
			)

			return {
				consensusParamUpdates: consensusParameterUpdates,
				events: [],
				validatorUpdates,
			}
		},
	}
}
