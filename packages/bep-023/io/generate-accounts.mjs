import { readFileSync } from 'fs'

import { makeSecureKVStore } from '../distribution/index.js'

const trie = await makeSecureKVStore().make({
	path: './accounts-non-pruned.db',
	useKeyHashing: true,
	useNodePruning: false,
})

const VALIDATOR = Buffer.from(readFileSync('./accounts/validator.txt').toString(), 'hex')

for (let index = 0; index < 200_000; index++) {
	console.log(`Writing: ${index.toString().padStart(6, '0')}`)

	// We do it 3 times to trigger new leafs
	await trie.set(`${index}`, VALIDATOR)
	await trie.set(`${index}`, VALIDATOR)
	await trie.set(`${index}`, VALIDATOR)
}
