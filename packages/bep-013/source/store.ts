export type KVStoreKey = Uint8Array | string
export type KVStoreValue = Uint8Array | string

export interface KVStoreOpts {
	path?: string | undefined
	root?: Uint8Array | undefined
	useKeyHashing?: boolean | undefined
	useNodePruning?: boolean | undefined
	useRootPersistence?: boolean | undefined
}

export interface KVStoreCheckpoint {
	keyValueMap: Map<string, Buffer | null>
	root: Buffer
}

export interface KVStore {
	// Base
	batch(
		ops: Array<{
			type: string
			key: Buffer
			value: Buffer
		}>,
	): Promise<void>
	forget(key: KVStoreKey): Promise<void>
	get(key: KVStoreKey): Promise<Uint8Array>
	set(key: KVStoreKey, value: KVStoreValue): Promise<void>
	has(key: KVStoreKey): Promise<boolean>
	missing(key: KVStoreKey): Promise<boolean>
	copy(): KVStore

	// Lists
	getList(key: KVStoreKey): Promise<Uint8Array[]>
	getListHex(key: KVStoreKey): Promise<string[]>
	attach(key: KVStoreKey, value: string): Promise<Uint8Array[]>
	detach(key: KVStoreKey, value: string): Promise<Uint8Array[]>

	// KV
	keys(): Promise<Buffer[]>
	entries(): Promise<Array<{ key: Buffer; value: Buffer }>>
	values(): Promise<Buffer[]>

	// Root
	root(): Buffer
	setRoot(hash: Buffer): void
	persistRoot(hash: Buffer): Promise<void>

	// Checkpoint
	hasCheckpoints(): boolean
	checkpoint(): void
	checkpoints(): KVStoreCheckpoint[]
	commit(): Promise<void>
	revert(): Promise<void>
	addCheckpoint(checkpoint: KVStoreCheckpoint): void

	// Snapshots
	clear(): Promise<void>
	snapshot(target: KVStore, root?: Buffer): Promise<void>

	// Integrity
	verifyIntegrity(): Promise<boolean>
}

export interface KVStoreFactory {
	make(opts?: KVStoreOpts | undefined): Promise<KVStore>
}
