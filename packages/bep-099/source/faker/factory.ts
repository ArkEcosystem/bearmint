/* eslint-disable @typescript-eslint/naming-convention */
import type { Options } from '../types.js'
import { makeTxMsgFaker as BEP55 } from './bep-055.js'
import { makeTxMsgFaker as BEP56 } from './bep-056.js'
import { makeTxMsgFaker as BEP57 } from './bep-057.js'
import { makeTxMsgFaker as BEP58 } from './bep-058.js'
import { makeTxMsgFaker as BEP59 } from './bep-059.js'
import { makeTxMsgFaker as BEP64 } from './bep-064.js'
import { makeTxMsgFaker as BEP65 } from './bep-065.js'
import { makeTxMsgFaker as BEP66 } from './bep-066.js'
import { makeTxMsgFaker as BEP67 } from './bep-067.js'
import { makeTxMsgFaker as BEP68 } from './bep-068.js'
import { makeTxMsgFaker as BEP104 } from './bep-104.js'
import { makeTxMsgFaker as BEP110 } from './bep-110.js'
import { makeTxMsgFaker as BEP122 } from './bep-122.js'
import { makeTxMsgFaker as BEP126 } from './bep-126.js'
import { makeTxMsgFaker as BEP127 } from './bep-127.js'
import { makeTxMsgFaker as BEP128 } from './bep-128.js'
import { makeTxMsgFaker as BEP129 } from './bep-129.js'
import { makeTxMsgFaker as BEP130 } from './bep-130.js'
import { makeTxMsgFaker as BEP131 } from './bep-131.js'
import { makeTxMsgFaker as BEP132 } from './bep-132.js'
import { makeTxMsgFaker as BEP133 } from './bep-133.js'
import { makeTxMsgFaker as BEP134 } from './bep-134.js'
import { makeTxMsgFaker as BEP135 } from './bep-135.js'
import { makeTxMsgFaker as BEP136 } from './bep-136.js'
import { makeTxMsgFaker as BEP137 } from './bep-137.js'

export function makeStockFakerFactory() {
	return {
		'@bearmint/bep-055': (_: Options) => BEP55(),
		'@bearmint/bep-056': (_: Options) => BEP56(),
		'@bearmint/bep-057': (options: Options) => BEP57(options),
		'@bearmint/bep-058': (options: Options) => BEP58(options),
		'@bearmint/bep-059': (options: Options) => BEP59(options),
		'@bearmint/bep-064': (_: Options) => BEP64(),
		'@bearmint/bep-065': (_: Options) => BEP65(),
		'@bearmint/bep-066': (_: Options) => BEP66(),
		'@bearmint/bep-067': (_: Options) => BEP67(),
		'@bearmint/bep-068': (_: Options) => BEP68(),
		'@bearmint/bep-104': (_: Options) => BEP104(),
		'@bearmint/bep-110': (_: Options) => BEP110(),
		'@bearmint/bep-122': (options: Options) => BEP122(options),
		'@bearmint/bep-126': (_: Options) => BEP126(),
		'@bearmint/bep-127': (_: Options) => BEP127(),
		'@bearmint/bep-128': (_: Options) => BEP128(),
		'@bearmint/bep-129': (_: Options) => BEP129(),
		'@bearmint/bep-130': (_: Options) => BEP130(),
		'@bearmint/bep-131': (_: Options) => BEP131(),
		'@bearmint/bep-132': (_: Options) => BEP132(),
		'@bearmint/bep-133': (_: Options) => BEP133(),
		'@bearmint/bep-134': (_: Options) => BEP134(),
		'@bearmint/bep-135': (_: Options) => BEP135(),
		'@bearmint/bep-136': (_: Options) => BEP136(),
		'@bearmint/bep-137': (_: Options) => BEP137(),
	}
}

export const FAKERS = makeStockFakerFactory()
