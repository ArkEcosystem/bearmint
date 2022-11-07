import { expect, describe, it } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)

// import { cryptoWaitReady } from '@polkadot/util-crypto';
import { generateTendermintAccount } from '../../source/account.js'

describe('Account', () => {
	it('should generate a [ed25519] account', async () => {
		const { address, mnemonic, privateKey, publicKey } = await generateTendermintAccount({
			keyPairType: 'ed25519',
		})

		expect(address).toBeTypeOf('string')
		expect(mnemonic).toBeTypeOf('string')
		expect(privateKey).toBeInstanceOf(Uint8Array)
		expect(publicKey).toBeInstanceOf(Uint8Array)
	})

	// it('should generate a [sr25519] account', async () => {
	// 	await cryptoWaitReady();

	// 	const { address, mnemonic, privateKey, publicKey } = await generateTendermintAccount({
	// 		keyPairType: 'sr25519',
	// 	});

	// 	expect(address);.toBeTypeOf('string')
	// 	expect(mnemonic);.toBeTypeOf('string')
	// 	expect(privateKey).toBeInstanceOf(Uint8Array);
	// 	expect(publicKey).toBeInstanceOf(Uint8Array);
	// });

	// it('should generate a [secp256k1] account', async () => {
	// 	const { address, mnemonic, privateKey, publicKey } = await generateTendermintAccount({
	// 		keyPairType: 'secp256k1',
	// 	})

	// 	expect(address).toBeTypeOf('string')
	// 	expect(mnemonic).toBeTypeOf('string')
	// 	expect(privateKey).toBeInstanceOf(Uint8Array)
	// 	expect(publicKey).toBeInstanceOf(Uint8Array)
	// })
})
