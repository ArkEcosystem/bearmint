import { assert, bytesToHex, file, sha256 } from '@bearmint/bep-009'
import type { Address } from '@bearmint/bep-013'
import type { PlainMessage, TxMsg } from '@bearmint/bep-018'
import { SignedTx } from '@bearmint/bep-018'
import { signTx } from '@bearmint/bep-099'
import { chalk } from '@bearmint/bep-116'

import { ENV_PATHS } from '../constants.js'
import { broadcast, estimateGas, fetchTx, getNextNonce } from './http.js'
import { makeCrypto, randomMnemonic } from './utils.js'

export async function makeTx(
	command: {
		addressModule?: string | undefined
		addressPrefix?: string | undefined
		estimateGas?: boolean
		keypairModule?: string | undefined
		mnemonic?: string | undefined
		rpcHost?: string | undefined
		verbose?: boolean | undefined
	},
	message: PlainMessage<TxMsg>,
	opts?: {
		recipient?: { address: Address; mnemonic: string } | undefined
		nonce?: string | undefined
		actingAsLoopback?: boolean
	},
) {
	assert.defined(command.addressModule)
	assert.defined(command.addressPrefix)
	assert.defined(command.keypairModule)
	assert.defined(command.mnemonic)
	assert.defined(command.rpcHost)

	// Arrange
	const { addressFactory, keyPairFactory, publicKeyFactory, signatureFactory } = await makeCrypto(
		command.addressModule,
		command.addressPrefix,
		command.keypairModule,
	)

	const mnemonics = {
		recipient: opts?.actingAsLoopback !== false ? command.mnemonic : randomMnemonic(),
		sender: command.mnemonic,
	}

	if (opts?.recipient?.mnemonic !== undefined) {
		mnemonics.recipient = opts?.recipient.mnemonic
	}

	// Act
	const signedTx = await signTx({
		addressFactory,
		data: {
			gas: `${1e8}`,
			message,
			nonce:
				opts?.nonce ??
				(await getNextNonce(
					command.rpcHost,
					(await keyPairFactory.fromMnemonic(mnemonics.sender)).toPublicKey().toString(),
				)),
		},
		publicKeyFactory,
		recipient:
			opts?.recipient !== undefined
				? opts?.recipient.address
				: await addressFactory.fromMnemonic(mnemonics.recipient),
		sender: await keyPairFactory.fromMnemonic(mnemonics.sender),
		signatureFactory,
	})
	const signedTxHash = bytesToHex(sha256(signedTx.bytes))

	if (command.estimateGas === true) {
		const estimate = await estimateGas(command.rpcHost, new SignedTx(signedTx.raw).toBinary())

		console.log(
			`Tx ${chalk.bold(chalk.blue(signedTxHash))} will cost at least ${chalk.bold(
				chalk.yellow(estimate.expected),
			)} units of gas (size=${chalk.bold(estimate.size)}, actual=${chalk.bold(
				estimate.actual,
			)}, expected=${chalk.bold(estimate.expected)})`,
		)

		return
	}

	const broadcasted = await broadcast({
		rpcHost: command.rpcHost,
		signedTx: new SignedTx(signedTx.raw).toBinary(),
	})

	// Assert
	if (broadcasted.check_tx.code === 1) {
		if (broadcasted.check_tx.events.length === 0) {
			throw new Error(broadcasted.check_tx.mempoolError)
		} else {
			throw new Error(JSON.stringify(broadcasted.check_tx.events))
		}
	}

	const committed = await fetchTx({ hash: signedTxHash, rpcHost: command.rpcHost })

	const data = JSON.stringify(
		{
			broadcasted,
			committed,
			mnemonics,
		},
		undefined,
		4,
	)

	if (command.verbose === true) {
		console.log(data)
	}

	file.write(`${ENV_PATHS.data}/txs/${signedTxHash}.json`, data)

	console.log(
		chalk.bold(chalk.green(chalk.underline(`${ENV_PATHS.data}/txs/${signedTxHash}.json`))),
	)

	return {
		events: broadcasted.check_tx.events[1].attributes as Array<{ key: string; value: string }>,
		...committed,
	}
}
