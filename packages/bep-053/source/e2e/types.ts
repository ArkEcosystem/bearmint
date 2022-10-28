import type { abci, PlainMessage } from '@bearmint/bep-018'
import type { makeInstance } from '@bearmint/bep-099'

import type { AcctFactory, AcctRepository } from './account.js'
import type { TxFactory } from './tx.js'

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

export interface ExecuteTx {
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
	deliver_tx: ExecuteTx
	hash: string
	height: string
}

// Generic
export interface Context {
	acctFactory: AcctFactory
	accts: AcctRepository
	client: ReturnType<typeof makeInstance>
	txFactory: TxFactory
}
