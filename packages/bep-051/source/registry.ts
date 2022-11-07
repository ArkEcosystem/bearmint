import type {
	Cradle,
	Tx,
	TxAuditor,
	TxAuditorRegistry,
	TxExecutor,
	TxExecutorRegistry,
	TxManifest,
	TxManifestRegistry,
	TxMsgFactory,
	TxMsgFactoryRegistry,
} from '@bearmint/bep-013'

export function makeTxAuditorRegistry(cradle: Cradle): TxAuditorRegistry {
	return cradle.VersionedRegistryFactory.make<TxAuditor>('TxAuditor')
}

export function makeTxExecutorRegistry(cradle: Cradle): TxExecutorRegistry {
	return cradle.VersionedRegistryFactory.make<TxExecutor>('TxExecutor')
}

export function makeTxManifestRegistry(cradle: Cradle): TxManifestRegistry {
	return cradle.VersionedRegistryFactory.make<TxManifest>('TxManifest')
}

export function makeTxMsgFactoryRegistry(cradle: Cradle): TxMsgFactoryRegistry {
	const registry = cradle.VersionedRegistryFactory.make<TxMsgFactory>('TxMsgFactory')

	return {
		...registry,
		get<T = TxMsgFactory>(handler: string, version: string) {
			return registry.get(handler, version) as T
		},
		getFromTx<T = TxMsgFactory>(tx: Tx) {
			return registry.get(tx.checksum.handler, tx.checksum.version) as T
		},
	}
}
