import { assert } from '@bearmint/bep-009'
import { Command, Option } from 'clipanion'
import * as t from 'typanion'

import { getConfig } from '../../config.js'
import { ACCOUNT } from '../constants.js'
import { makeCrypto } from '../utils.js'

export abstract class TxCommand extends Command {
	public addressModule = Option.String('--address-module', {
		description: 'The name of the module that should be used for address derivation.',
		hidden: true,
		validator: t.isString(),
	})

	public addressPrefix = Option.String('--address-prefix', {
		description: 'The prefix that should be used for addresses, for example "bear" for bech32m.',
		hidden: true,
		validator: t.isString(),
	})

	public estimateGas = Option.Boolean('--estimate-gas', false, {
		description: 'Estimate the gas cost instead of submitting the transaction.',
		hidden: true,
	})

	public keypairModule = Option.String('--keypair-module', {
		description:
			'The name of the module that should be used for cryptographic operations, for example signing transactions.',
		hidden: true,
		validator: t.isString(),
	})

	public mnemonic = Option.String('--mnemonic', {
		description: 'The mnemonic of the sender of the transaction.',
		hidden: true,
		validator: t.isString(),
	})

	public readonly random = Option.Boolean('--random', false, {
		description:
			'Generate random values rather than defaults. If set, any user input will be ignored.',
		hidden: true,
	})

	public rpcHost = Option.String('--rpc-host', {
		description:
			'The Tendermint RPC host that should be used for retrieval of information and submission of transactions.',
		hidden: true,
		validator: t.isString(),
	})

	public verbose = Option.Boolean('--verbose', {
		description: 'Enable verbose logging. Note that this will clutter your terminal!',
		hidden: true,
	})

	// We'll extract this later on after we created our Workload DSL for Taz (SoonTM)
	public readonly loadAmount = Option.String('--load-amount', {
		description:
			'The number of transactions to submit before exiting. If set, [--load-duration] is ignored.',
		validator: t.isNumber(),
	})

	public readonly loadDuration = Option.String('--load-duration', {
		description: 'The number of seconds to keep submitting new transactions.',
		validator: t.isNumber(),
	})

	public override async execute(): Promise<number | void> {
		this.#setDefaults()

		if (this.estimateGas === true) {
			await this.makeTx()

			return
		}

		// Send N transactions
		if (this.loadAmount !== undefined) {
			for (let index = 0; index < this.loadAmount; index++) {
				await this.makeTx()
			}

			return
		}

		// Send transactions for N duration
		if (this.loadDuration !== undefined) {
			const startTime = Date.now()

			for (;;) {
				await this.makeTx()

				if (Date.now() - startTime > this.loadDuration * 1000) {
					break
				}
			}
		}

		// No load, just do a single execution
		await this.makeTx()
	}

	#setDefaults() {
		if (this.addressModule === undefined) {
			try {
				this.addressModule = getConfig('addressModule')
			} catch {
				this.addressModule = '@bearmint/bep-042'
			}
		}

		if (this.addressPrefix === undefined) {
			try {
				this.addressPrefix = getConfig('addressPrefix')
			} catch {
				this.addressPrefix = 'bear'
			}
		}

		if (this.keypairModule === undefined) {
			try {
				this.keypairModule = getConfig('keypairModule')
			} catch {
				this.keypairModule = '@bearmint/bep-033'
			}
		}

		if (this.mnemonic === undefined) {
			try {
				this.mnemonic = getConfig('mnemonic')
			} catch {
				this.mnemonic = ACCOUNT.mnemonic
			}
		}

		if (this.rpcHost === undefined) {
			try {
				this.rpcHost = getConfig('rpcHost')
			} catch {
				this.rpcHost = 'http://127.0.0.1:26657/'
			}
		}

		if (this.verbose === undefined) {
			try {
				this.verbose = getConfig<boolean>('verbose')
			} catch {
				this.verbose = false
			}
		}
	}

	protected async makeCrypto() {
		assert.defined(this.addressModule)
		assert.defined(this.addressPrefix)
		assert.defined(this.keypairModule)

		return makeCrypto(this.addressModule, this.addressPrefix, this.keypairModule)
	}

	abstract makeTx(): Promise<void>
}
