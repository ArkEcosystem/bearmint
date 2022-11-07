import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import type { AccountRepository } from '@bearmint/bep-013'
import { makeSecureKVStore } from '@bearmint/bep-023'

import {
	fakeAccountSerializer,
	fakeAddressFactory,
	fakeEventDispatcher,
	fakeMultiStore,
} from '../../../bep-008/distribution/index.js'
import { makeAccountRepository } from '../../source/repository.js'

const address = 'bear1vlezq7dtyml3zu3wgfdwdglcalradfnt5xpzahl7a5478hn5g20qxd5nkr'
const moniker = 'moniker'
const publicKey = '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e'
const validator = {
	address: '2370a54078de4a12becff8746e1c2826c9ef8b92',
	delegators: { a: '0' },
	power: '0',
	publicKey: 'publicKey',
}

describe<{
	subject: AccountRepository
}>('Repository', () => {
	beforeEach(async (context) => {
		const multiStore = await fakeMultiStore()

		context.subject = makeAccountRepository({
			AccountSerializer: fakeAccountSerializer(),
			AddressFactory: fakeAddressFactory(),
			EventDispatcher: fakeEventDispatcher(),
		}).make({
			account: multiStore.get('@bearmint/bep-020/account'),
			accountMoniker: multiStore.get('@bearmint/bep-020/account_moniker'),
			accountPublicKey: multiStore.get('@bearmint/bep-020/account_public_key'),
			accountValidatorAddress: multiStore.get('@bearmint/bep-020/account_validator_address'),
		})
	})

	it('should get all monikers', async (context) => {
		await context.subject.index([
			{
				address,
				moniker,
				publicKey,
				validator,
			},
		])

		expect(await context.subject.allMonikers()).toHaveLength(1)
	})

	it('should get all validator addresses', async (context) => {
		await context.subject.index([
			{
				address,
				moniker,
				publicKey,
				validator,
			},
		])

		expect(await context.subject.allValidatorAddresses()).toHaveLength(1)
	})

	it('should index an account and find it by its address', async (context) => {
		expect(await context.subject.hasByAddress(address)).toBeFalse()

		await context.subject.index([
			{
				address,
				moniker,
				publicKey,
				validator,
			},
		])

		expect(await context.subject.hasByAddress(address)).toBeTrue()
		expect(await context.subject.findByAddress(address)).toMatchSnapshot()
	})

	it('should index an account and find it by its public key', async (context) => {
		expect(await context.subject.hasByPublicKey(publicKey)).toBeFalse()

		await context.subject.index([
			{
				address,
				publicKey,
				validator,
			},
		])

		expect(await context.subject.hasByPublicKey(publicKey)).toBeTrue()
		expect(await context.subject.findByPublicKey(publicKey)).toMatchSnapshot()
	})

	it('should index an account twice and find it by its public key', async (context) => {
		expect(await context.subject.hasByPublicKey(publicKey)).toBeFalse()

		await context.subject.index([
			{
				address,
				publicKey,
			},
		])

		await context.subject.index([
			{
				address,
				publicKey,
			},
		])

		expect(await context.subject.hasByPublicKey(publicKey)).toBeTrue()
	})

	it('should index an account and find it by its validator moniker', async (context) => {
		expect(await context.subject.hasByMonkiker(moniker)).toBeFalse()

		await context.subject.index([
			{
				address,
				moniker,
				publicKey,
				validator,
			},
		])

		expect(await context.subject.hasByMonkiker(moniker)).toBeTrue()
		expect(await context.subject.findByMoniker('moniker')).toMatchSnapshot()
	})

	it('should index an account and find it by its validator address', async (context) => {
		expect(await context.subject.hasByValidatorAddress(validator.address)).toBeFalse()

		await context.subject.index([
			{
				address,
				moniker,
				publicKey,
				validator,
			},
		])

		expect(await context.subject.hasByValidatorAddress(validator.address)).toBeTrue()
		expect(await context.subject.findByValidatorAddress(validator.address)).toMatchSnapshot()
	})

	it('should index an account and forget it by its address', async (context) => {
		expect(await context.subject.hasByAddress(address)).toBeFalse()

		await context.subject.index([
			{
				address,
				moniker,
				publicKey,
				validator,
			},
		])

		expect(await context.subject.hasByAddress(address)).toBeTrue()

		await context.subject.forgetByAddress(address)

		expect(await context.subject.hasByAddress(address)).toBeFalse()
	})

	it('should index an account and forget it by its public key', async (context) => {
		expect(await context.subject.hasByPublicKey(publicKey)).toBeFalse()

		await context.subject.index([
			{
				address,
				moniker,
				publicKey,
				validator,
			},
		])

		expect(await context.subject.hasByPublicKey(publicKey)).toBeTrue()

		await context.subject.forgetByPublicKey(publicKey)

		expect(await context.subject.hasByPublicKey(publicKey)).toBeFalse()
	})

	it('should index an account and forget it by its validator moniker', async (context) => {
		expect(await context.subject.hasByMonkiker(moniker)).toBeFalse()

		await context.subject.index([
			{
				address,
				moniker,
				publicKey,
				validator,
			},
		])

		expect(await context.subject.hasByMonkiker(moniker)).toBeTrue()

		await context.subject.forgetByMoniker(moniker)

		expect(await context.subject.hasByMonkiker(moniker)).toBeFalse()
	})

	it('should index an account and forget it by its validator address', async (context) => {
		expect(await context.subject.hasByValidatorAddress(validator.address)).toBeFalse()

		await context.subject.index([
			{
				address,
				moniker,
				publicKey,
				validator,
			},
		])

		expect(await context.subject.hasByValidatorAddress(validator.address)).toBeTrue()

		await context.subject.forgetByValidatorAddress(validator.address)

		expect(await context.subject.hasByValidatorAddress(validator.address)).toBeFalse()
	})
})
