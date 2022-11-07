/* eslint-disable unicorn/custom-error-definition */

// import type { TxChecksum } from '@bearmint/bep-018'
import { assert, canonicalizeJson } from '@bearmint/bep-009'
import type { Account, TxAssertionsErrorStruct } from '@bearmint/bep-013'
import { abci } from '@bearmint/bep-018'
import type { ZodIssue } from 'zod'

export class Exception extends Error {
	public constructor(
		msg: string,
		options?: { code?: string; cause?: Error; expected?: boolean; transient?: boolean },
	) {
		super(msg)

		if (typeof options === 'object' && options !== null) {
			if (options.code !== undefined) {
				Object.defineProperty(this, 'code', {
					enumerable: false,
					value: options.code,
				})
			}

			if (options.expected !== undefined) {
				Object.defineProperty(this, 'expected', {
					enumerable: false,
					value: options.expected,
				})
			}

			if (options.transient !== undefined) {
				Object.defineProperty(this, 'transient', {
					enumerable: false,
					value: options.transient,
				})
			}

			if (options.cause !== undefined) {
				Object.defineProperty(this, 'cause', {
					enumerable: false,
					value: options.cause,
				})
			}
		}

		Object.defineProperty(this, 'name', {
			enumerable: false,
			value: this.constructor.name,
		})

		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, this.constructor)
		}
	}
}

export class NotImplementedException extends Exception {
	public constructor(fn: string) {
		super(`Method [${fn}] is not yet implemented.`, { code: 'NOT_IMPLEMENTED' })
	}
}

export class InvalidServiceProviderConfigException extends Exception {
	public constructor(name: string, issues: ZodIssue[]) {
		super(
			`[${name}] Failed to validate the configuration: "${JSON.stringify(
				issues.map(({ message }) => message),
				undefined,
				4,
			)}".`,
			{ code: 'INVALID_SERVICE_PROVIDER_CONFIG' },
		)
	}
}

export class ServiceProviderCannotBeRegisteredException extends Exception {
	public constructor(name: string, error: string) {
		super(`[${name}] Failed to register: "${error}".`, {
			code: 'SERVICE_PROVIDER_CANNOT_BE_REGISTERED',
		})
	}
}

export class ServiceProviderCannotBeBootedException extends Exception {
	public constructor(name: string, error: string) {
		super(`[${name}] Failed to boot: "${error}".`, {
			code: 'SERVICE_PROVIDER_CANNOT_BE_BOOTED',
		})
	}
}

export class DependencyVersionOutOfRangeException extends Exception {
	public constructor(dep: string, expected: string, given: string) {
		super(`Expected (${dep}) to satisfy (${expected}) but received (${given}).`, {
			code: 'DEPENDENCY_VERSION_TX_OUT_OF_RANGE',
		})
	}
}

export class OptionalDependencyCannotBeFoundException extends Exception {
	public constructor(serviceProvider: string, dependency: string) {
		super(
			`The (${dependency}) is missing. Please, make sure to install this library to take advantage of (${serviceProvider}).`,
			{ code: 'OPTIONAL_DEPENDENCY_CANNOT_BE_FOUND' },
		)
	}
}

export class RequiredDependencyCannotBeFoundException extends Exception {
	public constructor(serviceProvider: string, dependency: string) {
		super(
			`The (${dependency}) is required but missing. Please, make sure to install this library to take advantage of (${serviceProvider}).`,
			{ code: 'REQUIRED_DEPENDENCY_CANNOT_BE_FOUND' },
		)
	}
}

export class TxGasTooLowException extends Exception {
	public constructor(hash: string, denomination: string, expected: bigint, actual: bigint) {
		super(
			`${hash} gas is too low. Expected at least (${expected.toString()} ${denomination}) but got (${actual.toString()} ${denomination})`,
			{ code: 'TRANSACTION_GAS_TOO_LOW' },
		)
	}
}

export class TxGasTooHighException extends Exception {
	public constructor(hash: string, denomination: string, expected: bigint, actual: bigint) {
		super(
			`${hash} gas is too high. Expected at most (${expected.toString()} ${denomination}) but got (${actual.toString()} ${denomination})`,
			{ code: 'TRANSACTION_GAS_TOO_HIGH' },
		)
	}
}

export class TxFailuresRecordedException extends Exception {
	public event: abci.Event

	public constructor(hash: string, event: abci.Event) {
		super(`Tx (${hash}) contained (${event.attributes.length}) errors`, {
			code: 'TRANSACTION_FAILURES_RECORDED',
		})

		this.event = event
	}
}

export class TxExecutionFailedException extends Exception {
	public constructor(hash: string, method: string, why: string) {
		super(`Tx (${hash}) failed to ${method}: ${why}`, {
			code: 'TRANSACTION_EXECUTION_FAILED',
		})
	}
}

export class AccountBalanceWentNegativeException extends Exception {
	public constructor(account: Account, balance: bigint) {
		super(`Balance of account (${account.address}) went negative (${balance.toString()})`, {
			code: 'ACCOUNT_BALANCE_WENT_NEGATIVE',
		})
	}
}

export class TxHasNoGasConfigurationException extends Exception {
	public constructor(type: string) {
		super(`Failed to find gas for msg handler (${type})`, {
			code: 'TRANSACTION_HANDLER_HAS_NO_GAS',
		})
	}
}

export class MissingRequiredConfigurationValueException extends Exception {
	public constructor(key: string) {
		super(`Missing required (${key}) configuration value`, {
			code: 'TX_MISSING_REQUIRED_CONFIGURATION_VALUE',
		})
	}
}

// export class TxHandlerNotRegisteredException extends Exception {
// 	public constructor(checksum: TxChecksum) {
// 		super(
// 			`Tx handler is not registered (handler=${checksum.handler} network=${checksum.network} version=${checksum.version})`,
// 			{
// 				code: 'TRANSACTION_HANDLER_NOT_REGISTERED',
// 			},
// 		)
// 	}
// }

// export class TxHandlerVersionNotRegisteredException extends Exception {
// 	public constructor(checksum: TxChecksum) {
// 		super(
// 			`Tx handler version is not registered (handler=${checksum.handler} network=${checksum.network} version=${checksum.version})`,
// 			{
// 				code: 'TRANSACTION_HANDLER_VERSION_NOT_REGISTERED',
// 			},
// 		)
// 	}
// }

// export class TxHandlerAlreadyRegisteredException extends Exception {
// 	public constructor(checksum: TxChecksum) {
// 		super(
// 			`Tx handler is already registered (handler=${checksum.handler} network=${checksum.network} version=${checksum.version})`,
// 			{
// 				code: 'TRANSACTION_HANDLER_ALREADY_REGISTERED',
// 			},
// 		)
// 	}
// }

export class TxAuditException extends Exception {
	public attributes: abci.EventAttribute[] = []

	public constructor(attributes: TxAssertionsErrorStruct | TxAssertionsErrorStruct[]) {
		super('')

		for (const attribute of Array.isArray(attributes) ? attributes : [attributes]) {
			assert.defined(attribute.value)

			this.attributes.push(
				abci.EventAttribute.fromJson({
					key: attribute.key,
					value: attribute.value,
				}),
			)
		}
	}
}

export class StrategyRequiresSingleDenominationException extends Exception {
	public constructor() {
		super('Expected the denomination for gas, reward and token to be the same.', {
			code: 'STRATEGY_REQUIRES_SINGLE_DENOMINATION',
		})
	}
}

export class BadRequestException extends Exception {
	public payload: object
	public statusCode: number

	public constructor(statusCode: number, payload: object) {
		super(`Bad Request: ${JSON.stringify(canonicalizeJson(payload))} (${statusCode})`, {
			code: 'BAD_REQUEST',
		})

		this.payload = payload
		this.statusCode = statusCode
	}
}

export class DoesNotSatisfyElectionConditionsError extends Exception {
	public constructor(reason: string) {
		super(`Expected the validator to be eligible but it is ${reason}.`, {
			code: 'DOES_NOT_SATISFY_ELECTION_CONDITIONS',
		})
	}
}
