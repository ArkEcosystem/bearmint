import { blake3, bytesToHex } from '@bearmint/bep-009'

import { HANDLER } from './types.js'

export function getPrimaryKey(hash: Uint8Array) {
	return bytesToHex(blake3(`${HANDLER}/d/${bytesToHex(hash)}`))
}
