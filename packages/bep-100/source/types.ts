import type { Cradle as Base } from '@bearmint/bep-013'

import type { LevelDB } from './level.js'

export enum InternalContainerType {
	BUCKETS = '@bearmint/bep-100/buckets',
}

export type Cradle = Base<{
	[InternalContainerType.BUCKETS]: Buckets
}>

export interface Host {
	host: string
	token: string
}

export type Buckets = Array<{ host: Host; database: LevelDB }>
