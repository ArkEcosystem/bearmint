import { benchKeyPair } from '@bearmint/bep-031'

await benchKeyPair({
	...(await import('./distribution/index.js')),
	privateKey: 'e46bd7365d8f3fb498a4b2bdaadb3f758b2ecd5fe2b7a1935931939e3117b732',
	publicKey: '134a3ccc33350717a7db79a93b5516ea0a5d4db0a60f03a08335e0c4c975d15e',
	signatureFail:
		'458561a00f87f53fa594303bccc3eaca6c09b38b091807e33a9ef53000ce31ca818b9509d37d055479a0038e06142d70fa83541a8d1d3589035c339491f2fa11',
	signaturePass:
		'0e0fba175b6bffe5dc2e62253a1e1d729e87a67eb56989c9c5e13eb5e9c682c1aad5ed4c3920ded1206fabe03a84bd33ae0b2119caa84c4ed769341b15ad60a4',
	title: 'BIP340',
})
