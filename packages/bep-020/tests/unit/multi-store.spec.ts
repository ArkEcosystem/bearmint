import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { KVStore } from '@bearmint/bep-013'
import { makeSecureKVStore } from '@bearmint/bep-023'

import { makeMultiStore } from '../../source/multi-store.js'

describe<{
	subject: ReturnType<typeof makeMultiStore>
	trie: KVStore
}>('State', () => {
	beforeEach(async (context) => {
		context.subject = makeMultiStore()
		context.trie = await makeSecureKVStore().make()
	})

	it('should set, get and list stores', (context) => {
		expect(Object.keys(context.subject.all()).length).toBe(0)

		context.subject.set('@bearmint/module', context.trie)

		expect(context.subject.get('@bearmint/module')).toStrictEqual(context.trie)
		expect(Object.keys(context.subject.all()).length).toBe(1)
	})

	it('should make a copy of all stores', (context) => {
		context.subject.set('@bearmint/module', context.trie)

		// Original should equal our fixture
		expect(context.subject.get('@bearmint/module')).toStrictEqual(context.trie)
		// Copy should not equal our fixture
		expect(context.subject.copy().get('@bearmint/module').root()).toStrictEqual(context.trie.root())
	})

	it('should get the roots of all stores', (context) => {
		context.subject.set('@bearmint/module', context.trie)

		expect(context.subject.roots()).toStrictEqual({
			'@bearmint/module': Buffer.from(
				'56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
				'hex',
			),
		})
	})
})
