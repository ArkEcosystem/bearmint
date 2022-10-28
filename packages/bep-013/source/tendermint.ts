/* eslint-disable @typescript-eslint/naming-convention */
import type { abci, AnyMessage, Message, PartialMessage } from '@bearmint/bep-018'
import type { ClassOrFunctionReturning, Constructor } from 'awilix'

import type { ServiceProvider } from './service-provider.js'

export interface BlockchainInitialiser {
	execute(request: abci.RequestInitChain): Promise<abci.ResponseInitChain>
}

export interface Tendermint {
	boot(host: string, port: number): void
	dispose(): void
}

export interface EventRecorderAttribute {
	key: string
	value: string
	index?: boolean | undefined
}

export interface EventRecorder {
	actingAs(type: string): void
	all(): abci.Event
	captureError(attribute: EventRecorderAttribute): void
	captureErrors(attributes: EventRecorderAttribute[]): boolean
	captureEvent(attribute: EventRecorderAttribute): void
	captureEvents(attributes: EventRecorderAttribute[]): boolean
	errors(): abci.Event
	events(): abci.Event
	hasErrors(): boolean
	hasEvents(): boolean
}

export interface ABCIController<
	TRequest extends Message = AnyMessage,
	TResponse extends Message = AnyMessage,
> {
	execute(request: TRequest): Promise<PartialMessage<TResponse>>
}

/**
 * @see https://github.com/tendermint/tendermint/blob/main/spec/abci/abci%2B%2B_methods.md#info
 */
export interface ApplicationManifest {
	name: string
	protocolVersion: string
	semanticVersion: string
	modules: Array<Constructor<ServiceProvider>>
}

export interface GenesisValidator {
	address: string
	name: string
	power: string
	pub_key: {
		type: string
		value: string
	}
}

export interface GenesisParameters {
	app_hash: string
	app_state: object
	chain_id: string
	genesis_time: string
	initial_height: string
	validators: GenesisValidator[]
}

export interface EventRecorderFactory {
	make(): EventRecorder
}

export interface QueryHandlerOpts {
	data: Uint8Array | undefined
	path: string[]
}

export interface QueryHandler {
	isMatch(opts: QueryHandlerOpts): Promise<boolean>
	execute(opts: QueryHandlerOpts): Promise<PartialMessage<abci.ResponseQuery>>
}

export type QueryHandlerRegistry = Set<ClassOrFunctionReturning<QueryHandler>>
