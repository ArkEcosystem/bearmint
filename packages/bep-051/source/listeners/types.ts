import type { EventRecorder, GasMeter, StateStore, Tx } from '@bearmint/bep-013'

export interface TxListenerPayload<T = unknown> {
	eventRecorder: EventRecorder
	gasMeter: GasMeter
	msg: T
	state: StateStore
	tx: Tx
}
