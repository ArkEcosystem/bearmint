export interface CostParameters {
	msg: string
	tx: string
}

export interface Milestone {
	[key: string]: Record<string, CostParameters>
}
