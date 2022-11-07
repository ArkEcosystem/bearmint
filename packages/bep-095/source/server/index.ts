import { makeServer as makeRPC } from '@bearmint/bep-091'

import type { Memory } from '../memory.js'
import {
	makeDeleteHandler,
	makeListHandler,
	makeShowHandler,
	makeUpdateHandler,
} from './methods.js'

export async function makeServer(memory: Memory) {
	return makeRPC({
		deleteTx: makeDeleteHandler(memory),
		listTxs: makeListHandler(memory),
		showTx: makeShowHandler(memory),
		updateTx: makeUpdateHandler(memory),
	})
}
