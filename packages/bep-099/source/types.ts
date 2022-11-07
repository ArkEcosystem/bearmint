import type {
	AddressFactory,
	KeyPairFactory,
	PrivateKeyFactory,
	PublicKeyFactory,
	SignatureFactory,
} from '@bearmint/bep-013'

export enum BEP126UserRole {
	OWNER,
	STEWARD,
}

export enum BEP126UserPermission {
	BURN,
	MINT,
	TRANSFER,
}

export interface Options {
	cryptography: {
		account: {
			addressFactory: AddressFactory
			publicKeyFactory: PublicKeyFactory
			privateKeyFactory: PrivateKeyFactory
			keyPairFactory: KeyPairFactory
			signatureFactory: SignatureFactory
		}
		validator: {
			keyPairFactory: KeyPairFactory
			signatureFactory: SignatureFactory
		}
	}
	rails?: {
		host: string
	}
}
