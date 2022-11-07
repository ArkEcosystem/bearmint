import { expect, describe, it, beforeEach, afterEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToHex } from '@bearmint/bep-009'
import { SignedTx } from '@bearmint/bep-018'
import MockDate from 'mockdate'

import type { Memory } from '../../source/memory.js'
import { makeMemory } from '../../source/memory.js'
import { accounts, data, muSig } from '../fixture.js'

describe<{ hash: string; subject: Memory }>('Memory', () => {
	beforeEach((context) => {
		context.hash = bytesToHex(new SignedTx(data).toBinary())
		context.subject = makeMemory({ pendingLimit: 3 })

		MockDate.set(Date.parse('2022-05-09T13:14:01+00:00'))
	})

	afterEach(() => {
		MockDate.reset()
	})

	it('should create a tx with a signature and then append further signature', async (context) => {
		expect(context.subject.getAllTxs()).toHaveLength(0)

		context.subject.saveTx({
			hash: context.hash,
			muSig,
			signature: accounts[0],
		})

		expect(context.subject.getAllTxs()).toMatchSnapshot()

		context.subject.updateTx({
			hash: context.hash,
			muSig,
			signature: accounts[1],
		})

		expect(context.subject.getAllTxs()).toMatchSnapshot()

		context.subject.updateTx({
			hash: context.hash,
			muSig,
			signature: accounts[2],
		})

		expect(context.subject.getAllTxs()).toMatchSnapshot()
	})

	it('should throw if the max tx limit has been reached', async (context) => {
		context.subject.saveTx({
			hash: 'a',
			muSig,
			signature: accounts[0],
		})

		context.subject.saveTx({
			hash: 'b',
			muSig,
			signature: accounts[0],
		})

		context.subject.saveTx({
			hash: 'c',
			muSig,
			signature: accounts[0],
		})

		expect(() =>
			context.subject.saveTx({
				hash: 'd',
				muSig,
				signature: accounts[0],
			}),
		).toThrow('has reached its max of 3 pending txs')
	})

	it('should remove all txs', async (context) => {
		expect(context.subject.getAllTxs()).toHaveLength(0)

		context.subject.saveTx({
			hash: context.hash,
			muSig,
			signature: accounts[0],
		})

		expect(context.subject.getAllTxs()).toMatchSnapshot()

		context.subject.deleteAllTxs()

		expect(context.subject.getAllTxs()).toHaveLength(0)
	})

	it('should restore all txs', async (context) => {
		context.subject.saveTx({
			hash: context.hash,
			muSig,
			signature: accounts[0],
		})

		expect(context.subject.getAllTxs()).toMatchSnapshot()

		const txs = context.subject.getAllTxs()

		context.subject.deleteAllTxs()

		expect(context.subject.getAllTxs()).toHaveLength(0)

		context.subject.loadTxs(txs)

		expect(context.subject.getAllTxs()).toMatchSnapshot()
	})

	it('should restore all txs', async (context) => {
		expect(context.subject.getTxStoreByPublicKey(muSig.master)).toHaveLength(0)

		context.subject.saveTx({
			hash: context.hash,
			muSig,
			signature: accounts[0],
		})

		expect(context.subject.getTxStoreByPublicKey(muSig.master)).toMatchSnapshot()
	})
})
