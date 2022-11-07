// https://github.com/npm/node-semver#usage

import { assert, semver } from '@bearmint/bep-009'
import type { ServiceProviderRepository, StateStore } from '@bearmint/bep-013'

import { deepmerge } from './deepmerge.js'

export function getModuleMilestone<T = Record<string, any>>(
	serviceProviderRepository: ServiceProviderRepository,
	committedState: StateStore,
	name: string,
	version?: string | undefined,
) {
	const { modules } = committedState.getMilestone<T>().parameters

	let serviceProvider: object | undefined = modules.mandatory[name]

	if (serviceProvider === undefined && modules.optional !== undefined) {
		serviceProvider = modules.optional[name]
	}

	assert.defined<object>(serviceProvider)

	let result: T | undefined

	if (serviceProvider['*'] !== undefined) {
		result = serviceProvider['*']
	}

	if (version === undefined) {
		version = serviceProviderRepository.get(name).version()
	}

	if (version !== '*') {
		for (const [range, options] of Object.entries(serviceProvider) as any) {
			if (range === '*') {
				continue
			}

			if (semver.badRange(range)) {
				continue
			}

			if (semver.dissatisfies(version, range)) {
				continue
			}

			if (result === undefined) {
				result = options
			} else {
				result = deepmerge(result as any, options)
			}
		}
	}

	if (result === undefined) {
		throw new Error(
			'Failed to retrieve service provider configuration from milestone by version or wildcard.',
		)
	}

	return result
}
