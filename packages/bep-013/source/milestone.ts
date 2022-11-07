import type { params, PlainMessage } from '@bearmint/bep-018'

import type { DenominationType } from './account.js'

export interface MilestoneParameters<MandatoryModules = object, OptionalModules = object> {
	application: {
		semanticVersion: string
		protocolVersion: string
	}
	consensus: PlainMessage<params.ConsensusParams>
	denominations: Record<DenominationType, string>
	modules: {
		mandatory: MandatoryModules
		optional?: OptionalModules | undefined
	}
	transactions: {
		handlers: Record<string, { ranges: string[] }>
	}
}

export interface Milestone<RequiredModules = object, OptionalModules = object> {
	blockNumber: string
	parameters: MilestoneParameters<RequiredModules, OptionalModules>
}

export type Milestones = Record<
	string,
	{
		blockNumber: string
		milestones: Milestone[]
	}
>

export interface MilestoneStrategy {
	execute(blockNumber: bigint, milestones: Milestones): Promise<Milestone[]>
}
