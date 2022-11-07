import { benchKeyPair } from '@bearmint/bep-031'

await benchKeyPair({
	...(await import('./distribution/index.js')),
	privateKey: '918960f4f8d19552a5c4d1eadd5318a7b09bc979e6ca41d0797b0ed37da43f87',
	publicKey:
		'135538d3cf5197db90e89ec57f507aa4ae9d011c6bbaf4958c5f03fa2c367277cd178c24ed2c113f8dcd34752243f4613c3e072d48df5cac28ad8303b9e8f29e',
	signatureFail:
		'458561a00f87f53fa594303bccc3eaca6c09b38b091807e33a9ef53000ce31ca818b9509d37d055479a0038e06142d70fa83541a8d1d3589035c339491f2fa11',
	signaturePass:
		'0e0fba175b6bffe5dc2e62253a1e1d729e87a67eb56989c9c5e13eb5e9c682c1aad5ed4c3920ded1206fabe03a84bd33ae0b2119caa84c4ed769341b15ad60a4',
	title: 'Ethereum.js',
})
