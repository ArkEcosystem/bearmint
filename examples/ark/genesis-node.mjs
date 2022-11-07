import { makeNode } from '../../packages/bep-097/distribution/index.js'
import { ARK } from './config.mjs'

await makeNode({
	...ARK,
	entities: {
		accounts: 1,
		nodes: 1,
		validators: 1,
	},
})
