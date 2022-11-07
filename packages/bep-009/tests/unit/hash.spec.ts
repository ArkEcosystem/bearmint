import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

import {
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
} from '../../source/hash.js'

describe('Hash', () => {
	it('blake2b', () => {
		expect(blake2b(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(blake2b('Hello, World!')).toMatchSnapshot()
	})

	it('blake2s', () => {
		expect(blake2s(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(blake2s('Hello, World!')).toMatchSnapshot()
	})

	it('blake3', () => {
		expect(blake3(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(blake3('Hello, World!')).toMatchSnapshot()
	})

	it('keccak_224', () => {
		expect(keccak_224(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(keccak_224('Hello, World!')).toMatchSnapshot()
	})

	it('keccak_256', () => {
		expect(keccak_256(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(keccak_256('Hello, World!')).toMatchSnapshot()
	})

	it('keccak_384', () => {
		expect(keccak_384(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(keccak_384('Hello, World!')).toMatchSnapshot()
	})

	it('keccak_512', () => {
		expect(keccak_512(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(keccak_512('Hello, World!')).toMatchSnapshot()
	})

	it('ripemd160', () => {
		expect(ripemd160(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(ripemd160('Hello, World!')).toMatchSnapshot()
	})

	it('sha1', () => {
		expect(sha1(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(sha1('Hello, World!')).toMatchSnapshot()
	})

	it('sha3_224', () => {
		expect(sha3_224(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(sha3_224('Hello, World!')).toMatchSnapshot()
	})

	it('sha3_256', () => {
		expect(sha3_256(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(sha3_256('Hello, World!')).toMatchSnapshot()
	})

	it('sha3_384', () => {
		expect(sha3_384(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(sha3_384('Hello, World!')).toMatchSnapshot()
	})

	it('sha3_512', () => {
		expect(sha3_512(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(sha3_512('Hello, World!')).toMatchSnapshot()
	})

	it('sha256', () => {
		expect(sha256(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(sha256('Hello, World!')).toMatchSnapshot()
	})

	it('sha384', () => {
		expect(sha384(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(sha384('Hello, World!')).toMatchSnapshot()
	})

	it('sha512', () => {
		expect(sha512(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(sha512('Hello, World!')).toMatchSnapshot()
	})

	it('shake128', () => {
		expect(shake128(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(shake128('Hello, World!')).toMatchSnapshot()
	})

	it('shake256', () => {
		expect(shake256(Buffer.from('Hello, World!'))).toMatchSnapshot()
		expect(shake256('Hello, World!')).toMatchSnapshot()
	})
})
