import { benchAddress } from '@bearmint/bep-039'
import { makeKeyPairFactory } from '@bearmint/bep-035'

import { makeAddressFactory } from './distribution/index.js'

await benchAddress({
	...(await import('@bearmint/bep-035')),
	address: '26076beaddb88cd6993ba6cc9f85eeb709c64dce',
	makeAddressFactory: () => makeAddressFactory(makeKeyPairFactory()),
	privateKey: 'e46bd7365d8f3fb498a4b2bdaadb3f758b2ecd5fe2b7a1935931939e3117b732',
	publicKey: '67f22079ab26ff11722e425ae6a3f8efc7d6a66ba1822edffeed2be3de74429e',
	signatureFail:
		'0e0fba175b6bffe5dc2e62253a1e1d729e87a67eb56989c9c5e13eb5e9c682c1aad5ed4c3920ded1206fabe03a84bd33ae0b2119caa84c4ed769341b15ad60a4',
	signaturePass:
		'dfc459b101413734fe4ebb8009cce718848619fbfa9f39bcb1ace0a8702e33dbb60687f0e6de0d77786dac34eec7acb4528a1109885b269bb59a7c817e36fb09',
	title: 'Ed25519 (Address)',
})
