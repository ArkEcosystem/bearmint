import { expect, describe, it, beforeEach } from 'vitest'
import { extendExpect } from '@bearmint/bep-005'
extendExpect(expect)
import { BEP67MsgOp } from '@bearmint/bep-018'
import { E2E } from '@bearmint/bep-053'

import { makeServiceProvider } from '../../source/service-provider.js'
import { getPrimaryKey } from '../../source/utils.js'

const TYPES = [
	{
		type: 'base32cid',
		value: 'bafybeie5gq4jxvzmsym6hjlwxej4rwdoxt7wadqvmmwbqi7r27fclha2va',
	},
	{
		type: 'cid',
		value: 'bafybeiasb5vpmaounyilfuxbd3lryvosl4yefqrfahsb2esg46q6tu6y5q',
	},
	{
		type: 'cid',
		value: 'QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
	},
	{
		type: 'cid',
		value: 'zdj7WWeQ43G6JJvLWQWZpyHuAMq6uYWRjkBXFad11vE2LHhQ7',
	},
	{
		type: 'cidPath',
		value: 'QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o/path/to/file',
	},
	{
		type: 'ipfsPath',
		value: '/ipfs/QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
	},
	{
		type: 'ipfsSubdomain',
		value: 'http://bafybeie5gq4jxvzmsym6hjlwxej4rwdoxt7wadqvmmwbqi7r27fclha2va.ipfs.dweb.link',
	},
	{
		type: 'ipfsUrl',
		value: 'https://ipfs.io/ipfs/QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
	},
	{
		type: 'ipnsPath',
		value: '/ipns/github.com',
	},
	{
		type: 'ipnsSubdomain',
		value: 'http://bafybeiabc2xofh6tdi6vutusorpumwcikw3hf3st4ecjugo6j52f6xwc6q.ipns.dweb.link',
	},
	{
		type: 'ipnsUrl',
		value: 'https://ipfs.io/ipns/github.com',
	},
	{
		type: 'multiaddr',
		value: '/ip4/127.0.0.1/udp/1234',
	},
	{
		type: 'multihash',
		value: 'QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
	},
	{
		type: 'path',
		value: '/ipfs/QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
	},
	{
		type: 'peerMultiaddr',
		value: '/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSoooo4',
	},
	{
		type: 'subdomain',
		value: 'http://bafybeie5gq4jxvzmsym6hjlwxej4rwdoxt7wadqvmmwbqi7r27fclha2va.ipfs.dweb.link',
	},
	{
		type: 'url',
		value: 'https://ipfs.io/ipfs/QmYjtig7VJQ6XsnUjqqJvj7QaMcCAwtrgNdahSiFofrE7o',
	},
	{
		type: 'urlOrPath',
		value: 'https://bafybeie5gq4jxvzmsym6hjlwxej4rwdoxt7wadqvmmwbqi7r27fclha2va.ipfs.dweb.link',
	},
]

describe<E2E.Context>('Tx E2E', () => {
	beforeEach(async (ctx) => {
		Object.assign(ctx, await E2E.createEnvironment(makeServiceProvider))
	})

	for (const { type, value } of TYPES) {
		it(`should pass with type=${type}`, async (ctx) => {
			const tx = await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-067').execute({
					memo: 'Hello, World!',
					ops: [new BEP67MsgOp({ memo: 'Hello, World!', type, value })],
				}),
			)

			await ctx.accts
				.get('genesis_1')
				.expectModuleMetadataContains('@bearmint/bep-067', getPrimaryKey(type, value))

			await tx.pass()
			await tx.confirmMeta(getPrimaryKey(type, value))

			await ctx.accts.assertExpectations()
		})
	}

	E2E.testLoopback('@bearmint/bep-067', it)
	E2E.testMemoLength('@bearmint/bep-067', it)
	E2E.testOpCount('@bearmint/bep-067', it)

	it('should fail if there are duplicated ops', async (ctx) => {
		const tx = await ctx.txFactory.asserted(
			ctx.accts.get('genesis_1').keypair,
			ctx.accts.get('genesis_1').keypair,
			await ctx.client.fakeTxMsg('@bearmint/bep-067').execute({
				ops: [new BEP67MsgOp(TYPES[0]), new BEP67MsgOp(TYPES[0])],
			}),
		)

		await tx.fail([
			{
				attributes: [
					{ index: false, key: 'message.ops', value: 'ERR_TX_ARRAY_CONTAINS_DUPLICATES' },
				],
				type: '@bearmint/bep-067/0.0.0/audit',
			},
		])
	})

	for (const { type, value } of TYPES) {
		it(`should fail to register the same [${type}] value again`, async (ctx) => {
			const tx = await ctx.txFactory.asserted(
				ctx.accts.get('genesis_1').keypair,
				ctx.accts.get('genesis_1').keypair,
				await ctx.client.fakeTxMsg('@bearmint/bep-067').execute({
					memo: 'Hello, World!',
					ops: [new BEP67MsgOp({ memo: 'Hello, World!', type, value })],
				}),
			)

			await tx.fail([
				{
					attributes: [
						{ index: false, key: 'message.ops.0.value', value: 'ERR_TX_DUPLICATED_VALUE' },
					],
					type: '@bearmint/bep-067/0.0.0/audit',
				},
			])
		})
	}
})
