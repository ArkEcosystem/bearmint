import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect, nock } from '@bearmint/bep-005'
extendExpect(expect)

import { makeAccountListener, makeBlockListener, makeTxListener } from '../../source/listeners.js'

describe('Listener', () => {
	beforeEach(() => {
		nock.fake('https://bearmint.com/').post('/api')
	})

	it('should broadcast an account without an error', async () => {
		await makeAccountListener({
			AccountSerializer: {
				serialize() {
					return {
						toJson() {
							return {}
						},
					}
				},
			},
			Container: {
				resolve() {
					return {
						hosts: ['http://localhost/api'],
						token: 'token',
					}
				},
			},
			DataSink: { put() {} },
			Logger: console,
		}).execute({ key: 'value' }, 'event')
	})

	it('should broadcast a block without an error', async () => {
		await makeBlockListener({
			Container: {
				resolve() {
					return {
						hosts: ['http://localhost/api'],
						token: 'token',
					}
				},
			},
			DataSink: { put() {} },
			Logger: console,
		}).execute(
			{
				request: {
					hash: Buffer.from('hash').toString('base64'),
					toJson() {
						return { hash: Buffer.from('hash').toString('base64') }
					},
				},
			},
			'event',
		)
	})

	it('should broadcast a tx without an error', async () => {
		await makeTxListener({
			CommittedState: {
				getCandidateBlockNumber() {
					return BigInt(1e8)
				},
			},
			Container: {
				resolve() {
					return {
						hosts: ['http://localhost/api'],
						token: 'token',
					}
				},
			},
			DataSink: { put() {} },
			Logger: console,
			TxMsgFactoryRegistry: {
				get() {
					return {
						fromTx() {
							return { key: 'canonicalized' }
						},
					}
				},
			},
		}).execute({ checksum: {}, data: { hash: 'hash' }, key: 'value' }, 'event')
	})
})
