import { hexToBytes } from '@bearmint/bep-009'
import { PROTO_OPTS } from '@bearmint/bep-013'
import { SignedTx } from '@bearmint/bep-018'
import { BadRequestException } from '@bearmint/bep-109'

import type { Memory } from '../memory.js'
import { TxStatus } from '../types.js'

export function makeDeleteHandler(memory: Memory) {
	return {
		async execute({ hash }) {
			const tx = memory.getTxById(hash)

			if (tx === undefined) {
				throw new BadRequestException(-32_004, { message: `Failed to find tx [${hash}]` })
			}

			memory.removeById(hash)

			return { hash }
		},
		schema: {
			properties: {
				hash: { type: 'string' },
			},
			required: ['hash'],
			type: 'object',
		},
	}
}

export function makeListHandler(memory: Memory) {
	return {
		async execute({ publicKey, state }) {
			const storeTxs = memory.getTxStoreByPublicKey(publicKey)

			if (state === TxStatus.PENDING) {
				return storeTxs.filter((tx) => tx.signatures.length < tx.muSig.m)
			}

			if (state === TxStatus.READY) {
				return storeTxs.filter((tx) => tx.signatures.length >= tx.muSig.m)
			}

			return storeTxs
		},
		schema: {
			properties: {
				publicKey: { type: 'string' },
				state: { enum: ['pending', 'ready'], type: 'string' },
			},
			required: ['publicKey'],
			type: 'object',
		},
	}
}

export function makeShowHandler(memory: Memory) {
	return {
		async execute({ hash }) {
			const tx = memory.getTxById(hash)

			if (tx === undefined) {
				throw new BadRequestException(-32_004, { message: `Failed to find tx [${hash}]` })
			}

			const { muSig, signatures } = tx

			if (signatures.length < muSig.m) {
				throw new BadRequestException(-32_018, { message: 'The tx is not ready yet.' })
			}

			return {
				muSig,
				signatures,
			}
		},
		schema: {
			properties: {
				hash: { type: 'string' },
			},
			required: ['hash'],
			type: 'object',
		},
	}
}

export function makeUpdateHandler(memory: Memory) {
	return {
		async execute({ hash, muSig, signature }) {
			SignedTx.fromBinary(hexToBytes(hash), PROTO_OPTS)

			if (memory.getTxById(hash) !== undefined) {
				memory.updateTx({ hash, muSig, signature })
			} else {
				memory.saveTx({
					hash,
					muSig,
					signature,
				})
			}

			return { hash }
		},
		schema: {
			properties: {
				hash: { type: 'string' },
				muSig: { type: 'object' },
				signature: {
					properties: {
						id: { type: 'string' },
						publicKey: { type: 'string' },
						signature: { type: 'string' },
					},
					required: ['id', 'publicKey', 'signature'],
					type: 'object',
				},
			},
			required: ['hash'],
			type: 'object',
		},
	}
}
