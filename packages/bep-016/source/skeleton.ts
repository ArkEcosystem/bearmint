import { readPackageJson } from '@bearmint/bep-009'
import type { ServiceProvider } from '@bearmint/bep-013'

import { makeServiceProviderConfig } from './config.js'

export function makeServiceProviderSkeleton(path: string): ServiceProvider {
	const serviceProviderConfig = makeServiceProviderConfig()
	const { name, version } = readPackageJson(path)

	return {
		async boot() {
			//
		},
		async bootWhen(_serviceProvider?: string) {
			return true
		},
		config() {
			return serviceProviderConfig
		},
		dependencies() {
			return []
		},
		async dispose() {
			//
		},
		async disposeWhen(_serviceProvider?: string) {
			return false
		},
		name() {
			return name
		},
		async register() {
			//
		},
		async required() {
			return true
		},
		version() {
			return version
		},
	}
}
