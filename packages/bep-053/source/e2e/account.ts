import { assert, dot, stringToHex } from '@bearmint/bep-009'
import type { KeyPair, VoidPromiseFn } from '@bearmint/bep-013'
import * as BEP33 from '@bearmint/bep-033'
import * as BEP42 from '@bearmint/bep-042'
import { deepStrictEqual } from 'assert'

import { fetchAccountByAddress, getHexString, getMixedString, plainRequest } from './http.js'
import { randomMnemonic } from './utils.js'

async function fromMnemonic(mnemonic: string): Promise<Account> {
	const address = (
		await BEP42.makeAddressFactory(BEP33.makeKeyPairFactory(), 'bear').fromMnemonic(mnemonic)
	).toString()

	return {
		address,
		fetchByAddress() {
			return fetchAccountByAddress(address)
		},
		async getBalance(denomination?: string) {
			try {
				const { balances } = await fetchAccountByAddress(address)

				return BigInt(balances[denomination ?? 'BEAR'])
			} catch {
				return BigInt(0)
			}
		},
		async getPendingLockedBalance(denomination?: string) {
			try {
				const { lockedBalances } = await fetchAccountByAddress(address)

				return BigInt(lockedBalances[denomination ?? 'BEAR'])
			} catch {
				return BigInt(0)
			}
		},
		keypair: await BEP33.makeKeyPairFactory().fromMnemonic(mnemonic),
		mnemonic,
	}
}

function makeAssertedAccount(account: Account) {
	let expectations: VoidPromiseFn[] = []

	return {
		...account,
		async assertExpectations() {
			for (const expectation of expectations) {
				await expectation()
			}

			expectations = []
		},
		async expectLessLockedTokens(amount: number, denomination: string) {
			const beforeBalance = await account.getPendingLockedBalance(denomination)

			expectations.push(async () => {
				deepStrictEqual(
					(await account.getPendingLockedBalance(denomination)).toString(),
					(beforeBalance - BigInt(amount)).toString(),
				)
			})
		},
		async expectLessTokens(amount: number, denomination: string) {
			const beforeBalance = await account.getBalance(denomination)

			expectations.push(async () => {
				deepStrictEqual(
					(await account.getBalance(denomination)).toString(),
					(beforeBalance - BigInt(amount)).toString(),
				)
			})
		},
		async expectMetadata(key: string, value: unknown) {
			expectations.push(async () => {
				const response = await account.fetchByAddress()

				deepStrictEqual(dot.get(response, `metadata.${key}`), value)
			})
		},
		async expectMetadataContains(key: string, value: unknown) {
			expectations.push(async () => {
				const response = await account.fetchByAddress()

				deepStrictEqual(dot.get<unknown[]>(response, `metadata.${key}`)?.includes(value), true)
			})
		},
		async expectMetadataNotContains(key: string, value: unknown) {
			expectations.push(async () => {
				const response = await account.fetchByAddress()

				deepStrictEqual(dot.get<unknown[]>(response, `metadata.${key}`)?.includes(value), false)
			})
		},
		async expectModuleMetadataContains(moduleName: string, key: unknown) {
			expectations.push(async () => {
				const response = await getMixedString('abci_query', {
					data: stringToHex(account.address),
					path: `/store/${moduleName}`,
				})

				deepStrictEqual(response.includes(key), true)
			})
		},
		async expectModuleMetadataEquals(moduleName: string, value: unknown) {
			expectations.push(async () => {
				const response = await getMixedString('abci_query', {
					data: stringToHex(account.address),
					path: `/store/${moduleName}`,
				})

				deepStrictEqual(response, value)
			})
		},
		async expectModuleMetadataEqualsHex(moduleName: string, value: unknown) {
			expectations.push(async () => {
				const response = await getHexString('abci_query', {
					data: stringToHex(account.address),
					path: `/store/${moduleName}`,
				})

				deepStrictEqual(response, value)
			})
		},
		async expectModuleMetadataMissing(moduleName: string) {
			expectations.push(async () => {
				const { response } = await plainRequest('abci_query', {
					data: stringToHex(account.address),
					path: `/store/${moduleName}`,
				})

				deepStrictEqual(response.info.includes('ERR_TM_QUERY_FAULTY'), true)
				deepStrictEqual(response.info.includes('non-null and non-undefined'), true)
			})
		},
		async expectModuleMetadataNotContains(moduleName: string, key: unknown) {
			expectations.push(async () => {
				const response = await getMixedString('abci_query', {
					data: stringToHex(account.address),
					path: `/store/${moduleName}`,
				})

				deepStrictEqual(response.includes(key), false)
			})
		},
		async expectMoreLockedTokens(amount: number, denomination: string) {
			const beforeBalance = await account.getPendingLockedBalance(denomination)

			expectations.push(async () => {
				deepStrictEqual(
					(await account.getPendingLockedBalance(denomination)).toString(),
					(beforeBalance + BigInt(amount)).toString(),
				)
			})
		},
		async expectMoreTokens(amount: number, denomination: string) {
			const beforeBalance = await account.getBalance(denomination)

			expectations.push(async () => {
				deepStrictEqual(
					(await account.getBalance(denomination)).toString(),
					(beforeBalance + BigInt(amount)).toString(),
				)
			})
		},
		async expectProperty(key: string, value: unknown) {
			expectations.push(async () => {
				const response = await account.fetchByAddress()

				deepStrictEqual(response[key], value)
			})
		},
		async expectSameLockedTokens(denomination: string) {
			const beforeBalance = await account.getPendingLockedBalance(denomination)

			expectations.push(async () => {
				deepStrictEqual(
					(await account.getPendingLockedBalance(denomination)).toString(),
					beforeBalance.toString(),
				)
			})
		},
		async expectSameTokens(denomination: string) {
			const beforeBalance = await account.getBalance(denomination)

			expectations.push(async () => {
				deepStrictEqual(
					(await account.getBalance(denomination)).toString(),
					beforeBalance.toString(),
				)
			})
		},
	}
}

async function asserted(mnemonic: string) {
	return makeAssertedAccount(await fromMnemonic(mnemonic))
}

export function makeAcctFactory() {
	return {
		asserted,
		async random() {
			return asserted(randomMnemonic())
		},
	}
}

export function makeAcctRepository() {
	const accounts: Record<string, AssertedAccount> = {}

	return {
		async assertExpectations() {
			for (const account of Object.values(accounts)) {
				await account.assertExpectations()
			}
		},
		async fromMnemonic(moniker: string, mnemonic: string) {
			accounts[moniker] = await asserted(mnemonic)
		},
		async fromRandom(moniker: string) {
			accounts[moniker] = await asserted(randomMnemonic())
		},
		get(moniker: string) {
			const result = accounts[moniker]

			assert.defined(result)

			return result
		},
	}
}

export type AcctFactory = ReturnType<typeof makeAcctFactory>

export type AcctRepository = ReturnType<typeof makeAcctRepository>

export interface Account {
	address: string
	fetchByAddress: () => Promise<object>
	getBalance: (denomination?: string) => Promise<bigint>
	getPendingLockedBalance: (denomination?: string) => Promise<bigint>
	keypair: KeyPair
	mnemonic: string
}

export type AssertedAccount = ReturnType<typeof makeAssertedAccount>
