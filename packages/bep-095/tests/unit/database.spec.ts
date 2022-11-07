import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { bytesToHex, dirname } from '@bearmint/bep-009'
import { SignedTx } from '@bearmint/bep-018'

import { makeDatabase } from '../../source/database.js'

describe('Database', () => {
	it('should get all of the entries', async () => {
		const store = makeDatabase(`${dirname()}/level`)
		await store.flush()

		expect(await store.all()).toMatchSnapshot()

		await store.store({
			hash: bytesToHex(
				new SignedTx({
					gas: BigInt(1),
					hash: 'hash',
					message: {
						content: Buffer.alloc(0),
						handler: 'handler',
						network: 'network',
						version: 'version',
					},
					network: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
					nonce: BigInt(1),
					recipient: 'recipient',
					sender: 'sender',
					signature:
						'458561a00f87f53fa594303bccc3eaca6c09b38b091807e33a9ef53000ce31ca818b9509d37d055479a0038e06142d70fa83541a8d1d3589035c339491f2fa11',
					version: '1.0.0',
				}).toBinary(),
			),
			muSig: {
				m: 2,
				master: 'master',
				n: 3,
				slaves: ['1', '2', '3'],
			},
			signatures: [],
		})

		expect(await store.all()).toMatchSnapshot()

		await store.forget(
			'0a04686173681240313334613363636333333335303731376137646237396139336235353136656130613564346462306136306630336130383333356530633463393735643135651801220673656e6465722a09726563697069656e743001380142800134353835363161303066383766353366613539343330336263636333656163613663303962333862303931383037653333613965663533303030636533316361383138623935303964333764303535343739613030333865303631343264373066613833353431613864316433353839303335633333393439316632666131314a80013435383536316130306638376635336661353934333033626363633365616361366330396233386230393138303765333361396566353330303063653331636138313862393530396433376430353534373961303033386530363134326437306661383335343161386431643335383930333563333339343931663266613131',
		)

		expect(await store.all()).toMatchSnapshot()

		await store.close()
	})
})
