import { buildSearchParameters } from './query.js'
import { get } from './request.js'
import type {
	AccountRequestParameters,
	BlockRequestParameters,
	TxRequestParameters,
} from './types.js'

export function makeClient(host: string) {
	return {
		accounts(parameters?: AccountRequestParameters) {
			return get({ host: `${host}/accounts`, parameters: buildSearchParameters(parameters ?? {}) })
		},
		blocks(parameters?: BlockRequestParameters) {
			return get({ host: `${host}/blocks`, parameters: buildSearchParameters(parameters ?? {}) })
		},
		txs(parameters?: TxRequestParameters) {
			return get({
				host: `${host}/transactions`,
				parameters: buildSearchParameters(parameters ?? {}),
			})
		},
	}
}
