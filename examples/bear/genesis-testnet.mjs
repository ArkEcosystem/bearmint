import { makeNodes } from '../../packages/bep-097/distribution/index.js'
import { BEAR } from './config.mjs'

await makeNodes({
	...BEAR,
	entities: {
		accounts: 10,
		nodes: 8,
		validators: 4,
	},
})
