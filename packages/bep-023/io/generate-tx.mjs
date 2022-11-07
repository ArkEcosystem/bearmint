import { readFileSync } from 'fs'

import { makeSecureKVStore } from '../distribution/index.js'

const trie = await makeSecureKVStore().make({
	path: './dummy.db',
	useKeyHashing: false,
	useNodePruning: false,
})

const BEP55_001 = Buffer.from(readFileSync('./bep-055/1.txt').toString(), 'hex')
const BEP55_064 = Buffer.from(readFileSync('./bep-055/64-slim.txt').toString(), 'hex')
// const BEP55_255 = Buffer.from(readFileSync('./bep-055/255.txt').toString(), 'hex')

for (let index = 0; index < 5_000_000; index++) {
	console.log(`Writing: ${index.toString().padStart(7, '0')}`)

	await trie.set(`${index}`, BEP55_001)
}

for (let index = 0; index < 160_000; index++) {
	console.log(`Writing: ${index.toString().padStart(7, '0')}`)

	await trie.set(`${index}`, BEP55_064)
}
