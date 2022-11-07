export interface Address {
	toBytes(): Uint8Array
	toString(): string
	verify(): Promise<boolean>
}

export interface AddressFactory {
	fromBytes(bytes: Uint8Array): Promise<Address>
	fromMnemonic(mnemonic: string): Promise<Address>
	fromPrivateKey(privateKey: PrivateKey): Promise<Address>
	fromPublicKey(publicKey: PublicKey): Promise<Address>
	fromString(address: string): Promise<Address>
}

export interface PublicKey {
	toBytes(): Uint8Array
	toString(): string
	verify(): Promise<boolean>
}

export interface PublicKeyFactory {
	fromBytes(bytes: Uint8Array): Promise<PublicKey>
	fromString(publicKey: string): Promise<PublicKey>
}

export interface PrivateKey {
	toBytes(): Uint8Array
	toPublicKey(): PublicKey
	toString(): string
}

export interface PrivateKeyFactory {
	fromBytes(privateKey: Uint8Array): Promise<PrivateKey>
	fromString(privateKey: string): Promise<PrivateKey>
}

export interface KeyPair {
	toPrivateKey(): PrivateKey
	toPublicKey(): PublicKey
}

export interface KeyPairFactory {
	fromMnemonic(mnemonic: string): Promise<KeyPair>
	fromPrivateKey(privateKey: Uint8Array): Promise<KeyPair>
}

export interface Signature {
	toBytes(): Uint8Array
	toString(): string
	verify(): Promise<boolean>
}

export interface SignatureFactory {
	from(hash: Uint8Array, publicKey: Uint8Array, signature: Uint8Array): Promise<Signature>
	sign(hash: Uint8Array, keyPair: KeyPair): Promise<Signature>
}
