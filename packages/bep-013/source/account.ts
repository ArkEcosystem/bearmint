import type { BEP22Account } from '@bearmint/bep-018'
import type { ClassOrFunctionReturning } from 'awilix'

export type Denomination = string
export type DenominationType = 'gas' | 'reward' | 'stake' | 'token'

export type AccountStakes = Record<string, bigint>

export interface AccountValidatorProperties {
	/**
	 * - This is the Tendermint address
	 * - Usually looked up by ProposerAddress for rewards
	 * - Allows for use of different address schemes
	 */
	address: string
	publicKey: string
	power: bigint
}

export interface Account<Metadata = Record<string, any>> {
	address: string
	balances: Record<Denomination, bigint>
	lockedBalances: Record<Denomination, bigint>
	metadata: Metadata
	moniker?: string | undefined
	nonce: bigint
	publicKey?: string | undefined
	stakes: AccountStakes
	validator?: AccountValidatorProperties | undefined
}

export interface AccountWithPublicKey extends Account {
	publicKey: string
}

export interface AccountWithMoniker extends AccountWithPublicKey {
	moniker: string
}

export interface AccountWithValidator extends AccountWithMoniker {
	validator: AccountValidatorProperties
}

export interface AccountRepository {
	allMonikers(): Promise<string[]>
	allValidatorAddresses(): Promise<string[]>

	findByAddress(address: string): Promise<Account>
	findByMoniker<T = AccountWithMoniker>(moniker: string): Promise<T>
	findByPublicKey(publicKey: string): Promise<AccountWithPublicKey>
	findByValidatorAddress(address: string): Promise<AccountWithValidator>

	forgetByAddress(address: string): Promise<void>
	forgetByMoniker(moniker: string): Promise<void>
	forgetByPublicKey(publicKey: string): Promise<void>
	forgetByValidatorAddress(address: string): Promise<void>

	hasByAddress(address: string): Promise<boolean>
	hasByMonkiker(moniker: string): Promise<boolean>
	hasByPublicKey(publicKey: string): Promise<boolean>
	hasByValidatorAddress(address: string): Promise<boolean>

	index(accounts: Account[]): Promise<void>
}

export enum AccountMetadata {
	BEP58 = '@bearmint/bep-058',
	BEP59 = '@bearmint/bep-059',
	BEP120 = '@bearmint/bep-120',
	BEP121 = '@bearmint/bep-121',
}

export interface AccountSerializer {
	/**
	 * Serializes an account from Protocol Buffers to JSON
	 */
	serialize(account: Account): Promise<BEP22Account>

	/**
	 * Deerializes an account from Uint8Array to Protocol Buffers
	 */
	deserialize(account: BEP22Account): Promise<Account>

	/**
	 * Registers a macro that will (de)serialize the specified property.
	 */
	macro(property: string, serializer: ClassOrFunctionReturning<AccountPropertySerializer>): void
}

export interface AccountPropertySerializer {
	serialize(value: any): Promise<unknown>
	deserialize(value: any): Promise<unknown>
}
