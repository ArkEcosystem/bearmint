import { assert, canonicalizeJson } from '@bearmint/bep-009'
import type { Cradle } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { setMilestone } from '@bearmint/bep-021'

/**
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#consensus-connection
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/apps.md#endblock
 * @see https://github.com/tendermint/tendermint/blob/v0.34.x/spec/abci/abci.md#endblock
 */
export async function endBlock(cradle: Cradle, request: abci.RequestFinalizeBlock) {
	assert.defined<bigint>(request.height)

	const consensusParameterUpdates = (
		await setMilestone(cradle, cradle.ExecuteTxState, request.height)
	).parameters.consensus

	const validatorUpdates = await cradle.ValidatorElector.elect(cradle.ExecuteTxState)

	cradle.DataSink.put(
		'@bearmint/bep-089',
		{
			id: cradle.ExecuteTxState.getCandidateBlockNumber().toString(),
			type: 'validator_updates',
		},
		{
			blockNumber: cradle.ExecuteTxState.getCandidateBlockNumber(),
			value: canonicalizeJson(validatorUpdates.map((u) => u.toJson())),
		},
	)

	return {
		consensusParamUpdates: consensusParameterUpdates,
		events: [],
		validatorUpdates,
	}
}
