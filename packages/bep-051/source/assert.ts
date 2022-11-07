import {
	algorithms,
	assert,
	blake3,
	bytesToHex,
	dot,
	hexToBytes,
	isHex,
	stringToBytes,
	uniqBy,
} from '@bearmint/bep-009'
import type {
	Account,
	Address,
	Cradle,
	KVStoreKey,
	StateStore,
	Tx,
	TxAssertionsErrorStruct,
	TxManifest,
} from '@bearmint/bep-013'
import { getModuleMilestone, getPublicKeyType } from '@bearmint/bep-021'
import { ErrorCode, TxAuditException } from '@bearmint/bep-109'
import * as ed25519 from '@noble/ed25519'
import * as secp256k1 from '@noble/secp256k1'

import { verifyNumericalRangeFromMilestone } from './utilities/verify-numerical-range.js'

export function positiveNumber(value: bigint | undefined, error: TxAssertionsErrorStruct) {
	if (value === undefined) {
		throw new TxAuditException({
			key: error.key,
			value: error?.value ?? ErrorCode.TX_FORBIDDEN_VALUE,
		})
	}

	if (value < 0) {
		throw new TxAuditException({
			key: error.key,
			value: error?.value ?? ErrorCode.TX_FORBIDDEN_VALUE,
		})
	}
}

export function createAssertionFunctions(
	cradle: Pick<Cradle, 'AddressFactory' | 'CommittedState' | 'ServiceProviderRepository'>,
	manifest: TxManifest,
	state: StateStore,
	tx: Tx,
) {
	function byteLength(
		propertyKey: string,
		value: Uint8Array,
		error?: TxAssertionsErrorStruct | undefined,
	) {
		const result = verifyNumericalRangeFromMilestone({
			codes: {
				max: ErrorCode.TX_BYTE_LENGTH_MAX_NOT_SATISFIED,
				min: ErrorCode.TX_BYTE_LENGTH_MIN_NOT_SATISFIED,
				missing: ErrorCode.TX_BYTE_LENGTH_UNDEFINED,
			},
			committedState: cradle.CommittedState,
			name: manifest.name(),
			serviceProviderRepository: cradle.ServiceProviderRepository,
			size: value.byteLength,
			sizeProperty: `byteLength.${propertyKey}`,
		})

		if (result === undefined) {
			return
		}

		throw new TxAuditException({
			key: error?.key ?? `message.${propertyKey}`,
			value: error?.value ?? result,
		})
	}

	function byteLengthFromString(
		propertyKey: string,
		value: string | undefined,
		error?: TxAssertionsErrorStruct | undefined,
	) {
		if (value === undefined) {
			return
		}

		if (isHex(value)) {
			return byteLength(propertyKey, hexToBytes(value), error)
		}

		return byteLength(propertyKey, stringToBytes(value), error)
	}

	return {
		accountHasValidator(account: Account, error?: TxAssertionsErrorStruct | undefined) {
			if (account.validator === undefined) {
				throw new TxAuditException({
					key: error?.key ?? 'sender',
					value: error?.value ?? ErrorCode.TX_NOT_FOUND,
				})
			}
		},
		byteLength,
		byteLengthFromString,
		charLength(propertyKey: string, value: string, error?: TxAssertionsErrorStruct | undefined) {
			const result = verifyNumericalRangeFromMilestone({
				codes: {
					max: ErrorCode.TX_CHAR_LENGTH_MAX_NOT_SATISFIED,
					min: ErrorCode.TX_CHAR_LENGTH_MIN_NOT_SATISFIED,
					missing: ErrorCode.TX_CHAR_LENGTH_UNDEFINED,
				},
				committedState: cradle.CommittedState,
				name: manifest.name(),
				serviceProviderRepository: cradle.ServiceProviderRepository,
				size: value.length,
				sizeProperty: `characterLength.${propertyKey}`,
			})

			if (result === undefined) {
				return
			}

			throw new TxAuditException({
				key: error?.key ?? `message.${propertyKey}`,
				value: error?.value ?? result,
			})
		},
		count(
			propertyKey: string,
			values: unknown[] | number,
			error?: TxAssertionsErrorStruct | undefined,
		) {
			const result = verifyNumericalRangeFromMilestone({
				codes: {
					max: ErrorCode.TX_COUNT_MAX_NOT_SATISFIED,
					min: ErrorCode.TX_COUNT_MIN_NOT_SATISFIED,
					missing: ErrorCode.TX_COUNT_UNDEFINED,
				},
				committedState: cradle.CommittedState,
				name: manifest.name(),
				serviceProviderRepository: cradle.ServiceProviderRepository,
				size: Array.isArray(values) ? values.length : values,
				sizeProperty: `count.${propertyKey}`,
			})

			if (result === undefined) {
				return
			}

			throw new TxAuditException({
				key: error?.key ?? `message.${propertyKey}`,
				value: error?.value ?? result,
			})
		},
		equity(value: bigint | undefined, error: TxAssertionsErrorStruct) {
			return positiveNumber(value, {
				key: error.key,
				value: error.value ?? ErrorCode.TX_INSUFFICIENT_BALANCE,
			})
		},
		async future(expectedBlockNumber: bigint, error: TxAssertionsErrorStruct) {
			const actualBlockNumber = await state.getCommittedBlockNumber()

			if (expectedBlockNumber > actualBlockNumber) {
				return
			}

			throw new TxAuditException({
				key: error.key,
				value: error.value ?? ErrorCode.TX_BLOCK_NUMBER_IS_PAST,
			})
		},
		hashEquality(
			algorithm: string,
			actual: Uint8Array,
			expected: Uint8Array,
			error: TxAssertionsErrorStruct,
		) {
			const actualSecret = algorithms[algorithm](actual)

			if (bytesToHex(actualSecret) !== bytesToHex(expected)) {
				throw new TxAuditException({
					key: error.key,
					value: error.value ?? ErrorCode.TX_HASH_DOES_NOT_VERIFY,
				})
			}
		},
		hashLength(algorithm: string, value: Uint8Array, error: TxAssertionsErrorStruct) {
			try {
				const expectedLength = {
					blake2b: 64,
					blake2s: 32,
					blake3: 32,
					keccak_224: 28,
					keccak_256: 32,
					keccak_384: 48,
					keccak_512: 64,
					ripemd160: 20,
					sha1: 20,
					sha3_224: 28,
					sha3_256: 32,
					sha3_384: 48,
					sha3_512: 64,
					sha256: 32,
					sha384: 48,
					sha512: 64,
					shake128: 16,
					shake256: 32,
				}[algorithm]

				if (expectedLength === undefined) {
					throw new TxAuditException({
						key: error.key,
						value: error?.value ?? ErrorCode.TX_MALFORMED_VALUE,
					})
				}

				if (value.byteLength !== expectedLength) {
					throw new TxAuditException({
						key: error.key,
						value: error?.value ?? ErrorCode.TX_MALFORMED_VALUE,
					})
				}
			} catch {
				throw new TxAuditException({
					key: error.key,
					value: error?.value ?? ErrorCode.TX_MALFORMED_VALUE,
				})
			}
		},
		knownByList(
			key: string,
			value: unknown | unknown[],
			error?: TxAssertionsErrorStruct | undefined,
		) {
			try {
				const list: unknown[] | undefined = dot.get(
					getModuleMilestone(
						cradle.ServiceProviderRepository,
						cradle.CommittedState,
						manifest.name(),
						manifest.version(),
					),
					`list.${key}`,
				)

				if (list === undefined) {
					throw new TxAuditException({
						key: error?.key ?? key,
						value: error?.value ?? ErrorCode.TX_LIST_DOES_NOT_CONTAIN,
					})
				}

				const items = Array.isArray(value) ? value : [value]

				for (const item of items) {
					if (!list.includes(item)) {
						throw new TxAuditException({
							key: error?.key ?? key,
							value: error?.value ?? ErrorCode.TX_LIST_DOES_NOT_CONTAIN,
						})
					}
				}
			} catch {
				throw new TxAuditException({
					key: error?.key ?? key,
					value: error?.value ?? ErrorCode.TX_LIST_DOES_NOT_CONTAIN,
				})
			}
		},
		async loopback() {
			const senderAddress = (await cradle.AddressFactory.fromPublicKey(tx.data.sender)).toString()
			const recipientAddress = tx.data.recipient.toString()

			if (senderAddress !== recipientAddress) {
				throw new TxAuditException({
					key: 'sender',
					value: ErrorCode.TX_UNEXPECTED_RELATIONAL_DIRECTION,
				})
			}
		},
		memoLength(memo: string | undefined, ops?: Array<{ memo?: string | undefined }>) {
			if (memo !== undefined) {
				byteLengthFromString('memo', memo, { key: 'message.memo' })
			}

			if (ops === undefined) {
				return
			}

			for (const [index, op] of Object.entries(ops)) {
				if (op.memo !== undefined) {
					byteLengthFromString('memo', op.memo, {
						key: `message.ops.${index}.memo`,
					})
				}
			}
		},
		notPrincipalCurrency(value: string, error: TxAssertionsErrorStruct) {
			const isPrincipalCurrency = Object.values(
				state.getMilestone().parameters.denominations,
			).includes(value)

			if (isPrincipalCurrency) {
				throw new TxAuditException(error)
			}
		},
		async notTombstoned(account: Account) {
			if (await state.getMultiStore().get('@bearmint/bep-121').has(account.address)) {
				throw new TxAuditException({
					key: 'sender',
					value: ErrorCode.TX_VALIDATOR_TOMBSTONED,
				})
			}
		},
		async past(expectedBlockNumber: bigint, error: TxAssertionsErrorStruct) {
			const actualBlockNumber = await state.getCommittedBlockNumber()

			if (expectedBlockNumber < actualBlockNumber) {
				return
			}

			throw new TxAuditException({
				key: error.key,
				value: error.value ?? ErrorCode.TX_BLOCK_NUMBER_IS_FUTURE,
			})
		},
		positiveNumber,
		range(
			propertyKey: string,
			value: number | string,
			error?: TxAssertionsErrorStruct | undefined,
		) {
			const result = verifyNumericalRangeFromMilestone({
				codes: {
					max: ErrorCode.TX_RANGE_MAX_NOT_SATISFIED,
					min: ErrorCode.TX_RANGE_MIN_NOT_SATISFIED,
					missing: ErrorCode.TX_RANGE_UNDEFINED,
				},
				committedState: cradle.CommittedState,
				name: manifest.name(),
				serviceProviderRepository: cradle.ServiceProviderRepository,
				size: value,
				sizeProperty: `range.${propertyKey}`,
			})

			if (result === undefined) {
				return
			}

			throw new TxAuditException({
				key: error?.key ?? `message.${propertyKey}`,
				value: error?.value ?? result,
			})
		},
		async recipientAddress(address: Address | string, error?: TxAssertionsErrorStruct | undefined) {
			try {
				if (typeof address === 'string') {
					address = await cradle.AddressFactory.fromString(address)
				}

				if (await address.verify()) {
					return
				}

				throw new TxAuditException({
					key: error?.key ?? 'message.recipient',
					value: error?.value ?? ErrorCode.TX_MALFORMED_ADDRESS,
				})
			} catch {
				throw new TxAuditException({
					key: error?.key ?? 'message.recipient',
					value: error?.value ?? ErrorCode.TX_MALFORMED_ADDRESS,
				})
			}
		},
		regex(propertyKey: string, value: string, error?: TxAssertionsErrorStruct | undefined) {
			try {
				const { regex } = getModuleMilestone<{
					regex: Record<
						string,
						{
							flags: string
							pattern: string
						}
					>
				}>(
					cradle.ServiceProviderRepository,
					cradle.CommittedState,
					manifest.name(),
					manifest.version(),
				)

				const keyExpression = regex[propertyKey]

				assert.defined(keyExpression)

				// eslint-disable-next-line security/detect-non-literal-regexp
				if (new RegExp(keyExpression.pattern, keyExpression.flags).test(value) === true) {
					return
				}

				throw new TxAuditException({
					key: error?.key ?? `message.${propertyKey}`,
					value: error?.value ?? ErrorCode.TX_MALFORMED_VALUE,
				})
			} catch {
				throw new TxAuditException({
					key: error?.key ?? `message.${propertyKey}`,
					value: error?.value ?? ErrorCode.TX_MALFORMED_VALUE,
				})
			}
		},
		async relational() {
			const senderAddress = (await cradle.AddressFactory.fromPublicKey(tx.data.sender)).toString()
			const recipientAddress = tx.data.recipient.toString()

			if (senderAddress === recipientAddress) {
				throw new TxAuditException({
					key: 'recipient',
					value: ErrorCode.TX_UNEXPECTED_LOOPBACK_DIRECTION,
				})
			}
		},
		relationalRecipient(
			sender: string,
			recipient: string,
			error?: TxAssertionsErrorStruct | undefined,
		) {
			if (recipient === sender) {
				throw new TxAuditException({
					key: error?.key ?? 'message.recipient',
					value: error?.value ?? ErrorCode.TX_UNEXPECTED_LOOPBACK_DIRECTION,
				})
			}
		},
		uniqueList<T>(items: T[], compositeKey: (item: T) => string, error: TxAssertionsErrorStruct) {
			const known = new Set<string>()

			for (const item of items) {
				const key = compositeKey(item)

				if (known.has(key)) {
					throw new TxAuditException(error)
				}

				known.add(key)
			}
		},
		async uniqueModuleStoreKey(
			moduleName: string,
			key: KVStoreKey,
			error: TxAssertionsErrorStruct,
		) {
			if (await state.getMultiStore().get(moduleName).has(key)) {
				throw new TxAuditException({
					key: error.key,
					value: error.value ?? ErrorCode.TX_DUPLICATED_VALUE,
				})
			}
		},
		uniqueOps<T>(
			ops: T[],
			compositeKey: (item: T) => string,
			error?: TxAssertionsErrorStruct | undefined,
		) {
			const opsWithoutDuplicates = uniqBy(ops, compositeKey)

			if (opsWithoutDuplicates.length !== ops.length) {
				throw new TxAuditException({
					key: error?.key ?? 'message.ops',
					value: ErrorCode.TX_ARRAY_CONTAINS_DUPLICATES,
				})
			}
		},
		async validatorAuthenticity(msg: Uint8Array, publicKey: Uint8Array, signature: Uint8Array) {
			const publicKeyType = getPublicKeyType(state.getMilestone())

			if (publicKeyType === 'ed25519') {
				try {
					ed25519.Point.fromHex(publicKey)
				} catch {
					throw new TxAuditException({
						key: 'message.publicKey',
						value: ErrorCode.TX_ED25519_PUBLIC_KEY_DOES_NOT_VERIFY,
					})
				}

				let hasValidSignature = false

				try {
					hasValidSignature = await ed25519.verify(signature, blake3(msg), publicKey)
				} catch {
					hasValidSignature = false
				}

				if (!hasValidSignature) {
					throw new TxAuditException({
						key: 'message.signature',
						value: ErrorCode.TX_ED25519_SIGNATURE_DOES_NOT_VERIFY,
					})
				}
			}

			if (publicKeyType === 'secp256k1') {
				try {
					secp256k1.Point.fromHex(publicKey)
				} catch {
					throw new TxAuditException({
						key: 'message.publicKey',
						value: ErrorCode.TX_SECP256K1_PUBLIC_KEY_DOES_NOT_VERIFY,
					})
				}

				let hasValidSignature = false

				try {
					hasValidSignature = secp256k1.verify(signature, blake3(msg), publicKey)
				} catch {
					hasValidSignature = false
				}

				if (!hasValidSignature) {
					throw new TxAuditException({
						key: 'message.signature',
						value: ErrorCode.TX_SECP256K1_SIGNATURE_DOES_NOT_VERIFY,
					})
				}
			}
		},
		async validatorExists(moniker: string) {
			if (await state.getAccountRepository().hasByMonkiker(moniker)) {
				const account = await state.getAccountRepository().findByMoniker(moniker)

				if (account.validator !== undefined) {
					return
				}
			}

			throw new TxAuditException({
				key: 'moniker',
				value: ErrorCode.TX_NOT_FOUND,
			})
		},
	}
}
