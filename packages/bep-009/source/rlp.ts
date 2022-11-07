import type { Input } from '@ethereumjs/rlp'
import { RLP } from '@ethereumjs/rlp'

export function encode(input: Input) {
	return RLP.encode(input)
}

export function decode(input: Input) {
	return RLP.decode(input)
}
