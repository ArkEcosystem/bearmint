import { assert } from '@bearmint/bep-009'
import type { Account, Cradle, StateStore } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import type { abci } from '@bearmint/bep-018'
import { BEP101Misbehavior, BEP120File, BEP120Record } from '@bearmint/bep-018'
import { getModuleMilestone } from '@bearmint/bep-021'

import type { Milestone } from './types.js'

export async function getFile(state: StateStore, account: Account) {
	let file = new BEP120File()

	if (await state.getMultiStore().get('@bearmint/bep-120').has(account.address)) {
		file = BEP120File.fromBinary(
			await state.getMultiStore().get('@bearmint/bep-120').get(account.address),
			PROTO_OPTS,
		)
	}

	return file
}

export async function recordMisbehavior(
	cradle: Pick<Cradle, 'CommittedState' | 'ServiceProviderRepository'>,
	state: StateStore,
	account: Account,
	misbehavior: abci.Misbehavior,
) {
	const file = await getFile(state, account)

	// If the validator is still jailed we can't jail them again, duh!
	if (file.jailed === true) {
		return
	}

	// If there is no punishment we can't do anything
	const punishment = getModuleMilestone<Milestone>(
		cradle.ServiceProviderRepository,
		cradle.CommittedState,
		'@bearmint/bep-120',
	).punishments.find((p) => p.type.toString() === misbehavior.type.toString() || p.type === '*')

	if (punishment === undefined) {
		return
	}

	// If there is no duration set we assume that the application no longer wishes to jail
	const jailSentenceDuration = punishment.durations[file.count]

	if (jailSentenceDuration === undefined) {
		return
	}

	// Update the file of the convict
	const from = await state.getCommittedBlockNumber()

	const record = new BEP120Record({
		misbehavior: new BEP101Misbehavior(misbehavior),
		sentence: {
			end: from + BigInt(jailSentenceDuration),
			start: from,
		},
	})

	await state
		.getMultiStore()
		.get('@bearmint/bep-120')
		.set(
			account.address,
			new BEP120File({
				count: file.count + 1,
				jailed: true,
				records: [...file.records, record],
			}).toBinary(),
		)

	return record
}

export async function endSentence(state: StateStore, account: Account) {
	const { count, records } = await getFile(state, account)

	const result = new BEP120File({
		count,
		jailed: false,
		records,
	})

	await state.getMultiStore().get('@bearmint/bep-120').set(account.address, result.toBinary())

	return result
}

export async function isJailed(state: StateStore, account: Account) {
	return (await getFile(state, account)).jailed === true
}

export async function getSentenceEnd(state: StateStore, account: Account) {
	const result = (await getFile(state, account)).records.at(-1)?.sentence?.end

	assert.defined(result)

	return result
}
