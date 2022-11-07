import type { ClassOrFunctionReturning } from 'awilix'

export interface Policy<T = object> {
	allows(args: T): Promise<boolean>
	denies(args: T): Promise<boolean>
	validate(args: string): Promise<boolean>
}

export type Policies = Record<string, Policy>

export type PoliciesByModule = Record<string, Policies>

export interface PolicyRegistry {
	all(): PoliciesByModule
	forget(module: string, policyType?: string): void
	get(module: string, policyType: string, policyName: string): Policy<object>
	set(
		module: string,
		policyType: string,
		policyName: string,
		constructor: ClassOrFunctionReturning<Policy>,
	): void
}

export interface PolicyRegistryFactory {
	make(name: string): PolicyRegistry
}
