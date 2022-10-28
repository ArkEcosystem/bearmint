import { Semaphore } from 'async-mutex'

const MUTEX_CONSENSUS = new Semaphore(1)
const MUTEX_GENERAL = new Semaphore(1)
const MUTEX_INFO = new Semaphore(1)
const MUTEX_MEMPOOL = new Semaphore(1)
const MUTEX_SNAPSHOT = new Semaphore(1)

export const MUTEXES = {
	applySnapshotChunk: MUTEX_SNAPSHOT,
	checkTx: MUTEX_MEMPOOL,
	commit: MUTEX_CONSENSUS,
	echo: MUTEX_GENERAL,
	extendVote: MUTEX_CONSENSUS,
	finalizeBlock: MUTEX_CONSENSUS,
	flush: MUTEX_GENERAL,
	info: MUTEX_INFO,
	initChain: MUTEX_CONSENSUS,
	listSnapshots: MUTEX_SNAPSHOT,
	loadSnapshotChunk: MUTEX_SNAPSHOT,
	offerSnapshot: MUTEX_SNAPSHOT,
	prepareProposal: MUTEX_CONSENSUS,
	processProposal: MUTEX_CONSENSUS,
	query: MUTEX_INFO,
	verifyVoteExtension: MUTEX_CONSENSUS,
}
