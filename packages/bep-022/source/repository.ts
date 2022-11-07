import { assert, bytesToHex, bytesToString, hexToBytes, stringToBytes } from '@bearmint/bep-009'
import type {
	Account,
	AccountRepositoryFactory,
	AccountWithMoniker,
	AccountWithPublicKey,
	AccountWithValidator,
	Cradle,
	KVStore,
} from '@bearmint/bep-013'
import { Event, PROTO_OPTS } from '@bearmint/bep-013'
import { BEP22Account } from '@bearmint/bep-018'

export function makeAccountRepository(cradle: Cradle): AccountRepositoryFactory {
	return {
		make(tries) {
			async function findByAddress(address: string) {
				const result = await tries.account.get(address)

				assert.defined<Buffer>(result)

				return cradle.AccountSerializer.deserialize(BEP22Account.fromBinary(result, PROTO_OPTS))
			}

			async function findByProxy<T>(trie: KVStore, key: string) {
				const address = await trie.get(key)

				assert.defined<Buffer>(address)

				return (await findByAddress(bytesToString(address))) as unknown as T
			}

			return {
				async allMonikers() {
					return (await tries.accountMoniker.keys()).map((moniker) => bytesToString(moniker))
				},
				async allValidatorAddresses() {
					return (await tries.accountValidatorAddress.keys()).map((address) => bytesToHex(address))
				},
				findByAddress,
				async findByMoniker<T = AccountWithMoniker>(moniker: string) {
					return findByProxy<T>(tries.accountMoniker, moniker)
				},
				async findByPublicKey(publicKey: string) {
					return findByProxy<AccountWithPublicKey>(tries.accountPublicKey, publicKey)
				},
				async findByValidatorAddress(address: string) {
					return findByProxy<AccountWithValidator>(tries.accountValidatorAddress, address)
				},
				async forgetByAddress(address: string) {
					await tries.account.forget(address)
				},
				async forgetByMoniker(moniker: string) {
					return tries.accountMoniker.forget(moniker)
				},
				async forgetByPublicKey(publicKey: string) {
					return tries.accountPublicKey.forget(publicKey)
				},
				async forgetByValidatorAddress(address: string) {
					return tries.accountValidatorAddress.forget(address)
				},
				async hasByAddress(address: string) {
					return tries.account.has(address)
				},
				async hasByMonkiker(moniker: string) {
					return tries.accountMoniker.has(moniker)
				},
				async hasByPublicKey(publicKey: string) {
					return tries.accountPublicKey.has(publicKey)
				},
				async hasByValidatorAddress(address: string) {
					return tries.accountValidatorAddress.has(address)
				},
				async index(items: Account[]) {
					for (const account of items) {
						if (account.address !== undefined) {
							await tries.account.set(
								account.address,
								(await cradle.AccountSerializer.serialize(account)).toBinary(),
							)
						}

						if (account.publicKey !== undefined) {
							await tries.accountPublicKey.set(
								hexToBytes(account.publicKey),
								stringToBytes(account.address),
							)

							if (account.moniker !== undefined) {
								await tries.accountMoniker.set(
									stringToBytes(account.moniker),
									stringToBytes(account.address),
								)
							}

							if (account.validator?.address !== undefined) {
								await tries.accountValidatorAddress.set(
									hexToBytes(account.validator.address),
									stringToBytes(account.address),
								)
							}
						}

						await cradle.EventDispatcher.dispatch(Event.AccountIndexed, account)
					}
				},
			}
		},
	}
}
