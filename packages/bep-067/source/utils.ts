import { blake3, bytesToHex } from '@bearmint/bep-009'

import { HANDLER } from './types.js'

export function getPrimaryKey(type: string, value: string) {
	return bytesToHex(blake3(`${HANDLER}/t/${type}/v/${value}`))
}
