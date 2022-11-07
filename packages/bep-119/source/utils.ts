import type { Account, StateStore } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import type { abci, BEP119Punishment, Plain } from '@bearmint/bep-018'
import { BEP119File, BEP119Record } from '@bearmint/bep-018'

export async function getFile(state: StateStore, account: Account) {
	let file = new BEP119File()

	if (await state.getMultiStore().get('@bearmint/bep-119').has(account.address)) {
		file = BEP119File.fromBinary(
			await state.getMultiStore().get('@bearmint/bep-119').get(account.address),
			PROTO_OPTS,
		)
	}

	return file
}

export async function recordMisbehavior(
	state: StateStore,
	account: Account,
	misbehavior: abci.Misbehavior,
	punishment: Plain<BEP119Punishment>,
) {
	const file = await getFile(state, account)
	const record = new BEP119Record({
		misbehavior,
		punishment,
	})

	await state
		.getMultiStore()
		.get('@bearmint/bep-119')
		.set(
			account.address,
			new BEP119File({
				count: file.count + 1,
				records: [...file.records, record],
			}).toBinary(),
		)

	return record
}
