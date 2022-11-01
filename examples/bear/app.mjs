import { makeContainer } from '../../packages/bep-014/distribution/index.js'
import {
	makeEventDispatcher,
	makeServiceProvider as BEP15,
} from '../../packages/bep-015/distribution/index.js'
import { makeServiceProviderRepository } from '../../packages/bep-016/distribution/index.js'
import { bootstrappers } from '../../packages/bep-017/distribution/index.js'
import { makeServiceProvider as BEP20 } from '../../packages/bep-020/distribution/index.js'
import { makeServiceProvider as BEP21 } from '../../packages/bep-021/distribution/index.js'
import { makeServiceProvider as BEP22 } from '../../packages/bep-022/distribution/index.js'
import { makeServiceProvider as BEP23 } from '../../packages/bep-023/distribution/index.js'
import {
	makeConsoleLogger,
	makeServiceProvider as BEP26,
} from '../../packages/bep-026/distribution/index.js'
import { makeServiceProvider as BEP30 } from '../../packages/bep-030/distribution/index.js'
import { makeServiceProvider as BEP33 } from '../../packages/bep-033/distribution/index.js'
import { makeServiceProvider as BEP38 } from '../../packages/bep-038/distribution/index.js'
import { makeServiceProvider as BEP42 } from '../../packages/bep-042/distribution/index.js'
import { makeServiceProvider as BEP48 } from '../../packages/bep-048/distribution/index.js'
import { makeServiceProvider as BEP49 } from '../../packages/bep-049/distribution/index.js'
import { makeServiceProvider as BEP50 } from '../../packages/bep-050/distribution/index.js'
import { makeServiceProvider as BEP51 } from '../../packages/bep-051/distribution/index.js'
import { makeServiceProvider as BEP55 } from '../../packages/bep-055/distribution/index.js'
import { makeServiceProvider as BEP56 } from '../../packages/bep-056/distribution/index.js'
import { makeServiceProvider as BEP57 } from '../../packages/bep-057/distribution/index.js'
import { makeServiceProvider as BEP58 } from '../../packages/bep-058/distribution/index.js'
import { makeServiceProvider as BEP59 } from '../../packages/bep-059/distribution/index.js'
import { makeServiceProvider as BEP64 } from '../../packages/bep-064/distribution/index.js'
import { makeServiceProvider as BEP65 } from '../../packages/bep-065/distribution/index.js'
import { makeServiceProvider as BEP66 } from '../../packages/bep-066/distribution/index.js'
import { makeServiceProvider as BEP67 } from '../../packages/bep-067/distribution/index.js'
import { makeServiceProvider as BEP68 } from '../../packages/bep-068/distribution/index.js'
import { makeServiceProvider as BEP76 } from '../../packages/bep-076/distribution/index.js'
import { makeServiceProvider as BEP77 } from '../../packages/bep-077/distribution/index.js'
import { makeServiceProvider as BEP78 } from '../../packages/bep-078/distribution/index.js'
import { makeServiceProvider as BEP79 } from '../../packages/bep-079/distribution/index.js'
import { makeServiceProvider as BEP80 } from '../../packages/bep-080/distribution/index.js'
import { makeServiceProvider as BEP81 } from '../../packages/bep-081/distribution/index.js'
import { makeServiceProvider as BEP82 } from '../../packages/bep-082/distribution/index.js'
import { makeServiceProvider as BEP83 } from '../../packages/bep-083/distribution/index.js'
import { makeServiceProvider as BEP84 } from '../../packages/bep-084/distribution/index.js'
import { makeServiceProvider as BEP85 } from '../../packages/bep-085/distribution/index.js'
import { makeServiceProvider as BEP86 } from '../../packages/bep-086/distribution/index.js'
import { makeServiceProvider as BEP87 } from '../../packages/bep-087/distribution/index.js'
import { makeServiceProvider as BEP88 } from '../../packages/bep-088/distribution/index.js'
import { makeServiceProvider as BEP89 } from '../../packages/bep-089/distribution/index.js'
import { makeServiceProvider as BEP90 } from '../../packages/bep-090/distribution/index.js'
import { makeApplication } from '../../packages/bep-098/distribution/index.js'
import { makeServiceProvider as BEP100 } from '../../packages/bep-100/distribution/index.js'
import { makeServiceProvider as BEP102 } from '../../packages/bep-102/distribution/index.js'
import { makeServiceProvider as BEP103 } from '../../packages/bep-103/distribution/index.js'
import { makeServiceProvider as BEP104 } from '../../packages/bep-104/distribution/index.js'
import { makeServiceProvider as BEP110 } from '../../packages/bep-110/distribution/index.js'
import { makeServiceProvider as BEP115 } from '../../packages/bep-115/distribution/index.js'
import { makeServiceProvider as BEP118 } from '../../packages/bep-118/distribution/index.js'
import { makeServiceProvider as BEP119 } from '../../packages/bep-119/distribution/index.js'
import { makeServiceProvider as BEP120 } from '../../packages/bep-120/distribution/index.js'
import { makeServiceProvider as BEP121 } from '../../packages/bep-121/distribution/index.js'
import { makeServiceProvider as BEP122 } from '../../packages/bep-122/distribution/index.js'
import { makeServiceProvider as BEP124 } from '../../packages/bep-124/distribution/index.js'
import { makeServiceProvider as BEP126 } from '../../packages/bep-126/distribution/index.js'
import { makeServiceProvider as BEP127 } from '../../packages/bep-127/distribution/index.js'
import { makeServiceProvider as BEP128 } from '../../packages/bep-128/distribution/index.js'
import { makeServiceProvider as BEP129 } from '../../packages/bep-129/distribution/index.js'
import { makeServiceProvider as BEP130 } from '../../packages/bep-130/distribution/index.js'
import { makeServiceProvider as BEP131 } from '../../packages/bep-131/distribution/index.js'
import { makeServiceProvider as BEP132 } from '../../packages/bep-132/distribution/index.js'
import { makeServiceProvider as BEP133 } from '../../packages/bep-133/distribution/index.js'
import { makeServiceProvider as BEP134 } from '../../packages/bep-134/distribution/index.js'
import { makeServiceProvider as BEP135 } from '../../packages/bep-135/distribution/index.js'
import { makeServiceProvider as BEP136 } from '../../packages/bep-136/distribution/index.js'
import { makeServiceProvider as BEP137 } from '../../packages/bep-137/distribution/index.js'
import { makeServiceProvider as BEP138 } from '../../packages/bep-138/distribution/index.js'
import { makeServiceProvider as BEP139 } from '../../packages/bep-139/distribution/index.js'
import { makeServiceProvider as BEP140 } from '../../packages/bep-140/distribution/index.js'
import { makeServiceProvider as BEP141 } from '../../packages/bep-141/distribution/index.js'
import { makeServiceProvider as BEP142 } from '../../packages/bep-142/distribution/index.js'
import { makeServiceProvider as BEP143 } from '../../packages/bep-143/distribution/index.js'
import { makeServiceProvider as BEP144 } from '../../packages/bep-144/distribution/index.js'
import { makeServiceProvider as BEP145 } from '../../packages/bep-145/distribution/index.js'
import { makeServiceProvider as BEP146 } from '../../packages/bep-146/distribution/index.js'
import { makeServiceProvider as BEP147 } from '../../packages/bep-147/distribution/index.js'
import { makeServiceProvider as BEP148 } from '../../packages/bep-148/distribution/index.js'

const main = async () => {
	const app = makeApplication(
		makeContainer(),
		makeEventDispatcher,
		makeConsoleLogger,
		makeServiceProviderRepository,
		{
			modules: [
				// Core...
				BEP15,
				BEP146,
				// Application...
				BEP26,
				BEP23,
				// Registries...
				BEP30,
				BEP38,
				// Modules...
				BEP33,
				BEP42,
				BEP22,
				BEP48,
				BEP48,
				BEP49,
				BEP50,
				BEP90,
				BEP76,
				BEP77,
				BEP21,
				BEP115,
				BEP20,
				// Elections...
				BEP87,
				BEP88,
				// Validator Rewarder...
				BEP78,
				BEP79,
				BEP80,
				BEP81,
				BEP82,
				BEP124,
				// Delegator Rewarder...
				BEP83,
				BEP84,
				BEP85,
				BEP86,
				// Validator Slashing...
				BEP102,
				BEP118,
				BEP120,
				BEP121,
				// Delegator Slashing...
				BEP103,
				BEP119,
				// Tx...
				BEP51,
				BEP55,
				BEP56,
				BEP57,
				BEP58,
				BEP59,
				BEP64,
				BEP65,
				BEP66,
				BEP67,
				BEP68,
				BEP104,
				BEP110,
				BEP122,
				BEP126,
				BEP127,
				BEP128,
				BEP129,
				BEP130,
				BEP131,
				BEP132,
				BEP133,
				BEP134,
				BEP135,
				BEP136,
				BEP137,
				// Policies...
				BEP138,
				BEP139,
				BEP140,
				BEP141,
				BEP142,
				BEP143,
				BEP144,
				BEP145,
				// Tendermint...
				BEP89,
				BEP147,
				// Snapshots...
				BEP148,
				// Indexer...
				BEP100,
			],
			name: 'bearmint-testnet',
			protocolVersion: '0.0.0',
			semanticVersion: '0.0.0',
		},
	)

	await app.boot(bootstrappers)
}

void main()
