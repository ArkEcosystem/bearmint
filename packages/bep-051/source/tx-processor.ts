import type { Cradle, TxProcessor } from '@bearmint/bep-013'
import { Event } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import {
	TxAuditException,
	TxExecutionFailedException,
	TxFailuresRecordedException,
} from '@bearmint/bep-109'

import { createAssertionFunctions } from './assert.js'
import { createToolkit } from './context.js'
import { TxReceipt } from './receipt.js'

export function makeTxProcessor(cradle: Cradle): TxProcessor {
	return {
		async execute(eventRecorder, gasMeter, state, tx) {
			eventRecorder.actingAs(`${tx.type}/context`)

			try {
				// Manifest
				const manifest = cradle.TxManifestRegistry.getFromTx(tx)

				// Message
				const msg = await cradle.TxMsgFactoryRegistry.get(
					manifest.name(),
					manifest.version(),
				).fromTx(tx)

				// Auditor
				const auditor = cradle.TxAuditorRegistry.get(tx.checksum.handler, tx.checksum.version)

				// Executor
				const executor = cradle.TxExecutorRegistry.get(tx.checksum.handler, tx.checksum.version)

				const args = {
					assert: createAssertionFunctions(cradle, manifest, state, tx),
					eventRecorder,
					msg,
					receipt: new TxReceipt(state),
					state,
					toolkit: createToolkit(cradle, manifest, msg, state, tx),
					tx,
				}

				const events: abci.Event[] = []

				for (const [methodName, methodArgs] of Object.entries({
					audit: {
						after: Event.TransactionAudited,
						before: Event.TransactionAuditing,
						callback: auditor,
					},
					execute: {
						after: Event.TransactionExecuted,
						before: Event.TransactionExecuting,
						callback: executor,
					},
				})) {
					try {
						eventRecorder.actingAs(`${manifest.name()}/${manifest.version()}/${methodName}`)

						await cradle.EventDispatcher.dispatchSerial(methodArgs.before, {
							eventRecorder,
							gasMeter,
							msg,
							state,
							tx,
						})

						await methodArgs.callback.execute(args)

						await cradle.EventDispatcher.dispatchSerial(methodArgs.after, {
							eventRecorder,
							gasMeter,
							msg,
							state,
							tx,
						})

						if (eventRecorder.hasErrors()) {
							// console.log(eventRecorder.errors())
							throw new TxFailuresRecordedException(tx.hash, eventRecorder.errors())
						}

						events.push(eventRecorder.events())
					} catch (error) {
						// An assertion function during tx verification failed so we handle it
						if (error instanceof TxAuditException) {
							eventRecorder.captureErrors(error.attributes)

							throw new TxFailuresRecordedException(tx.hash, eventRecorder.errors())
						}

						if (error instanceof TxFailuresRecordedException) {
							throw error
						}

						throw new TxExecutionFailedException(tx.hash, methodName, error.message)
					}
				}

				return { events, receipt: args.receipt }
			} catch (error) {
				if (error instanceof TxFailuresRecordedException) {
					throw error
				}

				if (error instanceof TxExecutionFailedException) {
					throw error
				}

				throw new TxExecutionFailedException(tx.hash, 'context', error.message)
			}
		},
	}
}
