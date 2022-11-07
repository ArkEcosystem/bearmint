import type { ClassOrFunctionReturning } from 'awilix'

import type { Tx } from './tx.js'

export interface VersionedRegistry<T> {
	all(): Record<string, Record<string, T>>
	forget(handler: string, version: string): void
	get(handler: string, version: string): T
	getFromTx(tx: Tx): T
	set(handler: string, version: string, constructor: ClassOrFunctionReturning<T>): void
}

export interface VersionedRegistryFactory {
	make<T>(name: string): VersionedRegistry<T>
}
