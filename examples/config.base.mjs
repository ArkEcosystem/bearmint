import { semver } from '../packages/bep-009/distribution/index.js'

export const keyPairType = 'ed25519'

export const consensusParameters = {
	block: {
		max_bytes: '22020096',
		max_gas: '-1',
		time_iota_ms: '1000',
	},
	evidence: {
		max_age_duration: '172800000000000',
		max_age_num_blocks: '100000',
		max_bytes: '1048576',
	},
	validator: {
		pub_key_types: [keyPairType],
	},
	version: {
		app_version: semver.toNumber('0.0.0').toString(),
	},
}
