import type { Cradle } from '@bearmint/bep-013'
import { ABCI } from '@bearmint/bep-018'
import { Server, ServerCredentials } from '@grpc/grpc-js'

import { ABCIService } from './abci.js'
import { createGrpcServiceDefinition } from './proto.js'

const ABCI_MAX_MESSAGE_SIZE = 104_857_600

export function createGrpcServer(cradle: Cradle) {
	const server = new Server({
		'grpc.max_receive_message_length': ABCI_MAX_MESSAGE_SIZE,
		'grpc.max_send_message_length': ABCI_MAX_MESSAGE_SIZE,
	})

	server.addService(
		createGrpcServiceDefinition(ABCI),
		new ABCIService(cradle.Container, cradle.EventDispatcher, cradle.Logger),
	)

	return {
		boot(host: string, port: number) {
			server.bindAsync(
				`${host}:${port}`,
				ServerCredentials.createInsecure(),
				(error: Error | null) => {
					if (error !== null) {
						throw error
					}

					cradle.Logger.debug(`Tendermint gRPC ABCI listening on ${host}:${port}`)

					server.start()
				},
			)
		},
		dispose() {
			server.tryShutdown(() => {
				cradle.Logger.debug('Tendermint gRPC has been shut down')
			})
		},
	}
}
