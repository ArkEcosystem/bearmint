export type Strategy = unknown
export type Strategies<T = unknown> = Record<string, T>
export type StrategiesByModule = Record<string, Strategies>

export interface StrategyRegistry {
	all(): StrategiesByModule
	allByModule<T>(module: string): Strategies<T>
	forget(module: string): void
	get<T>(module: string, strategy: string): T
	has(module: string, strategy: string): boolean
	missing(module: string, strategy: string): boolean
	set(module: string, strategy: string, constructor: unknown): void
}

export interface StrategyRegistryFactory {
	make(name: string): StrategyRegistry
}
