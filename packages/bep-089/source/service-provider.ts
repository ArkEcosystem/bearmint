import type { Cradle, ServiceProvider, Tendermint } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'
import { makeServiceProviderSkeleton } from '@bearmint/bep-016'

import { createGrpcServer } from './grpc/server.js'

export function makeServiceProvider(cradle: Cradle): ServiceProvider {
	/* c8 ignore start */
	return {
		...makeServiceProviderSkeleton(import.meta.url),
		async boot() {
			// Read the `proxy_app` value from `$TMHOME/config/config.toml`
			const [hostname, port] = cradle.TendermintConfiguration.proxy_app.split(':')

			cradle.Container.resolve<Tendermint>(ContainerType.Tendermint).boot(hostname, Number(port))
		},
		async dispose() {
			cradle.Container.resolve<Tendermint>(ContainerType.Tendermint).dispose()
		},
		/* c8 ignore end */
		async register() {
			cradle.Container.bindFunctionSingleton(ContainerType.Tendermint, createGrpcServer)
		},
	}
}
