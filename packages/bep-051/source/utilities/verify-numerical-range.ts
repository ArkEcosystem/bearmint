// https://github.com/npm/node-semver#usage

import { dot } from '@bearmint/bep-009'
import type { ServiceProviderRepository, StateStore } from '@bearmint/bep-013'
import { getModuleMilestone } from '@bearmint/bep-021'

interface Arguments {
	committedState: StateStore
	name: string
	serviceProviderRepository: ServiceProviderRepository
	version?: string | undefined
}

export function verifyNumericalRange(
	codes: {
		max: string
		min: string
		missing: string
	},
	milestone: {
		max: number
		min: number
	},
	size: bigint,
) {
	if (milestone === undefined) {
		return codes.missing
	}

	if (milestone.min === undefined) {
		return codes.missing
	}

	if (milestone.max === undefined) {
		return codes.missing
	}

	if (size < milestone.min) {
		return codes.min
	}

	if (milestone.max === 0) {
		return undefined
	}

	if (size > milestone.max) {
		return codes.max
	}

	return undefined
}

export function verifyNumericalRangeFromMilestone({
	codes,
	committedState,
	name,
	serviceProviderRepository,
	size,
	sizeProperty,
	version,
}: Arguments & {
	codes: {
		max: string
		min: string
		missing: string
	}
	size: number | string
	sizeProperty: string
}) {
	return verifyNumericalRange(
		codes,
		dot.get(
			getModuleMilestone(serviceProviderRepository, committedState, name, version),
			sizeProperty,
		),
		BigInt(size),
	)
}
