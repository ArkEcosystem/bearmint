import { makeNodes } from '../../packages/bep-097/distribution/index.js'
import { ARK } from './config.mjs'

await makeNodes({
	...ARK,
	entities: {
		accounts: 1,
		nodes: 15,
		validators: 15,
	},
})
