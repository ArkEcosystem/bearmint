import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToHex, canonicalizeJson, stringToBytes } from '@bearmint/bep-009'
import type { KVStore } from '@bearmint/bep-013'

import { makeSecureKVStore } from '../../source/trie.js'

const keyString = 'does-exist'
const keyHex = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'
const key = Buffer.from(keyHex)
const value = 'value'

describe<{
	subject: KVStore
}>('Trie (Pruned)', () => {
	beforeEach(async (context) => {
		context.subject = await makeSecureKVStore().make({
			useKeyHashing: true,
			useNodePruning: true,
		})
	})

	it('should set the root', async (context) => {
		context.subject.setRoot(context.subject.root())

		expect(bytesToHex(context.subject.root())).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)

		// TODO: trie package relies on internals being exposed so this breaks
		// // Make sure the trie hasn't been corrupted!
		// expect(await context.subject.verifyIntegrity()).toBeTrue()
	})

	it('should set, get and forget a value with a buffer key', async (context) => {
		await expect(() => context.subject.get(key)).rejects.toThrow()

		await context.subject.set(key, value)

		expect(bytesToHex(await context.subject.get(key))).toStrictEqual('76616c7565')

		await context.subject.forget(key)

		await expect(() => context.subject.get(key)).rejects.toThrow()

		// TODO: trie package relies on internals being exposed so this breaks
		// // Make sure the trie hasn't been corrupted!
		// expect(await context.subject.verifyIntegrity()).toBeTrue()
	})

	it('should set, get and forget a value with a string key', async (context) => {
		await expect(() => context.subject.get(keyString)).rejects.toThrow()

		await context.subject.set(keyString, value)

		expect(bytesToHex(await context.subject.get(keyString))).toStrictEqual('76616c7565')

		await context.subject.forget(keyString)

		await expect(() => context.subject.get(keyString)).rejects.toThrow()

		// TODO: trie package relies on internals being exposed so this breaks
		// // Make sure the trie hasn't been corrupted!
		// expect(await context.subject.verifyIntegrity()).toBeTrue()
	})

	it('should get the root', async (context) => {
		expect(context.subject.root().toString('hex')).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)
	})

	it('should be able to take and revert checkpoints', async (context) => {
		expect(context.subject.hasCheckpoints()).toBeFalse()

		context.subject.checkpoint()

		expect(context.subject.hasCheckpoints()).toBeTrue()

		await context.subject.revert()

		expect(context.subject.hasCheckpoints()).toBeFalse()

		// TODO: trie package relies on internals being exposed so this breaks
		// // Make sure the trie hasn't been corrupted!
		// expect(await context.subject.verifyIntegrity()).toBeTrue()
	})

	it('should be able to take and commit checkpoints', async (context) => {
		expect(context.subject.hasCheckpoints()).toBeFalse()

		context.subject.checkpoint()

		expect(context.subject.hasCheckpoints()).toBeTrue()

		await context.subject.commit()

		expect(context.subject.hasCheckpoints()).toBeFalse()

		// TODO: trie package relies on internals being exposed so this breaks
		// // Make sure the trie hasn't been corrupted!
		// expect(await context.subject.verifyIntegrity()).toBeTrue()
	})

	it('should copy the trie', async (context) => {
		expect(context.subject).not.toStrictEqual(context.subject.copy())
		expect(context.subject.root()).toStrictEqual(context.subject.copy().root())
	})

	it('should not modify the original tree if the copy is modified', async (context) => {
		const copy = context.subject.copy()

		expect(bytesToHex(context.subject.root())).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)

		expect(bytesToHex(copy.root())).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)

		expect(await context.subject.has(stringToBytes('hello'))).toBeFalse()
		expect(await copy.has(stringToBytes('hello'))).toBeFalse()

		await copy.set(stringToBytes('hello'), stringToBytes('world'))

		expect(bytesToHex(context.subject.root())).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)

		expect(bytesToHex(copy.root())).toStrictEqual(
			'f9917630ce330bc2f4b851e55b76514520b822561a1cb67db87d1be9a9ae1200',
		)

		expect(await context.subject.has(stringToBytes('hello'))).toBeFalse()
		expect(await copy.has(stringToBytes('hello'))).toBeTrue()

		await context.subject.set(stringToBytes('hello'), stringToBytes('world'))

		expect(bytesToHex(context.subject.root())).toStrictEqual(
			'f9917630ce330bc2f4b851e55b76514520b822561a1cb67db87d1be9a9ae1200',
		)

		expect(bytesToHex(copy.root())).toStrictEqual(
			'f9917630ce330bc2f4b851e55b76514520b822561a1cb67db87d1be9a9ae1200',
		)

		expect(await context.subject.has(stringToBytes('hello'))).toBeTrue()
		expect(await copy.has(stringToBytes('hello'))).toBeTrue()

		// TODO: trie package relies on internals being exposed so this breaks
		// // Make sure the trie hasn't been corrupted!
		// expect(await context.subject.verifyIntegrity()).toBeTrue()
		// expect(await copy.verifyIntegrity()).toBeTrue()
	})

	it('should revert any changes made during a checkpoint', async (context) => {
		context.subject.checkpoint()

		expect(bytesToHex(context.subject.root())).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)

		await context.subject.set(stringToBytes('hello'), stringToBytes('world'))

		expect(bytesToHex(context.subject.root())).toStrictEqual(
			'f9917630ce330bc2f4b851e55b76514520b822561a1cb67db87d1be9a9ae1200',
		)

		await context.subject.revert()

		expect(bytesToHex(context.subject.root())).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)

		// TODO: trie package relies on internals being exposed so this breaks
		// // Make sure the trie hasn't been corrupted!
		// expect(await context.subject.verifyIntegrity()).toBeTrue()
	})

	it('should preserve all values when copying the root', async (context) => {
		const root = context.subject
		const copy = context.subject.copy()

		expect(await root.has(stringToBytes('a'))).toBeFalse()
		expect(await root.has(stringToBytes('b'))).toBeFalse()
		expect(await copy.has(stringToBytes('a'))).toBeFalse()
		expect(await copy.has(stringToBytes('b'))).toBeFalse()

		await copy.set(stringToBytes('a'), stringToBytes('world'))
		await copy.set(stringToBytes('b'), stringToBytes('world'))

		expect(await root.has(stringToBytes('a'))).toBeFalse()
		expect(await root.has(stringToBytes('b'))).toBeFalse()
		expect(await copy.has(stringToBytes('a'))).toBeTrue()
		expect(await copy.has(stringToBytes('b'))).toBeTrue()

		root.setRoot(copy.root())

		expect(await root.has(stringToBytes('a'))).toBeTrue()
		expect(await root.has(stringToBytes('b'))).toBeTrue()
		expect(await copy.has(stringToBytes('a'))).toBeTrue()
		expect(await copy.has(stringToBytes('b'))).toBeTrue()

		// TODO: trie package relies on internals being exposed so this breaks
		// // Make sure the trie hasn't been corrupted!
		// expect(await context.subject.verifyIntegrity()).toBeTrue()
	})

	it('should be possible to commit nested checkpoints', async (context) => {
		// Prepare a checkpointed trie with an entry (CHECKPOINT_A)
		context.subject.checkpoint()
		await context.subject.set(stringToBytes('a'), stringToBytes('world'))

		// Make a copy of the checkpointed trie
		const copy = context.subject.copy()

		// Checkpoint for the overall state of the trie (CHECKPOINT_B)
		copy.checkpoint()

		// Checkpoint from the original trie
		expect(await context.subject.has(stringToBytes('a'))).toBeTrue()
		expect(await copy.has(stringToBytes('a'))).toBeTrue()
		expect(copy.hasCheckpoints()).toBeTrue()
		// @ts-ignore
		expect(await context.subject.__database().db.keys()).toHaveLength(0)

		// Checkpoint for changes that could fail during this task cycle (CHECKPOINT_C)
		copy.checkpoint()

		// Store a value that only the copy should have
		await copy.set(stringToBytes('b'), stringToBytes('world'))

		// 1st nested checkpoint
		expect(await context.subject.has(stringToBytes('b'))).toBeFalse()
		expect(await copy.has(stringToBytes('b'))).toBeTrue()
		expect(copy.hasCheckpoints()).toBeTrue()
		// @ts-ignore
		expect(await context.subject.__database().db.keys()).toHaveLength(0)

		// Commit the 1st nested checkpoint (CHECKPOINT_C)
		await copy.commit()

		// 2nd nested checkpoint
		expect(await context.subject.has(stringToBytes('b'))).toBeFalse()
		expect(await copy.has(stringToBytes('b'))).toBeTrue()
		expect(copy.hasCheckpoints()).toBeTrue()
		// @ts-ignore
		expect(await context.subject.__database().db.keys()).toHaveLength(0)

		// Commit the 2nd nested checkpoint (CHECKPOINT_B)
		await copy.commit()

		// 2nd nested checkpoint
		expect(await context.subject.has(stringToBytes('b'))).toBeFalse()
		expect(await copy.has(stringToBytes('b'))).toBeTrue()
		expect(copy.hasCheckpoints()).toBeTrue()
		// @ts-ignore
		expect(await context.subject.__database().db.keys()).toHaveLength(0)

		// Commit the 2nd nested checkpoint (CHECKPOINT_A)
		await copy.commit()

		// We committed all checkpoints! Assert persistent data.
		expect(await context.subject.has(stringToBytes('b'))).toBeFalse()
		expect(await copy.has(stringToBytes('b'))).toBeTrue()
		expect(copy.hasCheckpoints()).toBeFalse()
		expect(await context.subject.__database().db.keys()).toHaveLength(4)

		// TODO: trie package relies on internals being exposed so this breaks
		// // Make sure the trie hasn't been corrupted!
		// context.subject.setRoot(copy.root())
		// expect(await context.subject.verifyIntegrity()).toBeTrue()
		// expect(await copy.verifyIntegrity()).toBeTrue()
	})

	it('should attach values to a list and throw for duplicates', async (context) => {
		await expect(() => context.subject.get(key)).rejects.toThrow()

		await context.subject.attach(key, keyHex)

		expect(bytesToHex(await context.subject.get(key))).toStrictEqual(
			'e1a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)

		await expect(() => context.subject.attach(key, keyHex)).rejects.toThrow(
			'Value [56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421] already exists in collection',
		)

		await context.subject.detach(key, keyHex)

		await expect(() => context.subject.get(key)).rejects.toThrow() // List is empty so deleted it

		// TODO: trie package relies on internals being exposed so this breaks
		// // Make sure the trie hasn't been corrupted!
		// expect(await context.subject.verifyIntegrity()).toBeTrue()
	})
})
