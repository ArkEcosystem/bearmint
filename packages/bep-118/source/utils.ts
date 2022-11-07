import type { Account, StateStore } from '@bearmint/bep-013'
import { PROTO_OPTS } from '@bearmint/bep-013'
import type { abci, BEP118Punishment, Plain } from '@bearmint/bep-018'
import { BEP118File, BEP118Record } from '@bearmint/bep-018'

export async function getFile(state: StateStore, account: Account) {
	let file = new BEP118File()

	if (await state.getMultiStore().get('@bearmint/bep-118').has(account.address)) {
		file = BEP118File.fromBinary(
			await state.getMultiStore().get('@bearmint/bep-118').get(account.address),
			PROTO_OPTS,
		)
	}

	return file
}

export async function recordMisbehavior(
	state: StateStore,
	account: Account,
	misbehavior: abci.Misbehavior,
	punishment: Plain<BEP118Punishment>,
) {
	const file = await getFile(state, account)
	const record = new BEP118Record({
		misbehavior,
		punishment,
	})

	await state
		.getMultiStore()
		.get('@bearmint/bep-118')
		.set(
			account.address,
			new BEP118File({
				count: file.count + 1,
				records: [...file.records, record],
			}).toBinary(),
		)

	return record
}
