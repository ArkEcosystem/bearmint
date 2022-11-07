export interface ServiceProviderRepository {
	all(): Map<string, ServiceProvider>
	allLoadedProviders(): ServiceProvider[]
	boot(name: string): Promise<void>
	defer(name: string): void
	deferred(name: string): boolean
	dispose(name: string): Promise<void>
	fail(name: string): void
	failed(name: string): boolean
	get(name: string): ServiceProvider
	has(name: string): boolean
	load(name: string): void
	loaded(name: string): boolean
	register(name: string): Promise<void>
	set(name: string, provider: ServiceProvider): void
}

export interface ServiceProvider {
	boot(): Promise<void>
	bootWhen(serviceProvider?: string | undefined): Promise<boolean>
	config(): ServiceProviderConfig
	dependencies(): ServiceProviderDependency[]
	dispose(): Promise<void>
	disposeWhen(serviceProvider?: string | undefined): Promise<boolean>
	name(): string
	register(): Promise<void>
	required(): Promise<boolean>
	version(): string
}

export interface ServiceProviderConfig {
	all(): object
	get<T>(key: string, defaultValue?: T | undefined): T
	has(key: string): boolean
	merge(values: object | undefined): void
	set<T>(key: string, value: T): boolean
	unset(key: string): boolean
}

export interface ServiceProviderDependency {
	name: string
	version?: string | undefined
	required?: boolean | (() => Promise<boolean>) | undefined
}
