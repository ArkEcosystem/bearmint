import type { abci, PlainMessage } from '@bearmint/bep-018'

// Tendermint
export interface Event {
	type: string
	attributes: Array<PlainMessage<abci.EventAttribute>>
}

export interface CheckTx {
	code: number
	data: string
	log: string
	info: string
	gas_wanted: string
	gas_used: string
	events: Event[]
	codespace: string
	sender: string
	priority: string
	mempoolError: string
}

export interface DeliverTx {
	code: number
	data: string
	log: string
	info: string
	gas_wanted: string
	gas_used: string
	events: Event[]
	codespace: string
}

export interface BroadcastTxResponse {
	check_tx: CheckTx
	deliver_tx: DeliverTx
	hash: string
	height: string
}
