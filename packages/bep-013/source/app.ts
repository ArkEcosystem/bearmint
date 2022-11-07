import type { ClassOrFunctionReturning } from 'awilix'

export interface Bootstrapper {
	bootstrap(): Promise<void>
}

export type BootstrapperConstructor = ClassOrFunctionReturning<Bootstrapper>

export interface Application {
	boot(bootstrappers: BootstrapperConstructor[]): Promise<void>
	dispose(reason?: string | undefined, error?: Error | undefined): Promise<void>
}
