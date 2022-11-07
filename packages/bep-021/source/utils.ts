import { assert } from '@bearmint/bep-009'
import type { Milestone } from '@bearmint/bep-013'

export function getPublicKeyType(milestone: Milestone) {
	const pubKeyTypes = milestone.parameters.consensus.validator?.pubKeyTypes

	assert.defined<string[]>(pubKeyTypes)
	assert.defined<string[]>(pubKeyTypes[0])

	return pubKeyTypes[0]
}
