/* eslint-disable @typescript-eslint/naming-convention */
import { file, Paths } from '@bearmint/bep-009'
import { Option } from 'clipanion'
import * as t from 'typanion'

interface Account {
	address: string
	mnemonic: string
	privateKey: string
	publicKey: string
}

interface Validator {
	address: string
	mnemonic: string
	name: string
	privateKey: string
	publicKey: string
}

export const TM_GENESIS = file.readJson<{ app_hash: string }>(Paths.TM_PATH_CONF_GENESIS)!

export const ACCOUNT = file.readJson<{ accounts: Account[] }>(Paths.BM_PATH_ACCS)!.accounts[0]!

export const ACCOUNT_ALT = file.readJson<{ accounts: Account[] }>(Paths.BM_PATH_ACCS)!.accounts[1]!

export const VALIDATOR = file.readJson<{ validators: Validator[] }>(Paths.BM_PATH_ACCS)!
	.validators[0]!

export const MESSAGE_OPTIONS = {
	network: TM_GENESIS.app_hash,
	version: '0.0.0',
}

export const DEFAULT_AMOUNT = `${10e8}`
export const DEFAULT_DENOMINATION = 'BEAR'
export const DEFAULT_MEMO = 'The quick brown fox jumps over the lazy dog'
export const DEFAULT_SECRET = 'secret'
export const DEFAULT_MONIKER = 'johndoe'

export const DEFAULT_FLAGS = {
	addressModule: Option.String('--address-package', '@bearmint/bep-042', {
		description: 'The address package',
		validator: t.isString(),
	}),
	addressPrefix: Option.String('--address-package-prefix', 'bear', {
		description: 'The address prefix',
		validator: t.isString(),
	}),
	keypairModule: Option.String('--keypair-package', '@bearmint/bep-033', {
		description: 'The keypair package',
		validator: t.isString(),
	}),
	mnemonic: Option.String('--mnemonic', ACCOUNT.mnemonic, {
		description: 'The sender mnemonic',
		validator: t.isString(),
	}),
	random: Option.Boolean('--random', false, {
		description: 'Generate random bits of information instead of using defaults or input',
	}),
	rpcHost: Option.String('--rpc-host', 'http://127.0.0.1:26657/', {
		description: 'The Tendermint RPC Host',
		validator: t.isString(),
	}),
	verbose: Option.Boolean('--verbose', false, {
		description: 'Enable verbose logging. Note that this will clutter your terminal!',
	}),
}
