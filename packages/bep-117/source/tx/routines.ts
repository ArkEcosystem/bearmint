/* eslint-disable @typescript-eslint/naming-convention */
export const DEFAULT_ROUTINES = {
	htlc: [
		{
			actions: 'Creates a HTLC lock and claims it',
			command: 'bep-064',
			expects: 'pass',
			options: { claim: true, random: true },
		},
		{
			actions: 'Creates a HTLC lock and refunds it',
			command: 'bep-064',
			expects: 'pass',
			options: { random: true, refund: true },
		},
	],
	'htlc-faulty': [
		{
			actions: 'Creates a HTLC lock and attempts to claim it with an invalid secret',
			command: 'bep-064',
			expects: 'fail',
			options: { claim: true, invalid: true, random: true },
		},
		{
			actions: 'Creates a HTLC lock and attempts to refund it with an invalid secret',
			command: 'bep-064',
			expects: 'fail',
			options: { invalid: true, random: true, refund: true },
		},
		{
			actions: 'Attempts to claim a HTLC Lock that does not exist',
			command: 'bep-065',
			expects: 'fail',
			options: { hash: '404' },
		},
		{
			actions: 'Attempts to refund a HTLC Lock that does not exist',
			command: 'bep-066',
			expects: 'fail',
			options: { hash: '404' },
		},
	],
	'native-tokens': [
		{
			actions: 'Registers a native token and mints additional tokens',
			command: 'bep-134',
			expects: 'pass',
			options: { mint: true },
		},
		{
			actions: 'Transfers native tokens from one account to multiple other',
			command: 'bep-055',
			expects: 'pass',
			options: { denomination: 'DEER' },
		},
		{
			actions: 'Burns native tokens from an account',
			command: 'bep-056',
			expects: 'pass',
			options: { denomination: 'DEER' },
		},
	],
	'native-tokens-faulty': [
		{
			actions:
				'Attempts to transfer more native tokens than exist from one account to multiple other',
			command: 'bep-055',
			expects: 'fail',
			options: { amount: '99999999999999999999999999999999', denomination: 'DEER' },
		},
		{
			actions: 'Attempts to burn native tokens that do not exist',
			command: 'bep-056',
			expects: 'fail',
			options: { amount: '99999999999999999999999999999999', denomination: '404' },
		},
		{
			actions: 'Attempts to burn more native tokens than exist',
			command: 'bep-056',
			expects: 'fail',
			options: { amount: '99999999999999999999999999999999' },
		},
	],
	'native-tokens-random': [
		{
			actions: 'Registers a native token and mints additional tokens',
			command: 'bep-134',
			expects: 'pass',
			options: { mint: true, random: true },
		},
		{
			actions: 'Registers a native token and transfers the ownership',
			command: 'bep-134',
			expects: 'pass',
			options: { random: true, transfer: true },
		},
		{
			actions: 'Registers a native token and resigns the ownership',
			command: 'bep-134',
			expects: 'pass',
			options: { random: true, resign: true },
		},
	],
	nft: [
		{
			actions: 'Mints an NFT and transfers it to another account',
			command: 'bep-131',
			expects: 'pass',
			options: { random: true, transfer: true },
		},
		{
			actions: 'Mints an NFT and burns it',
			command: 'bep-131',
			expects: 'pass',
			options: { burn: true, random: true },
		},
	],
	'nft-collection': [
		{
			actions: 'Registers an NFT Collection',
			command: 'bep-126',
			expects: 'pass',
			options: { random: true },
		},
		{
			actions: 'Registers an NFT Collection and transfers the ownership',
			command: 'bep-126',
			expects: 'pass',
			options: { random: true, transfer: true },
		},
		{
			actions: 'Registers an NFT Collection and resigns the ownership',
			command: 'bep-126',
			expects: 'pass',
			options: { random: true, resign: true },
		},
		{
			actions: 'Registers an NFT Collection and grants permissions',
			command: 'bep-126',
			expects: 'pass',
			options: { grant: true, random: true },
		},
	],
	'nft-faulty': [
		{
			actions: 'Attemps to transfer an NFT that does not exist to another account',
			command: 'bep-132',
			expects: 'fail',
			options: { hash: '404', random: true },
		},
		{
			actions: 'Attemps to burn an NFT that does not exist',
			command: 'bep-133',
			expects: 'fail',
			options: { hash: '404', random: true },
		},
	],
	registration: [
		{
			actions: 'Registers a unique IPFS hash and associates it with an account',
			command: 'bep-067',
			expects: 'pass',
		},
		{
			actions: 'Registers a blob of data and associates it with an account',
			command: 'bep-068',
			expects: 'pass',
		},
		{
			actions: 'Registers a unique name and associates it with an account',
			command: 'bep-110',
			expects: 'pass',
		},
	],
	'registration-faulty': [
		{
			actions:
				'Registers a unique IPFS hash and associates it with an account and fails to attempt to register it again',
			command: 'bep-067',
			expects: ['pass', 'fail'],
			repeats: 2,
		},
		{
			actions:
				'Registers a blob of data and associates it with an account and fails to attempt to register it again',
			command: 'bep-068',
			expects: ['pass', 'fail'],
			repeats: 2,
		},
		{
			actions:
				'Registers a unique name and associates it with an account and fails to attempt to register it again',
			command: 'bep-110',
			expects: ['pass', 'fail'],
			repeats: 2,
		},
	],
	stake: [
		{
			actions: 'Increases the stake with a validator',
			command: 'bep-104',
			expects: 'pass',
			options: { action: 'increase', moniker: 'genesis_1' },
		},
		{
			actions: 'Decreases the stake with a validator',
			command: 'bep-104',
			expects: 'pass',
			options: { action: 'decrease', moniker: 'genesis_1' },
		},
	],
	'stake-faulty': [
		{
			actions: 'Attempts to decrease the stake with a validator without staking',
			command: 'bep-104',
			expects: 'fail',
			options: { action: 'decrease' },
		},
	],
	tokens: [
		{
			actions: 'Transfers tokens from one account to multiple other',
			command: 'bep-055',
			expects: 'pass',
		},
		{ actions: 'Burns tokens from an account', command: 'bep-056', expects: 'pass' },
	],
	'tokens-faulty': [
		{
			actions: 'Attemps to transfer more tokens than exist from one account to multiple other',
			command: 'bep-055',
			expects: 'fail',
			options: { amount: '99999999999999999999999999999999' },
		},
		{
			actions: 'Attemps to burn more tokens than exist on an account',
			command: 'bep-056',
			expects: 'fail',
			options: { amount: '99999999999999999999999999999999' },
		},
	],
	validator: [
		{
			actions: 'Registers a unique name and associates it with an account',
			command: 'bep-110',
			expects: 'pass',
		},
		{ actions: 'Registers a validator', command: 'bep-057', expects: 'pass' },
		{
			actions: 'Adjusts the distribution parameters of a validator',
			command: 'bep-059',
			expects: 'pass',
		},
		{ actions: 'Resignation of validation rights', command: 'bep-058', expects: 'pass' },
	],
}
