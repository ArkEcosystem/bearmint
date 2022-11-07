/**
 * @see https://github.com/bufbuild/protobuf-es/issues/230
 */

import type { Message } from '@bufbuild/protobuf'

// prettier-ignore
type PlainField<F> =
  F extends (Date | Uint8Array | bigint | boolean | string | number) ? F
  : F extends Array<infer U> ? Array<PlainField<U>>
  : F extends ReadonlyArray<infer U> ? ReadonlyArray<PlainField<U>>
  : F extends Message ? Plain<F>
  : F extends OneofSelectedMessage<infer C, infer V> ? { case: C; value: Plain<V> }
  : F extends { case: string | undefined; value?: unknown } ? F
  : F extends { [key: string|number]: Message<infer U> } ? { [key: string|number]: Plain<U> }
  : F;

interface OneofSelectedMessage<K extends string, M extends Message> {
	case: K
	value: M
}

export type Plain<T extends Message> = {
	// eslint-disable-next-line @typescript-eslint/ban-types
	[P in keyof T as T[P] extends Function ? never : P]: PlainField<T[P]>
}
