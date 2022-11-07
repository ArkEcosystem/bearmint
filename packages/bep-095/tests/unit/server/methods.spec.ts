import { expect, describe, it, beforeEach, afterEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToHex, hexToBytes } from '@bearmint/bep-009'
import { SignedTx } from '@bearmint/bep-018'
import BLS from 'bls-eth-wasm'
import MockDate from 'mockdate'

import type { Memory } from '../../../source/memory.js'
import { makeMemory } from '../../../source/memory.js'
import {
	makeDeleteHandler,
	makeListHandler,
	makeShowHandler,
	makeUpdateHandler,
} from '../../../source/server/methods.js'
import { accounts, data, muSig, muSigFull } from '../../fixture.js'
import type { MuSigFactory } from '../../musig.js'
import { makeMuSigFactory } from '../../musig.js'

async function assertPending({ context, hash }) {
	await expect(async () => context.subject.show.execute({ hash })).rejects.toThrow(
		'The tx is not ready yet.',
	)
}

async function signHash({ account, hash, muSigFactory }) {
	return {
		id: account.id,
		publicKey: account.publicKey,
		signature: bytesToHex(
			await muSigFactory.sign({
				hash: hexToBytes(hash),
				signatory: {
					id: Buffer.from(account.id, 'hex'),
					privateKey: Buffer.from(account.privateKey, 'hex'),
				},
			}),
		),
	}
}

describe<{
	hash: string
	subject: {
		delete: { execute: CallableFunction; schema: object }
		list: { execute: CallableFunction; schema: object }
		show: { execute: CallableFunction; schema: object }
		store: { execute: CallableFunction; schema: object }
	}
	muSigFactory: MuSigFactory
	memory: Memory
}>('Server', () => {
	beforeEach(async (context) => {
		await BLS.init(BLS.BLS12_381)

		context.hash = bytesToHex(new SignedTx(data).toBinary())
		context.memory = makeMemory({ pendingLimit: 3 })
		context.muSigFactory = makeMuSigFactory()

		context.subject = {
			delete: makeDeleteHandler(context.memory),
			list: makeListHandler(context.memory),
			show: makeShowHandler(context.memory),
			store: makeUpdateHandler(context.memory),
		}

		MockDate.set(Date.parse('2022-05-09T13:14:01+00:00'))
	})

	afterEach(() => {
		MockDate.reset()
	})

	it('should fail if there are less than M signatures', async (context) => {
		await context.subject.store.execute({
			hash: context.hash,
			muSig,
			signature: await signHash({
				account: accounts[0],
				hash: context.hash,
				muSigFactory: context.muSigFactory,
			}),
		})

		await assertPending({ context, hash: context.hash })
	})

	it('should complete an M-of-N scheme', async (context) => {
		expect(
			(
				await context.subject.store.execute({
					hash: context.hash,
					muSig,
					signature: await signHash({
						account: accounts[0],
						hash: context.hash,
						muSigFactory: context.muSigFactory,
					}),
				})
			).hash,
		).toStrictEqual(context.hash)

		await assertPending({ context, hash: context.hash })

		expect(
			(
				await context.subject.store.execute({
					hash: context.hash,
					muSig,
					signature: await signHash({
						account: accounts[1],
						hash: context.hash,
						muSigFactory: context.muSigFactory,
					}),
				})
			).hash,
		).toStrictEqual(context.hash)

		const responseShow = await context.subject.show.execute({
			hash: context.hash,
		})

		expect(responseShow).toMatchSnapshot()
	})

	it('should complete an N-of-N scheme', async (context) => {
		const responseStore = await context.subject.store.execute({
			hash: context.hash,
			muSig: muSigFull,
			signature: await signHash({
				account: accounts[0],
				hash: context.hash,
				muSigFactory: context.muSigFactory,
			}),
		})

		expect(responseStore.hash).toStrictEqual(context.hash)

		await assertPending({ context, hash: context.hash })

		expect(
			(
				await context.subject.store.execute({
					hash: context.hash,
					muSig: muSigFull,
					signature: await signHash({
						account: accounts[1],
						hash: context.hash,
						muSigFactory: context.muSigFactory,
					}),
				})
			).hash,
		).toStrictEqual(context.hash)

		await assertPending({ context, hash: context.hash })

		expect(
			(
				await context.subject.store.execute({
					hash: context.hash,
					muSig: muSigFull,
					signature: await signHash({
						account: accounts[2],
						hash: context.hash,
						muSigFactory: context.muSigFactory,
					}),
				})
			).hash,
		).toStrictEqual(context.hash)

		expect(
			await context.subject.show.execute({
				hash: context.hash,
			}),
		).toMatchSnapshot()
	})

	it('should respond with code -32004 if the tx does not exist for [show]', async (context) => {
		await expect(async () =>
			context.subject.show.execute({
				hash: context.hash,
			}),
		).rejects.toThrow('-32004')
	})

	it('should delete a tx by its hash', async (context) => {
		expect(
			(
				await context.subject.store.execute({
					hash: context.hash,
					muSig: muSigFull,
					signature: await signHash({
						account: accounts[0],
						hash: context.hash,
						muSigFactory: context.muSigFactory,
					}),
				})
			).hash,
		).toStrictEqual(context.hash)

		expect(
			(
				await context.subject.delete.execute({
					hash: context.hash,
				})
			).hash,
		).toStrictEqual(context.hash)

		await expect(() =>
			context.subject.show.execute({
				hash: context.hash,
			}),
		).rejects.toThrow('-32004')
	})

	it('should respond with code -32004 if the tx does not exist for [delete]', async (context) => {
		await expect(() =>
			context.subject.delete.execute({
				hash: context.hash,
			}),
		).rejects.toThrow('-32004')
	})

	it('should list all txs', async (context) => {
		await context.subject.store.execute({
			hash: context.hash,
			muSig,
			signature: await signHash({
				account: accounts[0],
				hash: context.hash,
				muSigFactory: context.muSigFactory,
			}),
		})

		expect(
			await context.subject.list.execute({
				publicKey: muSig.master,
			}),
		).toMatchSnapshot()
	})

	it('should list pending txs', async (context) => {
		await context.subject.store.execute({
			hash: context.hash,
			muSig,
			signature: await signHash({
				account: accounts[0],
				hash: context.hash,
				muSigFactory: context.muSigFactory,
			}),
		})

		expect(
			await context.subject.list.execute({
				publicKey: muSig.master,
				state: 'pending',
			}),
		).toMatchSnapshot()
	})

	it('should list ready txs', async (context) => {
		await context.subject.store.execute({
			hash: context.hash,
			muSig,
			signature: await signHash({
				account: accounts[0],
				hash: context.hash,
				muSigFactory: context.muSigFactory,
			}),
		})

		await context.subject.store.execute({
			hash: context.hash,
			muSig,
			signature: await signHash({
				account: accounts[1],
				hash: context.hash,
				muSigFactory: context.muSigFactory,
			}),
		})

		expect(
			await context.subject.list.execute({
				publicKey: muSig.master,
				state: 'ready',
			}),
		).toMatchSnapshot()
	})
})
