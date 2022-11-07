/* eslint-disable @typescript-eslint/naming-convention */
import * as noble_blake2b from '@noble/hashes/blake2b'
import * as noble_blake2s from '@noble/hashes/blake2s'
import * as noble_blake3 from '@noble/hashes/blake3'
import * as noble_ripemd160 from '@noble/hashes/ripemd160'
import * as noble_sha1 from '@noble/hashes/sha1'
import * as noble_sha3 from '@noble/hashes/sha3'
import * as noble_sha256 from '@noble/hashes/sha256'
import * as noble_sha512 from '@noble/hashes/sha512'
import moize from 'moize'

const opts = { isDeepEqual: true, maxAge: 5000 }

export const blake2b = moize((data: Uint8Array | string) => noble_blake2b.blake2b(data), opts)
export const blake2s = moize((data: Uint8Array | string) => noble_blake2s.blake2s(data), opts)
export const blake3 = moize((data: Uint8Array | string) => noble_blake3.blake3(data), opts)
export const keccak_224 = moize((data: Uint8Array | string) => noble_sha3.keccak_224(data), opts)
export const keccak_256 = moize((data: Uint8Array | string) => noble_sha3.keccak_256(data), opts)
export const keccak_384 = moize((data: Uint8Array | string) => noble_sha3.keccak_384(data), opts)
export const keccak_512 = moize((data: Uint8Array | string) => noble_sha3.keccak_512(data), opts)
export const ripemd160 = moize((data: Uint8Array | string) => noble_ripemd160.ripemd160(data), opts)
export const sha1 = moize((data: Uint8Array | string) => noble_sha1.sha1(data), opts)
export const sha256 = moize((data: Uint8Array | string) => noble_sha256.sha256(data), opts)
export const sha3_224 = moize((data: Uint8Array | string) => noble_sha3.sha3_224(data), opts)
export const sha3_256 = moize((data: Uint8Array | string) => noble_sha3.sha3_256(data), opts)
export const sha3_384 = moize((data: Uint8Array | string) => noble_sha3.sha3_384(data), opts)
export const sha3_512 = moize((data: Uint8Array | string) => noble_sha3.sha3_512(data), opts)
export const sha384 = moize((data: Uint8Array | string) => noble_sha512.sha384(data), opts)
export const sha512 = moize((data: Uint8Array | string) => noble_sha512.sha512(data), opts)
export const shake128 = moize((data: Uint8Array | string) => noble_sha3.shake128(data), opts)
export const shake256 = moize((data: Uint8Array | string) => noble_sha3.shake256(data), opts)

export const algorithms = {
	blake2b,
	blake2s,
	blake3,
	keccak_224,
	keccak_256,
	keccak_384,
	keccak_512,
	ripemd160,
	sha1,
	sha3_224,
	sha3_256,
	sha3_384,
	sha3_512,
	sha256,
	sha384,
	sha512,
	shake128,
	shake256,
}
