import { semver } from '@bearmint/bep-009'
import type { ABCIController, Cradle } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'

/**
 * @see https://github.com/tendermint/tendermint/blob/main/spec/abci/abci%2B%2B_methods.md#info
 */
export function makeInfo(cradle: Cradle): ABCIController<abci.RequestInfo, abci.ResponseInfo> {
	return {
		async execute(_request) {
			const base: Partial<abci.ResponseInfo> = {
				// The application protocol version
				appVersion: BigInt(semver.toNumber(cradle.ApplicationManifest.protocolVersion)),
				// The application semantic version
				version: cradle.ApplicationManifest.semanticVersion,
			}

			try {
				return {
					...base,
					data: cradle.ApplicationManifest.name,
					lastBlockAppHash: await cradle.CommittedState.getCommittedBlockAppHash(),
					lastBlockHeight: await cradle.CommittedState.getCommittedBlockNumber(),
				}
			} catch {
				return {
					...base,
					lastBlockAppHash: new Uint8Array(0),
					lastBlockHeight: BigInt(0),
				}
			}
		},
	}
}
