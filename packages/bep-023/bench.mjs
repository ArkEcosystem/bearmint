import { bench } from '@bearmint/bep-004'

import { makeSecureKVStore } from './distribution/index.js'

const trie = await makeSecureKVStore().make()

await bench('Merkle Patricia Trie', async ({ mark }) => {
	await mark('set -> get', async () => {
		await trie.set('key', Buffer.from('value'))
		await trie.get('key')
	})

	await mark('forget', async () => {
		await trie.forget('key')
	})

	await mark('has', async () => {
		await trie.has('key')
	})
})
