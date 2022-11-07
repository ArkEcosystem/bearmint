import { canonicalizeJson } from '@bearmint/bep-009'
import type { StateStore, TxReceipt as Contract } from '@bearmint/bep-013'
import { TxReceipt as Proto, TxReceiptLog } from '@bearmint/bep-018'

export class TxReceipt implements Contract {
	readonly #state: StateStore
	readonly #logs: TxReceiptLog[] = []

	public constructor(state: StateStore) {
		this.#state = state
	}

	public log(event: string, args: object) {
		this.#logs.push(TxReceiptLog.fromJson({ args: canonicalizeJson(args), event }))
	}

	public logs() {
		return this.#logs
	}

	public toBinary() {
		return this.#toProto().toBinary()
	}

	public toJson() {
		// FIX: This is likely not portable. A type annotation is necessary.
		return this.#toProto().toJson() as object
	}

	public toJsonString() {
		return this.#toProto().toJsonString()
	}

	#toProto() {
		return new Proto({
			blockHash: this.#state.getCandidateBlockHash(),
			blockNumber: this.#state.getCandidateBlockNumber(),
			logs: this.#logs,
		})
	}
}
