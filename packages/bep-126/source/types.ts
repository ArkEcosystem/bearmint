import { readPackageJson } from '@bearmint/bep-009'
import type { Account, StateStore } from '@bearmint/bep-013'
import type { BEP126Collection, BEP126Policy } from '@bearmint/bep-018'

export const HANDLER = '@bearmint/bep-126'
export const VERSION = '0.0.0'

export const MODULE_VERSION = readPackageJson(import.meta.url).version

export interface PolicyArgs {
	actor: Account
	collection: BEP126Collection
	policy: BEP126Policy
	state: StateStore
	token?: string
}

export enum MintPolicy {
	IMMUTABLE = '@bearmint/bep-142',
	LOCKED_BY_BLOCK_NUMBER = '@bearmint/bep-143',
	LOCKED_BY_MAX_SUPPLY = '@bearmint/bep-144',
	ONLY_OWNER = '@bearmint/bep-141',
	ONLY_TEAM = '@bearmint/bep-145',
}

export enum BEP126UserRole {
	OWNER,
	STEWARD,
}

export enum BEP126UserPermission {
	BURN,
	MINT,
	TRANSFER,
}
