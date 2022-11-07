import { notStrictEqual, strictEqual } from 'assert'

import { makeSecureKVStore } from '../distribution/index.js'

const trie = await makeSecureKVStore().make({
	path: './level/dummy.db',
	useKeyHashing: false,
	useNodePruning: false,
})
const snap = await makeSecureKVStore().make({ useKeyHashing: false, useNodePruning: false })

console.log('Making sure tries do not match...')
notStrictEqual(trie.root().toString('hex'), snap.root().toString('hex'))

console.log('Taking snapshot...')
await trie.snapshot(snap)

console.log('Making sure tries do match...')
strictEqual(trie.root().toString('hex'), snap.root().toString('hex'))

console.log('Snapshot matches. Yay!')
