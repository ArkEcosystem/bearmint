/* eslint-disable @typescript-eslint/naming-convention */
import { makeTxBuilder as BEP55 } from './bep-055.js'
import { makeTxBuilder as BEP56 } from './bep-056.js'
import { makeTxBuilder as BEP57 } from './bep-057.js'
import { makeTxBuilder as BEP58 } from './bep-058.js'
import { makeTxBuilder as BEP59 } from './bep-059.js'
import { makeTxBuilder as BEP64 } from './bep-064.js'
import { makeTxBuilder as BEP65 } from './bep-065.js'
import { makeTxBuilder as BEP66 } from './bep-066.js'
import { makeTxBuilder as BEP67 } from './bep-067.js'
import { makeTxBuilder as BEP68 } from './bep-068.js'
import { makeTxBuilder as BEP104 } from './bep-104.js'
import { makeTxBuilder as BEP110 } from './bep-110.js'
import { makeTxBuilder as BEP122 } from './bep-122.js'
import { makeTxBuilder as BEP126 } from './bep-126.js'
import { makeTxBuilder as BEP127 } from './bep-127.js'
import { makeTxBuilder as BEP128 } from './bep-128.js'
import { makeTxBuilder as BEP129 } from './bep-129.js'
import { makeTxBuilder as BEP130 } from './bep-130.js'
import { makeTxBuilder as BEP131 } from './bep-131.js'
import { makeTxBuilder as BEP132 } from './bep-132.js'
import { makeTxBuilder as BEP133 } from './bep-133.js'
import { makeTxBuilder as BEP134 } from './bep-134.js'
import { makeTxBuilder as BEP135 } from './bep-135.js'
import { makeTxBuilder as BEP136 } from './bep-136.js'
import { makeTxBuilder as BEP137 } from './bep-137.js'

export function makeStockBuilderFactory() {
	return {
		'@bearmint/bep-055': () => BEP55(),
		'@bearmint/bep-056': () => BEP56(),
		'@bearmint/bep-057': () => BEP57(),
		'@bearmint/bep-058': () => BEP58(),
		'@bearmint/bep-059': () => BEP59(),
		'@bearmint/bep-064': () => BEP64(),
		'@bearmint/bep-065': () => BEP65(),
		'@bearmint/bep-066': () => BEP66(),
		'@bearmint/bep-067': () => BEP67(),
		'@bearmint/bep-068': () => BEP68(),
		'@bearmint/bep-104': () => BEP104(),
		'@bearmint/bep-110': () => BEP110(),
		'@bearmint/bep-122': () => BEP122(),
		'@bearmint/bep-126': () => BEP126(),
		'@bearmint/bep-127': () => BEP127(),
		'@bearmint/bep-128': () => BEP128(),
		'@bearmint/bep-129': () => BEP129(),
		'@bearmint/bep-130': () => BEP130(),
		'@bearmint/bep-131': () => BEP131(),
		'@bearmint/bep-132': () => BEP132(),
		'@bearmint/bep-133': () => BEP133(),
		'@bearmint/bep-134': () => BEP134(),
		'@bearmint/bep-135': () => BEP135(),
		'@bearmint/bep-136': () => BEP136(),
		'@bearmint/bep-137': () => BEP137(),
	}
}

export const BUILDERS = makeStockBuilderFactory()
