export interface MuSig {
	m: number
	n: number
	master: string
	slaves: string[]
}

export enum TxStatus {
	PENDING = 'pending',
	READY = 'ready',
}
