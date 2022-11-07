import type { Cradle, TxManifest } from '@bearmint/bep-013'
import { makeTxManifestFactory } from '@bearmint/bep-051'

import { HANDLER, VERSION } from './types.js'

export function makeTxManifest(cradle: Cradle): TxManifest {
	return makeTxManifestFactory(cradle, HANDLER, VERSION)
}
