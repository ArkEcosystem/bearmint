import { hexToBytes } from '@bearmint/bep-009'
import type {
	AddressFactory,
	KeyPairFactory,
	PrivateKeyFactory,
	PublicKeyFactory,
	SignatureFactory,
} from '@bearmint/bep-013'

interface Concrete {
	addressFactory: AddressFactory
	publicKeyFactory: PublicKeyFactory
	privateKeyFactory: PrivateKeyFactory
	keyPairFactory: KeyPairFactory
	signatureFactory: SignatureFactory
}

export function makeDeriveAddressFromMnemonic(concrete: Concrete) {
	return {
		async execute({ mnemonic }) {
			return (await concrete.addressFactory.fromMnemonic(mnemonic)).toString()
		},
		schema: {
			properties: {
				mnemonic: { type: 'string' },
			},
			required: ['mnemonic'],
			type: 'object',
		},
	}
}

export function makeDeriveAddressFromPrivateKey(concrete: Concrete) {
	return {
		async execute({ privateKey }) {
			return (
				await concrete.addressFactory.fromPrivateKey(
					await concrete.privateKeyFactory.fromString(privateKey),
				)
			).toString()
		},
		schema: {
			properties: {
				privateKey: { type: 'string' },
			},
			required: ['privateKey'],
			type: 'object',
		},
	}
}

export function makeDeriveAddressFromPublicKey(concrete: Concrete) {
	return {
		async execute({ publicKey }) {
			return (
				await concrete.addressFactory.fromPublicKey(
					await concrete.publicKeyFactory.fromString(publicKey),
				)
			).toString()
		},
		schema: {
			properties: {
				publicKey: { type: 'string' },
			},
			required: ['publicKey'],
			type: 'object',
		},
	}
}

export function makeDeriveKeypairFromMnemonic(concrete: Concrete) {
	return {
		async execute({ mnemonic }) {
			const keyPair = await concrete.keyPairFactory.fromMnemonic(mnemonic)

			return {
				privateKey: keyPair.toPrivateKey().toString(),
				publicKey: keyPair.toPublicKey().toString(),
			}
		},
		schema: {
			properties: {
				mnemonic: { type: 'string' },
			},
			required: ['mnemonic'],
			type: 'object',
		},
	}
}

export function makeDeriveKeypairFromPrivateKey(concrete: Concrete) {
	return {
		async execute({ privateKey }) {
			const keyPair = await concrete.keyPairFactory.fromPrivateKey(hexToBytes(privateKey))

			return {
				privateKey: keyPair.toPrivateKey().toString(),
				publicKey: keyPair.toPublicKey().toString(),
			}
		},
		schema: {
			properties: {
				privateKey: { type: 'string' },
			},
			required: ['privateKey'],
			type: 'object',
		},
	}
}

export function makeSignMsg(concrete: Concrete) {
	return {
		async execute({ hash, mnemonic }) {
			return (
				await concrete.signatureFactory.sign(
					hexToBytes(hash),
					await concrete.keyPairFactory.fromMnemonic(mnemonic),
				)
			).toString()
		},
		schema: {
			properties: {
				hash: { type: 'string' },
				mnemonic: { type: 'string' },
			},
			required: ['hash', 'mnemonic'],
			type: 'object',
		},
	}
}

export function makeVerifyMsg(concrete: Concrete) {
	return {
		async execute({ hash, publicKey, signature }) {
			return (
				await concrete.signatureFactory.from(
					hexToBytes(hash),
					hexToBytes(publicKey),
					hexToBytes(signature),
				)
			).verify()
		},
		schema: {
			properties: {
				hash: { type: 'string' },
				publicKey: { type: 'string' },
				signature: { type: 'string' },
			},
			required: ['hash', 'publicKey', 'signature'],
			type: 'object',
		},
	}
}
