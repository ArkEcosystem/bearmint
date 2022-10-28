/* eslint-disable unicorn/no-null */
import type {
	ABCIController,
	ClassOrFunctionReturning,
	Container,
	EventDispatcher,
	Logger,
} from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import type { Message } from '@bufbuild/protobuf'
import type { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'
import { status, UntypedHandleCall } from '@grpc/grpc-js'

import { makeCommit } from '../connections/consensus/commit.js'
import { makeFinalizeBlock } from '../connections/consensus/finalize-block.js'
import { makeInitChain } from '../connections/consensus/init-chain.js'
import { makePrepareProposal } from '../connections/consensus/prepare-proposal.js'
import { makeProcessProposal } from '../connections/consensus/process-proposal.js'
import { makeEcho } from '../connections/echo.js'
import { makeFlush } from '../connections/flush.js'
import { makeInfo } from '../connections/info/info.js'
import { makeQuery } from '../connections/info/query.js'
import { makeCheckTx } from '../connections/mempool/check-tx.js'
import { makeApplySnapshotChunk } from '../connections/snapshot/apply-snapshot-chunk.js'
import { makeListSnapshots } from '../connections/snapshot/list-snapshots.js'
import { makeLoadSnapshotChunk } from '../connections/snapshot/load-snapshot-chunk.js'
import { makeOfferSnapshot } from '../connections/snapshot/offer-snapshot.js'
import { MUTEXES } from '../mutex.js'
import { ServiceError } from './error.js'

export class ABCIService {
	[method: string]: UntypedHandleCall

	readonly #container: Container
	readonly #eventDispatcher: EventDispatcher
	readonly #logger: Logger

	public constructor(container: Container, eventDispatcher: EventDispatcher, logger: Logger) {
		this.#container = container
		this.#eventDispatcher = eventDispatcher
		this.#logger = logger
	}

	public async echo(
		call: ServerUnaryCall<abci.RequestEcho, abci.ResponseEcho>,
		callback: sendUnaryData<abci.ResponseEcho>,
	) {
		await this.#runMethod('echo', makeEcho, call, callback)
	}

	public async flush(
		call: ServerUnaryCall<abci.RequestFlush, abci.ResponseFlush>,
		callback: sendUnaryData<abci.ResponseFlush>,
	) {
		await this.#runMethod('flush', makeFlush, call, callback)
	}

	public async info(
		call: ServerUnaryCall<abci.RequestInfo, abci.ResponseInfo>,
		callback: sendUnaryData<abci.ResponseInfo>,
	) {
		await this.#runMethod('info', makeInfo, call, callback)
	}
	public async checkTx(
		call: ServerUnaryCall<abci.RequestCheckTx, abci.ResponseCheckTx>,
		callback: sendUnaryData<abci.ResponseCheckTx>,
	) {
		await this.#runMethod('checkTx', makeCheckTx, call, callback)
	}

	public async query(
		call: ServerUnaryCall<abci.RequestQuery, abci.ResponseQuery>,
		callback: sendUnaryData<abci.ResponseQuery>,
	) {
		await this.#runMethod('query', makeQuery, call, callback)
	}

	public async commit(
		call: ServerUnaryCall<abci.RequestCommit, abci.ResponseCommit>,
		callback: sendUnaryData<abci.ResponseCommit>,
	) {
		await this.#runMethod('commit', makeCommit, call, callback)
	}

	public async initChain(
		call: ServerUnaryCall<abci.RequestInitChain, abci.ResponseInitChain>,
		callback: sendUnaryData<abci.ResponseInitChain>,
	) {
		await this.#runMethod('initChain', makeInitChain, call, callback)
	}

	public async finalizeBlock(
		call: ServerUnaryCall<abci.RequestFinalizeBlock, abci.ResponseFinalizeBlock>,
		callback: sendUnaryData<abci.ResponseFinalizeBlock>,
	) {
		await this.#runMethod('finalizeBlock', makeFinalizeBlock, call, callback)
	}

	public async listSnapshots(
		call: ServerUnaryCall<abci.RequestListSnapshots, abci.ResponseListSnapshots>,
		callback: sendUnaryData<abci.ResponseListSnapshots>,
	) {
		await this.#runMethod('listSnapshots', makeListSnapshots, call, callback)
	}

	public async offerSnapshot(
		call: ServerUnaryCall<abci.RequestOfferSnapshot, abci.ResponseOfferSnapshot>,
		callback: sendUnaryData<abci.ResponseOfferSnapshot>,
	) {
		await this.#runMethod('offerSnapshot', makeOfferSnapshot, call, callback)
	}

	public async loadSnapshotChunk(
		call: ServerUnaryCall<abci.RequestLoadSnapshotChunk, abci.ResponseLoadSnapshotChunk>,
		callback: sendUnaryData<abci.ResponseLoadSnapshotChunk>,
	) {
		await this.#runMethod('loadSnapshotChunk', makeLoadSnapshotChunk, call, callback)
	}

	public async applySnapshotChunk(
		call: ServerUnaryCall<abci.RequestApplySnapshotChunk, abci.ResponseApplySnapshotChunk>,
		callback: sendUnaryData<abci.ResponseApplySnapshotChunk>,
	) {
		await this.#runMethod('applySnapshotChunk', makeApplySnapshotChunk, call, callback)
	}

	public async prepareProposal(
		call: ServerUnaryCall<abci.RequestPrepareProposal, abci.ResponsePrepareProposal>,
		callback: sendUnaryData<abci.ResponsePrepareProposal>,
	) {
		await this.#runMethod('prepareProposal', makePrepareProposal, call, callback)
	}

	public async processProposal(
		call: ServerUnaryCall<abci.RequestProcessProposal, abci.ResponseProcessProposal>,
		callback: sendUnaryData<abci.ResponseProcessProposal>,
	) {
		await this.#runMethod('processProposal', makeProcessProposal, call, callback)
	}

	async #runMethod<Request extends Message, Response>(
		methodName: string,
		methodController: ClassOrFunctionReturning<ABCIController>,
		call: ServerUnaryCall<Request, Response>,
		callback: sendUnaryData<Response>,
	) {
		try {
			await MUTEXES[methodName].runExclusive(async () => {
				if (methodName !== 'flush') {
					/* eslint-disable sort-keys-fix/sort-keys-fix */
					this.#logger.debug('%s', {
						module: '@bearmint/bep-089',
						action: 'handle_request',
						type: methodName,
					})
					/* eslint-enable sort-keys-fix/sort-keys-fix */
				}

				await this.#eventDispatcher.dispatchSerial(Event.AbciRequestProcessing, {
					method: methodName,
					request: call.request,
				})

				const response = await this.#container.build(methodController).execute(call.request)

				await this.#eventDispatcher.dispatchSerial(Event.AbciRequestProcessed, {
					method: methodName,
					request: call.request,
					response,
				})

				if (methodName !== 'flush') {
					/* eslint-disable sort-keys-fix/sort-keys-fix */
					this.#logger.debug('%s', {
						module: '@bearmint/bep-089',
						action: 'handle_response',
						type: methodName,
					})
					/* eslint-enable sort-keys-fix/sort-keys-fix */
				}

				callback(null, response as any)
			})
		} catch (error) {
			this.#logger.error(error.message)
			this.#logger.error(error.stack)

			// await writeSocketMsg({
			// 	logger: args.cradle.Logger,
			// 	response: new abci.ResponseException({ error: JSON.stringify(serializeError(error)) }),
			// 	socket: args.socket,
			// 	type: 'exception',
			// })

			return callback(new ServiceError(status.INTERNAL, error.message))
		}
	}
}
