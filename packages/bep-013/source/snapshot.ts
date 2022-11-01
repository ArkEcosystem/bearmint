import type { abci } from '@bearmint/bep-018'

export interface SnapshotService {
	list(): Promise<abci.Snapshot[]>
	find(height: bigint, format: number, chunk: number): Promise<Uint8Array>

	dump(format: number): Promise<abci.Snapshot>
	load(chunk: Uint8Array): Promise<void>
}
