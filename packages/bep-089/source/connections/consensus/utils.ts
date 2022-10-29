import type { Container, Cradle, StateStore } from '@bearmint/bep-013'
import { ContainerType } from '@bearmint/bep-013'

export function setCheckTxState(container: Container, state: StateStore) {
	container.bindValue(ContainerType.CheckTxState, state)
}

export function setExecuteTxState(container: Container, state: StateStore) {
	container.bindValue(ContainerType.ExecuteTxState, state)
}

export async function resetState(cradle: Cradle) {
	if (cradle.CommittedState.hasCheckpoints()) {
		throw new Error('Committed state should have no checkpoints yet.')
	}

	// Anchor Checkpoint to allow for full state reverts
	await cradle.CommittedState.checkpoint()

	setCheckTxState(cradle.Container, await cradle.CommittedState.copy())
	setExecuteTxState(cradle.Container, await cradle.CommittedState.copy())

	// Anchor Checkpoint to allow for reverts/commits per tx
	await cradle.CheckTxState.checkpoint()

	// Anchor Checkpoint to allow for reverts/commits per tx
	await cradle.ExecuteTxState.checkpoint()
}
