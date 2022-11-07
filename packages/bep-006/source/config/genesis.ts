export const genesis = {
	app_hash: 'f8022740f7441201183516480052f8ed28b7194eca6b3c77c65829a164bd1147',
	app_state: {
		accounts: [
			{
				address:
					'bear1khy2elmyvszjyn4wecder0k0cptv6jj7guy4fl2tknlfnsxqsza06yv4yplze8vtfnrrrvd3qs8j2mzjmzm',
				balances: {
					BEAR: '100000000000000000',
					FIRE: '100000000000000000',
				},
				publicKey:
					'b5c8acff646405224eaece1b91becfc056cd4a5e470954fd4bb4fe99c0c080bafd1195207e2c9d8b4cc631b1b1040f25',
			},
			{
				address:
					'bear15x3yqkcetafdjvcwltczdd75hl3ecc4p8ehc30szql24dttgujgclrfnteg4a5nkjqphkqqtgcs9chwwulk',
				publicKey:
					'a1a2405b195f52d9330efaf026b7d4bfe39c62a13e6f88be0207d556ad68e4918f8d335e515ed27690037b000b46205c',
				validator: {
					address: '6e2e999d469f0820c38cc2d5aef60a8367ff9dda',
					moniker: 'genesis_1',
					power: '1',
					publicKey: '20d7ee353ed370709e22ac2fb9d40da47885c8d87ce455995eafc58f7a4e4207',
				},
			},
		],
		txs: [],
	},
	chain_id: 'bearmint-testnet',
	consensus_params: {
		block: {
			max_bytes: '22020096',
			max_gas: '-1',
		},
		evidence: {
			max_age_duration: '172800000000000',
			max_age_num_blocks: '100000',
			max_bytes: '1048576',
		},
		validator: {
			pub_key_types: ['ed25519'],
		},
		version: {
			app_version: '0',
		},
	},
	genesis_time: '2022-05-29T11:17:08.969Z',
	initial_height: '0',
	validators: [
		{
			address: '6e2e999d469f0820c38cc2d5aef60a8367ff9dda',
			moniker: 'genesis_1',
			power: '1',
			pub_key: {
				type: 'tendermint/PubKeyEd25519',
				value: 'INfuNT7TcHCeIqwvudQNpHiFyNh85FWZXq/Fj3pOQgc=',
			},
		},
	],
}
