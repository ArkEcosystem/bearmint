import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { hexToBytes } from '@bearmint/bep-009'
import { SignedTx } from '@bearmint/bep-018'
import type { GasCalculator } from '@bearmint/bep-013'

import { makeStrategy } from '../../source/strategy.js'

// BEP-055
const txHex =
	'0a05312e302e3012603935663338613063643466666534363563393364303836623632383831663462616234353764643737313733333230636363656463346633343836346634376237303133623461313035356333313965303863623037303431373133383630361a5862656172316a686563357278356c6c6a78746a66617070346b397a716c66773435326c77687739656e7972787661687a30786a7279373361687179613535797a346376763770723973777071687a777271766c673275667020012880c2d72f328b030a1140626561726d696e742f6265702d3035351205302e302e301a406630396665353731656366363131383932623539326261356263306632373766633765343230646162646135626531323362366338373633346230363035396622ac020a93010a0442454152108094ebdc031a5862656172316a676175777a7232757937633579787a7a7673777067753574666e636e6e68356e79383968347a3966383877646673337a67616a397639616b6d36396861347661617530346635673933613832356771736372222b54686520717569636b2062726f776e20666f78206a756d7073206f76657220746865206c617a7920646f670a93010a0442454152108094ebdc031a5862656172313378353670676871366b35656a706a79767237677a6c386a686c6a34687a7934727435666c357434766437786864666438796a376a756b7634733566716e377936783367393472726e763765766c7934617a6e222b54686520717569636b2062726f776e20666f78206a756d7073206f76657220746865206c617a7920646f673ac00104cb3678ba3a48083d37bd7765fe960cbea1f6b0cf9228beae877394af102f11c8a978693916314681c66b9decd9317f0e71eebc6f2c8901f7d6fcadc265c9f632ae1663c28717aefde5ae35a0afcd1a0e2d2ca68ddb7fc28145e4bd7a743b1b11be2a9cad4efbcc85f79eb51fe6d987b7796072b0df2cd39e2272f9c9331e6e55008f3d1479b1414ab4063a6e5c7292050359ee9120be75777b002ea663c5fd1b2c9322b5bf13f326168a4ff983c36e25ccf10ad49774316b6590d69117e6ce'
const txBuf = SignedTx.fromBinary(hexToBytes(txHex))

describe<{
	subject: GasCalculator
	state: object
}>('Cost-By-Size Strategy', () => {
	beforeEach((context) => {
		context.state = {
			getMilestone() {
				return {
					parameters: {
						modules: {
							mandatory: {
								'@bearmint/bep-050': {
									'*': {
										known: {
											'*': {
												msg: 500,
												tx: 100,
											},
										},
									},
								},
							},
						},
						transactions: {},
					},
				}
			},
		}

		context.subject = makeStrategy({
			CommittedState: context.state,
			ServiceProviderRepository: {
				get() {
					return {
						version() {
							return '0.0.0'
						},
					}
				},
			},
		})
	})

	it('should pass if the gas is above the min', async (context) => {
		// msg = 245 (bytes) * 500 (tokens per byte) = 197500
		// tx = 466 (bytes) * 100 (tokens per byte) = 40000
		// sum = msg + tx = 237500

		expect(
			await context.subject.execute(context.state, {
				bytes: hexToBytes(txHex),
				checksum: { handler: 'known' },
				data: {
					gas: BigInt(237500),
					message: txBuf.message,
				},
				type: 'known',
			}),
		).toStrictEqual({
			actual: BigInt(237500),
			expected: BigInt(237500),
		})
	})

	it('should fail if the milestone contains no gas configuration at all', async (context) => {
		await expect(() =>
			context.subject.execute(
				{
					getMilestone() {
						return {
							parameters: {
								modules: {
									mandatory: {
										//
									},
								},
								transactions: {},
							},
						}
					},
				},
				{ checksum: { handler: '@bearmint/known' }, type: 'known' },
			),
		).rejects.toThrow()
	})

	it('should fail if the milestone contains no gas configuration for a specific version', async (context) => {
		await expect(() =>
			context.subject.execute(
				{
					getMilestone() {
						return {
							parameters: {
								modules: {
									mandatory: {
										'@bearmint/bep-050': {
											'*': {
												known: {},
											},
										},
									},
								},
								transactions: {},
							},
						}
					},
				},
				{
					checksum: { handler: 'known' },
					type: 'unknown',
				},
			),
		).rejects.toThrow()
	})

	it('should fail if the gas is too low', async (context) => {
		await expect(() =>
			context.subject.execute(context.state, {
				bytes: Buffer.alloc(8),
				checksum: { handler: 'known' },
				data: {
					gas: BigInt(799),
				},
				type: 'known',
			}),
		).rejects.toThrow()
	})
})
