import { readPackageJson } from '@bearmint/bep-009'
import type { Account, StateStore } from '@bearmint/bep-013'
import type { BEP134Policy, BEP134Token } from '@bearmint/bep-018'

export const HANDLER = '@bearmint/bep-134'
export const VERSION = '0.0.0'

export const MODULE_VERSION = readPackageJson(import.meta.url).version

export interface Milestone {
	count: {
		ops: {
			max: number
			min: number
		}
	}
	list: {
		policies: string[]
	}
	range: {
		decimals: {
			max: number
			min: number
		}
	}
	regex: {
		denomination: {
			flags?: string | undefined
			pattern: string
		}
		name: {
			flags?: string | undefined
			pattern: string
		}
	}
	schema: {
		policies: [
			Array<{
				args: object
				type: string
			}>,
		]
	}
}

export enum MintPolicy {
	IMMUTABLE = '@bearmint/bep-140',
	ONLY_OWNER = '@bearmint/bep-138',
	HEIGHT_LOCKED = '@bearmint/bep-139',
}

export interface PolicyArguments {
	amount: bigint
	nativeToken: BEP134Token
	nativeTokenHash: string
	policy: BEP134Policy
	sender: Account
	state: StateStore
}

export enum BEP134UserPermission {
	BURN,
	MINT,
	TRANSFER,
}
