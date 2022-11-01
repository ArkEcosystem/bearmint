/**
 * @see https://github.com/herumi/bls-eth-wasm/blob/master/test/test.js#L154-L229
 * @see https://github.com/dfinity-side-projects/dkg/blob/master/example.js
 */

import { hexToBytes } from '@bearmint/bep-009'
import type { Id, PublicKeyType, SecretKeyType } from 'bls-eth-wasm'
import BLS from 'bls-eth-wasm'

import { makeSignatureFactory } from '../source/sig.js'

export interface MuSigSignatory {
	id: Buffer
	privateKey: Buffer
}

export interface MuSig {
	m: number
	n: number
	master: string
	slaves: string[]
}

export interface MuSigFactory {
	aggregate(signatures: Buffer[]): Promise<Buffer>
	recover(args: { ids: Buffer[]; signatures: Buffer[] }): Promise<Buffer>
	sign(args: { hash: Buffer; signatory: MuSigSignatory }): Promise<Buffer>
	verify(args: { hash: Buffer; muSig: MuSig; signature: Buffer }): Promise<boolean>
}

export function makeSecretKey(privateKey: Buffer): BLS.SecretKeyType {
	const result = new BLS.SecretKey()
	result.deserialize(privateKey)

	return result
}

export function makeMuSigFactory(): MuSigFactory {
	const signatureFactory = makeSignatureFactory()

	return {
		async aggregate(signatures: Buffer[]): Promise<Buffer> {
			const result = new BLS.Signature()

			result.aggregate(
				signatures.map((sig) => {
					const signature = new BLS.Signature()
					signature.deserialize(sig)

					return signature
				}),
			)

			return Buffer.from(result.serialize())
		},
		async recover({ ids, signatures }: { ids: Buffer[]; signatures: Buffer[] }): Promise<Buffer> {
			const result = new BLS.Signature()
			result.recover(
				signatures.map((signature) => {
					const result = new BLS.Signature()
					result.deserialize(signature)

					return result
				}),
				ids.map((id) => {
					const result = new BLS.Id()
					result.deserialize(id)

					return result
				}),
			)

			return Buffer.from(result.serialize())
		},
		async sign({ hash, signatory }: { hash: Buffer; signatory: MuSigSignatory }): Promise<Buffer> {
			return Buffer.from(makeSecretKey(signatory.privateKey).sign(hash).serialize())
		},
		async verify({
			hash,
			muSig,
			signature,
		}: {
			hash: Buffer
			muSig: MuSig
			signature: Buffer
		}): Promise<boolean> {
			return (await signatureFactory.from(hash, hexToBytes(muSig.master), signature)).verify()
		},
	}
}

export function generateMaster(threshold: number) {
	const secretKeys: SecretKeyType[] = []
	const publicKeys: PublicKeyType[] = []

	for (let index = 0; index < threshold; index++) {
		const secretKey = new BLS.SecretKey()
		secretKey.setByCSPRNG()
		secretKeys.push(secretKey)

		const publicKey = secretKey.getPublicKey()
		publicKeys.push(publicKey)
	}

	return {
		publicKeys,
		secretKeys,
	}
}

export function generateSlaves({
	master,
	n,
	slaves,
}: {
	slaves: string[]
	n: number
	master: {
		publicKeys: PublicKeyType[]
		secretKeys: SecretKeyType[]
	}
}) {
	const ids: Id[] = []
	const publicKeys: PublicKeyType[] = []
	const secretKeys: SecretKeyType[] = []

	for (let index = 0; index < n; index++) {
		const id = new BLS.Id()
		id.setStr(slaves[index])
		ids.push(id)

		const secretKey = new BLS.SecretKey()
		secretKey.share(master.secretKeys, id)
		secretKeys.push(secretKey)

		const publicKey = new BLS.PublicKey()
		publicKey.share(master.publicKeys, id)
		publicKeys.push(publicKey)
	}

	return {
		ids,
		publicKeys,
		secretKeys,
	}
}

export function generateMuSig({
	m,
	masterPublicKeys,
	n,
	slavesPublicKeys,
}: {
	m: number
	n: number
	masterPublicKeys: PublicKeyType[]
	slavesPublicKeys: PublicKeyType[]
}): MuSig {
	return {
		m,
		master: masterPublicKeys[0].serializeToHexStr(),
		n,
		slaves: slavesPublicKeys.map((publicKey) => publicKey.serializeToHexStr()),
	}
}
