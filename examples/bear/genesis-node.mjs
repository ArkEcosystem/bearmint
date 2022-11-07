import { makeNode } from '../../packages/bep-097/distribution/index.js'
import { BEAR } from './config.mjs'

await makeNode({
	...BEAR,
	entities: {
		accounts: 9,
		nodes: 1,
		validators: 1,
	},
})
