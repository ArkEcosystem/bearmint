import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToHex, canonicalizeJson, stringToBytes } from '@bearmint/bep-009'
import type { KVStore } from '@bearmint/bep-013'

import { makeSecureKVStore } from '../../source/trie.js'

describe<{
	subject: KVStore
}>('Trie (Not Pruned)', () => {
	beforeEach(async (context) => {
		context.subject = await makeSecureKVStore().make({ useKeyHashing: true, useNodePruning: false })
	})

	it('should be possible to revert to previous roots (unpruned)', async (context) => {
		expect(await context.subject.keys()).toHaveLength(0)

		await context.subject.set(Buffer.from('a'), Buffer.from('a'))
		const root1st = context.subject.root()
		expect(await context.subject.keys()).toHaveLength(1)

		await context.subject.set(Buffer.from('b'), Buffer.from('b'))
		const root2nd = context.subject.root()
		expect(await context.subject.keys()).toHaveLength(2)

		await context.subject.set(Buffer.from('c'), Buffer.from('c'))
		const root3rd = context.subject.root()
		expect(await context.subject.keys()).toHaveLength(3)

		// Revert to 1st root
		await context.subject.persistRoot(root1st)
		expect(await context.subject.keys()).toHaveLength(1)

		// Revert to 2nd root
		await context.subject.persistRoot(root2nd)
		expect(await context.subject.keys()).toHaveLength(2)

		// Revert to 3rd root
		await context.subject.persistRoot(root3rd)
		expect(await context.subject.keys()).toHaveLength(3)

		// Revert to 1st root
		await context.subject.persistRoot(root1st)
		expect(await context.subject.keys()).toHaveLength(1)

		// Revert to 3rd root
		await context.subject.persistRoot(root3rd)
		expect(await context.subject.keys()).toHaveLength(3)
	})

	it('should make a copy at a past root', async (context) => {
		expect(await context.subject.keys()).toHaveLength(0)

		await context.subject.set(Buffer.from('a'), Buffer.from('a'))
		await context.subject.set(Buffer.from('b'), Buffer.from('b'))
		const root2nd = context.subject.root()
		await context.subject.set(Buffer.from('c'), Buffer.from('c'))

		// Travel to a previous root
		const copy = context.subject.copy()
		copy.setRoot(root2nd)

		// Make sure we have exactly 2 entries
		expect(await copy.entries()).toHaveLength(2)
		expect(await copy.keys()).toHaveLength(2)
		expect(await copy.values()).toHaveLength(2)
		expect(canonicalizeJson(await copy.entries())).toStrictEqual([
			{
				key: '3ac225168df54212a25c1c01fd35bebfea408fdac2e31ddd6f80a4bbf9a5f1cb',
				value: '61',
			},
			{
				key: 'b5553de315e0edf504d9150af82dafa5c4667fa618ed0a6f19c69b41166c5510',
				value: '62',
			},
		])

		// Write some more to the main trie
		await context.subject.set(Buffer.from('d'), Buffer.from('d'))
		await context.subject.set(Buffer.from('e'), Buffer.from('e'))
		await context.subject.set(Buffer.from('f'), Buffer.from('f'))
		expect(await context.subject.keys()).toHaveLength(6)

		// Make sure we still have only 2 entries after writing to the main trie (from which we copied)
		expect(await copy.entries()).toHaveLength(2)
	})

	it('should keep historical versions of entries', async (context) => {
		expect(await context.subject.keys()).toHaveLength(0)

		await context.subject.set(Buffer.from('a'), Buffer.from('a'))
		const root1st = context.subject.root()
		expect(Buffer.from(await context.subject.get('a')).toString()).toStrictEqual('a')

		await context.subject.set(Buffer.from('a'), Buffer.from('b'))
		const root2nd = context.subject.root()
		expect(Buffer.from(await context.subject.get('a')).toString()).toStrictEqual('b')

		await context.subject.set(Buffer.from('a'), Buffer.from('c'))
		const root3rd = context.subject.root()
		expect(Buffer.from(await context.subject.get('a')).toString()).toStrictEqual('c')

		// Revert to 1st root
		await context.subject.persistRoot(root1st)
		expect(Buffer.from(await context.subject.get('a')).toString()).toStrictEqual('a')

		// Revert to 2nd root
		await context.subject.persistRoot(root2nd)
		expect(Buffer.from(await context.subject.get('a')).toString()).toStrictEqual('b')

		// Revert to 3rd root
		await context.subject.persistRoot(root3rd)
		expect(Buffer.from(await context.subject.get('a')).toString()).toStrictEqual('c')

		// Revert to 1st root
		await context.subject.persistRoot(root1st)
		expect(Buffer.from(await context.subject.get('a')).toString()).toStrictEqual('a')

		// Revert to 3rd root
		await context.subject.persistRoot(root3rd)
		expect(Buffer.from(await context.subject.get('a')).toString()).toStrictEqual('c')
	})

	it('should take a snapshot and clear the original trie', async (context) => {
		const trie = await makeSecureKVStore().make({ useKeyHashing: false, useNodePruning: false })
		const snap = await makeSecureKVStore().make({ useKeyHashing: false, useNodePruning: false })

		// Trie should be back to the empty root
		expect(trie.root().toString('hex')).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)
		expect(snap.root().toString('hex')).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)

		for (let index = 0; index < 10; index++) {
			await trie.set(`${index}`, 'value')
		}

		await trie.snapshot(snap)

		expect(trie.root().toString('hex')).toStrictEqual(snap.root().toString('hex'))
		expect(await trie.keys()).toHaveLength(10)
		expect(await snap.keys()).toHaveLength(10)

		await trie.clear()

		expect(trie.root().toString('hex')).not.toStrictEqual(snap.root().toString('hex'))
		expect(await trie.keys()).toHaveLength(0)
		expect(await snap.keys()).toHaveLength(10)

		// Trie should be back to the empty root
		expect(trie.root().toString('hex')).toStrictEqual(
			'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
		)
		expect(snap.root().toString('hex')).toStrictEqual(
			'25f49377cd2ad609d082c69442d1c1af81919907932136cba8a91c9192f63af5',
		)
	})
})
