import type { DenominationType } from '@bearmint/bep-013'

export const mnemonics = [
	'oil absorb party draft trash stamp today together rent enhance vendor tray nut unlock family wrap chapter flight latin antenna record sugar avoid judge',
	'mass critic old affair banner actress control fame eternal tornado valve exhaust peanut envelope shoot submit cake senior truck useless history girl boring wine',
	'trap absorb retreat cushion deny toy degree episode almost frequent camp void dune bless ethics fee hollow scare regret excuse ecology slam lava derive',
]

export const denominations: Record<DenominationType, string> = {
	gas: 'FIRE',
	reward: 'GOLD',
	stake: 'SEED',
	token: 'BEAR',
}

export const REQUEST_PAYLOADS = {
	beginBlock: {
		hash: 'gNBrW58cQi/AStg2/OPGUsqDl2+A+Rg0XmqUmAhRCL8=',
		header: {
			appHash: '3gk/7caMKUZK8QOTn1wUQb0+gd9nXdwLFgZW1UoP3JQ=',
			chainId: 'bearmint-testnet',
			consensusHash: 'BICRvH3cKD93v7+R1zxE2ljD34qcvIZ0Bdi389qtoi8=',
			dataHash: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
			evidenceHash: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
			height: '2',
			lastBlockId: {
				hash: 'grFMRYfuQHec6xSn1agg1SN8iXhuzXent/RJ7RINpJs=',
				partSetHeader: { hash: 'sqbsq+4nu1ZgzioenCWjmwOjPAPm0rEDBt0P0Gwd0Qo=', total: 1 },
			},
			lastCommitHash: 'gDDrkJA+IRhgJM0T6iTQkdhFw7EKWXdvqy8GYsmK4uw=',
			lastResultsHash: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
			nextValidatorsHash: 'N0ub+IJZJDlc04+mmOTXj8go3P9aSABLCeYohLThPrQ=',
			proposerAddress: 'jGIiRLGSdcB6ju3HEaFrIdoT3kQ=',
			time: '2022-08-30T00:33:36.029177Z',
			validatorsHash: 'N0ub+IJZJDlc04+mmOTXj8go3P9aSABLCeYohLThPrQ=',
			version: { block: '11' },
		},
		lastCommitInfo: {
			votes: [
				{
					signedLastBlock: true,
					validator: { address: 'jGIiRLGSdcB6ju3HEaFrIdoT3kQ=', power: '1' },
				},
			],
		},
	},
	checkTx: {
		tx: 'CkAwMGViZjdkZTg3YjA5MzUwNzI0ODdlNGMwNDQ0NWMxOTJhMjAxYzE4MjFhZmI1ODJkYTgyYjJhNzUxMGZhOWYyEgUxLjAuMBpgYjNkZmEzNzlmNzVkZjc5OTEwZTgyZmRhM2FlNzcwMzg1MzI0MTExMjRlOTZiNjdjYjA4YjYwM2Y4MDlhM2Y0ZTU3ZmYzZjMyOTk0N2U2ZDVhNTkyNTZiMDU1YWJkNDFlIlhiZWFyMWswMDZ4NzBodGhtZWp5OGc5bGRyNGVtczhwZmpneWdqZjZ0dHZsOXMzZHNybHF5NjhhODkwbGVseDJ2NTBlazQ1a2Y5ZHZ6NDQwMnB1bmp6d25mKAMwgMLXLzp4ChBAYmVhcm1pbnQvYmVwMTA0EgUwLjAuMBpAN2MxOWRhMTBmYzBkNzA5NjAzNzZiMDQ0N2VmNDc3MWJkMzdhMzMyMjAyYTQ4OTJjOTA5MTE1NmRlN2E2YWFlOSIbChkKCGluY3JlYXNlEgdqb2huZG9lGICU69wDQsABOGEzY2U5Y2Y2NmNkZjQxMThjZDlhMzU3ZmU5MzA5NTIyNjY3NzlkZjM1NzdlMDQ4ZmI1MmE0NzI4NzMwNTkzYTY2Y2JmNmQwMjY4MTIzYzljMDlkNzI0ZDczY2IwM2FhMDVjZjgyNjE0ZDQ0ZTYxMmZmY2ViZTkzOTZkMzIyY2ZhOTdjZTdiYTgyYTRhNmVjZjEzOGFjMjhmZDAzNDQ5N2Y3ZmJjNTQ3YzBjYWE3ZjhjNWYzMjVkMGFkZTZkMzUx',
	},
	commit: {},
	deliverTx: {
		tx: 'CkAwMGViZjdkZTg3YjA5MzUwNzI0ODdlNGMwNDQ0NWMxOTJhMjAxYzE4MjFhZmI1ODJkYTgyYjJhNzUxMGZhOWYyEgUxLjAuMBpgYjNkZmEzNzlmNzVkZjc5OTEwZTgyZmRhM2FlNzcwMzg1MzI0MTExMjRlOTZiNjdjYjA4YjYwM2Y4MDlhM2Y0ZTU3ZmYzZjMyOTk0N2U2ZDVhNTkyNTZiMDU1YWJkNDFlIlhiZWFyMWswMDZ4NzBodGhtZWp5OGc5bGRyNGVtczhwZmpneWdqZjZ0dHZsOXMzZHNybHF5NjhhODkwbGVseDJ2NTBlazQ1a2Y5ZHZ6NDQwMnB1bmp6d25mKAMwgMLXLzp4ChBAYmVhcm1pbnQvYmVwMTA0EgUwLjAuMBpAN2MxOWRhMTBmYzBkNzA5NjAzNzZiMDQ0N2VmNDc3MWJkMzdhMzMyMjAyYTQ4OTJjOTA5MTE1NmRlN2E2YWFlOSIbChkKCGluY3JlYXNlEgdqb2huZG9lGICU69wDQsABOGEzY2U5Y2Y2NmNkZjQxMThjZDlhMzU3ZmU5MzA5NTIyNjY3NzlkZjM1NzdlMDQ4ZmI1MmE0NzI4NzMwNTkzYTY2Y2JmNmQwMjY4MTIzYzljMDlkNzI0ZDczY2IwM2FhMDVjZjgyNjE0ZDQ0ZTYxMmZmY2ViZTkzOTZkMzIyY2ZhOTdjZTdiYTgyYTRhNmVjZjEzOGFjMjhmZDAzNDQ5N2Y3ZmJjNTQ3YzBjYWE3ZjhjNWYzMjVkMGFkZTZkMzUx',
	},
	endBlock: {
		blockNumber: '1',
	},
	flush: {},
	info: { blockVersion: '11', p2pVersion: '8', version: '0.37.0-alpha.2' },
	initChain: {
		appStateBytes:
			'ewogICAgICAgICJhY2NvdW50cyI6IFsKICAgICAgICAgICAgewogICAgICAgICAgICAgICAgImFkZHJlc3MiOiAiYmVhcjFrMDA2eDcwaHRobWVqeThnOWxkcjRlbXM4cGZqZ3lnamY2dHR2bDlzM2RzcmxxeTY4YTg5MGxlbHgydjUwZWs0NWtmOWR2ejQ0MDJwdW5qenduZiIsCiAgICAgICAgICAgICAgICAiYmFsYW5jZXMiOiB7CiAgICAgICAgICAgICAgICAgICAgIkZJUkUiOiAiMTAwMDAwMDAwMDAwMDAwMDAwIiwKICAgICAgICAgICAgICAgICAgICAiR09MRCI6ICIxMDAwMDAwMDAwMDAwMDAwMDAiLAogICAgICAgICAgICAgICAgICAgICJTRUVEIjogIjEwMDAwMDAwMDAwMDAwMDAwMCIsCiAgICAgICAgICAgICAgICAgICAgIkJFQVIiOiAiMTAwMDAwMDAwMDAwMDAwMDAwIgogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICJwdWJsaWNLZXkiOiAiYjNkZmEzNzlmNzVkZjc5OTEwZTgyZmRhM2FlNzcwMzg1MzI0MTExMjRlOTZiNjdjYjA4YjYwM2Y4MDlhM2Y0ZTU3ZmYzZjMyOTk0N2U2ZDVhNTkyNTZiMDU1YWJkNDFlIgogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAiYWRkcmVzcyI6ICJiZWFyMWpqdjUyYzIwYzNhc2Q3bng2emFkejZhdWN1ODQ3dTBtNnpyZmcybTN2ZzZ5dXlwOHY5aGM4Y2RxMGF0eWtlbGZjeHljZXBuOTB1ajV1ODRybmgwIiwKICAgICAgICAgICAgICAgICJiYWxhbmNlcyI6IHsKICAgICAgICAgICAgICAgICAgICAiRklSRSI6ICIxMDAwMDAwMDAwMDAwMDAwMDAiLAogICAgICAgICAgICAgICAgICAgICJHT0xEIjogIjEwMDAwMDAwMDAwMDAwMDAwMCIsCiAgICAgICAgICAgICAgICAgICAgIlNFRUQiOiAiMTAwMDAwMDAwMDAwMDAwMDAwIiwKICAgICAgICAgICAgICAgICAgICAiQkVBUiI6ICIxMDAwMDAwMDAwMDAwMDAwMDAiCiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgIm5hbWUiOiAiZ2VuZXNpc18wIiwKICAgICAgICAgICAgICAgICJwdWJsaWNLZXkiOiAiOTQ5OTQ1NjE0ZmM0N2IwNmZhNjZkMGJhZDE2YmJjYzcwZjVmNzFmYmQwODY5NDJiNzE2MjM0NGUxMDI3NjE2ZjgzZTFhMDdmNTY0YjY3ZTljMTg5OGM4NjY1N2YyNTRlIiwKICAgICAgICAgICAgICAgICJ2YWxpZGF0b3IiOiB7CiAgICAgICAgICAgICAgICAgICAgImFkZHJlc3MiOiAiOGM2MjIyNDRiMTkyNzVjMDdhOGVlZGM3MTFhMTZiMjFkYTEzZGU0NCIsCiAgICAgICAgICAgICAgICAgICAgImRpc3RyaWJ1dGlvbiI6IHsKICAgICAgICAgICAgICAgICAgICAgICAgInBlcmNlbnRhZ2UiOiAwLAogICAgICAgICAgICAgICAgICAgICAgICAic3RyYXRlZ3kiOiAiQGJlYXJtaW50L2JlcDg0IgogICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgInBvd2VyIjogIjEiLAogICAgICAgICAgICAgICAgICAgICJwdWJsaWNLZXkiOiAiMGNhMjE2OTZhMTA0MDgzMDFiNDAxMzJkNTA5NmM4Mjc4MDZiNThkN2NhMDViMGYyY2RiZjJhNTIxZWU0NzgxMCIKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIF0sCiAgICAgICAgInRyYW5zYWN0aW9ucyI6IFtdCiAgICB9',
		chainId: 'bearmint-testnet',
		consensusParams: {
			block: { maxBytes: '22020096', maxGas: '-1' },
			evidence: { maxAgeDuration: '172800s', maxAgeNumBlocks: '100000', maxBytes: '1048576' },
			validator: { pubKeyTypes: ['ed25519'] },
		},
		initialHeight: '1',
		time: '2022-08-30T00:26:34.199Z',
		validators: [
			{ power: '1', pubKey: { ed25519: 'DKIWlqEECDAbQBMtUJbIJ4BrWNfKBbDyzb8qUh7keBA=' } },
		],
	},
	query: {
		accountByAddress: {
			data: 'eyJwdWJsaWNLZXkiOiJiM2RmYTM3OWY3NWRmNzk5MTBlODJmZGEzYWU3NzAzODUzMjQxMTEyNGU5NmI2N2NiMDhiNjAzZjgwOWEzZjRlNTdmZjNmMzI5OTQ3ZTZkNWE1OTI1NmIwNTVhYmQ0MWUifQ==',
			path: '/app/account/address',
		},
		tx: { data: 'AOv33oewk1BySH5MBERcGSogHBghr7WC2oKyp1EPqfI=', path: '/tx' },
	},
}
