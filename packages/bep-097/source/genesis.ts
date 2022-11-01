import {
	assert,
	blake3,
	bytesToHex,
	camelCaseKeys,
	file,
	jsonToBytes,
	Paths,
} from '@bearmint/bep-009'
import { deepStrictEqual } from 'assert'

import type { GenesisAccount } from './account.js'
import { generateAccounts } from './account.js'
import { persistBearmint } from './bearmint.js'
import { persistMilestones } from './milestones.js'
import { generateNodeKeys } from './node-key.js'
import { modifyTendermintConfig } from './tendermint.js'
import type { GenesisOptions } from './types.js'
import { getMoniker } from './utils.js'
import { generateValidators, persistValidatorKey } from './validator.js'

export function getHomePath(count: number) {
	if (count === 1) {
		return Paths.TM_PATH_HOME
	}

	return Paths.BM_PATH_HOME
}

export function makeState(options: GenesisOptions) {
	const result: Record<string, any> = {
		app_state: {
			accounts: options.state.accounts ?? [],
			txs: options.state.txs ?? [],
		},
		chain_id: options.genesis.chainId,
		consensus_params: options.genesis.consensusParameters,
		genesis_time: new Date(options.genesis.genesisTime).toISOString(),
		initial_height: '1',
		validators: [],
	}

	options.milestones['*']!.milestones[0]!.parameters.consensus = camelCaseKeys(
		options.milestones['*']!.milestones[0]!.parameters.consensus,
	)

	return result
}

export function persistGenesis({ milestones, path, state }) {
	path = `${path}/config/genesis.json`

	console.log(`Writing [${path}]`)

	file.writeJson(path, {
		app_hash: bytesToHex(blake3(jsonToBytes({ milestones, state }))),
		...state,
	})
}

export function assertTotalSupply(
	initialSupply: bigint,
	accounts: GenesisAccount[],
	distributeInitialSupply: boolean,
) {
	// Aggregate the total supply from all account balances
	let totalSupply = BigInt(0)

	for (const account of accounts) {
		const denomination = Object.keys(account.balances)[0]

		assert.defined(denomination)

		totalSupply += BigInt(account.balances[denomination]!)
	}

	// The real initial supply can be slightly off from the specified value.
	deepStrictEqual(
		distributeInitialSupply === true
			? (BigInt(initialSupply) / BigInt(accounts.length)) * BigInt(accounts.length)
			: initialSupply,
		totalSupply,
	)
}

/**
 * This function generates configuration for a single node in the `~/.tendermint` directory.
 *
 * @remarks
 * - We keep this as a separate function to avoid too many flags that dictate behaviour.
 */
export async function makeNode(options: GenesisOptions) {
	// Preparing...
	const path = getHomePath(options.entities.validators)
	const state = makeState(options)

	// Generate bearmint accounts...
	const accounts = await generateAccounts({
		addressFactory: options.services.addressFactory,
		countAccounts: options.entities.accounts,
		countValidators: options.entities.validators,
		distributeInitialSupply: options.distributeInitialSupply ?? false,
		initialSupply: options.state.initialSupply,
		keyPairFactory: options.services.keyPairFactory,
		milestones: options.milestones,
		state,
	})

	// Generate validator accounts...
	const validators = await generateValidators({
		accounts,
		addressFactory: options.services.addressFactory,
		countAccounts: options.entities.accounts,
		countValidators: options.entities.validators,
		distributeInitialSupply: options.distributeInitialSupply ?? false,
		initialSupply: options.state.initialSupply,
		keyPairFactory: options.services.keyPairFactory,
		keyPairType: options.genesis.keyPairType,
		milestones: options.milestones,
		state,
	})

	// Generate persistent peers...
	await generateNodeKeys({
		count: options.entities.nodes,
		keyPairType: options.genesis.keyPairType,
		numberOfValidators: options.entities.validators,
		path,
	})

	// Write Validator Key...
	persistValidatorKey({
		account: validators[0],
		path,
		type: options.genesis.keyPairType,
	})

	// Write Genesis...
	persistGenesis({ ...options, path, state })

	// Modify Tendermint...
	modifyTendermintConfig(path, 'genesis_1', [])

	// Write Milestones...
	persistMilestones({ ...options, path: Paths.BM_PATH_HOME })

	// Write Bearmint...
	await persistBearmint({
		accounts,
		path: Paths.BM_PATH_HOME,
		validators,
	})

	// Make sure we don't exceed the initial supply
	assertTotalSupply(
		BigInt(options.state.initialSupply),
		state['app_state'].accounts,
		options.distributeInitialSupply ?? false,
	)
}

/**
 * This function generates configuration for a many nodes in the `~/.bearmint/genesis_{n}` directories.
 *
 * @remarks
 * - We keep this as a separate function to avoid too many options that dictate behaviour.
 * - The `persistent_peers` will use monikers which need to be replaced with IP addresses.
 */
export async function makeNodes(options: GenesisOptions) {
	// Preparing...
	const basePath = getHomePath(options.entities.validators)
	const state = makeState(options)

	// Generate bearmint accounts...
	const accounts = await generateAccounts({
		addressFactory: options.services.addressFactory,
		countAccounts: options.entities.accounts,
		countValidators: options.entities.validators,
		distributeInitialSupply: options.distributeInitialSupply ?? false,
		initialSupply: options.state.initialSupply,
		keyPairFactory: options.services.keyPairFactory,
		milestones: options.milestones,
		state,
	})

	// Generate validator accounts...
	const validators = await generateValidators({
		accounts,
		addressFactory: options.services.addressFactory,
		countAccounts: options.entities.accounts,
		countValidators: options.entities.validators,
		distributeInitialSupply: options.distributeInitialSupply ?? false,
		initialSupply: options.state.initialSupply,
		keyPairFactory: options.services.keyPairFactory,
		keyPairType: options.genesis.keyPairType,
		milestones: options.milestones,
		state,
	})

	// Generate persistent peers...
	const persistentPeers = await generateNodeKeys({
		count: validators.length,
		keyPairType: options.genesis.keyPairType,
		numberOfValidators: options.entities.validators,
		path: basePath,
	})

	// for (let index = 0; index < state['app_state'].accounts.length; index++) {
	for (let index = 0; index < validators.length; index++) {
		// Generate the moniker for this node...
		const moniker = getMoniker(index + 1)

		// Persist validator if it exists...
		if (validators[index] !== undefined) {
			persistValidatorKey({
				account: validators[index],
				path: options.entities.validators === 1 ? basePath : `${basePath}/${moniker}/.tendermint`,
				type: options.genesis.keyPairType,
			})
		}

		// Generate home path...
		const path = `${basePath}/${moniker}`

		// Write Genesis...
		persistGenesis({ ...options, path: `${path}/.tendermint`, state })

		// Modify Tendermint...
		modifyTendermintConfig(`${path}/.tendermint`, moniker, persistentPeers)

		// Write Milestones...
		persistMilestones({ ...options, path: `${path}/.bearmint` })

		// Write Bearmint...
		await persistBearmint({
			accounts,
			path: `${path}/.bearmint`,
			validators,
		})
	}

	// Make sure we don't exceed the initial supply
	assertTotalSupply(
		BigInt(options.state.initialSupply),
		state['app_state'].accounts,
		options.distributeInitialSupply ?? false,
	)
}
