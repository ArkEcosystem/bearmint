import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToHex } from '@bearmint/bep-009'
import { makeEventDispatcher } from '@bearmint/bep-015'
import { TxChecksum } from '@bearmint/bep-018'
import { makeEventRecorder } from '@bearmint/bep-090'
import {
	TxAuditException,
	TxExecutionFailedException,
	TxFailuresRecordedException,
} from '@bearmint/bep-109'

import { makeTxProcessor } from '../../source/tx-processor.js'

describe('Tx Processor', () => {
	it('should audit and execute without errors', async () => {
		await expect(
			makeTxProcessor({
				EventDispatcher: makeEventDispatcher(),
				TxAuditorRegistry: {
					get() {
						return {
							execute: () => '',
						}
					},
				},
				TxExecutorRegistry: {
					get() {
						return {
							execute: () => '',
						}
					},
				},
				TxManifestRegistry: {
					getFromTx() {
						return {
							name() {
								return 'handler'
							},
							version() {
								return 'version'
							},
						}
					},
				},
				TxMsgFactoryRegistry: {
					get() {
						return {
							fromTx() {
								return {}
							},
						}
					},
				},
			}).execute(
				makeEventRecorder(),
				{},
				{},
				{
					checksum: {
						handler: 'handler',
						network: 'network',
						version: 'version',
					},
					type: bytesToHex(
						new TxChecksum({
							handler: 'handler',
							network: 'network',
							version: 'version',
						}).toBinary(),
					),
				},
			),
		).resolves.not.toThrow()
	})

	it('should attempt to audit and fail', async () => {
		await expect(() =>
			makeTxProcessor({
				EventDispatcher: makeEventDispatcher(),
				TxAuditorRegistry: {
					get() {
						return {
							execute: () => {
								throw new Error('Yikes! No audit for you.')
							},
						}
					},
				},
				TxExecutorRegistry: {
					get() {
						return {
							execute: () => '',
						}
					},
				},
				TxManifestRegistry: {
					getFromTx() {
						return {
							name() {
								return 'handler'
							},
							version() {
								return 'version'
							},
						}
					},
				},
				TxMsgFactoryRegistry: {
					get() {
						return {
							fromTx() {
								return {}
							},
						}
					},
				},
			}).execute(
				makeEventRecorder(),
				{},
				{},
				{
					checksum: {
						handler: 'handler',
						network: 'network',
						version: 'version',
					},
					data: {},
					type: bytesToHex(
						new TxChecksum({
							handler: 'handler',
							network: 'network',
							version: 'version',
						}).toBinary(),
					),
				},
			),
		).rejects.toThrow('Yikes! No audit for you.')
	})

	it('should attempt to execute and fail', async () => {
		await expect(() =>
			makeTxProcessor({
				EventDispatcher: makeEventDispatcher(),
				TxAuditorRegistry: {
					get() {
						return {
							execute: () => {
								throw new Error('Yikes! No execute for you.')
							},
						}
					},
				},
				TxExecutorRegistry: {
					get() {
						return {
							execute: () => '',
						}
					},
				},
				TxManifestRegistry: {
					getFromTx() {
						return {
							name() {
								return 'handler'
							},
							version() {
								return 'version'
							},
						}
					},
				},
				TxMsgFactoryRegistry: {
					get() {
						return {
							fromTx() {
								return {}
							},
						}
					},
				},
			}).execute(
				makeEventRecorder(),
				{},
				{},
				{
					checksum: {
						handler: 'handler',
						network: 'network',
						version: 'version',
					},
					data: {},
					type: bytesToHex(
						new TxChecksum({
							handler: 'handler',
							network: 'network',
							version: 'version',
						}).toBinary(),
					),
				},
			),
		).rejects.toThrow('Yikes! No execute for you.')
	})

	it('should handle `TxAuditException` exceptions', async () => {
		await expect(() =>
			makeTxProcessor({
				EventDispatcher: makeEventDispatcher(),
				TxAuditorRegistry: {
					get() {
						return {
							execute: () => {
								throw new TxAuditException({
									key: 'key',
									value: 'value',
								})
							},
						}
					},
				},
				TxExecutorRegistry: {
					get() {
						return {
							execute: () => '',
						}
					},
				},
				TxManifestRegistry: {
					getFromTx() {
						return {
							name() {
								return 'handler'
							},
							version() {
								return 'version'
							},
						}
					},
				},
				TxMsgFactoryRegistry: {
					get() {
						return {
							fromTx() {
								return {}
							},
						}
					},
				},
			}).execute(
				makeEventRecorder(),
				{},
				{},
				{
					checksum: {
						handler: 'handler',
						network: 'network',
						version: 'version',
					},
					hash: 'hash',
					type: bytesToHex(
						new TxChecksum({
							handler: 'handler',
							network: 'network',
							version: 'version',
						}).toBinary(),
					),
				},
			),
		).rejects.toThrow('Tx (hash) contained (1) errors')
	})

	it('should handle `TxExecutionFailedException` exceptions', async () => {
		await expect(() =>
			makeTxProcessor({
				EventDispatcher: makeEventDispatcher(),
				TxAuditorRegistry: {
					get() {
						throw new Error('Yikes! This is not supposed to happen.')
					},
				},
				TxExecutorRegistry: {
					get() {
						return {
							execute: () => '',
						}
					},
				},
				TxManifestRegistry: {
					getFromTx() {
						return {
							name() {
								return 'handler'
							},
							version() {
								return 'version'
							},
						}
					},
				},
				TxMsgFactoryRegistry: {
					get() {
						return {
							fromTx() {
								return {}
							},
						}
					},
				},
			}).execute(
				makeEventRecorder(),
				{},
				{},
				{
					checksum: {
						handler: 'handler',
						network: 'network',
						version: 'version',
					},
					hash: 'hash',
					type: bytesToHex(
						new TxChecksum({
							handler: 'handler',
							network: 'network',
							version: 'version',
						}).toBinary(),
					),
				},
			),
		).rejects.toThrow('Tx (hash) failed to context: Yikes! This is not supposed to happen.')
	})

	it('should handle `TxFailuresRecordedException` exceptions', async () => {
		await expect(() =>
			makeTxProcessor({
				EventDispatcher: makeEventDispatcher(),
				TxAuditorRegistry: {
					get() {
						return {
							execute: () => '',
						}
					},
				},
				TxExecutorRegistry: {
					get() {
						return {
							execute: () => '',
						}
					},
				},
				TxManifestRegistry: {
					getFromTx() {
						return {
							name() {
								return 'handler'
							},
							version() {
								return 'version'
							},
						}
					},
				},
				TxMsgFactoryRegistry: {
					get() {
						return {
							fromTx() {
								return {}
							},
						}
					},
				},
			}).execute(
				{
					actingAs() {
						//
					},
					errors() {
						return { attributes: [{}] }
					},
					hasErrors() {
						return true
					},
				},
				{},
				{},
				{
					checksum: {
						handler: 'handler',
						network: 'network',
						version: 'version',
					},
					hash: 'hash',
					type: bytesToHex(
						new TxChecksum({
							handler: 'handler',
							network: 'network',
							version: 'version',
						}).toBinary(),
					),
				},
			),
		).rejects.toThrow('Tx (hash) contained (1) errors')
	})
})
